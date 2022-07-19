import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      {/* TODO (step5): implement links to pages */}
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link className="NavBar-link" to="/">Home Page</Link>
        <Link className="NavBar-link" to="/profile">Profile</Link>
        {/* <Link className="NavBar-link" to="/feed">Feed</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
