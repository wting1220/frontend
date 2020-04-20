import {
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Button,
  Modal,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react'
import '../scss/regist.scss'
import { RegistProps } from '../utils/interface'

const Regist = ({ registVisible, setRegistVisible }: RegistProps) => {


  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ' + values)
  }

  return (
    <div>
      <span className="cur" onClick={() => setRegistVisible(true)}>注册</span>
      <Modal
        forceRender
        title="注册"
        centered
        visible={registVisible}
        onOk={() => setRegistVisible(false)}
        onCancel={() => setRegistVisible(false)}
        footer=''
      >
        <div className="regist">
          <Form
            name="register"
            form={form}
            onFinish={onFinish}
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
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
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
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email ..." />
            </Form.Item>

            <Form.Item extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button className="captcha">获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item name="agreement" valuePropName="checked">
              <Checkbox>
                I have read the agreement
                  </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="regist-btn">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )

}

export default Regist