import React from "react";
import SingleStory from "./SingleStory";

import {useGlobalContext} from "./context";

const Stories = () => {
  const {isLoading, hits} = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const {objectID: id} = story;
        return <SingleStory key={id} {...story} />;
      })}
    </section>
  );
};

export default Stories;
