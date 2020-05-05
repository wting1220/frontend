import React, { memo, useState, useEffect } from 'react'
import { Avatar, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userInfoAPI } from '../../common/api.js'

export default memo(function TopicRight() {

  // 用户id
  const uid = useSelector((state: any) => state.userID);
  // 用户信息
  const [userInfo, setUserInfo] = useState<any>({})

  useEffect(() => { 
    getUserInfo()
  }, [])

  return (
    userInfo && 
    <div className='topic-right'>
      <ul>
        <li className='topic-right-li'>
          <div className='topic-user'>
            <Link to={`/user/${uid}`}><div><Avatar size={60} src={`http://localhost:3000${userInfo.img}`}></Avatar></div>
              <div className='topic-user-name'><span>{userInfo.username}</span></div></Link>
          </div>
          <ul className='topic-info'>
            <li>
              <Link to='/user/1/topic'><span className='label'>沸点</span><span className='count'>{userInfo.topic || 0}</span></Link>
            </li>
            <li>
              <Link to='/user/1/attention?type=follow'><span className='label'>关注</span><span className='count'>{userInfo.attention ? userInfo.attention.follow : 0}</span></Link>
            </li>
            <li>
              <Link to='/user/1/attention?type=follower'><span className='label'>关注者</span><span className='count'>{userInfo.attention ? userInfo.attention.author : 0}</span></Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )

  function getUserInfo() { 
    userInfoAPI({ uid }).then(data => { 
      if (data.err === null) {
        setUserInfo(data.data)
      } else { 
        message.warn(data.msg)
      }
    })
  }
})