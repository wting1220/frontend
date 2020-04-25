import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Modal,
  message,
} from 'antd';
import { getMailCodeAPI, getRepeatUserAPI, registAPI } from '../common/api.js'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React, { useRef } from 'react'
import '../scss/regist.scss'
import { RegistProps } from '../common/interface'

const Regist = ({ registVisible, setRegistVisible, setLoginVisible }: RegistProps) => {

  // 发送验证码时mail字段的绑定
  const email = useRef<any>(null)
  const [form] = Form.useForm();

  return (
    <div>
      <span className="cur" onClick={() => setRegistVisible(true)}>注册</span>
      <Modal
        forceRender
        title="注册"
        centered
        visible={registVisible}
        onCancel={() => setRegistVisible(false)}
        footer=''
      >
        <div className="regist">
          <Form
            name="register"
            form={form}
            onFinish={submit}
          >
            <Form.Item
              name="username"
              rules={[{ required: true,  message: '请输入用户名'}]}
              validateTrigger='blur'
            >
              <Input onBlur={handleUser} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: '请确认密码!' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码不匹配!');
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item
              name="mail"
              rules={[
                {
                  type: 'email',
                  message: '请输入符合规范的邮箱地址!',
                },
                {
                  required: true,
                  message: '请输入邮箱地址!',
                },
              ]}
            >
              <Input onBlur={handleUser} ref={email} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email ..." />
            </Form.Item>

            <Form.Item extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="code"
                    noStyle
                    rules={[{ required: true, message: '请输入验证码!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button className="captcha" onClick={getMailCode}>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="regist-btn">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )

  // 提交注册表单
  function submit(values: any) {
    delete values.confirmPassword
    registAPI(values).then(data => {
      if (data.err === null) {
        message.success(data.msg)
        // 关闭注册打开登陆
        setRegistVisible(false) 
        setLoginVisible(true)
      } else {
        message.warn(data.msg)
      }
    })
  }

  // 获取验证码
  function getMailCode() {
    let data = { mail: email.current.state.value }
    getMailCodeAPI(data).then((data) => {
      if (data.err === null) {
        message.success(data.msg)
      } else {
        message.error(data.msg)
      }
    })
  }

  // 校验用户名或者邮箱是否已存在
  function handleUser(e:any) {
    let label = e.target.id.split('_')[1]
    getRepeatUserAPI({ [label]: e.target.value }).then(data => {
      if (data.err === null) {
        message.warn(data.msg)
      }
    })
  };

}

export default Regist