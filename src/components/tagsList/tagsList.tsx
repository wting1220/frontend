import React from 'react'
import { Radio } from 'antd'
import './index.scss'
import { TagsListProps } from '../../utils/interface'
import { useHistory } from 'react-router'

const TagsList = ({ tags, current }: TagsListProps) => {

  let history = useHistory()
  
  const handleChildTags = (e: any, p:string) => {
    history.push(p + '/' + e.target.value)
  }

  return (
    tags.map((value: any) => {
      return value.key !== 'recommend' && value.key === current && (<div className="tags-radio">
        <Radio.Group defaultValue="all" buttonStyle="solid" onChange={(e)=>handleChildTags(e, value.key)}>
          <Radio.Button value="all">全部</Radio.Button>
          {
            value.child.map((val: any) => (<Radio.Button value={val.title} key={val.key}>{val.title}</Radio.Button>))
          }
        </Radio.Group>
      </div>)
    })
  )
}

export default TagsList;