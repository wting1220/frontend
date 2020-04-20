import React, { memo, useEffect, useState } from 'react'
import { Tabs, Dropdown, Menu } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { tabPane } from '../../../utils/commen'
import ActivityContainer from './activityContainer'
import { useLocation, useHistory, useParams } from 'react-router'

const { TabPane } = Tabs

export default memo(function UserActivity() {

  const [nav, setNav] = useState<string>('activity')

  const tabInfo = {
    like: 3,
    collection: 4,
    share: 4,
    attention: 7,
  }

  // 根据路由判断刚进入页面时展开的菜单栏
  let history = useHistory()
  let location = useLocation()
  let { type } = useParams<any>()
  useEffect(() => {
    setNav(type)
  }, [])

  // 监听菜单栏变化
  const handleTabs = (activeKey:any) => {
    setNav(activeKey)
    history.push(`/user/1/${activeKey}`)
  }

  return (
    <div className='user-detail-content'>
      <Tabs defaultActiveKey={nav} onChange={handleTabs} animated={false} size='large'>
        {
          tabPane(tabInfo).map((item:any) => {
          return <TabPane tab={<span>{item.tab}</span>} key={item.key}><ActivityContainer nav={nav} /></TabPane>
          })
        }
      </Tabs>
    </div>
  )
})