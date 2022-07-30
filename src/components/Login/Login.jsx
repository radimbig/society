import React from "react";
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import s from "./Login.module.css"
import { Formik, Form, Field } from 'formik';
import { Alert } from "react-bootstrap";

const Login = (props) => {
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <LoginForm login={props.login} />

        </div>)
}



const LoginForm = (props) =>{
  let schema = yup.object({
    email:yup.string().email().required(),
    password:yup.string().required()
  })
    return(<Formik
    initialValues={{
      email:"",
      password:"",
      rememberMe:false
    }}
    validationSchema={schema}
    onSubmit={(values)=>{ props.login(values.email, values.password, values.rememberMe)}}
    
    validateOnMount={false}
    validateOnChange={false}
    validateOnBlur={true}
    >
      {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            isValid,
            isSubmitting
          }) =>{return(
          <Form >
            <h5>email</h5>
            <Field  name="email" /> 
            {errors.email && touched.email ?(<span> {errors.email}</span>):null} 
            {isSubmitting && isValid ?(<span>✔️</span>):null} 
            <h5>password</h5>
            <Field type="password" name="password" placeholder="*****" />
            {errors.password && touched.password ?(<span> {errors.password}</span>):null}
            {isSubmitting && isValid ?(<span>✔️</span>):null} <br />
            <span>Remember me!</span>
            <Field type="checkbox" name="rememberMe" />
            <span className={s.loginButton}>
            <Button disabled={errors.email || errors.password || !touched.email || !touched.password ? true:false} variant="success" type="submit" >Login</Button>
            </span>
            
          </Form>)}}
    </Formik>)}


export default Login