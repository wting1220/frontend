import React, { memo } from 'react'
import { Row, Col } from 'antd'
import UserInfoLeft from './userinfo/userInfoLeft'
import './index.scss'

export default memo(function UserInfo() {
  return (
    <div className='user-info'>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}><UserInfoLeft /></Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
      </Row>
    </div>
  )
})