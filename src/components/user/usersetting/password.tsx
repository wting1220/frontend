import React, { memo, Fragment } from "react";
import { Input, Button, Form, message } from "antd";
import { useSelector } from "react-redux";
import { updateUserAPI } from "../../../common/api.js";
import { useForm } from "antd/lib/form/util";

export default memo(function Password() {
  // 获取redux中uid
  const uid = useSelector((state: any) => state.userID);
  const [form] = useForm();
  const labels = [
    {
      key: 0,
      name: "oldpassword",
      label: "旧密码",
      placeholder: "请输入原密码",
    },
    {
      key: 1,
      name: "newpassword",
      label: "新密码",
      placeholder: "请输入新密码",
    },
    {
      key: 2,
      name: "confirmpassword",
      label: "确认密码",
      placeholder: "请确认新密码",
    },
  ];

  return (
    <div className="setting-password">
      <ul>
        <h1 className="title">修改密码</h1>
        <Form onFinish={submit} form={form}>
          {labels.map((item,index:number) => (
            <div className="map-formItem" key={index}>
              <span className="label">{item.label}</span>
              <Form.Item key={item.key} name={item.name}>
                <Input.Password placeholder={item.placeholder} />
              </Form.Item>
            </div>
          ))}
          <Form.Item className="btn">
            <Fragment>
              <Button type="primary" htmlType="submit">
                保存修改
              </Button>
              <Button onClick={reset} style={{ marginLeft: "12px" }}>
                重置
              </Button>
            </Fragment>
          </Form.Item>
        </Form>
      </ul>
    </div>
  );

  // 保存修改
  function submit(values: any) {
    values.uid = uid;
    // 校验两次密码是否一致
    console.log(values);
    console.log(values.newpassword, values.confirmpassword);
    values.newpassword === values.confirmpassword
      ? updateUserAPI(values).then((data) => {
          if (data.err === null) {
            message.success(data.msg);
          } else {
            message.warn(data.msg);
          }
        })
      : message.warn("两次密码必须一致");
  }

  // 取消
  function reset() {
    form.setFieldsValue({
      oldpassword: '',
      newpassword: '',
      confirmpassword: '',
    })
  }
});
