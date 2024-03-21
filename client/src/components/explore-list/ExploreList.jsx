import React from "react";
import ExploreItem from "../explore-item/ExploreItem";
import { Link } from "react-router-dom";
import "./ExploreList.css";

const ExploreList = ({ data }) => {
  const exploreItems = data.map((item) => {
    return (
      <ExploreItem
        id={item.id}
        pfp={item.pfp}
        username={item.username}
        pic={item.pic}
        title={item.title}
        desc={item.desc}
      />
    );
  });

  return <div class="explore-list-container">{exploreItems}</div>;
};

export default ExploreList;
