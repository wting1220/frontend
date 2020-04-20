import React, { memo } from 'react'
import { StopOutlined } from '@ant-design/icons'
import { Avatar, Input } from 'antd'

const { Search } = Input

export default memo(function TopicMenuLists({ data, setVisible }: any) {

  const handleSearchInp = (e: any) => {
    console.log(e.target.value)
  }

  const onClick = (e:any) => {
    console.log(e)
    setVisible(false)
  }

  return (
    <div className='topic-list'>
      <Search
        placeholder="input search text"
        onChange={handleSearchInp}
        style={{ width: 276 }}
      />
      <ul>
        {
          data.map((item: any) => {
            return (
              <li key={item.id} onClick={onClick} className='cur'>
                {item.name === '不添加任何话题' ? <div className='list-border'>
                  <Avatar shape="square" size={42} icon={<StopOutlined />} />
                  <div>
                    <div className='topic-name'>不添加任何话题</div>
                  </div>
                </div> : <div className='list-border'><Avatar shape="square" size={42} />
                    <div>
                      <div className='topic-name'>{item.name}</div>
                      <div className='topic-detail'>{item.attention} 关注 · {item.topic} 沸点</div>
                    </div></div>}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})