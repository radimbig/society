import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input, Select } from "antd";
import {GithubOutlined, FacebookOutlined, InstagramOutlined } from "@ant-design/icons"
import c from './Profile.module.css'

const ProfileForm = (props) => {
const { Option } = Select;
  let schema = yup.object({
    fullName: yup
      .string()
      .min(1)
      .max(15, "your full name is very big, max 15")
      .required(),
  });
  let style = {
    marginTop:"10px"
  }
  let style2 = {
    marginRight:"10px"
  }
 
  let UserCopy = JSON.parse(JSON.stringify(props.user))
  if(UserCopy.contacts.github !== null){
    UserCopy = {
      ...UserCopy,
      contacts:{...UserCopy.contacts,
      github:UserCopy.contacts.github.slice(19)
      }
    }
  }
  if(UserCopy.contacts.instagram !== null){
    UserCopy = {
      ...UserCopy,
      contacts:{...UserCopy.contacts,
      instagram:UserCopy.contacts.instagram.slice(22)
      }
    }
  }
  if(UserCopy.contacts.facebook !== null){
    UserCopy = {
      ...UserCopy,
      contacts:{...UserCopy.contacts,
      facebook:UserCopy.contacts.facebook.slice(21)
      }
    }
  }


  let formik = useFormik({
    initialValues: UserCopy,
    onSubmit: (values) => {
      props.stopEditMod();
      console.log(values)
      
      props.updateProfile({...values,
        contacts:{
          github:`https://github.com/${values.contacts.github}`,
          instagram:`https://instagram.com/${values.contacts.instagram}`,
          facebook:`https://facebook.com/${values.contacts.facebook}`
        }
      });
    },
    validationSchema: schema,
  });
  return (
    <div className={c.form}>
      <form onSubmit={formik.handleSubmit}>
        <div style={style}>
          <Input
            onChange={formik.handleChange}
            value={formik.values.fullName}
            name="fullName"
          />
        </div>
        <div style={style}>
            <span style={style2}>Are you looking for job?</span>
          <Select
            id="lookingForAJob"
            
            value={formik.values.lookingForAJob}
            onChange={(e) => {
              formik.setFieldValue("lookingForAJob", e);
            }}
          >
            <Option value={true}>yes</Option>
            <Option value={false}>no</Option>
          </Select>
          <div style={style}>
            <Input
              disabled={!formik.values.lookingForAJob}
              placeholder="your job description"
              onChange={formik.handleChange}
              id="lookingForAJobDescription"
              value={formik.values.lookingForAJobDescription}
            />
          </div>
        </div>
        <div style={style}>
        
          <Input
            placeholder="something about you"
            onChange={formik.handleChange}
            id="aboutMe"
            value={formik.values.aboutMe}
          />
        </div>
        <div style={style}>
          <Input
            addonBefore="https://github.com/"
           status={props.errorMes.includes("Invalid url format (Contacts->Github)") ? "error" : null}
            suffix={<GithubOutlined />}
            placeholder="your github"
            onChange={formik.handleChange}
            value={formik.values.contacts.github}
            name="contacts.github"
          />
        </div>
        <div style={style}>
          <Input
          addonBefore="https://instagram.com/"
          status={props.errorMes.includes("Invalid url format (Contacts->Instagram)") ? "error" : null}
            suffix={<InstagramOutlined />}
            placeholder="your instagram"
            onChange={formik.handleChange}
            value={formik.values.contacts.instagram}
            name="contacts.instagram"
          />
        </div>
        <div style={style}>
          <Input
            addonBefore="https://facebook.com/"
          status={props.errorMes.includes("Invalid url format (Contacts->Facebook)") ? "error" : null}
            suffix={<FacebookOutlined />}
            placeholder="your facebook"
            onChange={formik.handleChange}
            value={formik.values.contacts.facebook}
            name="contacts.facebook"
          />
        </div>  
        <Button

          style={{ width: "100%", marginTop:"10px" }}
          disabled={formik.isValid ? false : true}
          onClick={formik.handleSubmit}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
