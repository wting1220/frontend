import React, { useState } from 'react';
import { Tabs } from 'antd'
import './index.scss'
import FirstList from './firstList'
import { useHistory, useLocation } from 'react-router-dom'

const { TabPane } = Tabs

const ContentLeft = () => {

  const [lists] = useState<any>([
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '../../assets/1.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '../../assets/4da52382276a71cebd0b922c535ab7ce.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '../../assets/7861317844743727fff486bdaabeba2b.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { level: 'Lv3', label: '前端', count: 34, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
  ])

  let history = useHistory()
  let location = useLocation()
  const handleSort = (key: any) => {
    history.push(location.pathname+'?sort='+key)
  }

  const nav = [
    { label: '热门', key: 'hot' },
    { label: '最新', key: 'new' },
    { label: '热榜', key: 'hotList' },
  ]

  return (
    <div className="content-left">
      {
        <Tabs defaultActiveKey="hot" onChange={handleSort} animated={false}>
          {
            nav.map(item => {
              return (
                  <TabPane tab={item.label} key={item.key}>
                    <FirstList firstList={lists} />
                  </TabPane>
              )
            })
          }
        </Tabs>
      }
    </div>
  )
}

export default ContentLeft