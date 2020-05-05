import React from "react";
import { Tabs, Empty } from "antd";
import "./index.scss";
import FirstList from "./firstList";
import { useHistory, useLocation } from "react-router-dom";
import { articleListAPI } from "../../common/api";

const { TabPane } = Tabs;

const ContentLeft = ({ lists }: any) => {

  let history = useHistory();
  let location = useLocation();
  const handleSort = (key: any) => {
    history.push(location.pathname + "?sort=" + key);
  };

  const nav = [
    { label: "热门", key: "hot" },
    { label: "最新", key: "new" },
  ];

  return (
    <div className="content-left">
      {
        <Tabs defaultActiveKey="hot" onChange={handleSort} animated={false}>
          {nav.map((item) => {
            return (
              <TabPane tab={item.label} key={item.key}>
                {
                  lists.length <= 0 ? <Empty description='暂无数据' /> : 
                  lists.map((value: any, index: any) => <FirstList value={value} />)
                }
              </TabPane>
            );
          })}
        </Tabs>
      }
    </div>
  );
};

export default ContentLeft;
