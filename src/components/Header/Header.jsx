import React from "react";
import logos from "../../assets/logo/logo.png";
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png";
import { Link, Outlet } from "react-router-dom";
import { Row, Col, Avatar} from "antd";
import {MenuOutlined} from "@ant-design/icons";
const Header = (props) => {
  const sizeRules = {
      xs: 50,
      sm: 50,
      md: 50,
      lg: 50,
      xl: 50,
      xxl:50,
  }
  
  let linkToImg;
  if (props.user !== undefined) {
    if ((props.isLogin === true) & (props.user.picture !== "default")) {
      linkToImg = (
        
          <Avatar
          size={sizeRules}
            alt="profile img"
            src={props.user.picture}
          />
       
      );
    } else {
      linkToImg = (
        
          <Avatar
           size={sizeRules}
            alt="profile img"
            src={defImg}
          />
      
      );
    }
  }
  if (props.isLogin === false) {
    linkToImg = null;
  }
  return (
    <>
    <Row justify="space-between">
      <Col>
      <Avatar src={logos}  size={sizeRules} /> <br />
      <MenuOutlined  />
      </Col>
      <Col>
      <div className={classes.login}>
        <Link onClick={props.logout} to="login">logout</Link>
      {linkToImg}
      
      </div>
      </Col>
    </Row>
        <div className={classes.header}>
      <Outlet />
    </div>
    </>

  );
};

export default Header;
