import { CountControl } from '@components/CountControl'
import styled from '@emotion/styled'
import { Button } from '@mantine/core'
import { products } from '@prisma/client'
import { IconRefresh, IconX } from '@tabler/icons'
import { useQuery } from '@tanstack/react-query'
import { CATEGORY_MAP } from 'constants/products'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

interface CartItem {
  name: string
  productId: number
  price: number
  quantity: number
  amount: number
  image_url: string
}

export default function Cart() {
  const router = useRouter()
  const [data, setData] = useState<CartItem[]>([])

  const deliveryAmount = 5000
  const discountAmount = 0
  const amount = useMemo(() => {
    return data.map((item) => item.amount).reduce((prev, cur) => prev + cur, 0)
  }, [data])

  useEffect(() => {
    const mockData = [
      {
        name: '멋드러진 신발',
        productId: 3,
        price: 20000,
        quantity: 2,
        amount: 40000,
        image_url:
          'https://img.29cm.co.kr/next-product/2022/12/29/9059ec3d1d784aba9fab4f7c9b3033a7_20221229102346.jpg?width=400',
      },
      {
        name: '느낌있는 후드',
        productId: 43,
        price: 102302,
        quantity: 1,
        amount: 102302,
        image_url:
          'https://img.29cm.co.kr/next-product/2022/09/01/f18af30d979b47209cc06b9dfbc14c0a_20220901155737.jpg?width=500',
      },
    ]
    setData(mockData)
  }, [])

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [`/api/get-products?skip=0&take=3`],
    () => fetch(`/api/get-products?skip=0&take=3`).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  const handleOrder = () => {
    alert(`장바구니에 담긴 아이템 ${JSON.stringify(data)} 주문하기`)
  }
  return (
    <div>
      <span className="text-2xl mb-3">Cart ({data.length})</span>
      <div className="flex">
        <div className="flex flex-col p-4 space-y-4 flex-1">
          {data.length > 0 ? (
            data.map((item, idx) => <Item key={idx} {...item} />)
          ) : (
            <div>장바구니가 비어있습니다.</div>
          )}
        </div>
        <div className="px-4">
          <div
            className="flex flex-col p-4 space-y-4"
            style={{ minWidth: 300, border: '1px solid grey' }}
          >
            <div>Info</div>
            <Row>
              <span>금액</span>
              <span>{amount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>배송비</span>
              <span>{deliveryAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>할인 금액</span>
              <span>{discountAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span className="font-semibold">결제 금액</span>
              <span className="font-semibold text-red-500">
                {(amount + deliveryAmount - discountAmount).toLocaleString(
                  'ko-kr'
                )}
                원
              </span>
            </Row>

            <Button
              color="dark"
              variant="filled"
              radius="xl"
              size="md"
              styles={{ root: { height: 48 } }}
              onClick={handleOrder}
            >
              구매하기
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <p>추천상품</p>
        {products &&
          (products.length === 0 ? (
            <div className="text-center mt-4 text-2xl">No items</div>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {products.map((item) => (
                <div
                  key={item.id}
                  style={{ maxWidth: 300 }}
                  onClick={() => router.push(`/products/${item.id}`)}
                >
                  <Image
                    className="rounded"
                    alt={item.name}
                    src={item.image_url ?? ''}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0lKvBwAB/QD8u/jUfgAAAABJRU5ErkJggg=="
                  />
                  <div className="flex">
                    <span>{item.name}</span>
                    <span className="ml-auto">
                      {item.price.toLocaleString('ko-KR')}원
                    </span>
                  </div>
                  <span className="text-zinc-400">
                    {CATEGORY_MAP[item.category_id - 1]}
                  </span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}

const Item = (props: CartItem) => {
  const router = useRouter()
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity)
  const amount = useMemo(
    () => (quantity != null ? quantity * props.price : props.quantity),
    [quantity, props.price, props.quantity]
  )

  const handleUpdate = () => {
    alert(`장바구니에서 ${props.name} 수정`)
  }

  const handleDelete = () => {
    alert(`장바구니에서 ${props.name} 삭제`)
  }
  return (
    <div className="flex p-4 border-solid border-0 border-b border-zinc-500">
      <Image
        src={props.image_url}
        width={155}
        height={155}
        alt={props.name}
        onClick={() => router.push(`/products/${props.productId}`)}
      />
      <div className="flex flex-col ml-4">
        <span className="font-semibold mb-2">{props.name}</span>
        <span className="mb-auto">
          가격: {props.price.toLocaleString('ko-kr')} 원
        </span>
        <div className="flex items-center space-x-4">
          <CountControl value={quantity} setValue={setQuantity} max={20} />
          <IconRefresh onClick={handleUpdate} />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <span>{amount.toLocaleString('ko-kr')} 원</span>
        <IconX onClick={handleDelete} />
      </div>
    </div>
  )
}

const Row = styled.div`
  display: flex;
  * ~ * {
    margin-left: auto;
  }
`
