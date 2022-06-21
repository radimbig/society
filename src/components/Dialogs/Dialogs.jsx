import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";
import ChatItem from "./ChatItem/ChatItem.jsx"





function Dialogs(props){
  let chatitems = props.data.map((B) => {return(<ChatItem to={B.id} name={B.name} />)})
  return (
    <div className={classes.dialogs}>
      <div className={classes.contacts}>
        {chatitems}
        
      </div>
      <Outlet />
    </div>
  );
};

export default Dialogs;
