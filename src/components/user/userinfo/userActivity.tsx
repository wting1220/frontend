import React, { memo, useEffect, useState } from "react";
import { Tabs } from "antd";
import { tabPane } from "../../../common/variable";
import ActivityContainer from "./activityContainer";
import { useHistory, useParams } from "react-router";

const { TabPane } = Tabs;

export default memo(function UserActivity({ userInfo }: any) {

  let history = useHistory();
  let { type } = useParams<any>();
  const [nav, setNav] = useState<string>(type);

  const tabInfo = {
    like: 3,
    collection: 4,
    share: 4,
    attention: 7,
  };

  // 根据路由判断刚进入页面时展开的菜单栏
  useEffect(() => {
    setNav(type);
  }, []);

  return (
    <div className="user-detail-content">
      <Tabs
        defaultActiveKey={nav}
        onChange={handleTabs}
        animated={false}
        size="large"
      >
        {tabPane(tabInfo).map((item: any) => {
          return (
            <TabPane tab={<span>{item.tab}</span>} key={item.key}>
              <ActivityContainer nav={nav} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );

  // 监听菜单栏变化
  function handleTabs(activeKey: any) {
    setNav(activeKey);
    history.push(`/user/${userInfo._id}/${activeKey}`);
  };
});
