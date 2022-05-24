import React from "react";
import w from "./ProfileInfo.module.css"

const ProfileInfo = (props) =>{
    return(
      <div>
            
          <img className={`${w.image} ${w.ava}`}
            alt="s"
            src={props.src} />
            <h5>{props.text}</h5>
      </div>
    )
  }

export default ProfileInfo;