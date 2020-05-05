import React, { useEffect, useState } from 'react';
import { HeartOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { likeAPI } from '../../common/api.js'
import './index.scss'
import { Avatar, Badge } from 'antd';
import { useSelector } from 'react-redux';

export default (function EvaluationColumn({ info }: any) {

  const uid = useSelector((state: any) => state.userID)
  const [likeCount, setLikeCount] = useState<number>(info && info.likes && info.likes.lists && info.likes.lists.length || 0)

  return (
    <div className="nav-star">
      <ul>
        <li onClick={like}><Badge count={likeCount}><Avatar icon={<HeartOutlined />} /></Badge></li>
        <li><Badge count={52}><Avatar icon={<MessageOutlined />} /></Badge></li>
        <li><Avatar icon={<StarOutlined />} /></li>
      </ul>
    </div >
  )

  function like() { 
    likeAPI({ uid, aid: info._id }).then((data) => { 
      if (data.err === null) { 
        setLikeCount(data.count)
      }
    })
  }
})
