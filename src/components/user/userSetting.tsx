import React, { memo, useState, useEffect } from 'react'
import Tags from '../tagsList/tags'
import { useHistory } from 'react-router'
import { Row, Col } from 'antd'
import { renderRoutes } from 'react-router-config'

export default memo(function UserSetting(props: any) {

  const [current, setCurrent] = useState<string>('profile')
  const [tags, setTags] = useState<any>([])
  const nav = [
    { key: 'profile', title: '个人信息' },
    { key: 'password', title: '修改密码' },
    { key: 'mail', title: '邮件设置' },
  ]

  let history = useHistory()
  const handleCurrent = (e: any) => {
    setCurrent(e.key)
    history.push(`/user/setting/${e.key}`)
  }

  useEffect(() => {
    setTags(nav)
    setCurrent('profile')
  }, [])


  return (
    <div className='user-setting'>
      <Tags current={current} oncurrent={handleCurrent} tags={tags} />

      <Row gutter={20}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className='setting-container'>{renderRoutes(props.route.routes)}</div>
        </Col>
      </Row>

    </div>
  )
})