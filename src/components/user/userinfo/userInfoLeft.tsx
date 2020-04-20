import React, { memo } from 'react'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import UserActivity from './userActivity'

export default memo(function UserInfo() {
  return (
    <div className='user-info-left'>
      <div className='user'>
        <div className='user-left'>
          <div className='user-avatar'><Avatar size={90} icon={<UserOutlined />} /></div>
          <div className='user-name'>
            <div><h1>可爱鬼</h1></div>
            <div className='add-info cur'>你从事什么职业？</div>
            <div className='add-info cur'>你的武器库有哪些武（ji）器（shu）？</div>
          </div>
        </div>
        <div className='user-edit'>
          <Button>编辑个人资料</Button>
        </div>
      </div>
      <div className='user-detail'>
        <UserActivity />
      </div>
    </div>
  )
})