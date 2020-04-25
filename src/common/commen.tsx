import React from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const validateMessages = {
  username: {
    required: true,
    message: "Please input your Username!",
  },
};

// 首页list点赞评论分享
export const IconText = ({ icon, text }: any) => (
  <li className="cur">
    {React.createElement(icon)}
    {text}
  </li>
);

// 鼠标挪上去显示用户tooltip信息
export const userText = (info: any) => (
  <div>
    <div className="tooltip-top">
      <div className="top-img">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
      <div className="top-detail">
        <div>
          <span>{info.name || ""}</span>
          <span>{info.level || ""}</span>
        </div>
        <div>{info.label}</div>
      </div>
    </div>
    <div className="tooltip-bottom">
      <div className="bottom-like">
        <div>{info.count || 0}</div>
        <div>关注</div>
      </div>
      <div className="bottom-like">
        <div>{info.count || 0}</div>
        <div>关注者</div>
      </div>
      <Button>关注</Button>
    </div>
  </div>
);

// 用户或者标签信息展示模块
export const userTagsShow = (item: any, type: string) => (
  <div className="userTagsShow cur">
    <div className="userTagsShow-left">
      <div>
        <Avatar size={45} icon={<UserOutlined />} />
      </div>
      <div className="userOrtags">
        {type === "user" ? (
          <>
            <div>
              <span className="name">{item.name}</span>
              <span className="level">{item.level}</span>
            </div>
            <div>
              <span className="info">{item.label}</span>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="name">{item.name}</span>
            </div>
            <div>
              <span className="count">{item.count} 关注</span>
              <span className="count">{item.count} 文章</span>
            </div>
          </>
        )}
      </div>
    </div>
    <Button>关注</Button>
  </div>
);
