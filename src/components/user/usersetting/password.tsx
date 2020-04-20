import React, { memo } from 'react'
import { Input, Button } from 'antd'

export default memo(function Password() {

  const labels = [
    { key: 0, label: '旧密码', placeholder: '请输入原密码' },
    { key: 1, label: '新密码', placeholder: '请输入新密码' },
    { key: 2, label: '确认密码', placeholder: '请确认新密码' },
  ]

  return (
    <div className='setting-password'>
      <ul>
        <li><h1 className='title'>修改密码</h1></li>
        {
          labels.map((item, index) => (
            <li key={item.key}>
              <span className='label'>{item.label}</span>
              <div>
                <Input placeholder={item.placeholder} />
              </div>
            </li>
          ))
        }
        <li style={{borderBottom: 'none'}}><span></span><Button>保存修改</Button></li>
      </ul>
    </div>
  )
})
