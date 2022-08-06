import React, {useState, useEffect} from "react";
import styles from "./Profile.module.css"
import icoM from "../../assets/icoM/avaM.png"
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SocialLinks from "./SocialLinks";
import ProfileForm from "./Form";
import ProfileText from "./ProfileInfo";



const Profile = (props) =>{
    console.log(props)
    let picture
    useEffect(()=>{
        if(props.error === true){
            setEditMode(true)
        }else{
            setEditMode(false)
        }
    },[props.error])
    let [editMode, setEditMode] = useState(false)
    let toggleEditMode = (e) =>{
        if(editMode === false){
            setEditMode(true)
        }else{
            setEditMode(false)
        }
    }

    let onChangeHandler = (e) =>{
        props.updateImg(e.target.files[0])
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
                                
                                {editMode? <ProfileForm stopEditMod={toggleEditMode} {...props} />: <ProfileText {...props} />}
                               
                                {props.error && editMode? <div className={styles.alert}>{props.errorMes}</div>:null}
                               {props.you && !editMode ?  <button onClick={toggleEditMode} >edit profile</button>: null}                 
                               
                                
                                <div className={styles.secondParent}>
                                    {editMode? null:<SocialLinks user={props.user} />}
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