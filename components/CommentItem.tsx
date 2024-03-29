import styled from '@emotion/styled'
import { IconStar } from '@tabler/icons'
import { format } from 'date-fns'
import { convertFromRaw, EditorState } from 'draft-js'
import { CommentItemType } from 'pages/products/[id]'
import AutoSizeImage from './AutoSizeImage'
import CustomEditor from './Editor'

export default function CommentItem({ item }: { item: CommentItemType }) {
  return (
    <Wrapper>
      <div>
        <div className="flex">
          <div className="flexc flex-col">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <IconStar
                  key={idx}
                  fill={idx < item.rate ? 'red' : 'none'}
                  stroke={idx < item.rate ? 0 : 1}
                />
              ))}
            </div>
            <span className="text-zinc-300 text-xs">
              {item.price.toLocaleString('ko-kr')} 원 * {item.quantity} 개 ={' '}
              {item.amount.toLocaleString('ko-kr')} 원
            </span>
          </div>
          <p className="text-zinc-500 ml-auto my-0">
            {format(new Date(item.updatedAt), 'yyyy년 M월 d일')}
          </p>
        </div>
        <CustomEditor
          readOnly
          editorState={EditorState.createWithContent(
            convertFromRaw(JSON.parse(item.contents ?? ''))
          )}
          noPadding
        />
      </div>
      <div className="flex space-x-2">
        {item.images?.split(',').map((image, idx) => (
          <AutoSizeImage key={idx} src={image} size={300} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
`
