import React, { memo, useState } from 'react'
import { Avatar, Upload, Button, Input } from 'antd'
import { UserOutlined, EditOutlined } from '@ant-design/icons'

export default memo(function Profile() {

  const [edit, setEdit] = useState<number>()

  const saveDom = (
    <span className='suffix-save'>
      <span>保存</span><span>取消</span>
    </span>
  )

  const editDom = (
    <span className='suffix-edit cur'><EditOutlined />修改</span>
  )

  const labels = [
    { key: 0, label: '用户名', placeholder: '请填写用户名' },
    { key: 1, label: '职位', placeholder: '请填写职位' },
    { key: 2, label: '公司', placeholder: '请填写公司' },
    { key: 3, label: '个人介绍', placeholder: '请填写个人介绍(欢或者擅长的事情)' },
    { key: 4, label: '个人主页', placeholder: '请填写个人主页' }
  ]

  return (
    <div className='setting-profile'>
      <ul>
        <li><h1 className='title'>个人资料</h1></li>
        <li className='photo'>
          <span className='label'>头像</span>
          <div className='upload-photo'>
            <Avatar shape="square" size={72} icon={<UserOutlined />} />
            <span className='upload'>
              <span className='warn'>支持 jpg、png 格式大小 5M 以内的图片</span>
              <Upload showUploadList={false} >
                <Button>点击上传</Button>
              </Upload>
            </span>
          </div>
        </li>
        {
          labels.map((item, index) => (
            <li key={item.key}>
              <span className='label'>{item.label}</span>
              <div>
                <Input placeholder={item.placeholder} onFocus={() => setEdit(index)} onBlur={() => setEdit(9)} suffix={edit === index? saveDom : editDom} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
})