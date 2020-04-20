import React from 'react'
import { Menu } from 'antd'
import { TagsProps } from '../../utils/interface'
import './index.scss'

const Tags = ({ tags, current, oncurrent }: TagsProps) => {
  
  return (
    <div className="tags">
      <div className="tags-nav">
        <Menu onClick={oncurrent} selectedKeys={[current]} mode="horizontal">
          {
            tags.map((item: any) => {
              return (
                <Menu.Item title={item.title} key={item.key} >{item.title}</Menu.Item>
              )
            })
          }
        </Menu>
      </div>
    </div>

  )
}

export default Tags;