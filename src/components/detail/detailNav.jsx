import React from "react"
import "./index.scss"
import MarkNav from "markdown-navbar"
import "markdown-navbar/dist/navbar.css"
import { Anchor, Avatar } from "antd"
import { HeartOutlined, EyeOutlined } from "@ant-design/icons"

function DetailNav({ info }) {
  return (
    <div className="detail-right">
      <div className="nav-anthor mar">
        <p className="anthor-title">关于作者</p>
        <div className="anthor-msg">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className="detail-info">
            <span>
              <span className="detail-name">{info.name}</span>
              <span className="detail-level">{info.level}</span>
            </span>
            <span className="detail-signature">前端 程序员</span>
          </div>
        </div>
        <ul className="anthor-like">
          <li>
            <Avatar icon={<HeartOutlined />} />
            <span> 获得点赞 {info.like}</span>
          </li>
          <li>
            <Avatar icon={<EyeOutlined />} />
            <span> 文章阅读量 {info.read}</span>
          </li>
        </ul>
      </div>
      <div className="ad mar"></div>
      <Anchor offsetTop={64} className="mar">
        <div className="markNav-title">目录</div>
        <MarkNav source={info.article} headingTopOffset={64} declarative={true} />
      </Anchor>
    </div>
  )
}

export default DetailNav

