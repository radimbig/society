import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";

const ChatItem = (props) => {
  return (
    <div>
      <Link to={props.id} >{props.name}</Link>
    </div>
  );
};
let chatsData = [
    { id: "1", name: "radim"},
    { id: "2", name: "vadim"},
    { id: "3", name: "eva"},
    {id:"4", name:"valera"}    
]


let chatitems = chatsData.map((chatsData) => {return(<ChatItem id={chatsData.id} name={chatsData.name} />)})
const Dialogs = (props) => {

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
