import React, { memo, Fragment, useEffect } from "react";
import { Avatar, Upload, Button, Input, Form, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { userpageinfo } from "../../../common/variable";
import { updateUserAPI, userInfoAPI } from "../../../common/api.js";
import { useSelector } from "react-redux";

export default memo(function Profile() {
  
  const [form] = Form.useForm()
  // 获取redux中uid
  const uid = useSelector((state: any) => state.userID);
  // 确认修改按钮是否禁用
  // const [confirm, setConfirm] = useState<boolean>(true);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="setting-profile">
      <h1 className="title">个人资料</h1>
      <Form onFinish={submit} name="user" form={form}>
        <div className="photo">
          <span className="label">头像</span>
          <div className="upload-photo">
            <Form.Item name="img">
              <Avatar shape="square" size={72} icon={<UserOutlined />} />
            </Form.Item>
            <span className="upload">
              <span className="warn">支持 jpg、png 格式大小 5M 以内的图片</span>
              <Upload showUploadList={false}>
                <Button>点击上传</Button>
              </Upload>
            </span>
          </div>
        </div>
        {userpageinfo.map((item) => (
          <div className="map-formItem">
            <span className="label">{item.label}</span>
            <Form.Item key={item.key} name={item.name}>
              <Input placeholder={item.placeholder} />
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
    </div>
  );

  // 修改个人信息
  function submit(values: any) {
    values.uid = uid;
    updateUserAPI(values).then((data) => {
      if (data.err === null) {
        message.success(data.msg);
        getInfo();
      } else {
        message.warn(data.msg);
      }
    });
  }

  // 获取信息
  function getInfo() {
    userInfoAPI({ uid }).then((data) => {
      form.setFieldsValue(data.data);
    });
  }

  // 取消
  function reset() {
    getInfo()
  }
});
