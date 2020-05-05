import React, { memo, Fragment, useEffect, useState } from "react";
import { Avatar, Upload, Button, Input, Form, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { userpageinfo } from "../../../common/variable";
import { updateUserAPI, userInfoAPI } from "../../../common/api.js";
import { useSelector } from "react-redux";
import Axios from "axios";

export default memo(function Profile() {
  
  const [form] = Form.useForm()
  // 获取redux中uid
  const uid = useSelector((state: any) => state.userID);
  // 确认修改按钮是否禁用
  // const [confirm, setConfirm] = useState<boolean>(true);
  // 上传成功地址
  const [imgUrl, setImgUrl] = useState<string>('')
  
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
              {imgUrl === '' ? <Avatar shape="square" size={72} icon={<UserOutlined />} /> : <Avatar shape="square" size={72} src={`http://localhost:3000${imgUrl}`} />}
            </Form.Item>
            <span className="upload">
              <span className="warn">支持 jpg、png 格式大小 5M 以内的图片</span>
              <Upload name='img' showUploadList={false} beforeUpload={beforeUpload} customRequest={upload}>
                <Button>点击上传</Button>
              </Upload>
            </span>
          </div>
        </div>
        {userpageinfo.map((item) => (
          <div className="map-formItem" key={item.key}>
            <span className="label">{item.label}</span>
            <Form.Item name={item.name}>
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
    values.img = imgUrl
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
      setImgUrl(data.data.img)
    });
  }

  // 取消
  function reset() {
    getInfo()
  }

  // 上传
  function upload(file: any) {
    const formData = new FormData();
    formData.append('img', file.file)
    Axios.post('/api/UploadAPI', formData).then(data => { 
      if (data.data.err === null) {
        message.success('上传成功')
        setImgUrl(data.data.imgUrl)
      } else { 
        message.warn(data.data.msg)
      }
    })
  }

  // 上传前的校验
  function beforeUpload(file: any) { 
    const isJpgOrPng = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg';
    if (!isJpgOrPng) {
      message.error('请上传 JPG/JPEG/PNG 图片格式! ');
    }
    const isLt5M= file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('图片大小必须小于 5MB!');
    }
    return isJpgOrPng && isLt5M;
  }
});
