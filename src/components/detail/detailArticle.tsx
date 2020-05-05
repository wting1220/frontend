import React, { useState, Fragment, memo } from 'react';
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../common/codeBlock.jsx'
import { Avatar, Button, Divider, Empty } from 'antd'
import moment from 'moment'
import DetailUser from './detailUser'
import DetailComment from './detailComment'
import FirstList from '../content/firstList'
import './index.scss'

export default memo(function DetailArticle({ info }: any) {

  const [lists] = useState<any>([
    {_id: 1, title: '这是一个标题', name: 'name', img: '../../assets/1.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id: 2, title: '这是一个标题', name: 'name', img: '../../assets/4da52382276a71cebd0b922c535ab7ce.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id: 3, title: '这是一个标题', name: 'name', img: '../../assets/7861317844743727fff486bdaabeba2b.jpg', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id: 4,title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id: 5,title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id:6, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    {_id:7, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
    { _id: 8, title: '这是一个标题', name: 'name', img: '', tags: ['标签'], time: '200000000000', topic: '专栏', like: '33', recommend: '25' },
  ])

  return(
  info !== null && info.author && <Fragment>
       <div className="content-left detail-left">
         <div className='detail-user'>
           <div className='detail-user-detail'>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <div className='detail-info'>
                <span>
                  <span className='detail-name cur'>{info.author.username}</span>
                  <span className='detail-level cur'>{info.author.level}</span>
                </span>
                <span className='detail-date'>{moment(+info.publish_time).format('YYYY 年 MM 月 DD 日')}</span>
              </div>
            </div>
            <Button type="primary"> + 关注</Button>
          </div>
          <div className='detail-detail'>
            <ReactMarkdown
              source={info.content}
              renderers={{
                code: CodeBlock
              }}
              escapeHtml={false}
            />
          </div>
          <DetailUser info={info.author} />
          <DetailComment info={info} />
        </div >
        <div className="content-left detail-recommond">
          <span className="recommend-title">相关推荐</span>
          <Divider />
            {
              lists.length <= 0 ? <Empty description='暂无数据' /> : 
              lists.map((value: any, index: any) => <FirstList value={value} key={index} />)
            }
        </div>
    </Fragment>)
})
