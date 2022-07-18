import React from "react";
import styles from "./Users.module.css";

import loader from "../../assets/preloader/loading.gif"
import avaF from "../../assets/icoF/avaF.png"
import avaM from "../../assets/icoM/avaM.png"
// let avaF = "https://cdn-icons-png.flaticon.com/512/219/219969.png";
// let avaM = "https://cdn-icons-png.flaticon.com/512/219/219986.png";


const Users = (props) => {

  
  let pagesCount = [];
  for (let i = 1; i <= props.pagesCount; i++) {
    pagesCount.push(i)
  }

  let users = props.users.map((M) => {
    let temp;
    let tempCallBack;
    let userImg;
    if (M.img === null) {
      if (M.sex === 1) {
        userImg = avaM;
      } else {
        userImg = avaF;
      }
    } else {
      userImg = M.img;
    }

    if (M.followed === 1) {
      temp = "unfollow";
      tempCallBack = () => {
        props.unfollow(M.id);
      };
    } else {
      temp = "follow";
      tempCallBack = () => {

        props.follow(M.id);
      };
    }

    
    return (

      <div key={M.id} className={styles.user}>
        <div className={styles.first}>
          <img
            className={styles.img}
            src={userImg}
            alt="something wrong..."
          />
          {M.name} from {M.city} has {M.age} age
        </div>
        <div className={styles.second}>{M.bio}</div>
        <button className={styles.button} onClick={tempCallBack}>
          {temp}
        </button>
      </div>
    );
  });

if(props.isFetching === true){
  return(<img alt="loading..." src={loader} />)
}
else{
  return (<div className={styles.main}>
    
    
    <div>
      {pagesCount.map((K) => {
        if (K === props.currentPage) {
          return (<span className={styles.selected}> {K} </span>)
        } else {
          return (<span className={styles.unselected} onClick={() => { props.setPage(K) }}> {K} </span>)
        }
      })}
    </div>
    {users}
  </div>)
}

;

}


export default Users;