import React from "react";
import styles from "./Profile.module.css"
import icoM from "../../assets/icoM/avaM.png"

import facebook from "../../assets/socials/facebook.png"
import github from "../../assets/socials/github.png"
import instagram from "../../assets/socials/instagram.png"


const Profile = (props) =>{

    let links = []
    let picture
    if(props.user.contacts.instagram !== null && props.user.instagram !== ""){
        links.push(<a href={props.user.contacts.instagram}><img className={styles.social} alt="Logo of instagram" src={instagram} /></a>)
    }
    if(props.user.contacts.github !== null && props.user.github !== ""){
        links.push(<a href={props.user.contacts.github}><img className={styles.social} alt="Logo of instagram" src={github} /></a>)
    }
    if(props.user.contacts.facebook !== null && props.user.facebook !== ""){
        links.push(<a href={props.user.contacts.facebook}><img className={styles.social} alt="Logo of instagram" src={facebook} /></a>)
    }

    if(props.user.photos.large !== null ){
        picture = props.user.photos.large
    }
    else{
        picture = icoM
    }

    return(
        <div className={styles.parent}>
            <div className={styles.image}>
                <img  alt="user img" src={picture} />
            </div>
            <div>
            {props.user.fullName}<br />
           
            {"About job: " + props.user.lookingForAJob} <br />
            {"bio: " + props.user.aboutMe} <br />
            
            <div className={styles.secondParent}>
                {links}
            </div>
            </div>
        </div>
    )
}


export default Profile