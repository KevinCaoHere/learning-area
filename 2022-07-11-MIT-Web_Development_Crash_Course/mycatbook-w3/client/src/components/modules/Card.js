import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
// TODO (step6): import SingleStory
// TODO (step7): import SingleComment
// TODO (step8): import NewComment
// TODO (step9): import CommentsBlock
import SingleStory from "./SingleStory.js";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";
import CommentsBlock from "./CommentsBlock";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
  // TODO (step6): define state to hold comments (refer to Feed)
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // TODO (step6): implement a GET call to retrieve comments,
    // and assign it to state
    get("/api/comment", { parent: props._id }).then((item) => {
      setComments(item);
    });
  }, []);

  // TODO (step6): render a SingleStory using props,
  // and render the comments from state (with JSON.stringify)
  // return (
  //   <div>
  //     <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
  //     {JSON.stringify(comments)}
  //   </div>
  // );

  // from state using a map (refer to Feed)
  // TODO (step7): map comments from state into SingleComment
  // let commmentQuery = null;
  // if (comments.length == 0) {
  //   commmentQuery = [];
  // } else {
  //   commmentQuery = comments.map((item) => (
  //     <div className="Card-commentSection">
  //       <SingleComment _id={item._id} creator_name={item.creator_name} content={item.content} />
  //       {/* The current code is the relation between the input and output. Thus it is important to read the definition of input and output. */}
  //     </div>
  //   ));
  // }

  // return (
  //   <div className="Card-container">
  //     <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
  //     <div className="Card-commentBody">
  //       {commmentQuery}
  //       <div className="Card-commentSection">
  //         <NewComment storyId={props._id} />
  //       </div>
  //     </div>
  //   </div>
  // );

  // components (refer to Feed)
  // TODO (step8): add in the NewComment component (refer to Feed)
  // TODO (step9): use CommentsBlock
  let commmentQuery = null;

  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  if (comments.length == 0) {
    commmentQuery = [];
  } else {
    commmentQuery = comments.map((item) => (
      <div className="Card-commentSection">
        <SingleComment _id={item._id} creator_name={item.creator_name} content={item.content} />
        {/* The current code is the relation between the input and output. Thus it is important to read the definition of input and output. */}
      </div>
    ));
  }

  return (
    <div className="Card-container">
      <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
      <div className="Card-commentBody">
        {commmentQuery}
        <div className="Card-commentSection">
          <NewComment storyId={props._id} addNewComment={addNewComment}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
