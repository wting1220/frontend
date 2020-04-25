import React, { memo, useState, useEffect } from "react";
import "../scss/article.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Input, Dropdown, Button, Menu, Upload, message } from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import User from "../components/header/user";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { tagsListAPI, publishArticleAPI } from "../common/api.js";

export default memo(function Article() {
  let history = useHistory();
  // 改变icon
  const [downIcon, setDownIcon] = useState<boolean>(true);
  // 改变下拉菜单显示与隐藏
  const [visible, setVisible] = useState<boolean>(false);
  // 子标签显隐
  const [childVisible, setChildVisible] = useState<boolean>(false);
  // 父标签nav
  const [label, setLabel] = useState<string>("");
  // 子标签nav
  const [child, setChild] = useState<string>("");
  // 标题
  const [title, setTitle] = useState<string>("");
  // 文章内容
  const [content, setContent] = useState<string>("");
  const mdParser = new MarkdownIt();
  // 获取redux中的用户id
  const uid = useSelector((state: any) => state.userID);
  // 存储label信息
  const [labels, setLabels] = useState<any>([]);
  useEffect(() => {
    getLabel();
  }, []);
  // 下拉选择标签
  const menu = (
    <div className="drop-menu">
      <h2>发布文章</h2>
      <div className="type-box">
        <p>分类</p>
        <Menu mode="horizontal" onClick={handleLabel} selectedKeys={[label]}>
          {labels &&
            labels.map((item: any) => (
              <Menu.Item key={item.label}>{item.label}</Menu.Item>
            ))}
        </Menu>
      </div>
      {childVisible && (
        <div className="label-box">
          <p>标签</p>
          <Menu mode="horizontal" onClick={handleChild} selectedKeys={[child]}>
            {labels &&
              labels.map(
                (item: any) =>
                  label === item.label &&
                  item.child.map((child: any) => (
                    <Menu.Item key={child}>{child}</Menu.Item>
                  ))
              )}
          </Menu>
        </div>
      )}
      <div className="btn">
        <Button onClick={publish}>确定并发布文章</Button>
      </div>
    </div>
  );

  return (
    <div className="article">
      <header className="title">
        <h1>
          <Input onChange={handleTitle} placeholder="请输入文章标题" />
        </h1>
        <div className="navbar">
          <Upload>
            <PictureOutlined className="cur" />
          </Upload>
          <Dropdown
            overlay={menu}
            visible={visible}
            getPopupContainer={(node: any) => node.parentNode}
            onVisibleChange={handleVisible}
          >
            <span className="publish cur">
              发布
              {downIcon ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </span>
          </Dropdown>
          <User handleNav={handleNav} />
        </div>
      </header>
      <div className="content">
        <MdEditor
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );

  // 发表文章
  function publish() {
    setVisible(false);
    publishArticleAPI({
      uid,
      title,
      content,
      label,
      child,
    }).then((data) => {
      data.err === null ? message.success(data.msg) : message.warn(data.msg);
    });
  }

  // 监听下拉菜单显示
  function handleVisible() {
    setDownIcon(!downIcon);
    setVisible(!visible);
  }

  // 导航栏菜单点击事件
  function handleNav(key: any) {
    switch (key.key) {
      case "article":
        history.replace("/welcome");
        break;
      case "user":
        history.push(`/user/${uid}`);
        break;
      case "collection":
        history.push(`/user/${uid}/collection`);
        break;
      case "like":
        history.push(`/user/${uid}/like`);
        break;
      default:
        history.push("/" + key.key);
        break;
    }
  }

  // 父标签点击
  function handleLabel({ key }: any) {
    setLabel(key);
    setVisible(true);
    setChildVisible(true);
  }

  // 子标签点击事件
  function handleChild({ key }: any) {
    setVisible(true);
    setChild(key);
  }

  // 监听input标题
  function handleTitle({ target }: any) {
    setTitle(target.value);
  }

  // 监听markdown输出
  function handleEditorChange({ html }: any) {
    setContent(html);
  }

  // 获取标签
  function getLabel() {
    tagsListAPI().then((data) => {
      setLabels(data.data);
    });
  }
});
