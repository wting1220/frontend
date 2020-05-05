import React, { useState } from "react";
import { Radio } from "antd";
import "./index.scss";
import { TagsListProps } from "../../common/interface";
import { useHistory, useParams } from "react-router";
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'

const TagsList = ({ tags, current }: TagsListProps) => {
  let history = useHistory();
  let { child } = useParams<any>()
  // 展开与折叠
  const [showAll, setShowAll] = useState<boolean>(false)

  const handleChildTags = (e: any, p: string) => {
    history.push(p + "/" + e.target.value);
  };

  return tags.map((value: any) => {
    return (
      value.label !== "recommend" &&
      value.label === current &&
      value.child.length > 0 && (
        <div className="tags-radio" key={value}>
          <Radio.Group
            defaultValue={child || 'all'}
            buttonStyle="solid"
            onChange={(e) => handleChildTags(e, value.label)}
          >
            <Radio.Button value="all">全部</Radio.Button>
            {value.child.length <= 10 || showAll ?
              value.child.map((val: any) => (
                <Radio.Button value={val} key={val}>
                  {val}
                </Radio.Button>
              )) :
              value.child.slice(0, 10).map((val: any) => (
                <Radio.Button value={val} key={val}>
                  {val}
                </Radio.Button>
              ))}
            <span className='cur omit'>
              {!showAll ?
                <span onClick={() => setShowAll(true)}>展开<CaretDownOutlined /></span> :
                <span onClick={() => setShowAll(false)}>折叠<CaretUpOutlined /></span>
              }
            </span>
          </Radio.Group>
        </div>
      )
    );
  });
};

export default TagsList;
