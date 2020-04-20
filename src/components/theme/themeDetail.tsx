import React, { memo, useState, useEffect } from 'react'
import { Avatar, Row, Col } from 'antd'
import photo from '../../assets/1.jpg'
import TopicContent from '../topic/topicContent'
import ThemeRight from './themeRight'

export default memo(function ThemeList() {

  const [resData, setResData] = useState<any>([])

  useEffect(() => {
    setResData([
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
    ])
  }, [])

  return (
    <div className='theme-detail'>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}><TopicContent /></Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}><ThemeRight /></Col>
      </Row>
    </div>
  )
})