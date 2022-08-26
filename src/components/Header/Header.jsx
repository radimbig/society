import React, { useState } from "react";
import logos from "../../assets/logo/logo.png";
import classes from "./Header.module.css";
import defImg from "../../assets/icoM/avaM.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Row, Col, Avatar, Drawer, message, Button} from "antd";
import Ava from "./Ava";
const Header = (props) => {
  let Theme;
  if(props.user.theme){
    console.log("black theme")
    Theme = classes.blackTheme
  }else{
    console.log("white theme")
    Theme = classes.whiteTheme
  }

  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  let closeMenu = () =>{
    setVisible(false)
  }
  const links = [
    {url:"profile/"+props.user.id, title:"My profile",key:1},
    {url:"dialogs", title:"Messages",key:2},
    {url:"news", title:"News",key:3},
    {url:"game", title:"Game",key:4},
    {url:"music", title:"Music",key:5},
    {url:"settings", title:"Settings",key:6},
    {url:"users", title:"All users",key:7},

  ]
  const linksAsHTML = links.map((a)=>{
    if(a.url === "profile/null"){
      return(<div key={a.key} onClick={()=>{message.error("You need to login first!")}}><a className={classes.disableLink}>{a.title}</a></div>)
    }
    if(a.url === "dialogs" && props.isLogin === false){
      return(<div
        key={a.key}
        onClick={()=>{message.error("You need to login first!")}}
      >
        <a className={classes.disableLink}>{a.title}</a>
      </div>)
    }
    
    return(<div key={a.key}><Link  onClick={closeMenu} to={a.url}>{a.title}</Link></div>)})
  const sizeRules = {
      xs: 50,
      sm: 50,
      md: 50,
      lg: 50,
      xl: 50,
      xxl:50,
  }
  

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
        
          <Avatar
          key="avatar"
           size={sizeRules}
            alt="profile img"
            src={defImg}
          />
      
      );
    }
  }
  if (props.isLogin === false) {
    linkToImg = null;
  }
  return (
    <div style={props.user.theme? {backgroundColor:"#434343"}:{backgroundColor:"white"}}>
    <Row justify="space-between">
      <Col>
      <Avatar src={logos} onClick={()=>{setVisible(true)}}  size={sizeRules} /> <br />
     
      </Col>
      <Col>
      <div className={classes.login}>
        {props.isLogin ? (<Ava id={props.user.id} logout={props.logout}>{linkToImg}</Ava>):<Button type="primary" onClick={()=>{navigate("/login")}} >Login</Button>}
      
      
      </div>
      </Col>
    </Row>
       <Drawer
       title="Menu"
       placement="left"
       visible={visible}
       onClose={()=>{setVisible(false)}}
       closable={true}
       >
{linksAsHTML}
       </Drawer>
      <Outlet />
  
    </div>

  );
};

export default Header;
