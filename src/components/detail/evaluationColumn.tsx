import React from 'react';
import { HeartOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import './index.scss'
import { Avatar, Badge } from 'antd';

export default (function EvaluationColumn({ info }: any) {

  return (
    <div className="nav-star">
      <ul>
        <li><Badge count={info.like}><Avatar icon={<HeartOutlined />} /></Badge></li>
        <li><Badge count={info.commond}><Avatar icon={<MessageOutlined />} /></Badge></li>
        <li><Avatar icon={<StarOutlined />} /></li>
      </ul>
    </div >
  )
})
