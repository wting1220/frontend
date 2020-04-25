import React from "react";
import { Radio } from "antd";
import "./index.scss";
import { TagsListProps } from "../../common/interface";
import { useHistory, useParams } from "react-router";

const TagsList = ({ tags, current }: TagsListProps) => {
  let history = useHistory();
  let { child } = useParams<any>()

  const handleChildTags = (e: any, p: string) => {
    history.push(p + "/" + e.target.value);
  };

  return tags.map((value: any) => {
    return (
      value.label !== "recommend" &&
      value.label === current && 
      value.child.length > 0 && (
        <div className="tags-radio">
          <Radio.Group
            defaultValue={child || 'all'}
            buttonStyle="solid"
            onChange={(e) => handleChildTags(e, value.label)}
          >
            <Radio.Button value="all">全部</Radio.Button>
            {value.child.map((val: any) => (
              <Radio.Button value={val} key={val}>
                {val}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
      )
    );
  });
};

export default TagsList;
