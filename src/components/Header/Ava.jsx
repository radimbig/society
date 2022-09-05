import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";


/**
 * 
 * 
 * 


    
        
        
 */

const Ava = (props) =>{
const menu = (<Menu 
    style={props.user.theme? {backgroundColor:"darkcyan", color:"white",  textDecoration:"none"}:{}}
items={[{
    key:1,
    label:(
            <div >
                <Link style={props.user.theme? {color:"white"}:{}} to={`/profile/${props.id}`}>My Profile</Link>
            </div>
        )
},
    {
        key:2,
        label: (  <div>
                <Link style={props.user.theme? {color:"white"}:{}} to="dialogs">Message</Link>
            </div>) 
    },
    {
        key:3,
        label:(
    <div onClick={()=>{props.logout()}}>
         <Link style={props.user.theme? {color:"white"}:{}} to="login">Logout</Link>
    </div>) 

    }
]}
/>)


return(
<div style={{marginRight:"10px" }}>
<Dropdown
trigger={['click', 'hover']}
overlay={menu}
placement="bottomRight"
arrow={true}
>
<div  key="divka">
    {props.children}
</div>
</Dropdown>
</div>)





}


export default Ava