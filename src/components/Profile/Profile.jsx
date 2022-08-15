import React, {useState, useEffect} from "react";
import styles from "./Profile.module.css"
import icoM from "../../assets/icoM/avaM.png"
import {Row, Col, Image, Avatar} from 'antd'
import SocialLinks from "./SocialLinks";
import ProfileForm from "./Form";
import ProfileText from "./ProfileInfo";
import {Button} from 'antd'


const Profile = (props) =>{
   
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
     
            <Row  >
                <Col span={12} >
                        <div className={styles.image}>
                            <Avatar   alt="user img" src={picture} size={{
                                 xs: 200,
                                 sm: 200,
                                 md: 220,
                                 lg: 250,
                                 xl: 250,
                                 xxl: 350
                            }} />
                        </div>
                </Col>
                <Col span={12}>
                        <div className={styles.parent}>
                            <div>
                                {editMode? <ProfileForm stopEditMod={toggleEditMode} {...props} />: <ProfileText {...props} />}
                                {props.error && editMode? <div className={styles.alert}>{props.errorMes}</div>:null}
                               {props.you && !editMode ?  <Button onClick={toggleEditMode} >edit profile</Button>: null}                 
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
        </>
    )
}


export default Profile