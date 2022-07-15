import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
// TODO (step2): import SingleStory
// TODO (step4): import NewStory
// TODO (step6): remove SingleStory import, import Card
import SingleStory from "../modules/SingleStory"; //fxxk

const Feed = () => {
  // TODO (step1): define state to hold stories
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // TODO (step1): implement a GET call to retrieve stories,
    // and assign it to state
    get("/api/stories").then((props) => {
      setStories(props);
    });
  }, []);

  // TODO (step1): render the raw stories data from state
  // return <div>{JSON.stringify(stories)}</div>;
  /* Stories is an object. Stringfy is needed when printing the state. */

  // TODO (step2): render a SingleStory with hardcoded props
  // return (
  //   <div>
  //     <SingleStory creator_name="Kevin Cao" content="Hello, world!" />
  //   </div>
  // );

  // TODO (step3): map the state to SingleStory components
  // if (stories.length == 0) {
  //   return <div>No Stories!</div>;
  // } else {
  //   return stories.map((item) => {
  //     return (
  //       <div>
  //         <SingleStory creator_name={item.creator_name} content={item.content} />
  //       </div>
  //     );
  //   });
  // }

  // TODO (step4): add in the NewStory component
  let storyQuery = null;
  if (stories.length == 0) {
    storyQuery = <div>No Stories!</div>;
  } else {
    storyQuery = stories.map((item) => (
      <div>
        <SingleStory creator_name={item.creator_name} content={item.content} />
      </div>
    ));
  }

  return <div>{storyQuery}</div>;

  // const storyQuery = null;
  // if (stories.length == 0) {
  //   storyQuery = <div>No Stories!</div>;
  // } else {
  //   storyQuery = stories.map((item) => {
  //     <div>
  //       <SingleStory creator_name={item.creator_name} content={item.content} />
  //     </div>;
  //   });
  // };

  // return <div><NewStory/></div>;

  // TODO (step6): use Card instead of SingleStory
};

export default Feed;
