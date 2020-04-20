import React, { memo, useState } from 'react'
import TopicAdd from './topicAdd'
import TopicShow from './topicShow'
import { Menu } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

export default memo(function TopicContent() {

  const [nav, setNav] = useState<string>('hot')
  let history = useHistory()
  let location = useLocation()
  const handleNav = (e:any) => {
    setNav(e.key)
    history.push(location.pathname + '?sort=' + e.key)
  }

  const lists = [
    {id: 1, name: '我自己', time: '567890', label: 'web前端', count: 56, level: 'Lv3', content: '程序员如何避免入狱开发？除了黄赌毒，还有什么类型的项目是不能做的？我只知道黄赌毒这种网页小程序不能开发,请问还有什么是不能接触的？程序员怎么避免公司的擦边球项目？哪些种类相关的项目会有擦边球的风险？ 像金融贷款平台、比特币、贷款超市、小额贷平台这类算违法吗？公司让我开发这种平台的网页会被连做责任吗？'},
    {id: 2, name: 'wo', time: '567890', label: 'web前端', count: 56, level: 'Lv3', content: '程序员如何避免入狱开发？除了黄赌毒，还有什么类型的项目是不能做的？我只知道黄赌毒这种网页小程序不能开发,请问还有什么是不能接触的？程序员怎么避免公司的擦边球项目？哪些种类相关的项目会有擦边球的风险？ 像金融贷款平台、比特币、贷款超市、小额贷平台这类算违法吗？公司让我开发这种平台的网页会被连做责任吗？'},
    {id: 3, name: 'wo', time: '567890', label: 'web前端', count: 56, level: 'Lv3', content: '程序员如何避免入狱开发？除了黄赌毒，还有什么类型的项目是不能做的？我只知道黄赌毒这种网页小程序不能开发,请问还有什么是不能接触的？程序员怎么避免公司的擦边球项目？哪些种类相关的项目会有擦边球的风险？ 像金融贷款平台、比特币、贷款超市、小额贷平台这类算违法吗？公司让我开发这种平台的网页会被连做责任吗？'},
    {id: 4, name: 'wo', time: '567890', label: 'web前端', count: 56, level: 'Lv3', content: '程序员如何避免入狱开发？除了黄赌毒，还有什么类型的项目是不能做的？我只知道黄赌毒这种网页小程序不能开发,请问还有什么是不能接触的？程序员怎么避免公司的擦边球项目？哪些种类相关的项目会有擦边球的风险？ 像金融贷款平台、比特币、贷款超市、小额贷平台这类算违法吗？公司让我开发这种平台的网页会被连做责任吗？'},
  ]

  return (
    <div className='topic-content'>
      <ul>
        <li><TopicAdd /></li>
        {location.pathname.split('/')[1] === 'theme' ? <li className='content-li'>
          <Menu selectedKeys={[nav]} onClick={handleNav}>
            <Menu.Item key='hot'>热门</Menu.Item>
            <Menu.Item key='new'>最新</Menu.Item>
          </Menu>
        </li> : null}
        {
          lists.map(item => {
            return <li key={item.id} className='content-li'><TopicShow item={item} /></li>
          })
        }
        
      </ul>
      
      
    </div>
  )
})