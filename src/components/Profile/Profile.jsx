import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import icoM from "../../assets/icoM/avaM.png";
import { Row, Col, Image, Avatar } from "antd";
import SocialLinks from "./SocialLinks";
import ProfileForm from "./Form";
import ProfileText from "./ProfileInfo";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Modal } from "antd";

const Profile = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [editMode, setEditMode] = useState(false);
 let newPicture
  let picture;
  useEffect(() => {
    if (props.error === true) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [props.error]);

  let toggleEditMode = (e) => {
    if (editMode === false) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };
  let okHandler = () =>{
    props.updateImg(newPicture)
    setIsModalVisible(false)
  } 
  let onChangeHandler = (e) => {
    
        newPicture = e.file.originFileObj
  };

  if (props.user.photos.large !== null) {
    picture = props.user.photos.large;
  } else {
    picture = icoM;
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <div
            
          >
            <Avatar
                onClick={() => {
                    if (isModalVisible) {
                      setIsModalVisible(false);
                    } else {
                      setIsModalVisible(true);
                    }
                  }}
                  className={styles.image}
              alt="user img"
              src={picture}
              size={{
                xs: 180,
                sm: 200,
                md: 220,
                lg: 250,
                xl: 250,
                xxl: 350,
              }}
            />
          </div>
          <Modal  visible={isModalVisible} onOk={okHandler} onCancel={()=>{ setIsModalVisible(false); }}>
            <Upload accept=".jpg, .png" maxCount={1} onChange={onChangeHandler}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Modal>
        </Col>
        <Col span={12}>
          <div className={styles.parent}>
            <div>
              {editMode ? (
                <ProfileForm stopEditMod={toggleEditMode} {...props} />
              ) : (
                <ProfileText {...props} />
              )}
              {props.error && editMode ? (
                <div className={styles.alert}>{props.errorMes}</div>
              ) : null}
              {props.you && !editMode ? (
                <Button onClick={toggleEditMode}>edit profile</Button>
              ) : null}
              <div className={styles.secondParent}>
                {editMode ? null : <SocialLinks user={props.user} />}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Profile;
