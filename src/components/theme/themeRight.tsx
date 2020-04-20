import React, { memo } from 'react'
import photo from '../../assets/7861317844743727fff486bdaabeba2b.jpg'
import './index.scss'
import ThemeUser from './themeUser'
import { Button } from 'antd'

export default memo(function ThemeRight() {

  return (
    <div className='theme-right'>
      <div className='theme-info'>
        <div className='info-top'><span style={{backgroundImage:`url(${photo})`}}></span></div>
        <div className='info-center'>
          <div className='center-icon'><span style={{backgroundImage:`url(${photo})`}}></span></div>
          <div className='center-title'>浑水摸鱼</div>
          <Button>关注</Button>
          <div className='center-describe'>
            <div>话题介绍:</div>
            <span>来分享下你上班看到的好东西吧~</span>
          </div>
        </div>
        <ul className='info-bottom'>
            <li>
              <div>3456</div>
              <span>沸点</span>
            </li>
            <li>
              <div>3456</div>
              <span>关注</span>
            </li>
        </ul>
      </div>
      <ThemeUser />
    </div>
  )
})