import { CountControl } from '@components/CountControl'
import CustomEditor from '@components/Editor'
import { Button } from '@mantine/core'
import { Cart, products } from '@prisma/client'
import { IconHeart, IconHeartbeat, IconShoppingCart } from '@tabler/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CATEGORY_MAP } from 'constants/products'
import { format } from 'date-fns'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel'
import { CART_QUERY_KEY } from 'pages/cart'
import { useEffect, useState } from 'react'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((res) => res.json())
    .then((data) => data.items)
  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] },
    },
  }
}

const WISHLIST_QUERY_KEY = '/api/get-wishlist'

export default function Products(props: {
  product: products & { images: string[] }
}) {
  const session = useSession()
  const [quantity, setQuantity] = useState<number | undefined>(1)
  const [index, setIndex] = useState(0)
  const router = useRouter()
  const queryClient = useQueryClient()
  const { id: productId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(() =>
    props.product.contents
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.product.contents))
        )
      : EditorState.createEmpty()
  )

  const { data: wishlist } = useQuery([WISHLIST_QUERY_KEY], () =>
    fetch(WISHLIST_QUERY_KEY)
      .then((res) => res.json())
      .then((data) => data.items)
  )

  const { mutate } = useMutation<unknown, unknown, string, any>(
    (productId: string) =>
      fetch('/api/update-wishlist', {
        method: 'POST',
        body: JSON.stringify({ productId }),
      })
        .then((res) => res.json())
        .then((data) => data.items),
    {
      onMutate: async (productId) => {
        await queryClient.cancelQueries([WISHLIST_QUERY_KEY])
        const previous = queryClient.getQueryData([WISHLIST_QUERY_KEY])
        queryClient.setQueryData<string[]>([WISHLIST_QUERY_KEY], (old) =>
          old
            ? old.includes(String(productId))
              ? old.filter((id) => id !== String(productId))
              : old.concat(String(productId))
            : []
        )

        return { previous }
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([WISHLIST_QUERY_KEY], context.previous)
      },
      onSuccess: () => {
        queryClient.invalidateQueries([WISHLIST_QUERY_KEY])
      },
    }
  )

  const { mutate: addCart } = useMutation<
    unknown,
    unknown,
    Omit<Cart, 'id' | 'userId'>,
    any
  >(
    (item) =>
      fetch('/api/add-cart', {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((data) => data.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([CART_QUERY_KEY])
      },
      onSuccess: () => {
        router.push('/cart')
      },
    }
  )

  const product = props.product

  const validate = async (type: 'cart' | 'order') => {
    if (quantity == null) {
      alert('최소 수량을 입력하세요.')
      return
    }

    //TODO: 장바구니에 등록하는 기능 추가
    if (type === 'cart') {
      addCart({
        productId: product.id,
        quantity: quantity,
        amount: product.price * quantity,
      })
    }
  }

  const isWished = wishlist ? wishlist.includes(productId) : false

  // useEffect(() => {
  //   if (!!productId) {
  //     fetch(`/api/get-product?id=${productId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.items.contents) {
  //           setEditorState(
  //             EditorState.createWithContent(
  //               convertFromRaw(JSON.parse(data.items.contents))
  //             )
  //           )
  //         } else {
  //           setEditorState(EditorState.createEmpty())
  //         }
  //       })
  //   }
  // }, [productId])
  return (
    <>
      {product !== null && productId !== null ? (
        <div className="flex flex-row">
          <div style={{ maxWidth: 600, marginRight: 52 }}>
            <Carousel withoutControls wrapAround speed={10} slideIndex={index}>
              {product.images.map((url, idx) => (
                <Image
                  key={`${url}-carousel-${idx}`}
                  src={url}
                  alt="image"
                  width={600}
                  height={600}
                />
              ))}
            </Carousel>
            <div className="flex space-x-4 mt-2">
              {product.images.map((url, idx) => (
                <div key={`${url}-thumbs-${idx}`} onClick={() => setIndex(idx)}>
                  <Image src={url} alt="image" width={100} height={100} />
                </div>
              ))}
            </div>
            {editorState != null && (
              <CustomEditor editorState={editorState} readOnly />
            )}
          </div>
          <div style={{ maxWidth: 600 }} className="flex flex-col space-y-6">
            <div className="text-lg text-zinc-400">
              {CATEGORY_MAP[product.category_id - 1]}
            </div>
            <div className="text-4xl text-semibold">{product.name}</div>
            <div className="text-lg">
              {product.price.toLocaleString('ko-kr')}원
            </div>
            <div>
              <span className="text-lg">수량</span>
              <CountControl value={quantity} setValue={setQuantity} max={100} />
            </div>
            <div className="flex space-x-3">
              <Button
                color="dark"
                variant="filled"
                leftIcon={<IconShoppingCart size={20} stroke={1.5} />}
                radius="xl"
                size="md"
                styles={{ root: { paddingRight: 14, height: 48 } }}
                onClick={() => {
                  console.log(session)
                  if (session == null) {
                    alert('로그인이 필요해요')
                    router.push('/cart')
                  }
                  validate('cart')
                }}
              >
                장바구니
              </Button>
              <Button
                disabled={wishlist == null}
                color={isWished ? 'red' : 'gray'}
                variant="filled"
                leftIcon={
                  isWished ? (
                    <IconHeart size={20} stroke={1.5} />
                  ) : (
                    <IconHeartbeat size={20} stroke={1.5} />
                  )
                }
                radius="xl"
                size="md"
                styles={{ root: { paddingRight: 14, height: 48 } }}
                onClick={() => {
                  console.log(session)
                  if (session == null) {
                    alert('로그인이 필요해요')
                    router.push('/auth/login')
                  }
                  mutate(String(productId))
                }}
              >
                찜하기
              </Button>
            </div>
            <div className="text-sm text-zinc-300">
              등록: {format(new Date(product.createdAt), `yyyy년 M월 d일`)}
            </div>
          </div>
        </div>
      ) : (
        <div>로딩 중</div>
      )}
    </>
  )
}
