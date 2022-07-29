import React from "react";
import logos from "../../assets/logo/logo.png"
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png"
import { Link, Outlet } from "react-router-dom";


const Header = (props) =>{

let linkToImg;
  if (props.user !== undefined) {

    if (props.isLogin === true & props.user.picture !== "default") {
      linkToImg = <Link to={"/profile/"+props.user.id} ><img onClick={()=>{props.setProfile(props.user.id)}} alt="profile img" src={props.user.picture} /></Link>
    }else{linkToImg = <Link to={"/profile/"+props.user.id} ><img onClick={()=>{props.setProfile(props.user.id)}} alt="profile img" src={defImg} /></Link>}
  }
  if(props.isLogin === false){
    linkToImg = null
  }
return(<div className={classes.header}>
    <div>
    <img src={logos} alt="logo" />
    </div>
    <div className={classes.login}>
       
      <h5>{props.isLogin ? `You logined as ${props.user.login}`:<div>you have to  <Link to="/login" >login</Link></div>}</h5>
      {linkToImg}
    </div>
    <Outlet />
    </div>
  )
}


export default Header