import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";
import {Col, Row} from 'antd'
import { useCurrentWidth } from "react-breakpoints-hook";
import Contacts from "./Contacts/Contacts";
import ChatWindow from "./ChatWindow/ChatWindow";

function Dialogs(props){
  
  const [currentChat, setCurrentChat] = useState(2)
 const width = useCurrentWidth()
 
  return (
      <div style={props.user.theme? {height:"100%", }:{backgroundColor:'#54e8ff'}}>

        <Row  justify='space-between'>
          <Col xs={0} sm={4} >
            <Contacts theme={props.user.theme} setChat={setCurrentChat} chats={props.chats} />
          </Col>
          <Col className={classes.chatWindow} xs={24} sm={20}>
          <ChatWindow  messages={props.messages} sendMess = {props.sendMess} currentChat={currentChat} />
          </Col>
        </Row>
      </div>
    
   
  );
};

export default Dialogs;
