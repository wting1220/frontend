import React, { memo } from 'react'
import { Menu } from 'antd'
import './index.scss'

export default memo(function TopicNav({ topicNav }:any) {

  return (
      <div className='topic-nav'>
      <Menu defaultSelectedKeys={['recommond']}>
        {
          topicNav.map((item:any) => {
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
          })
        }
      </Menu>
    </div>
  )
})