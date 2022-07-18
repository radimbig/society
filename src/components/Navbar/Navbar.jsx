import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.sidebar}>
      <div>
        <Link to="profile">My profile</Link>
      </div>
      <div>
        <Link to="dialogs">Messages</Link>
      </div>
      <div>
        <Link to="news">News</Link>
      </div>
      <div>
        <Link to="music">Music</Link>
      </div>
      <div>
        <Link to="settings">Settings</Link>
      </div>
      <div>
        <Link to="users">All users</Link>
      </div>
      <div className={classes.bestFriends}>
        <div className={classes.friend1}>
          <Link to={"dialogs/" + props.data.bestFriends[0].id}>
            <img alt="" src={props.data.bestFriends[0].profileLink}></img>
          </Link>
        </div>
        <div className={classes.friend2}>
          <Link to={"dialogs/" + props.data.bestFriends[1].id}>
            <img alt="" src={props.data.bestFriends[1].profileLink}></img>
          </Link>
        </div>
        <div className={classes.friend3}>
          <Link to={"dialogs/" + props.data.bestFriends[2].id}>
            <img alt="" src={props.data.bestFriends[2].profileLink}></img>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
