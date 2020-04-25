import React from "react";
import { Menu, Avatar } from "antd";
import { StopOutlined } from "@ant-design/icons";
import photo from '../assets/1.jpg'

// 用户修改信息页面label
export const userpageinfo = [
  { key: 0, name: "username", label: "用户名", placeholder: "请填写用户名" },
  { key: 1, name: "position", label: "职位", placeholder: "请填写职位" },
  { key: 2, name: "company", label: "公司", placeholder: "请填写公司" },
  {
    key: 3,
    name: "selfIntroduction",
    label: "个人介绍",
    placeholder: "请填写个人介绍(欢或者擅长的事情)",
  },
  {
    key: 4,
    name: "homepage",
    label: "个人主页",
    placeholder: "请填写个人主页",
  },
];

// 用户信息页面标签页tanPane
export const tabPane = (tabInfo: any) => {
  return [
    { tab: `动态`, key: "activity" },
    { tab: `沸点`, key: "topic" },
    { tab: `分享 ${tabInfo.share}`, key: "share" },
    { tab: `赞 ${tabInfo.like}`, key: "like" },
    { tab: `收藏 ${tabInfo.collection}`, key: "collection" },
    { tab: `关注 ${tabInfo.attention}`, key: "attention" },
  ];
};

// 用户信息页面个别菜单的二级菜单显示
export const secondMenu = [
  { key: "activity", label: "可爱鬼" },
  {
    key: "share",
    label: "分享",
    child: [
      { key: "hot", label: "热门" },
      { key: "new", label: "最新" },
    ],
  },
  {
    key: "like",
    label: "赞",
    child: [
      { key: "article", label: "文章" },
      { key: "topic", label: "沸点" },
    ],
  },
  {
    key: "collection",
    label: "收集",
    child: [
      { key: "create", label: "创建的" },
      { key: "follow", label: "关注的" },
    ],
  },
  {
    key: "attention",
    label: "关注",
    child: [
      { key: "follow", label: "关注了" },
      { key: "author", label: "关注者" },
      { key: "label", label: "关注标签" },
    ],
  },
];

// 发布热点添加话题的下拉菜单
export const topicAddMenuLists = (data: any) => (
  <Menu>
    {data.map((item: any) => {
      return (
        <Menu.Item key={item.id}>
          {item.name === "不添加任何话题" ? (
            <>
              <Avatar shape="square" size={42} icon={<StopOutlined />} />
              <div>
                <div className="topic-name">不添加任何话题</div>
              </div>
            </>
          ) : (
            <>
              <Avatar shape="square" size={42} src={photo} />
              <div>
                <div className="topic-name">{item.name}</div>
                <div className="topic-detail">
                  {item.attention} 关注 · {item.topic} 沸点
                </div>
              </div>
            </>
          )}
        </Menu.Item>
      );
    })}
  </Menu>
);

