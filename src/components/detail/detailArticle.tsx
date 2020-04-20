import React, { useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../utils/codeBlock.jsx'
import { Avatar, Button, Divider } from 'antd'
import moment from 'moment'
import DetailUser from './detailUser'
import DetailComment from './detailComment'
import FirstList from '../content/firstList'
import './index.scss'


const DetailArticle = ({ info }: any) => {

  const [lists] = useState<any>([
    { title: '这是一个标题', name: 'name', img: '../../assets/1.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '../../assets/4da52382276a71cebd0b922c535ab7ce.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '../../assets/7861317844743727fff486bdaabeba2b.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
  ])

  return (
    <Fragment>
      <div className="content-left detail-left">
        <div className='detail-user'>
          <div className='detail-user-detail'>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <div className='detail-info'>
              <span>
                <span className='detail-name'>{info.name}</span>
                <span className='detail-level'>{info.level}</span>
              </span>
              <span className='detail-date'>{moment(info.time).format('YYYY 年 MM 月 DD 日')}</span>
            </div>
          </div>
          <Button type="primary"> + 关注</Button>
        </div>
        <div className='detail-detail'>
          <ReactMarkdown
            source={info.article}
            renderers={{
              code: CodeBlock
            }}
            escapeHtml={false}
          />
        </div>
        <DetailUser info={info} />
        <DetailComment info={info} />
      </div >
      <div className="content-left detail-recommond">
        <span className="recommend-title">相关推荐</span>
        <Divider />
        <FirstList firstList={lists} />
      </div>
    </Fragment>
  )
}

export default DetailArticle