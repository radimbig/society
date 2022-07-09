import React from "react";
import { Link} from "react-router-dom";


const ChatItem = (props) => {
  return (
    <div>
      <Link to={props.to} >{props.name}</Link>
    </div>
  );
};

export default ChatItem;
