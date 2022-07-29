import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import styles from '../Profile.module.css'


const MessForm = (props)=>{

    let formik = useFormik({
        initialValues: {
            MESS:""
        },
        validationSchema:Yup.object({
            MESS:Yup.string().min(1, "You cannot send empty post").max(100, "Max 100 leters").required("You cannot post empty")
        }),
        onSubmit: values => {props.addPost(values.MESS); formik.resetForm();},
        validateOnBlur:false,
        validateOnChange:false
      });
     return(
        <form onSubmit={formik.handleSubmit}>
            <textarea name="MESS" value={formik.values.MESS} onChange={formik.handleChange} ></textarea>
            
            <button type='submit' >post!</button><br />
            {formik.touched.MESS && formik.errors.MESS ? (<span className={styles.alert}>{formik.errors.MESS}</span>) : null}
        </form>
     )
      
}


export default MessForm