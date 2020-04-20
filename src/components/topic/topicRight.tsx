import React, { memo } from 'react'
import { Avatar } from 'antd'
import { Link, useHistory } from 'react-router-dom'

export default memo(function TopicRight() {

  return (
    <div className='topic-right'>
      <ul>
        <li className='topic-right-li'>
          <div className='topic-user'>
            <Link to='/user/3'><div><Avatar size={60}></Avatar></div>
            <div className='topic-user-name'><span>可爱鬼</span></div></Link>
          </div>
          <ul className='topic-info'>
            <li>
              <Link to='/user/1/topic'><span className='label'>沸点</span><span className='count'>1</span></Link>
            </li>
            <li>
              <Link to='/user/1/attention?type=follow'><span className='label'>关注</span><span className='count'>1</span></Link>
            </li>
            <li>
              <Link to='/user/1/attention?type=follower'><span className='label'>关注者</span><span className='count'>1</span></Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
})