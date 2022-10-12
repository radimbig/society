import React from "react";
import styles from "./Users.module.css";

import avaM from "../../assets/icoM/avaM.png";
import { Link, Outlet } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import Pagenator from "./Pagenator.tsx";

const Users = (props) => {
  let users = props.users.map((M) => { // M - member
    let temp;
    let tempCallBack;
    let userImg;
    let dis;

    if (props.isLogin === true) {
      dis = false;
    } else {
      dis = true;
    }
    if (M.photos.small === null) {
      userImg = avaM;
    } else {
      userImg = M.photos.small;
    }

    if (M.followed === true) {
      temp = "unfollow";
      tempCallBack = (e) => {
        e.target.disabled = true;
        props.unfollow(M.id);
        e.target.disabled = false;
      };
    } else {
      temp = "follow";
      tempCallBack = (e) => {
        e.target.disabled = true;
        props.follow(M.id);
        e.target.disabled = false;
      };
    }
    return (
      <div
        style={
          props.user.theme
            ? { backgroundColor: "#120338" }
            : { backgroundColor: "#f759ab" }
        }
        key={M.id}
        className={styles.user}
      >
        <div className={styles.first}>
          <Link to={"/profile/" + M.id}>
            <img
              className={styles.img}
              src={userImg}
              alt="something wrong..."
            />
          </Link>
          {M.name}
        </div>
        <div className={styles.second}>{M.bio}</div>
        <button disabled={dis} className={styles.button} onClick={tempCallBack}>
          {temp}
        </button>
      </div>
    );
  });

  if (props.isFetching === true) {
    return <Loader />;
  } else {
    return (
      <div className={styles.main}>
        <Pagenator {...props} />
        <span
          style={props.user.theme ? { color: "white" } : { color: "black" }}
        >
          You on page {props.currentPage} <br />
          all pages count:{props.pagesCount} <br /> all users count:{" "}
          {props.usersCount}
        </span>
        {users}
        <Outlet />
      </div>
    );
  }
};

export default Users;
