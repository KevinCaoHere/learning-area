import React from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";
// TODO (step0): import Feed
// TODO (step5): import Router and NotFound
import "./pages/Feed.js";
import "./pages/NotFound.js";


// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";
import Feed from "./pages/Feed.js";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        {/* <Profile /> */}
        <Feed />
        {/* TODO (step0): render Feed instead of Profile */}
        {/* TODO (step5): use Router to route between pages */}
      </div>
    </>
  );
};

export default App;
