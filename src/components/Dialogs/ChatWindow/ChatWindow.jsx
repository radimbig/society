import React, { useState } from "react";
import { Row, Col, Input, Avatar } from "antd";
import s from "./ChatWindow.module.css";
import backIco from "../../../assets/back/back.png";

const ChatWindow = (props) => {
  return (
    <div style={props.user.theme ? { color: "white" } : {}}>
      <Row>
        <div className={props.user.theme ? s.topBar : s.topBarB}>
          <Row>
            <Col xs={2} sm={0}>
              <img
                onClick={() => {
                  props.setChat(0);
                }}
                src={backIco}
                className={s.backIco}
              />
            </Col>
            <Col xs={22} sm={24}>
              <Avatar
                style={{ marginLeft: "15px" }}
                src={props.chats[props.currentChat - 2].profileLink}
                size={48}
              />
            </Col>
          </Row>
        </div>
        <Col span={24}>
          <div className={s.chat}>
            <Messages
              theme={props.user.theme}
              messages={props.messages}
              chat={props.currentChat}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <SendMessForm
          theme={props.user.theme}
          sendMess={props.sendMess}
          for={props.currentChat}
        />
      </Row>
    </div>
  );
};

const Messages = (props) => {
  const mess = props.messages.filter((e) => {
    // e = element
    if (e.from === 1 && e.to === props.chat) {
      return e;
    }
    if (e.to === 1 && e.from === props.chat) {
      return e;
    }
  });

  const razmetka = mess.map((e) => {
    // messages maping
    if (e.from === 1) {
      return (
        <Row key={e.id} justify="end">
          <Col>
            <div>
              <div
                className={props.theme ? s.messageB : s.message}
                style={{ textAlign: "end" }}
              >
                {e.text}
              </div>
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row key={e.id} justify="start">
          <div className={props.theme ? s.messageB : s.message}>{e.text}</div>
        </Row>
      );
    }
  });
  return <div>{razmetka}</div>;
};

const SendMessForm = (props) => {
  const sendMes = () => {
    props.sendMess(temp, props.for);
    setTemp("");
  };
  const [temp, setTemp] = useState(); // value of input field
  return (
    <div style={{ width: "100%" }}>
      <Row align="bottom" justify="end">
        <Col span={24}>
          <div>
            <Input
              maxLength={150}
              rows={5}
              value={temp}
              onPressEnter={sendMes}
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChatWindow;

/*
<Input.TextArea  size="large"  onPressEnter={()=>{props.sendMess(temp, props.for); setTemp("")}} value={temp} onChange={(e)=>{setTemp(e.target.value)}} />
*/
