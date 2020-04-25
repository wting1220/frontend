import React, { memo } from "react";
import { Form, Input, Button, Checkbox, Modal, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginProps } from "../common/interface";
import { loginAPI } from "../common/api.js";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { changeUserAction } from "../actions/action";
import "../scss/login.scss";

function Login({
  loginVisible,
  setLoginVisible,
  setRegistVisible,
}: LoginProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <span className="cur" onClick={() => setLoginVisible(true)}>
        登陆
      </span>
      <Modal
        title="登陆"
        centered
        visible={loginVisible}
        onCancel={() => setLoginVisible(false)}
        footer=""
        forceRender
      >
        <div className="login">
          <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={submit}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名或邮箱!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username or Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
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

              <span className="login-form-forgot">Forgot password</span>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
              <p className="go-regist">
                No account ？{" "}
                <span
                  className="cur"
                  onClick={() => {
                    setRegistVisible(true);
                    setLoginVisible(false);
                  }}
                >
                  register now!
                </span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );

  // 提交登陆表单
  function submit(values: any) {
    loginAPI(values).then((data) => {
      if (data.err === null) {
        message.success(data.msg);
        localStorage.setItem("user", data.token);
        // 将用户信息存进redux中
        let { id, img } = jwt_decode(data.token);
        dispatch(changeUserAction({ userID: id, userImg: img }));
        // 关闭登陆框
        setLoginVisible(false);
      } else {
        message.error(data.msg);
      }
    });
  }
}

export default memo(Login);
