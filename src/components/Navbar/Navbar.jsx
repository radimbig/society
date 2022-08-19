import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <>
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
          <Link to="game">Game</Link>
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
      </nav>
    </>
  );
};

export default Navbar;
