import React, { memo, useState, useEffect } from 'react'
import photo from '../../assets/7861317844743727fff486bdaabeba2b.jpg'
import './index.scss'
import ThemeUser from './themeUser'
import { getThemeAPI } from '../../common/api.js'
import { Button, message } from 'antd'
import { useParams } from 'react-router'
import { idea } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default memo(function ThemeRight() {

  // 获取url中的id值
  let { tid } = useParams()
  // 话题详细信息
  let [themeInfo, setThemeInfo] = useState<any>({})

  useEffect(() => { 
    getThemeInfo()
  }, [])

  return (
    <div className='theme-right'>
      <div className='theme-info'>
        <div className='info-top'><span style={{backgroundImage:`url(http://localhost:3000${themeInfo.img})`}}></span></div>
        <div className='info-center'>
          <div className='center-icon'><span style={{backgroundImage:`url(http://localhost:3000${themeInfo.img})`}}></span></div>
          <div className='center-title'>{themeInfo.name}</div>
          <Button>关注</Button>
          <div className='center-describe'>
            <div>话题介绍:</div>
            <span>{themeInfo.info || '暂无'}</span>
          </div>
        </div>
        <ul className='info-bottom'>
            <li>
            <div>{themeInfo.topic}</div>
              <span>沸点</span>
            </li>
            <li>
            <div>{themeInfo.attention}</div>
              <span>关注</span>
            </li>
        </ul>
      </div>
      <ThemeUser />
    </div>
  )

  // 获取当前话题信息
  function getThemeInfo() {
    getThemeAPI({ tid }).then(data => {
      if (data.err === null) {
        setThemeInfo(data.data)
      } else { 
        message.warn(data.msg)
      }    
    })
  }
})