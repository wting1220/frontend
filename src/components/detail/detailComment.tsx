import React, { useState, memo } from 'react';
import { Avatar, Button, Input, Comment, Tooltip } from 'antd'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router'
import { userText } from '../../common/commen'

export default memo(function DetailComment({ info }: any) {

  const [commentShow, setCommentShow] = useState<boolean>(false)

  const actionsContent = [
    <span>5月前</span>,
    <div><span className='comment-like cur'><LikeOutlined /></span><span className='comment-like cur' key="comment-nested-reply-to"><MessageOutlined />回复</span></div>
  ]

  const author = [
    <Tooltip placement="top" title={userText(info)} getPopupContainer={(triggerNode: any) => triggerNode.parentNode}>
      <span className='name cur'>{info.name}</span>
      <span className='level cur'>{info.level}</span>
      <span className='label cur'>{info.label}</span>
    </Tooltip>
  ]

  let location = useLocation()

  return (
    <div className='detail-comment'>
      {location.pathname.split('/')[1] !== 'topic' && <p className='comment-title'>评论</p>}
      <div className='comment-add'>

        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div className='comment-add-input'>
          <Input onFocus={() => setCommentShow(true)} onBlur={() => setCommentShow(false)} />
          {
            commentShow &&
            <div className='comment-add-btn'>
              <Button>评论</Button>
            </div>
          }
        </div>
      </div>
      <div className='comment'>
        <Comment
          actions={actionsContent}
          author={author}
          avatar={
            <Tooltip placement="top" title={userText(info)} getPopupContainer={(triggerNode: any) => triggerNode.parentNode}>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            </Tooltip>
          }
          content={
            <p>评论内容</p>
          }
        >
          <div className="comment-apply">
            <Comment
              actions={actionsContent}
              author={author}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>评论内容</p>
              }
            >
            </Comment>
          </div>
        </Comment>
      </div>
    </div >
  )
})
