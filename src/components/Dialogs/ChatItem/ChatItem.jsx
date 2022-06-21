import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./ChatItem.module.css";

const ChatItem = (props) => {
  return (
    <div>
      <Link to={props.to} >{props.name}</Link>
    </div>
  );
};

export default ChatItem;
