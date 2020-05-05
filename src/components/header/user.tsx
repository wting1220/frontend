import React, { memo } from "react";
import { Dropdown, Menu, Avatar } from "antd";
import {
  UserOutlined,
  EditOutlined,
  LikeOutlined,
  StarOutlined,
  SettingOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

export default memo(function User({ handleNav }: any) {

  const img = useSelector((state:any) => state.userImg)

  // header中用户信息的下拉菜单
  const userMenu = (
    <Menu onClick={handleNav}>
      <Menu.Item key="article">
        <EditOutlined />
        写文章
      </Menu.Item>
      <Menu.Item key="user">
        <UserOutlined />
        我的主页
      </Menu.Item>
      <Menu.Item key="like">
        <LikeOutlined />
        我赞过的
      </Menu.Item>
      <Menu.Item key="collection">
        <StarOutlined />
        我的收藏
      </Menu.Item>
      <Menu.Item key="subscribe/attention">
        <TagOutlined />
        标签管理
      </Menu.Item>
      <Menu.Item key="user/setting/profile">
        <SettingOutlined />
        设置
      </Menu.Item>
    </Menu>
  );
  return (
    <div style={{ marginLeft: "20px" }}>
      <Dropdown
        overlay={userMenu}
        trigger={["hover", "click"]}
        getPopupContainer={(node: any) => node.parentNode}
        placement="bottomRight"
      >
        {/* {判断redux中是否存了头像} */}
        {img !== null ? <Avatar className="cur" size={32} src={`http://localhost:3000${img}`} /> : <Avatar className="cur" size={32} icon={<UserOutlined />}></Avatar>}
      </Dropdown>
    </div>
  );
});
