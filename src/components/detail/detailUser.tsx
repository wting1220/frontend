import React, { memo } from 'react';
import { Avatar, Button, Tag } from 'antd'

export default memo(function DetailUser({ info }: any) {

  return (
    info &&
    <div className='detail-user2'>
      <div className='detail-user'>
        <div className='detail-user-detail'>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className='detail-info'>
            <span>
              <span className='detail-name'>{info.username}</span>
              <span className='detail-level'>{info.level}</span>
            </span>
            <span className='detail-date'>发布了34篇文章 · 获得点赞34 · 获得阅读2345</span>
          </div>
        </div>
        <Button type="primary"> + 关注</Button>
      </div>
      <div className='detail-tags'>
        <span className='tags-title'>关注相关标签</span>
        <ul>
          <li><Tag>你的</Tag></li>
          <li><Tag>你的</Tag></li>
          <li><Tag>你的</Tag></li>
          <li><Tag>你的</Tag></li>
          <li><Tag>你的</Tag></li>
        </ul>
      </div>
    </div>

  )
})
