import React, { useState, memo, useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Input, Layout, Menu, Badge, Col, Row } from "antd";
import { FileTextOutlined, BellOutlined } from "@ant-design/icons";
import User from "./user";
import Login from "../../views/login";
import Regist from "../../views/regist";
import "./header.scss";
import { useSelector } from "react-redux";

const { Search } = Input;
const { Header } = Layout;

export default memo(function MainHeader() {
  let history = useHistory();
  let location = useLocation();
  const [nav, setNav] = useState<string>("welcome"); // 导航中间大菜单
  const [loginVisible, setLoginVisible] = useState<boolean>(false); // 登陆
  const [registVisible, setRegistVisible] = useState<boolean>(false); // 注册
  // 获取redux中的用户id
  const userID = useSelector((state: any) => state.userID);

  // 监听路由变化
  useEffect(() => {
    setNav(location.pathname.split("/")[1] || "welcome");
  }, [location.pathname]);

  return (
    <div className="header">
      <Header>
        <div className="header-container">
          <Row gutter={20}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="logo cur">
                <span>IT Reader</span>
              </div>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <div className="nav-menu">
                <Menu
                  mode="horizontal"
                  onClick={handleNav}
                  selectedKeys={[nav]}
                  defaultOpenKeys={["1"]}
                >
                  <Menu.Item key="welcome" className="item">
                    首页
                  </Menu.Item>
                  <Menu.Item key="topic" className="item">
                    沸点
                  </Menu.Item>
                  <Menu.Item key="theme" className="item">
                    话题
                  </Menu.Item>
                  <Menu.Item key="events" className="item blog">
                    活动
                  </Menu.Item>
                  <Menu.Item key="search">
                    <Search
                      placeholder="input search text"
                      style={{ width: 200 }}
                      onSearch={search}
                    />
                  </Menu.Item>
                  <Menu.Item key="article">
                    <Link className="write cur" to="/article" target="_black">
                      <FileTextOutlined></FileTextOutlined>
                      <span>写文章</span>
                    </Link>
                  </Menu.Item>
                </Menu>
                {localStorage.getItem("user") ? (
                  <div className="user">
                    <Link to="/message">
                      <Badge dot className="cur">
                        <BellOutlined />
                      </Badge>
                    </Link>
                    <User handleNav={handleNav} />
                  </div>
                ) : (
                  <div className="regist-login">
                    <Login
                      loginVisible={loginVisible}
                      setLoginVisible={setLoginVisible}
                      setRegistVisible={setRegistVisible}
                    />
                    <Regist
                      setLoginVisible={setLoginVisible}
                      registVisible={registVisible}
                      setRegistVisible={setRegistVisible}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Header>
    </div>
  );

  // 搜索框
  function search(value: any) {
    history.push(`/search?q=${value}`);
  }

  // 导航栏菜单点击事件
  function handleNav(key: any) {
    setNav(key.key);
    switch (key.key) {
      case "article":
        setNav("welcome");
        history.replace("/welcome");
        break;
      case "search":
        history.push(location.pathname);
        break;
      case "user":
        history.push(`/user/${userID}`);
        break;
      case "collection":
        history.push(`/user/${userID}/collection`);
        break;
      case "like":
        history.push(`/user/${userID}/like`);
        break;

      default:
        history.push("/" + key.key);
        break;
    }
  }
});
