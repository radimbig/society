import React from "react";
import icoM from "../../assets/icoM/avaM.png"
import Status from "./Status/Status";

const ProfileText = (props) =>{
    let picture
    if(props.user.photos.large !== null ){
        picture = props.user.photos.large
    }
    else{
        picture = icoM
    }

    return(
        <>
        {props.user.fullName}<br />
                               <span> Looking for job: {props.user.lookingForAJob? "yes":"no"} </span><br />
                                {props.user.lookingForAJob? <span>{props.user.lookingForAJobDescription} <br /> </span>:null}
                                {"bio: "} <Status id={props.user.userId} getStatus={props.getStatus} you={props.you} updateStatus={props.updateStatus} text={props.status} /> <br />
                                <div>
                                    {props.user.aboutMe}
                                </div>
        </>
    )
}



export default ProfileText