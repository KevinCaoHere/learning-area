import React, { useState } from "react"; // import `useState` from react
import "../../utilities.css";
import "./Profile.css";
import CatHappiness from "../modules/CatHappiness"; //import

const Profile = () => {
  const [catHappinessCount, setCatHappiness] = useState(100); //initialize catHappiness

  function incrementCatHappiness() {
    setCatHappiness(catHappinessCount + 1);
  }

  return (
    <div>
      <div
        className="Profile-avatarContainer"
        // Method 01
        // onClick={() => {
        //   setCatHappiness(catHappinessCount + 1);
        // }}
        
        // Method 02
        onClick={incrementCatHappiness}
      >
        {/* pay attention to the upper case of the letter! onClick, not onclick! */}
        {/* code block for the `div`  */}
        <div className="Profile-avatar" />
      </div>
      <h1 className="Profile-name u-textCenter">YOUR NAME HERE</h1>
      <hr className="Profile-line" />
      <div className="u-flex">
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            Extra Challenge: Modify catbook to show a personalized description here!
          </div>
        </div>
        <div>
          {/** TODO STEP 1:
           *  Insert Cat Happiness component here.
           *  HINT: You probably want to add a new Profile-subContainer to hold the CatHappiness component.
           */}
          <h4 className="Profile-subTitle">Cat Happiness</h4>
          <CatHappiness catHappiness={catHappinessCount} />
          {/* props.catHappiness = catHappinessCount  */}
          {/* the whole label, <CatHappiness /> is an object, and `catHappiness` attribute is also the attribute of the props. */}
        </div>
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
          <div id="favorite-cat">corgi</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
