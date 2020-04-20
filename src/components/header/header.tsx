import React, { useState, memo, useEffect } from 'react'
import { useHistory, Link, useLocation } from "react-router-dom"
import { Input, Layout, Menu, Avatar, Badge, Col, Row } from 'antd'
import { FileTextOutlined, BellOutlined, UserOutlined, EditOutlined, LikeOutlined, StarOutlined, SettingOutlined, TagOutlined } from '@ant-design/icons'
import Login from '../../views/login'
import Regist from '../../views/regist'
// import { MainHeaderProps, MainHeaderState, LocationDescriptorObject } from '../../utils/interface'
import './header.scss'

const { Search } = Input
const { Header } = Layout
const { SubMenu } = Menu

export default memo(function MainHeader() {

  const [nav, setNav] = useState<string>('welcome')
  const [loginVisible, setLoginVisible] = useState<boolean>(false)
  const [registVisible, setRegistVisible] = useState<boolean>(false)

  let history = useHistory()
  let location = useLocation()

  const handleNav = (key: any) => {
    setNav(key.key)
    if (key.key === 'article') {
      setNav('welcome')
      history.replace('/welcome')
    } else if (key.key === 'search') {
      history.push(location.pathname)
    } else {
      history.push('/' + key.key)
    }
  }

  const search = (value: any) => {
    history.push(`/search?q=${value}`)
  }

  useEffect(() => {
    setNav(location.pathname.split('/')[1] || 'welcome')
  }, [location.pathname])

  return (
    <div className="header">
      <Header>
        <div className='header-container'>
          <Row gutter={20}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="logo cur">
                <span>IT Reader</span>
              </div>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <div className='nav-menu'>
                <Menu mode='horizontal' onClick={handleNav} selectedKeys={[nav]} defaultOpenKeys={['1']}>
                  <Menu.Item key='welcome' className='item'>首页</Menu.Item>
                  <Menu.Item key='topic' className='item'>沸点</Menu.Item>
                  <Menu.Item key='theme' className='item'>话题</Menu.Item>
                  <Menu.Item key='events' className='item blog'>活动</Menu.Item>
                  <Menu.Item key='search'>
                    <Search placeholder="input search text" style={{ width: 200 }} onSearch={search} />
                  </Menu.Item>
                  <Menu.Item key='article'>
                    <Link className="write cur" to='/article' target='_black'>
                      <FileTextOutlined></FileTextOutlined>
                      <span>写文章</span>
                    </Link>
                  </Menu.Item>
                  <SubMenu title={<div className='regist-login'><Login loginVisible={loginVisible} setLoginVisible={setLoginVisible} setRegistVisible={setRegistVisible} />
                      <Regist registVisible={registVisible} setRegistVisible={setRegistVisible} /></div>} className='last'>
                      
                    
                  </SubMenu>
                  {/* <Menu.Item key='message' className='message'>
                    <Badge dot className='cur'>
                      <BellOutlined />
                    </Badge>
                  </Menu.Item>
                  <SubMenu popupClassName='subPop' title={<Avatar className='cur' size={32} icon={<UserOutlined />} />}>
                    <Menu.Item key='article'><Link to='/article' target='_black'><EditOutlined />写文章</Link></Menu.Item>
                    <Menu.Item key='user/1'><UserOutlined />我的主页</Menu.Item>
                    <Menu.Item key='user/1/like'><LikeOutlined />我赞过的</Menu.Item>
                    <Menu.Item key='user/6/collection'><StarOutlined />我的收藏</Menu.Item>
                    <Menu.Item key='subscribe/attention'><TagOutlined />标签管理</Menu.Item>
                    <Menu.Item key='user/setting/profile'><SettingOutlined />设置</Menu.Item>
                  </SubMenu> */}

                </Menu>
              </div>
            </Col>
          </Row>
        </div>
      </Header>
    </div>
  )
})
