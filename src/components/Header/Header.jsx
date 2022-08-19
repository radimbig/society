import React from "react";
import logos from "../../assets/logo/logo.png";
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png";
import { Link, Outlet } from "react-router-dom";
import {Menu, Dropdown, Row, Col, Avatar} from "antd";
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
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div onClick={props.setProfile(parseInt(props.user.id))} >
              <Link to={"/profile/" + props.user.id}>My profile</Link>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div>
              <Link to="/dialogs">Messages</Link>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div onClick={props.logout}>
               <Link to="/login">Logout</Link>
            </div>
          ),
        },
      ]}
    />
  );
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
        <Dropdown arrow overlay={menu} placement="bottomRight">
        <div>
          {linkToImg}
        </div>
       </Dropdown>
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
