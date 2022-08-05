import React from "react";
import styles from "./Profile.module.css"
import icoM from "../../assets/icoM/avaM.png"
import Image from 'react-bootstrap/Image'
import facebook from "../../assets/socials/facebook.png"
import github from "../../assets/socials/github.png"
import instagram from "../../assets/socials/instagram.png"
import Status from "./Status/Status";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";




const Profile = (props) =>{
    let onChangeHandler = (e) =>{
        props.updateImg(e.target.files[0])
    }

    let links = []
    let picture
    if(props.user.contacts.instagram !== null && props.user.instagram !== ""){
        links.push(<a href={props.user.contacts.instagram}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={instagram} /></a>)
    }
    if(props.user.contacts.github !== null && props.user.github !== ""){
        links.push(<a href={props.user.contacts.github}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={github} /></a>)
    }
    if(props.user.contacts.facebook !== null && props.user.facebook !== ""){
        links.push(<a href={props.user.contacts.facebook}><Image roundedCircle={true} className={styles.social} alt="Logo of instagram" src={facebook} /></a>)
    }

    if(props.user.photos.large !== null ){
        picture = props.user.photos.large
    }
    else{
        picture = icoM
    }

    return(
        <>
        <Container >
            <Row  >
                <Col >
                        <div className={styles.image}>
                            <Image fluid={true} roundedCircle={true} alt="user img" src={picture} />
                           
                        </div>
                </Col>
                <Col  >
                        <div className={styles.parent}>

                            <div>
                                {props.user.fullName}<br />

                                {"About job: " + props.user.lookingForAJob} <br />
                                {"bio: "} <Status id={props.user.userId} getStatus={props.getStatus} you={props.you} updateStatus={props.updateStatus} text={props.status} /> <br />

                                <div className={styles.secondParent}>
                                    {links}
                                </div>
                            </div>
                        </div>
                </Col>
            </Row>
            <Row>
            {props.you ? <input type="file" onChange={onChangeHandler} /> : null}
            </Row>
        </Container>

        </>
    )
}


export default Profile