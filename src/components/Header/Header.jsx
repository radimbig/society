import React from "react";
import logos from "../../assets/logo/logo.png";
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png";
import { Link, Outlet } from "react-router-dom";
import {Menu, Dropdown} from "antd";

const Header = (props) => {
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
        <Link to={"/profile/" + props.user.id}>
          <img
            onClick={() => {
              props.setProfile(props.user.id);
            }}
            alt="profile img"
            src={props.user.picture}
          />
        </Link>
      );
    } else {
      linkToImg = (
        <Link to={"/profile/" + props.user.id}>
          <img
            onClick={() => {
              props.setProfile(props.user.id);
            }}
            alt="profile img"
            src={defImg}
          />
        </Link>
      );
    }
  }
  if (props.isLogin === false) {
    linkToImg = null;
  }
  return (
    <div className={classes.header}>
      <div>
        <img src={logos} alt="logo" />
      </div>
      <div className={classes.login}>
        {/* {props.isLogin ? <h5>You logined as {props.user.login} <br /> <span className={classes.logout} onClick={props.logout}>Logout</span> </h5>:<span>you have to  <Link to="/login" >login</Link></span>} */}
        <Dropdown arrow overlay={menu} placement="bottomRight">
        <div>
          {linkToImg}
        </div>
       </Dropdown>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
