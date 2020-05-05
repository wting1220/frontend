import React, { memo, Fragment, useEffect, useState } from 'react'
import { Empty } from 'antd'
import Tags from '../components/tagsList/tags'
import '../scss/message.scss'
import { useHistory, withRouter } from 'react-router'

export default memo(withRouter(function Message(props: any) {

  const [current, setCurrent] = useState<string>('')
  const [tags, setTags] = useState<any>([])
  const personTags = [
    { label: '用户信息' },
    { label: '系统信息' },
  ]
  let history = useHistory()
  const handleCurrent = (e: any) => {
    setCurrent(e.key)
    history.push(`/message/${e.key}`)
  }

  useEffect(() => {
    setTags(personTags)
    setCurrent('personal')
  }, [])

  return (
    <Fragment>
      <Tags current={current} oncurrent={handleCurrent} tags={tags} />
      <div className='message'>
        <div className='message-content'>
          <Empty description='暂无新消息' />
        </div>
      </div>
    </Fragment>
  )
}))

