import React from "react";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    // TODO Step 0: Implement NavBar similar to old navigation bar found in old_index.html.
    // Hint: Look for the <nav> HTML tag.
    // Remember "class" attributes in HTML are renamed to "className" in ReactJS.
    <nav className="navBar-Container">
      <div className="navBar-title">Catbook</div>
    </nav>
  );
};

export default NavBar;
