import React from "react";
import styles from "./Profile.module.css"
import icoM from "../../assets/icoM/avaM.png"
import icoF from "../../assets/icoF/avaF.png"
import facebook from "../../assets/socials/facebook.png"
import github from "../../assets/socials/github.png"
import instagram from "../../assets/socials/instagram.png"


const Profile = (props) =>{

    let links = []
    let picture
    if(props.user.instagram !== null && props.user.instagram !== ""){
        links.push(<a href={props.user.instagram}><img className={styles.social} alt="Logo of instagram" src={instagram} /></a>)
    }
    if(props.user.github !== null && props.user.github !== ""){
        links.push(<a href={props.user.github}><img className={styles.social} alt="Logo of instagram" src={github} /></a>)
    }
    if(props.user.facebook !== null && props.user.facebook !== ""){
        links.push(<a href={props.user.facebook}><img className={styles.social} alt="Logo of instagram" src={facebook} /></a>)
    }

    if(props.user.image !== null && props.user.image !== ""){
        picture = props.user.image
    }
    else{
        
        if(parseInt(props.user.sex) === 0){
            picture = icoF
        }else{
            picture = icoM
        }
    }

    return(
        <div className={styles.parent}>
            <div className={styles.image}>
                <img  alt="user img" src={picture} />
            </div>
            <div>
            {props.user.name}  {props.user.surname}, {props.user.age} years old <br />
           
            {"About job: " + props.user.job} <br />
            {"bio: " + props.user.bio} <br />
            {"From " + props.user.country}<br />
            <div className={styles.secondParent}>
                {links}
            </div>
            </div>
        </div>
    )
}


export default Profile