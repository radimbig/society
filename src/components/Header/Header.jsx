import React from "react";
import logos from "../../assets/logo/logo.png"
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png"


const Header = (props) =>{

let linkToImg;
  if (props.user !== undefined) {

    if (props.isLogin == true & props.user.picture !== "default") {
      linkToImg = <a href={"/profile/"+props.user.id} ><img alt="profile img" src={props.user.picture} /></a>
    }else{linkToImg = <a href={"/profile/"+props.user.id} ><img alt="profile img" src={defImg} /></a>}
  }
return(<div className={classes.header}>
    <div>
    <img src={logos} alt="logo" />
    </div>
    <div className={classes.login}>
       
      <h5>{props.isLogin ? `You logined as ${props.user.login}`:`you did not login`}</h5>
      {linkToImg}
    </div>
    
    </div>
  )
}


export default Header