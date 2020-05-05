import React, { memo, useState, useEffect } from 'react'
import { Avatar, message } from 'antd'
import photo from '../../assets/1.jpg'
import { useHistory } from 'react-router'
import { ThemeListAPI } from '../../common/api.js'
import { resolveSoa } from 'dns'

export default memo(function ThemeList() {

  const [resData, setResData] = useState<any>([])
  let history = useHistory()

  useEffect(() => {
    getThemeList()
  }, [])

  return (
    <div className='theme-list'>
      <h2 className='title'>全部话题</h2>
      <ul className='theme-lists'>
        {
          resData.length > 0 && resData.map((item: any) => (
            <li onClick={() => history.push(`/theme/${item._id}`)} key={item._id}>
                <div className='cur'>
                  <Avatar shape="square" size={72} src={`http://localhost:3000${item.img}`} />
                </div>
                <div className='li-right'>
                  <span className='topic-name cur'>{item.name}</span>
                  <span className='topic-detail'>{item.attention}关注 · {item.topic}沸点</span>
                  <span className='topic-btn cur'> + 关注</span>
                </div>
              </li>
            )
          )
        }
      </ul>
    </div>
  )

  function getThemeList() {
    ThemeListAPI().then(data => { 
      if (data.err === null) {
        setResData(resData.concat(data.data))
      } else { 
        message.warn(data.msg)
      }
    })
  }
})