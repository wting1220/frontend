import React, { memo } from 'react'
import { StopOutlined } from '@ant-design/icons'
import { Avatar, Input } from 'antd'

const { Search } = Input

export default memo(function TopicMenuLists({ data, setVisible, setTheme }: any) {

  const handleSearchInp = (e: any) => {
    // setTheme()
  }

  const onClick = (name:any) => {
    setVisible(false)
    setTheme(name || '')
  }

  return (
    <div className='topic-list'>
      <Search
        placeholder="input search text"
        onChange={handleSearchInp}
        style={{ width: 276 }}
      />
      <ul>
        <li onClick={() => onClick} className='cur'>
          <div className='list-border'>
            <Avatar shape="square" size={42} icon={<StopOutlined />} />
            <div>
              <div className='topic-name'>不添加任何话题</div>
            </div>
          </div>
        </li>
        {
          data.map((item: any) => {
            return <li className='cur' key={item._id} onClick={() => onClick(item.name)} >
              <div className='list-border'>
                <Avatar shape="square" size={42} src={`http://localhost:3000${item.img}`} />
                <div>
                  <div className='topic-name'>{item.name}</div>
                  <div className='topic-detail'>{item.attention} 关注 · {item.topic} 沸点</div>
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
})