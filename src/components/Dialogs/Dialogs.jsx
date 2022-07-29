import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Dialogs.module.css";
import ChatItem from "./ChatItem/ChatItem.jsx"
import ChatWindow from "./ChatWindow/ChatWindow";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Dialogs(props){
  let chatitems = props.chats.map((B) => {return(<ChatItem to={""} key={B.id} name={B.name} />)})
  return (
  
      <Container fluid>
        <Row className="justify-content-md-left">
          <Col lg={1} xs={1} md={1} sm={1} className={classes.contacts}>
          {chatitems}
          </Col>
          <Col className={classes.chat}>
          <ChatWindow temp={props.temp}  sendMess={props.sendMess} messages={props.messages} />
          </Col>
        </Row>
        <Outlet />
      </Container>
      
   
  );
};

export default Dialogs;
