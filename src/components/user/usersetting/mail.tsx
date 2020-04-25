import React, { memo } from "react";
import { Radio } from "antd";

export default memo(function Mail() {

  return (
    <div className="setting-mail">
      <h1 className="title">邮件设置</h1>
      <ul>
        <li>
          <div className='desc'>周报 - 根据你的口味，每周精选5篇文章</div>
          <div>
            <Radio.Group defaultValue={true}>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </div>
        </li>
        <li>
          <div className='desc'>关注邮件提醒 - 有人关注你后会收到邮件提醒</div>
          <div>
            <Radio.Group defaultValue={true}>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </div>
        </li>
        <li>
          <div className='desc'>关注人发布新文章 - 你关注的人发布新文章后会用邮件通知你</div>
          <div>
            <Radio.Group defaultValue={true}>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </div>
        </li>
      </ul>
    </div>
  );
});
