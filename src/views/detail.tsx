import { Layout } from 'antd';
import React, { memo } from 'react';
import DetailArticle from '../components/detail/detailArticle'
import DetailNav from '../components/detail/detailNav.jsx'
import EvaluationColumn from '../components/detail/evaluationColumn'
import { Row, Col } from 'antd'
import '../scss/detail.scss'

const { Content } = Layout

export default memo(function Detail() {

  const info = {
    name: 'woziji',
    img: '',
    time: 5678900876,
    level: 'Lv3',
    read: 233,
    like: 567,
    count: 66,
    commond: 567,
    label: '',
    article: '# p01:课程介绍和环境搭建\n' +
      '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
      '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
      '**这是加粗的文字**\n\n' +
      '· zheshilibiaoqian\n\n'+
      '*这是倾斜的文字*`\n\n' +
      '***这是斜体加粗的文字***\n\n' +
      '~~这是加删除线的文字~~ \n\n' +
      '\`console.log(111)\` \n\n' +
      '# p02:来个Hello World 初始Vue3.0\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n' +
      '***\n\n\n' +
      '# p03:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n' +
      '# p04:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n' +
      '#5 p05:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n' +
      '# p06:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n' +
      '# p07:Vue3.0基础知识讲解\n' +
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n\n' +
      '```import { PreviewLayout } from "react-code-previewer";```'
  }

  return (
    <Content>
      <div className="container detail">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Col xs={0} sm={0} md={0} lg={1} xl={1}>
              <EvaluationColumn info={info} />
            </Col>
            <DetailArticle info={info} />
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <DetailNav info={info} />
          </Col>
        </Row>
      </div>
    </Content>
  )
})
