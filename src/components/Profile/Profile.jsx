import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import icoM from "../../assets/icoM/avaM.png";
import { Row, Col, Image, Avatar } from "antd";
import SocialLinks from "./SocialLinks";
import ProfileForm from "./Form";
import ProfileText from "./ProfileInfo";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Modal, Form } from "antd";

const Profile = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [editMode, setEditMode] = useState(false);
  let newPicture;
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
  let okHandler = () => {
    props.updateImg(newPicture);
    setIsModalVisible(false);
  };
  let onChangeHandler = (e) => {
    newPicture = e.file.originFileObj;
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
          <div>
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
          <Modal
          bodyStyle={props.owner.theme ? {backgroundColor:"#00474f"}:{}}
          footer={false}
            visible={isModalVisible}
            onOk={okHandler}
            onCancel={() => {
              setIsModalVisible(false);
            }}
          >
            <Row>
              <Upload 
              listType='picture'
              onDrop={onChangeHandler}
              style={{backgroundColor:"black"}}
                accept=".jpg, .png"
                maxCount={1}
                onChange={onChangeHandler}
              >
                <Button   icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Row>
            <Row justify='end'>
                <Button onClick={() => {
              setIsModalVisible(false);
            }} ghost={props.owner.theme}>Cancel</Button>
                <Button
                onClick={okHandler}
                ghost={props.owner.theme}>Ok</Button>
            </Row>
          </Modal>
        </Col>
        <Col span={12}>
          <div className={styles.parent}>
            <div>
              <ProfileText {...props} />
              {props.you ? (
                <Button ghost={props.owner.theme} onClick={toggleEditMode}>
                  edit profile
                </Button>
              ) : null}
              <div className={styles.secondParent}>
                <SocialLinks user={props.user} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row></Row>
      <Modal
        bodyStyle={props.owner.theme ? {backgroundColor:"#00474f"}:{}}
        footer={null}
        onCancel={() => {
          setEditMode(false);
        }}
        visible={editMode}
      >
        <ProfileForm {...props} stopEditMod={toggleEditMode} />
      </Modal>
    </>
  );
};

export default Profile;
