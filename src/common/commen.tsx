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

// 鼠标挪上去显示用户tooltip信息
export const userText = (info: any) => (
  info && <div>
      <div className="tooltip-top">
        <div className="top-img">
          <Avatar src={`http://localhost:3000${info.img}`} />
        </div>
        <div className="top-detail">
          <div>
            <span>{info.username || ""}</span>
            <span>{info.level || ""}</span>
          </div>
          <div>{info.homepage || "暂无"}</div>
        </div>
      </div>
      <div className="tooltip-bottom">
        <div className="bottom-like">
          <div>{info.attention || 0}</div>
          <div>关注</div>
        </div>
        <div className="bottom-like">
          <div>{info.attention || 0}</div>
          <div>关注者</div>
        </div>
        <Button>关注</Button>
      </div>
  </div>
);

// 用户或者标签信息展示模块
export const userTagsShow = (item: any, type: string) => (
  <div className="userTagsShow cur" key={item.name}>
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

// 上传图片
export function getBase64(img: any, callback:any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
