import React, { useState, useEffect } from 'react'
import { Divider, Tooltip, Empty } from 'antd'
import { HeartOutlined, MessageOutlined, ShareAltOutlined, HeartFilled } from '@ant-design/icons'
import { FirstListProps } from '../../common/interface'
import { useHistory } from 'react-router'
import { likeAPI } from '../../common/api.js'
import { userText } from '../../common/commen'
import photo from '../../assets/4da52382276a71cebd0b922c535ab7ce.jpg'
import moment from 'moment'
import { useSelector } from 'react-redux'

const FirstList = ({ value }: FirstListProps) => {

  const uid = useSelector((state: any) => state.userID)
  const [likeUtil, setLikeUtil] = useState<any>(value.likes && value.likes.lists && value.likes.lists.includes(uid))
  const [likeCount, setLikeCount] = useState<number>(value.likes && value.likes.lists ? value.likes.lists.length : 0)
  let history = useHistory()
  const gotoDetail = (aid:any) => {
    history.push(`/detail/${aid}`)
  }

  return (
    <div>
      <div className="list-content">
        <div className="item-left">
          <div className="info">
            <ul>
              <li className="item cur">专栏</li>
              <li className="item cur hov">
                <Tooltip placement='top' title={userText(value.author)} getPopupContainer={node => node}>{value.author && value.author.username}</Tooltip>
            </li>
            <li className="item">
              {moment(+value.publish_time).fromNow()}
            </li>
              <li className="cur hov">{value.label}</li>
            </ul>
        </div>
        <div className="title" onClick={() => gotoDetail(value._id)}>
            <h2 className="cur">{value.title}</h2>
          </div>
          <div className="comment">
          <ul>
            <li onClick={() => like(value._id)} className="cur">{likeUtil ? <HeartFilled style={{color:'plum'}} /> : <HeartOutlined />}{likeCount}</li>
            <li className="cur"><MessageOutlined />{0}</li>
            <li className="cur"><ShareAltOutlined /></li>
            </ul>
          </div>
        </div>
        <div className="item-right">
          <img src={photo} alt='' />
        </div>
      </div>
      <Divider />
    </div>
  )

  function like(aid:any) {
    setLikeUtil(!likeUtil)
    likeAPI({ uid, aid }).then((data) => { 
      if (data.err === null) { 
        setLikeCount(data.count)
      }
    })
  }
}

export default FirstList;