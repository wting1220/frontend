import React, { useState, memo } from 'react';
import { Avatar, Button, Input, Comment, Tooltip, message } from 'antd'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router'
import { userText } from '../../common/commen'
import { useSelector } from 'react-redux';
import { commentAPI } from '../../common/api.js'

export default memo(function DetailComment({ info, setCommentCount }: any) {

  const [addcommentShow, setAddCommentShow] = useState<boolean>(false) // 评论是否展开
  const [inpValue, setInpValue] = useState<string>('')
  const [commentList, setCommentList] = useState<any>([])
  let location = useLocation()
  const type = location.pathname.split('/')[1]
  const img = useSelector((state: any) => state.userImg)
  const uid = useSelector((state: any) => state.userID)
  const actionsContent = [
    <span>5月前</span>,
    <div><span className='comment-like cur'><LikeOutlined /></span><span className='comment-like cur' key="comment-nested-reply-to"><MessageOutlined />回复</span></div>
  ]
  const authorInfo = (
    info && info.author && <Tooltip placement="top" title={userText(info.author)} getPopupContainer={(triggerNode: any) => triggerNode.parentNode}>
      <span className='name cur'>{info.author.username}</span>
      <span className='level cur'>{info.author.level}</span>
      <span className='label cur'>{info.author.homepage}</span>
    </Tooltip>
  )

  return (
    info !== null && info.author &&
    <div className='detail-comment'>
      {location.pathname.split('/')[1] !== 'topic' && <p className='comment-title'>评论</p>}
      <div className='comment-add'>
        <Avatar src={`http://localhost:3000${img}`} />
        <div className='comment-add-input'>
          <Input
            onChange={(e) => setInpValue(e.target.value)}
            onFocus={() => setAddCommentShow(true)}
            value={inpValue}
          />
          {
            addcommentShow &&
            <div className='comment-add-btn'>
              <Button onClick={() => addComment(info._id)}>评论</Button>
            </div>
          }
        </div>
      </div>
      <div className='comment'>
        <Comment
          actions={actionsContent}
          author={authorInfo}
          avatar={
            <Tooltip placement="top" title={userText(info.author)} getPopupContainer={(triggerNode: any) => triggerNode.parentNode}>
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
              author={authorInfo}
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

  function addComment(id: any) {
    const paramsData = {
      uid, 
      comment: inpValue,
      tid: null,
      aid: null,
    }
    if (type === 'topic') paramsData.tid = id
    else paramsData.aid = id
    commentAPI(paramsData).then(data => { 
      console.log(data)
      if (data.err === null) { 
        message.success('发表评论成功')
        setInpValue('')
        setAddCommentShow(false)
        setCommentCount(data.data.count)
        setCommentList(data.data.lists)
      } else {
        message.warn(data.msg)
      }
    })
  }
})
