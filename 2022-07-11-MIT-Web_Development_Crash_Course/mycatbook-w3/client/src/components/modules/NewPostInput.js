import React, { useState } from "react";
import { post } from "../../utilities";

import "./NewPostInput.css";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * New Story is a New Post component for stories
 */
const NewStory = () => {
  // TODO (step4): implement addStory
  const addStory = (value) => {
    post("/api/stories", { content: value }).then((item) => {
      props.addNewStory(item);
    });
  };

  // TODO (step4): implement render
  return <NewPostInput onSubmit={addStory} defaultText="Enter Post Here!" />;
};

/**
 * New Comment is a New Post component for comments
 *
 * Proptypes
 * @param {string} storyId to add comment to
 * @param addNewComment
 */
const NewComment = (props) => {
  const addComment = (storyId, value) => {
    // TODO (step8): implement addComment (refer to NewStory)
    post("/api/comment", { parent: storyId, content: value }).then((item) => {
      props.addNewComment(item);
    });
  };

  // TODO (step8): implement render (refer to NewStory)
  return (
    <div>
      <NewPostInput
        storyId={props.storyId}
        onSubmit={addComment}
        defaultText="Enter Comment Here!"
      />
    </div>
  );
};

export { NewComment, NewStory };
