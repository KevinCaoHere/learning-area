import React from "react";
// TODO (step9): import SingleComment and NewComment
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
const CommentsBlock = (props) => {
  // TODO (step9): implement render
  return <div></div>;
};

export default CommentsBlock;
