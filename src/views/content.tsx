import { Layout, Row, Col, message } from "antd";
import React, { useState, memo, useEffect } from "react";
import ContentLeft from "../components/content/contentLeft";
import ContentRight from "../components/content/contentRight";
import TagsList from "../components/tagsList/tagsList";
import Tags from "../components/tagsList/tags";
import "../scss/content.scss";
import { useHistory, useParams } from "react-router";
import { withRouter } from "react-router-dom";
import { tagsListAPI } from "../common/api.js";

const { Content } = Layout;

export default memo(
  withRouter(function MainContent(props) {
    const [current, setCurrent] = useState<string>("");
    const [tags, setTags] = useState<any>([{ label: "推荐" }]);
    let history = useHistory();
    let { label } = useParams<any>();

    const handleCurrent = (e: any) => {
      setCurrent(e.key);
      history.push(`/welcome/${e.key}`);
    };

    useEffect(() => {
      getTags();
      setCurrent(label || "recommend");
    }, []);

    return (
      <Content>
        <Tags current={current} oncurrent={handleCurrent} tags={tags} />
        <div className="tags-container">
          <TagsList tags={tags} current={current} />
          <div className="container">
            <Row gutter={20}>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <ContentLeft />
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <ContentRight />
              </Col>
            </Row>
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
  })
);
