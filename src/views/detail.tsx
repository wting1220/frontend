import { Layout, message, Spin } from 'antd';
import React, { memo, useState, useEffect } from 'react';
import DetailArticle from '../components/detail/detailArticle'
import DetailNav from '../components/detail/detailNav.jsx'
import EvaluationColumn from '../components/detail/evaluationColumn'
import { articleDetailAPI } from '../common/api.js'
import { Row, Col } from 'antd'
import '../scss/detail.scss'
import { useParams } from 'react-router';

const { Content } = Layout

export default memo(function Detail() {

  const [articleInfo, setArticleInfo] = useState<any>(null)
  const [spinning, setSpinning] = useState<boolean>(true)
  let { aid } = useParams()
  
  useEffect(() => { 
    getArticleInfo()
  }, [])

  return (
    <Content>
      <div className="container detail">
        {spinning ? <Spin tip="正在加载数据..." /> : <Row gutter={20}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Col xs={0} sm={0} md={0} lg={1} xl={1}>
              <EvaluationColumn info={articleInfo} />
            </Col>
            <DetailArticle info={articleInfo} />
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <DetailNav info={articleInfo} />
          </Col>
        </Row>}
      </div>
    </Content>
  )

  function getArticleInfo() {
    articleDetailAPI({ aid }).then(data => { 
      setSpinning(false)
      if (data.err === null) {
        setArticleInfo(data.data)
      } else { 
        message.warn(data.msg)
      }
    })
  }
})
