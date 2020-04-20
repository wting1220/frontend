import React, { memo } from 'react'
import { Form, Input, Button, Checkbox, Modal, } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../scss/login.scss'
import { LoginProps } from '../utils/interface'

export default memo(function Login({loginVisible, setLoginVisible, setRegistVisible}: LoginProps) {

  const onFinish = (values: any) => {
    console.log(values)
  }
  
  return (
    <div>
      <span className="cur" onClick={() => setLoginVisible(true)}>登陆</span>
      <Modal
        title="登陆"
        centered
        visible={loginVisible}
        onOk={() => setLoginVisible(false)}
        onCancel={() => setLoginVisible(false)}
        footer=''
        forceRender
      >
        <div className="login">
          <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <span className="login-form-forgot">
                Forgot password
                    </span>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
              <p className='go-regist'>No account ？     <span className='cur' onClick={() => {setRegistVisible(true); setLoginVisible(false)}} >register now!</span></p>
            </Form.Item>
          </Form>
          </div>
      </Modal>
    </div>
  )
})
