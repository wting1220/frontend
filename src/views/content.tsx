import { Layout, Row, Col, message, Spin } from "antd";
import React, { useState, memo, useEffect, useLayoutEffect } from "react";
import ContentLeft from "../components/content/contentLeft";
import ContentRight from "../components/content/contentRight";
import TagsList from "../components/tagsList/tagsList";
import Tags from "../components/tagsList/tags";
import "../scss/content.scss";
import { useHistory, useParams, useLocation } from "react-router";
import { withRouter } from "react-router-dom";
import { tagsListAPI, articleListAPI } from "../common/api.js";

const { Content } = Layout;

export default memo(
  withRouter(function MainContent(props) {
    const [current, setCurrent] = useState<string>("");
    const [tags, setTags] = useState<any>([{ label: "推荐" }]);
    const [lists, setLists] = useState<any>([]);
    const [spinning, setSpinning] = useState<boolean>(true)
    let history = useHistory();
    let location = useLocation()
    let { label, child } = useParams<any>();

    const handleCurrent = (e: any) => {
      setCurrent(e.key);
      history.push(`/welcome/${e.key}`);
    };

    useEffect(() => {
      getArticleList()
    }, [location.pathname])

    useEffect(() => {
      getTags();
      setCurrent(label || "recommond");
      getArticleList()
    }, []);

    return (
      <Content>
        <Tags current={current} oncurrent={handleCurrent} tags={tags} />
        <div className="tags-container">
          <TagsList tags={tags} current={current} />
          <div className="container">
            {spinning ? <Spin tip="正在加载数据..." /> :
              <Row gutter={20}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                  <ContentLeft lists={lists} />
                </Col>
                <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                  <ContentRight />
                </Col>
              </Row>}
          </div>
        </div>
      </Content>
    );

    // 获取标签
    function getTags() {
      tagsListAPI().then((data) => {
        data.err === null
          ? setTags(tags.concat(data.data))
          : message.warn(data.msg);
      });
    }
    // 获取文章列表
    function getArticleList() { 
      articleListAPI({
        label: label === 'recommond' ? '' : label,
        child,
      }).then(data => {
        setSpinning(false)
        if (data.err === null) {
          if (data.data) {
            setLists(data.data)
          } else { 
            message.warn('暂无数据');
            setLists([])
          }
        } else { 
          message.warn(data.msg)
        }  
      })
    }
  })
);
