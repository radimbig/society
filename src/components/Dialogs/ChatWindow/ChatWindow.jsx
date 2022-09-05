import React, { useState} from "react";
import { Row, Col, Input, Button } from "antd";
import classes from '../Dialogs.module.css'
import s from './ChatWindow.module.css'


const ChatWindow = (props) => {
  return (
    <div style={props.user.theme? {color:"white"}:{}}>
      <Row>
       <Col span={24}>
        <div  className={s.chat} >
          <Messages theme={props.user.theme} messages={props.messages} chat={props.currentChat} />
        </div>
       </Col>
      </Row>
      <Row>
        <SendMessForm theme={props.user.theme} sendMess={props.sendMess} for={props.currentChat} />
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
            <Col  span={24}>
              <div style={{margin:"20px"}} >
                <div className={props.theme? s.messageB:s.messsage} style={{textAlign:"end"}}>{e.text}</div>
              </div>
            </Col>
        </Row>
      );
    } else {
      return (
        <Row key={e.id} justify="start">
          <div>{e.text}</div>
        </Row>
      );
    }
  });
  return <div>{razmetka}</div>;
};

const SendMessForm = (props) => {
    const sendMes = ()=>{
      let masivchik =  Array.from(temp)
      for(let i = 1; i<2; i++){
        masivchik.splice(30, 0, "\n ")
      }
      console.log(masivchik.join(""))
      props.sendMess(masivchik.join(""), props.for); 
      setTemp("")
    }
    const [temp, setTemp] = useState()
    return(
    <div style={{width:"100%"}} >
        <Row align='bottom' justify="end">
        <Col span={24}>
          <div>
            <Input maxLength={150} rows={5} value={temp}  onPressEnter={sendMes} onChange={(e)=>{setTemp(e.target.value)}} />
          </div>
        </Col>
        </Row>
       
    </div>
       
    )
};

export default ChatWindow;


/*
<Input.TextArea  size="large"  onPressEnter={()=>{props.sendMess(temp, props.for); setTemp("")}} value={temp} onChange={(e)=>{setTemp(e.target.value)}} />
*/