import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import UserInfoLeft from "./userinfo/userInfoLeft";
import { userInfoAPI } from "../../common/api.js";
import "./index.scss";
import { useParams } from "react-router";

export default memo(function UserInfo() {
  let { uid } = useParams();
  // 存储用户信息
  const [userInfo, setUserInfo] = useState({});
  // 页面初始化
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="user-info">
      <Row gutter={20}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <UserInfoLeft userInfo={userInfo} />
        </Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
      </Row>
    </div>
  );

  // 获取主页信息
  function getInfo() {
    userInfoAPI({ uid }).then((data) => {
      setUserInfo(data.data);
    });
  }
});
