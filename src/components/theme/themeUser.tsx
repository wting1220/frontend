import React, { memo, useState, useEffect } from 'react'
import { Tooltip, Avatar, Drawer, message } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { userText, userTagsShow } from '../../common/commen'
import { useHistory } from 'react-router'

export default memo(function ThemeUser() {

  const [visible, setVisible] = useState<boolean>(false)
  const [list, setList] = useState<any>([])
  useEffect(() => {
    setList(['太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意', '太虚剑意'])
  }, [])

  const value = {
    name: 'ni',
    level: 'Lv4',
    count: 5,
  }
  let history = useHistory()
  const gotoUserInfo = () => {
    history.push('/user/i')
  }

  return (
    <div className='theme-user'>
      <div className='title'>
        <div>共有6789人参加</div>
        <span onClick={() => {setVisible(true)}} className='cur'>全部 <RightOutlined /></span>
      </div>
      <ul className='user'>
        {
          list.map((item:any) => {
            return <li className='cur' onClick={gotoUserInfo} key={item}><Tooltip placement='top' title={userText(value)} getPopupContainer={(node: any) => node}>
              <div><Avatar size={46} /></div>
          <span>{item}</span>
            </Tooltip></li>
          })
        }
      </ul>
      <Drawer
          placement="right"
          onClose={() => setVisible(false)}
          visible={visible}
          
        >
          <div className='titleName'>参与话题的人</div>
          <ul>
            {list.map(() => userTagsShow(value, 'user'))}
          </ul>
        </Drawer>
    </div>
  )
})