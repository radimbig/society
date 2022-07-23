import React from "react";
import styles from "./Users.module.css";

import avaM from "../../assets/icoM/avaM.png"
import { Link, Outlet } from "react-router-dom";
import Loader from "../common/Loader/Loader";

import { userAPI } from "../../api/api";
// let avaF = "https://cdn-icons-png.flaticon.com/512/219/219969.png";
// let avaM = "https://cdn-icons-png.flaticon.com/512/219/219986.png";




const Users = (props) => {

  console.log(props)


  let users = props.users.map((M) => {
    let temp;
    let tempCallBack;
    let userImg;
    let dis

    if (props.isLogin === true) {
      dis = false
    } else {
      dis = true
    }
    if (M.photos.small === null) {
      userImg = avaM
    } else {
      userImg = M.photos.small;
    }

    if (M.followed === true) {
      temp = "unfollow";
      tempCallBack = () => {
        userAPI.unfollow(M.id).then(data => {
          if (data.resultCode === 0) {
            props.unfollow(M.id);
          }
        })

      };
    } else {
      temp = "follow";
      tempCallBack = () => {
        userAPI.follow(M.id).then(data => {
          if (data.resultCode === 0) {
            props.follow(M.id);
          }
        })

      };
    }


    return (

      <div key={M.id} className={styles.user}>

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
    return (<Loader />)
  }
  else {
    return (<div className={styles.main}>

      <input onChange={(e) => { props.onChange(e.target.value) }} value={props.temp} type=""></input><button onClick={() => { props.setPage() }}>Go to page!</button>
      <h5>You on page №{props.currentPage} <br />all pages count:{props.pagesCount} <br /> all users count: {props.usersCount}</h5>
      <div>

      </div>
      {users}
      <Outlet />
    </div>)
  }

  ;

}


export default Users;