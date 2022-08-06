import React from "react";
import {useFormik, Field} from 'formik'
import * as yup from 'yup'



const ProfileForm = (props) =>{
    let schema = yup.object({
        fullName:yup.string().min(1).max(15, "your full name is very big, max 15").required(),
    })
    let userCopy = JSON.parse(JSON.stringify(props.user))
    
    let formik = useFormik({
        initialValues:props.user,
        onSubmit: values =>{
            props.stopEditMod()    
            props.updateProfile(values)
        },
        validationSchema:schema
    })
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input onChange={formik.handleChange} value={formik.values.fullName} name="fullName" />
            </div>
            <div>
                <select id="lookingForAJob" value={formik.values.lookingForAJob} onChange={formik.handleChange}>
                    <option value={true}>yes</option>
                    <option value={false}>no</option>
                </select>
                <div><input placeholder="your job description" onChange={formik.handleChange} id="lookingForAJobDescription" value={formik.values.lookingForAJobDescription} /></div> 

            </div>
            <div>
                <input placeholder="something you" onChange={formik.handleChange} id="aboutMe" value={formik.values.aboutMe}  />
            </div>
            <div>
                <input placeholder="your github" onChange={formik.handleChange} value={formik.values.contacts.github} name="contacts.github" />
            </div>
            <div>
                <input placeholder="your instagram" onChange={formik.handleChange} value={formik.values.contacts.instagram} name="contacts.instagram" />
            </div>
            <div>
                <input placeholder="your facebook" onChange={formik.handleChange} value={formik.values.contacts.facebook} name="contacts.facebook" />
            </div>
            {!formik.isValid && formik.touched ? <div>{formik.errors.fullName}</div>:null}
            <button disabled={formik.isValid ? false:true} type="submit">Submit</button>
        </form>
    </div>
}


export default ProfileForm