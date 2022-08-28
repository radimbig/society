import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import classes from '../Dialogs.module.css'
import {SendOutlined} from "@ant-design/icons"
const ChatWindow = (props) => {
  return (
    <div>
      <Row>
       <Col span={24}>
       <Messages messages={props.messages} chat={props.currentChat} />
       </Col>
      </Row>
      <Row>
        <SendMessForm sendMess={props.sendMess} for={props.currentChat} />
      </Row>
    </div>
  );
};

const Messages = (props) => {
  const mess = props.messages.filter((e) => {
    if (e.from === 1 && e.to === props.chat) {
      return e;
    }
    if (e.to === 1 && e.from === props.chat) {
      return e;
    }
  });

  const razmetka = mess.map((e) => {
    if (e.from === 1) {
      return (
        <Row key={e.id} justify="end">
            <Col span={8}>
             <div style={{textAlign:"end"}}>From Radim:{e.text}</div>
            </Col>
         
        </Row>
      );
    } else {
      return (
        <Row key={e.id} justify="start">
          <div>From {e.from} :{e.text}</div>
        </Row>
      );
    }
  });
  return <div>{razmetka}</div>;
};

const SendMessForm = (props) => {
    const [temp, setTemp] = useState()
    return(
    <div style={{width:"100%"}} >
        <Row justify="end">
        <Col span={24}>
        <Input value={temp} onChange={(e)=>{setTemp(e.target.value)}} />
        </Col>
        <Col className={classes.sendMess} offset={23} span={1}>
        <button onClick={()=>{props.sendMess(temp, props.for); setTemp("")}} ><SendOutlined /></button>
        </Col>
        </Row>
       
    </div>
       
    )
};

export default ChatWindow;
