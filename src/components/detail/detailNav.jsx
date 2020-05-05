import React from "react"
import "./index.scss"
import MarkNav from "markdown-navbar"
import "markdown-navbar/dist/navbar.css"
import { Anchor, Avatar } from "antd"
import { HeartOutlined, EyeOutlined } from "@ant-design/icons"

export default function DetailNav({ info }) {

  return (
    info !== null && info.author &&
    <div className="detail-right">
      <div className="nav-anthor mar">
        <p className="anthor-title">关于作者</p>
        <div className="anthor-msg">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className="detail-info">
            <span>
              <span className="detail-name">{info.author.username}</span>
              <span className="detail-level">{info.author.level}</span>
            </span>
            <span className="detail-signature">前端 程序员</span>
          </div>
        </div>
        <ul className="anthor-like">
          <li>
            <Avatar icon={<HeartOutlined />} />
            <span> 获得点赞 0</span>
          </li>
          <li>
            <Avatar icon={<EyeOutlined />} />
            <span> 文章阅读量 78</span>
          </li>
        </ul>
      </div>
      <div className="ad mar"></div>
      {info.content && < Anchor offsetTop={64} className="mar">
          <div className="markNav-title">目录</div>
      <MarkNav source={info.content} headingTopOffset={64} declarative={true} />
        </Anchor>}
    </div>
  )
}


