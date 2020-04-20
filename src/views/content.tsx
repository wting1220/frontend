import { Layout, Row, Col } from 'antd';
import React, { useState, memo, useEffect } from 'react';
import ContentLeft from '../components/content/contentLeft'
import ContentRight from '../components/content/contentRight'
import TagsList from '../components/tagsList/tagsList'
import Tags from '../components/tagsList/tags'
import '../scss/content.scss'
import { useHistory } from 'react-router';
import {withRouter} from 'react-router-dom'
const { Content } = Layout;

export default memo(withRouter(function MainContent(props) {

  const [current, setCurrent] = useState<string>('')
  const [tags, setTags] = useState<any>([])
  const main_tags = [
    { key: 'recommend', title: '推荐' },
    { key: 'frontend', title: '前端', child: [{ key: '8', title: '前端' }, { key: '9', title: 'javascript' }, { key: '10', title: 'python' }, { key: '11', title: '后端' }, { key: '12', title: 'es6' }, { key: '13', title: 'react' }, { key: '14', title: 'vue' }, { key: '15', title: '前端' }, { key: '16', title: 'javascript' }, { key: '17', title: 'python' }] },
    { key: 'server', title: '后端', child: [{ key: '18', title: '前端' }, { key: '19', title: 'javascript' }, { key: '20', title: 'python' }, { key: '21', title: '前端' }, { key: '22', title: 'javascript' }, { key: '23', title: 'python' }, { key: '24', title: '前端' }, { key: '25', title: 'javascript' }, { key: '26', title: 'python' },] },
    { key: 'ES6', title: 'ES6', child: [{ key: '32', title: '前端' }, { key: '31', title: 'javascript' }, { key: '30', title: 'python' }, { key: '29', title: '前端' }, { key: '28', title: 'javascript' }, { key: '27', title: 'python' },] },
    { key: 'Python', title: 'Python', child: [{ key: '33', title: '前端' }, { key: '37', title: 'javascript' }, { key: '41', title: 'python' }, { key: '45', title: '前端' }, { key: '47', title: 'javascript' }, { key: '49', title: 'python' }, { key: '51', title: '前端' }, { key: '53', title: 'javascript' }, { key: '55', title: 'python' }, { key: '57', title: '前端' }, { key: '59', title: 'javascript' }, { key: '61', title: 'python' },] },
    { key: 'Java', title: 'Java', child: [{ key: '34', title: '前端' }, { key: '38', title: 'javascript' }, { key: '42', title: 'python' }, { key: '46', title: '前端' }, { key: '48', title: 'javascript' }, { key: '50', title: 'python' }, { key: '52', title: '前端' }, { key: '54', title: 'javascript' }, { key: '56', title: 'python' }, { key: '58', title: '前端' }, { key: '60', title: 'javascript' }] },
    { key: '我的', title: '我的', child: [{ key: '35', title: '前端' }, { key: '39', title: 'javascript' }, { key: '43', title: 'python' },] },
    { key: '你的', title: '你的', child: [{ key: '36', title: '前端' }, { key: '40', title: 'javascript' }, { key: '44', title: 'python' },] },
  ]

  let history = useHistory()
  const handleCurrent = (e: any) => {
    setCurrent(e.key)
    history.push(`/welcome/${e.key}`)
  }

  useEffect(() => {
    setTags(main_tags)
    setCurrent('recommend')
  }, [])

  return (
    <Content>
      <Tags current={current} oncurrent={handleCurrent} tags={tags} />
      <div className="tags-container">
        <TagsList tags={tags} current={current} />
        <div className="container">
          <Row gutter={20}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}><ContentLeft /></Col>
            <Col xs={0} sm={0} md={6} lg={6} xl={6}><ContentRight /></Col>
          </Row>
        </div>
      </div>
    </Content>
  )
}))
