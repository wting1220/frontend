import React, { memo, useState, useEffect } from 'react'
import Tags from '../components/tagsList/tags'
import { Tabs, Row, Col, Empty } from 'antd'
import { useHistory, useLocation } from 'react-router'
import FirstList from '../components/content/firstList'
import '../scss/search.scss'
import { userTagsShow } from '../common/commen'

const { TabPane } = Tabs

export default memo(function Search() {

  const [current, setCurrent] = useState<string>('all')
  const [tabs, setTabs] = useState<string>('all')

  let history = useHistory()
  let location = useLocation()

  // 查询页面tags
  const tags = [
    { key: 'all', title: '综合' },
    { key: 'article', title: '文章' },
    { key: 'label', title: '标签' },
    { key: 'user', title: '用户' },
  ]
  // tab标签页展示nav
  const tabNav = [
    { key: 'all', tab: '全部' },
    { key: '1d', tab: '一天内' },
    { key: '1w', tab: '一周内' },
    { key: '3m', tab: '三月内' },
  ]
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

  let query = location.search.split('=')[1].split('&')[0]

  // 顶部标签改变
  const handleCurrent = (e: any) => {
    setCurrent(e.key)
    history.push(`/search?q=${query}&type=${e.key}`)
  }

  // tabs 标签页改变
  const handleTabs = (activeKey: any) => {
    setTabs(activeKey)
    history.push(`/search?q=${query}&type=${current}&sort=${activeKey}`)
  }

  // 监听路由变化
  useEffect(() => {
    let arr = location.search.split('=')
    setCurrent(arr[2] ? arr[2].split('&')[0] : 'all')
    setTabs(arr[3] || 'all')
  }, [location.search])

  return (
    <div className='search'>
      <Tags current={current} oncurrent={handleCurrent} tags={tags} />
      <Row>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className='search-left'>
            {
              ['all', 'article'].includes(current)
                ? <Tabs onChange={handleTabs} defaultActiveKey={tabs} animated={false} tabBarGutter={18}>
                  {
                    tabNav.map((item: { key: string, tab: string }) => {
                      return (
                        <TabPane tab={item.tab} key={item.key}>
                          {
                            lists.length <= 0
                              ? <Empty description='暂无数据' />
                              : lists.map((value: any, index: any) => <FirstList value={value} key={index} />)
                          }
                        </TabPane>
                      )
                    })
                  }
                </Tabs>
                : <div>
                  {lists.map((item: any) => userTagsShow(item, location.search.split('=')[2]))}
                </div>
            }
          </div>
        </Col>
      </Row>
    </div>
  )
})