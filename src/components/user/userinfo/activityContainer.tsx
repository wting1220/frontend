import React, { memo, useState, useEffect } from "react";
import { Avatar, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TopicShow from "../../topic/topicShow";
import { userTagsShow } from "../../../common/commen";
import { secondMenu } from "../../../common/variable";
import { useLocation, useHistory } from "react-router";

export default memo(function ActivityContainer({ nav }: any) {
  const [shareMenu, setShareMenu] = useState<string>(""); // 二级菜单栏绑定

  const lists = [
    {
      id: 1,
      name: "我自己",
      time: "567890",
      label: "web前端",
      count: 56,
      level: "Lv3",
      content:
        "程序员如何避免入狱开发？除了黄赌毒，还有什么类型的项目是不能做的？我只知道黄赌毒这种网页小程序不能开发,请问还有什么是不能接触的？程序员怎么避免公司的擦边球项目？哪些种类相关的项目会有擦边球的风险？ 像金融贷款平台、比特币、贷款超市、小额贷平台这类算违法吗？公司让我开发这种平台的网页会被连做责任吗？",
    },
  ];

  let history = useHistory();
  let location = useLocation();

  // 监听二级菜单
  const handleShareMenu = ({ key }: any) => {
    setShareMenu(key);
    history.push(location.pathname + "?" + key);
  };

  // 监听变化
  useEffect(() => {
    switch (nav) {
      case "share":
        setShareMenu("hot");
        break;
      case "like":
        setShareMenu("article");
        break;
      case "collection":
        setShareMenu("create");
        break;
      case "attention":
        setShareMenu("follow");
        break;
      default:
        break;
    }
  }, [nav]);

  return (
    <div className="activity-container">
      {["activity", "share", "like", "collection", "attention"].includes(
        nav
      ) && (
        <div className="activity-container-title">
          {secondMenu.map((item: any) => {
            return item.key === nav ? (
              <>
                <div>
                  <span className="title-left">{item.label} </span>
                  {nav === "activity" && <span>赞了这篇文章</span>}
                </div>
                <div>
                  <Menu
                    onClick={handleShareMenu}
                    selectedKeys={[shareMenu]}
                    mode="horizontal"
                  >
                    {item.child &&
                      item.child.map((child: any) => (
                        <Menu.Item key={child.key}>{child.label}</Menu.Item>
                      ))}
                  </Menu>
                </div>
              </>
            ) : null;
          })}
        </div>
      )}
      <ul>
        {["activity", "topic", "like", "collection"].includes(nav)
          ? lists.map((item) => {
              return (
                <li key={item.id} className="activity-container-topic">
                  <TopicShow item={item} />
                </li>
              );
            })
          : null}
        <li className="activity-container-attention">
          <div>
            <Avatar size={45} icon={<UserOutlined />} />
          </div>
          <div className="activity-attention-msg">
            <span className="name">可爱鬼</span>
            <span className="default">关注了</span>
            <span className="name">前端劝退师</span>
          </div>
        </li>
        {nav === "attention" &&
          lists.map((item: any) => userTagsShow(item, "user"))}
      </ul>
    </div>
  );
});
