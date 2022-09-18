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
  if(currentChat == 0){
    return(
      <div style={props.user.theme? {height:"100%", }:{backgroundColor:'#54e8ff'}}>
      <Row  justify='space-between'>
        <Col className={props.user.theme? classes.contacts:classes.contactsB} span={24} >
          <Contacts theme={props.user.theme} setChat={setCurrentChat} chats={props.chats} />
        </Col>
      </Row>
    </div>
    )
  }
  return (
      <div style={props.user.theme? {height:"100%", }:{backgroundColor:'#54e8ff'}}>
        <Row  justify='space-between'>
          <Col className={props.user.theme? classes.contacts:classes.contactsB} xs={0} sm={4} >
            <Contacts theme={props.user.theme} setChat={setCurrentChat} chats={props.chats} />
          </Col>
          <Col style={props.user.theme? {backgroundColor:""}:{}} className={classes.chatWindow} xs={24} sm={20}>
          <ChatWindow user={props.user} messages={props.messages} setChat={setCurrentChat} sendMess = {props.sendMess} chats={props.chats} currentChat={currentChat} />
          </Col>
        </Row>
      </div>
    
   
  );
};

export default Dialogs;
