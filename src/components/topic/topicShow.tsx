import React, { memo, useState } from 'react'
import { Avatar, Dropdown, Menu, Button, Tag, Tooltip } from 'antd'
import { LikeOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons'
import DetailComment from '../detail/detailComment'
import { userText } from '../../utils/commen'

export default memo(function TopicShow({ item }: any) {

  const [commentShow, setCommentShow] = useState<boolean>(false)

  const menu = (
    <Menu>
      <Menu.Item>
        <a>举报</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='content-show'>
      <div className='show-detail'>
        <div className='cur'>
          <Tooltip placement="top" title={userText(item)} getPopupContainer={(triggerNode: any) => triggerNode}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Tooltip>
        </div>
        <div className='show-detail-content'>
          <div className='show-user'>
            <Tooltip placement="top" title={userText(item)} getPopupContainer={(triggerNode: any) => triggerNode}>
              <div>
                <div className='name cur'>{item.name}</div>
                <div className='label cur'>{item.label} · {item.time}前</div>
              </div>
            </Tooltip>
            <Button>关注</Button>
          </div>
          <div className='content'>{item.content}</div>
          <Tag color="purple">magenta</Tag>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>···</a>
          </Dropdown>
        </div>
      </div>
      <div className='show-utils'>
        <span className='utils cur'><LikeOutlined />34</span>
        <span className='utils cur' onClick={() => setCommentShow(!commentShow)}><MessageOutlined />34</span>
        <span className='utils cur'><ShareAltOutlined /></span>
      </div>
      {commentShow && <DetailComment info={item} />}
    </div>
  )
})