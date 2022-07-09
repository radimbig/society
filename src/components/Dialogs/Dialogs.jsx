import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";
import ChatItem from "./ChatItem/ChatItem.jsx"
import ChatWindow from "./ChatWindow/ChatWindow";




function Dialogs(props){
  let chatitems = props.chats.map((B) => {return(<ChatItem to={""} key={B.id} name={B.name} />)})
  return (
    <div className={classes.dialogs}>
      <div className={classes.contacts}>
        {chatitems}
        
      </div>
      <ChatWindow temp={props.temp} onChange={props.onChange} sendMess={props.sendMess} messages={props.messages} />
      
      <Outlet />
    </div>
  );
};

export default Dialogs;
