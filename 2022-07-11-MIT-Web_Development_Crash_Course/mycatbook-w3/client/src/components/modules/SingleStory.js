import React from "react";

// TODO (step2): import Card.css
import "./Card.css";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      {/* TODO (step2): use JSX and props to render story creator and content */}
      <div className="Card-storyUser">{props.creator_name}</div>
      <div className="Card-storyContent">{props.content}</div>
      <hr/><br/>
    </div>
  );
};

export default SingleStory;
