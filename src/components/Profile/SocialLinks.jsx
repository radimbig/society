import React, {useState} from "react";
import styles from "./Profile.module.css"

import Image from 'react-bootstrap/Image'
import facebook from "../../assets/socials/facebook.png"
import github from "../../assets/socials/github.png"
import instagram from "../../assets/socials/instagram.png"



const SocialLinks = (props) =>{
    let links = []
    let picture
    if(props.user.contacts.instagram !== null && props.user.contacts.instagram !== "" ){
        links.push(<a target="_blank" href={props.user.contacts.instagram}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={instagram} /></a>)
    }
    if(props.user.contacts.github !== null && props.user.contacts.github !== "" ){
        links.push(<a target="_blank" href={props.user.contacts.github}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={github} /></a>)
    }
    if(props.user.contacts.facebook !== null && props.user.contacts.facebook !== ""){
        links.push(<a target="_blank" href={props.user.contacts.facebook}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={facebook} /></a>)
    }

    return links

}


export default SocialLinks