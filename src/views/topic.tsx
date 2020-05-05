import React, { memo, Fragment, useState, useEffect } from 'react';
import { Row, Col, Affix } from 'antd'
import TopicNav from '../components/topic/topicNav'
import TopicContent from '../components/topic/topicContent'
import TopicRight from '../components/topic/topicRight'
import Tags from '../components/tagsList/tags'
import { getThemeAPI } from '../common/api';
import { useParams, useLocation } from 'react-router';

export default memo(function Topic() {

  const [current, setCurrent] = useState<string>('recommond')
  const [tagShow, setTagShow] = useState<boolean>(false)

  const topicNav = [
    { key: 'recommond', title: '推荐' },
    { key: 'hot', title: '热门' },
    { key: 'attention', title: '关注' },
    { key: 'opensource', title: '开源推荐' },
    { key: 'interpolate', title: '内推招聘' },
    { key: 'workfish', title: '上班摸鱼' },
    { key: 'app', title: '应用安利' },
    { key: 'newnews', title: 'new 咨询' }
  ]

  const handleCurrent = (e: any) => {
    setCurrent(e.key)
  }

  useEffect(() => {
    screenChange()
  }, [])

  const screenChange = () => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 1200 ? setTagShow(true) : setTagShow(false)
    })
}
  return (
    <Fragment>
      
      { tagShow && <Tags tags={topicNav} current={current} oncurrent={handleCurrent} />}
      <div className='topic'>
        <Row gutter={20}>
          <Col xs={0} sm={0} md={0} lg={0} xl={4}><Affix offsetTop={79}><TopicNav topicNav={topicNav} /></Affix></Col>
          <Col xs={0} sm={0} md={17} lg={17} xl={14}><TopicContent /></Col>
          <Col xs={0} sm={0} md={7} lg={7} xl={6}><TopicRight /></Col>
        </Row>
      </div>
    </Fragment>
  )
})
