import React from 'react'
import { Menu } from 'antd'
import { TagsProps } from '../../common/interface'
import { translate } from '../../common/zh_en'
import './index.scss'

const Tags = ({ tags, current, oncurrent }: TagsProps) => {
  
  return (
    <div className="tags">
      <div className="tags-nav">
        <Menu onClick={oncurrent} selectedKeys={[current]} mode="horizontal">
          {
            tags.map((item: any) => {
              return (
                <Menu.Item title={item.label} key={translate[item.label] || item.label} >{item.label}</Menu.Item>
              )
            })
          }
        </Menu>
      </div>
    </div>

  )
}

export default Tags;