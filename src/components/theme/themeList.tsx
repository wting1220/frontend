import React, { memo, useState, useEffect } from 'react'
import { Avatar } from 'antd'
import photo from '../../assets/1.jpg'
import { useHistory } from 'react-router'

export default memo(function ThemeList() {

  const [resData, setResData] = useState<any>([])
  let history = useHistory()

  useEffect(() => {
    setResData([
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
      { title: '我自己', attentions: 43, topic: 45 },
    ])
  }, [])

  return (
    <div className='theme-list'>
      <h2 className='title'>全部话题</h2>
      <ul className='theme-lists'>
        {
          resData.map((item: any) => {
            return (
              <li onClick={() => history.push(`/theme/1`)}>
                <div className='cur'>
                  <Avatar shape="square" size={72} src={photo} />
                </div>
                <div className='li-right'>
                  <span className='topic-name cur'>{item.title}</span>
                  <span className='topic-detail'>{item.attentions}关注 · {item.topic}沸点</span>
                  <span className='topic-btn cur'> + 关注</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})