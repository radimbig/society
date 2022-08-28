import React from "react";
import { Row, Col, Avatar } from "antd";
import classes from '../Dialogs.module.css'
const Contacts = (props) => {
let blackTheme = {color:"white",marginTop:"15px", marginBottom:"15px", padding:"10px"}
let whiteTheme = {marginTop:"15px", marginBottom:"15px", color:"black", padding:"10px"}
  let dialogs = props.chats.map((e) => {
    return (
      <div className={!props.theme ? classes.contact:classes.contactBlack} style={props.theme? blackTheme:whiteTheme} key={e.id}>
        <Row onClick={()=>{props.setChat(e.id)}} justify="space-around">
          <Col span={12}>
            <Avatar src={e.profileLink} />
          </Col>
          <Col span={12}>
            <h3 style={props.theme ? {color:"white"}:{color:"black"}}>{e.name}</h3>
          </Col>
        </Row>
      </div>
    );
  });

  return <div>
    {dialogs}
  </div>;
};

export default Contacts;
