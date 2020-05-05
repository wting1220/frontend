import React, { memo, useState } from 'react'
import { Avatar, Dropdown, Menu, Button, Tag, Tooltip } from 'antd'
import { LikeOutlined, MessageOutlined, ShareAltOutlined, LikeFilled } from '@ant-design/icons'
import DetailComment from '../detail/detailComment'
import { userText } from '../../common/commen'
import { likeAPI } from '../../common/api.js'
import moment from 'moment'
import { useSelector } from 'react-redux'

export default memo(function TopicShow({ item }: any) {

  const uid = useSelector((state: any) => state.userID)
  const [commentShow, setCommentShow] = useState<boolean>(false)
  const [likeUtil, setLikeUtil] = useState<boolean>(item.likes && item.likes.lists && item.likes.lists.includes(uid))
  const [likeCount, setLikeCount] = useState<number>(item && item.likes && item.likes.lists ? item.likes.lists.length : 0)
  const [commentCount, setCommentCount] = useState<number>(item && item.comment && item.comment.lists ? item.comment.lists.length : 0)

  const menu = (
    <Menu>
      <Menu.Item>
        <a>举报</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='content-show'>
      <div className='show-detail'>
        <div className='cur'>
          <Avatar src={`http://localhost:3000${item.author && item.author.img}`} />
        </div>
        <div className='show-detail-content'>
          <div className='show-user'>
            <Tooltip placement="top" title={userText(item.author)} getPopupContainer={(triggerNode: any) => triggerNode}>
              <div>
                <div className='name cur'>{item.author && item.author.username}</div>
                <div className='label cur'>
                  <span>{item.author && item.author.label}</span>
                  {moment(item.last_add_time).fromNow()}</div>
              </div>
            </Tooltip>
            <Button>关注</Button>
          </div>
          <div className='content'>{item.content}</div>
          <div>
            {item.imgs && item.imgs.length > 0 && item.img.map((item: any) => <Avatar key={item} size={72} src={`http://localhost:3000${item}`} />)}
          </div>
          <div>{item.href && <a href={item.href}>{item.href}</a>}</div>
          <div>{item.theme && <Tag color="purple">{item.theme}</Tag>}</div>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>···</a>
          </Dropdown>
        </div>
      </div>
      <div className='show-utils'>
        <span className='utils cur' onClick={like}>{likeUtil ? <LikeFilled style={{color:'plum'}} /> : <LikeOutlined />}{likeCount}</span>
        <span className='utils cur' onClick={() => setCommentShow(!commentShow)}><MessageOutlined />{commentCount}</span>
        <span className='utils cur'><ShareAltOutlined />分享</span>
      </div>
      {commentShow && <DetailComment setCommentCount={setCommentCount} info={item} />}
    </div>
  )

  function like() {
    setLikeUtil(!likeUtil)
    likeAPI({ uid, tid: item._id }).then((data) => { 
      if (data.err === null) { 
        setLikeCount(data.count)
      }
    })
  }
})