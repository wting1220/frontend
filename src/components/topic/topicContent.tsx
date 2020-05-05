import React, { memo, useState, useEffect } from 'react'
import TopicAdd from './topicAdd'
import TopicShow from './topicShow'
import { Menu, message, Empty } from 'antd'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { topicListAPI, getThemeAPI } from '../../common/api.js'

export default memo(function TopicContent() {

  let history = useHistory()
  let location = useLocation()
  let { tid } = useParams()
  const sort = location.search && location.search.split('?')[1].split('=')[1]
  const [nav, setNav] = useState<string>(sort || 'hot')
  const [lists, setLists] = useState<any>([])
  const [theme, setTheme] = useState<string>('')
  const type=location.pathname.split('/')[1] 
  useEffect(() => { 
    if (type === 'theme') { 
      getThemeAPI({ tid }).then(data => {
        setTheme(data.data.name)
        getTopicList(data.data.name)
      })
    }
  }, [])

  useEffect(() => { 
    getTopicList(theme)
  }, [nav])


  const handleNav = (e:any) => {
    setNav(e.key)
    history.push(location.pathname + '?sort=' + e.key)
  }

  return (
    <div className='topic-content'>
      <ul>
        <li><TopicAdd theme={theme} setTheme={setTheme} getTopicList={getTopicList} /></li>
        {type === 'theme' ? <li className='content-li'>
          <Menu selectedKeys={[nav]} onClick={handleNav}>
            <Menu.Item key='hot'>热门</Menu.Item>
            <Menu.Item key='new'>最新</Menu.Item>
          </Menu>
        </li> : null}
        {
          lists.length <= 0 ? <Empty style={{background:'white',margin:0}} description='暂无相关数据' /> :
          lists.map((item:any) => {
            return <li key={item._id} className='content-li'><TopicShow item={item} /></li>
          })
        }
        
      </ul>
    </div>
  )

  function getTopicList(theme: any) {
    setLists(lists.splice(0, lists.length))
    if (type === 'theme') {
      topicListAPI({ theme, sort: nav }).then(data => {
        if (data.err === null) {
          setLists(lists.concat(data.data))
        } else {
          message.warn(data.msg)
        }
      })
    } else { 
      topicListAPI().then(data => {
      if (data.err === null) {
        setLists(lists.concat(data.data))
      } else { 
        message.warn(data.msg)
      }
    })
    }
  }
})