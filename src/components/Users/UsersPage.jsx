import React from "react";
import styles from "./Users.module.css"



const UsersPage = (props)=>{
    let users = props.users.map( (M) =>{
        let temp;
        let tempCallBack;
        
        let userImg
        if(M.sex === true){
             userImg = "https://cdn-icons-png.flaticon.com/512/219/219986.png"
        }
        else{
            userImg = "https://cdn-icons-png.flaticon.com/512/219/219969.png"
        }
        
        if(M.followed === true){
            temp="unfollow"
            tempCallBack =()=>{props.unfollow(M.id)}
        }
        else{
            temp="follow"
            tempCallBack =()=>{
                props.follow(M.id)}
        }

        return(
            <div key={M.id} className={styles.user}>
                <div className={styles.first} >
                <img className={styles.img} src={userImg} alt="something wrong..." />
                {M.name}  from {M.location.city} has {M.age} age
                </div>
                <div className={styles.second} >
                    bio:{M.bio}
                </div>
                <button className={styles.button} onClick={tempCallBack} >{temp}</button>
            </div>
        )
    })
    return(
        <div className={styles.main}>
           <div>
           {users}
            </div> 
            
        </div>
    )
}

export default UsersPage