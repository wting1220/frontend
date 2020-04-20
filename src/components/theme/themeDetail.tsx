import React, { memo } from 'react'
import { Row, Col } from 'antd'
import TopicContent from '../topic/topicContent'
import ThemeRight from './themeRight'

export default memo(function ThemeList() {

  return (
    <div className='theme-detail'>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}><TopicContent /></Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}><ThemeRight /></Col>
      </Row>
    </div>
  )
})