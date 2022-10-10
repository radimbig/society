import React, { useState } from "react";
import logos from "../../assets/logo/logo.png";
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Row, Col, Avatar, Drawer, message, Button } from "antd";
import Ava from "./Ava";
const Header = (props) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let closeMenu = () => {
    setVisible(false);
  };
  const links = [
    { url: "profile/" + props.user.id, title: "My profile", key: 1 },
    { url: "dialogs", title: "Messages", key: 2 },
    { url: "settings", title: "Settings", key: 6 },
    { url: "users", title: "All users", key: 7 },
  ];
  const linksAsHTML = links.map((link) => {
    if (link.url === "profile/null") {
      return (
        <div
          key={link.key}
          onClick={() => {
            message.error("You need to login first!");
          }}
        >
          <a className={classes.disableLink}>{link.title}</a>
        </div>
      );
    }
    if (link.url === "dialogs" && props.isLogin === false) {
      return (
        <div
          key={link.key}
          onClick={() => {
            message.error("You need to login first!");
          }}
        >
          <a className={classes.disableLink}>{link.title}</a>
        </div>
      );
    }

    return (
      <div key={link.key}>
        <Link
          style={props.user.theme ? { color: "white" } : {}}
          onClick={closeMenu}
          to={link.url}
        >
          {link.title}
        </Link>
      </div>
    );
  });
  const sizeRules = {
    xs: 50,
    sm: 50,
    md: 50,
    lg: 50,
    xl: 50,
    xxl: 50,
  };

  let linkToImg;
  if (props.user !== undefined) {
    if ((props.isLogin === true) & (props.user.picture !== "default")) {
      linkToImg = (
        <Avatar
          key="avatar"
          size={sizeRules}
          alt="profile img"
          src={props.user.picture}
        />
      );
    } else {
      linkToImg = (
        <Avatar key="avatar" size={sizeRules} alt="profile img" src={defImg} />
      );
    }
  }
  if (props.isLogin === false) {
    linkToImg = null;
  }
  return (
    <div
      style={
        props.user.theme
          ? { backgroundColor: "#434343" }
          : { backgroundColor: "white" }
      }
    >
      <Row justify="space-between">
        <Col>
          <Avatar
            src={logos}
            onClick={() => {
              setVisible(true);
            }}
            size={sizeRules}
          />{" "}
          <br />
        </Col>
        <Col>
          <div className={classes.login}>
            {props.isLogin ? (
              <Ava user={props.user} id={props.user.id} logout={props.logout}>
                {linkToImg}
              </Ava>
            ) : (
              <Button
                type="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Drawer
        headerStyle={props.user.theme ? { backgroundColor: "#595959" } : {}}
        bodyStyle={props.user.theme ? { backgroundColor: "#1f1f1f" } : {}}
        title="Menu"
        placement="left"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        closable={true}
      >
        {linksAsHTML}
      </Drawer>
      <Outlet />
    </div>
  );
};

export default Header;

/*
       headerStyle={{backgroundColor:"#595959"}}
       bodyStyle={{backgroundColor:"#1f1f1f"}}

*/
