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
items={[{
    key:1,
    label:(
            <div>
                <Link to={`/profile/${props.id}`}>My Profile</Link>
            </div>
        )
},
    {
        key:2,
        label: (  <div>
                <Link to="dialogs">Message</Link>
            </div>) 
    },
    {
        key:3,
        label:(
    <div onClick={()=>{props.logout()}}>
         <Link to="login">Logout</Link>
    </div>) 

    }
]}
/>)


return(
<div>
<Dropdown
overlay={menu}
placement="bottomRight"
arrow={true}
>
<div key="divka">
    {props.children}
</div>
</Dropdown>
</div>)





}


export default Ava