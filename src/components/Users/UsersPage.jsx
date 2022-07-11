import React from "react";
import styles from "./Users.module.css";
import axios from 'axios';

let avaF = "https://cdn-icons-png.flaticon.com/512/219/219969.png"
let avaM = "https://cdn-icons-png.flaticon.com/512/219/219986.png"

let tempUser = [
  {
    id: 1,
    followed: true,
    sex: true,
    name: "Radim",
    age: 17,
    bio: "I like react",
    location: { city: "Ukraine", country: "Poltava" },
    profileImg: "",
  },
  {
    id: 2,
    followed: false,
    sex: true,
    name: "Vadim",
    age: 45,
    bio: "I like c#",
    location: { city: "Ukraine", country: "Poltava", profileImg: "" },
  },
  {
    id: 3,
    followed: true,
    sex: false,
    name: "Eva",
    age: 25,
    bio: "i`m so pretty!",
    location: { city: "Russia", country: "Moscow", profileImg: "" },
  },
];
let persons;
let users

let link = `http://server.fsvsgroup.com:1880/user`




const UsersPage = (props) => {
  let getUser = () =>{
    axios.get(link).then((res)=>{
      
      props.setUsers(res.data.users)
    })
  }
if(props.users.length !=0)
{
 users = props.users.map( M =>{
    let temp;
    let tempCallBack;
    let userImg;
    if (M.sex === true) {
      userImg = avaM;
    } else {
      userImg = avaF;
    }
    if (M.followed === true) {
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
          {M.name} from {M.location.city} has {M.age} age
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
      <img scr={avaF} />
     
    </div>
  )


}

export default UsersPage;
