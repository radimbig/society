import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";
import ChatItem from "./ChatItem/ChatItem.jsx"
import ChatWindow from "./ChatWindow/ChatWindow";




function Dialogs(props){
  let chatitems = props.data.chatsData.map((B) => {return(<ChatItem to={""} name={B.name} />)})
  return (
    <div className={classes.dialogs}>
      <div className={classes.contacts}>
        {chatitems}
        
      </div>
      <ChatWindow dispatch={props.dispatch} data={props.data} />
      
      <Outlet />
    </div>
  );
};

export default Dialogs;
