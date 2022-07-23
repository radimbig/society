import React from "react";
import styles from "./Users.module.css";
import axios from 'axios';

let avaF = "https://cdn-icons-png.flaticon.com/512/219/219969.png"
let avaM = "https://cdn-icons-png.flaticon.com/512/219/219986.png"


let users

let link = `http://server.fsvsgroup.com:1880/user`




const UsersPage = (props) => {
  let getUser = () =>{
    axios.get(link).then((res)=>{
      
      props.setUsers(res.data)
      console.log(res.data)
    })
  }
if(props.users.length !==0)
{
 users = props.users.map( M =>{
    let temp;
    let tempCallBack;
    let userImg;
    if (M.sex === 1) {
      userImg = avaM;
    } else {
      userImg = avaF;
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
    return(
      <div key={M.id} className={styles.user}>
        <div className={styles.first}>
          <img className={styles.img} src={userImg} alt="something wrong..." />
          {M.name} from {M.city} has {M.age} age
        </div>
        <div className={styles.second}>bio:{M.bio}</div>
        <button className={styles.button} onClick={tempCallBack}>
          {temp}
        </button>
      </div>
    )
  })
}






  return(
    <div className={styles.main}>
    
      <button onClick={getUser}>Get users</button> 
      {users}
    </div>
  )


}

export default UsersPage;
