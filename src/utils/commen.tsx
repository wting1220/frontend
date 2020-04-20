import React from "react";
import { Avatar, Button, Input, Menu } from "antd"
import { UserOutlined, StopOutlined } from '@ant-design/icons'
import photo from '../assets/1.jpg'

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const validateMessages = {
  username: {
    required: true,
    message: 'Please input your Username!'
  }
}

// 首页list点赞评论分享
export const IconText = ({ icon, text }: any) => (
  <li className="cur">
    {React.createElement(icon)}
    {text}
  </li>
)

// 鼠标挪上去显示用户tooltip信息
export const userText = (info: any) => (
  <div>
    <div className='tooltip-top'>
      <div className='top-img'><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
      <div className='top-detail'>
        <div><span>{info.name || ''}</span><span>{info.level || ''}</span></div>
        <div>{info.label}</div>
      </div>
    </div>
    <div className='tooltip-bottom'>
      <div className='bottom-like'>
        <div>{info.count || 0}</div>
        <div>关注</div>
      </div>
      <div className='bottom-like'>
        <div>{info.count || 0}</div>
        <div>关注者</div>
      </div>
      <Button>关注</Button>
    </div>
  </div>
)

// 用户信息页面标签页tanPane
export const tabPane = (tabInfo: any) => {
  return [
    { tab: `动态`, key: 'activity' },
    { tab: `沸点`, key: 'topic' },
    { tab: `分享 ${tabInfo.share}`, key: 'share' },
    { tab: `赞 ${tabInfo.like}`, key: 'like' },
    { tab: `收藏 ${tabInfo.collection}`, key: 'collection' },
    { tab: `关注 ${tabInfo.attention}`, key: 'attention' },
  ]
}

// 用户信息页面个别菜单的二级菜单显示
export const secondMenu = (
  [
    { key: 'activity', label: '可爱鬼' },
    { key: 'share', label: '分享', child: [{ key: 'hot', label: '热门' }, { key: 'new', label: '最新' }] },
    { key: 'like', label: '赞', child: [{ key: 'article', label: '文章' }, { key: 'topic', label: '沸点' }] },
    { key: 'collection', label: '收集', child: [{ key: 'create', label: '创建的' }, { key: 'follow', label: '关注的' }] },
    { key: 'attention', label: '关注', child: [{ key: 'follow', label: '关注了' }, { key: 'author', label: '关注者' }, { key: 'label', label: '关注标签' }] },
  ]
)

// 用户或者标签信息展示模块
export const userTagsShow = (item: any, type: string) => (
  <div className='userTagsShow cur'>
    <div className='userTagsShow-left'>
      <div><Avatar size={45} icon={<UserOutlined />} /></div>
      <div className='userOrtags'>
        {
          type === 'user'
            ? <><div>
              <span className='name'>{item.name}</span>
              <span className='level'>{item.level}</span>
            </div>
              <div>
                <span className='info'>{item.label}</span>
              </div></>
            : <><div>
              <span className='name'>{item.name}</span>
            </div>
              <div>
                <span className='count'>{item.count} 关注</span>
                <span className='count'>{item.count} 文章</span>
              </div></>
        }

      </div>
    </div>
    <Button>关注</Button>
  </div>
)

// 添加话题的下拉菜单
export const topicAddMenuLists = (data: any) => (
  <Menu>
    {
      data.map((item: any) => {
        return (
          <Menu.Item key={item.id}>
            {item.name === '不添加任何话题' ? <>
              <Avatar shape="square" size={42} icon={<StopOutlined />} />
              <div>
                <div className='topic-name'>不添加任何话题</div>
              </div>
            </> : <><Avatar shape="square" size={42} src={photo} />
                <div>
                  <div className='topic-name'>{item.name}</div>
                  <div className='topic-detail'>{item.attention} 关注 · {item.topic} 沸点</div>
                </div></>}
          </Menu.Item>
        )
      })
    }
  </Menu>
)