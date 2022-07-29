import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import classes from "./ChatWindow.module.css"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import * as Yup from 'yup'

const ChatWindow = (props) => {
    let formik = useFormik({
        initialValues: {
            mess: ""
        },
        onSubmit: (value) => { props.sendMess(value.mess); formik.resetForm() },
        validationSchema:Yup.object({
            mess: Yup.string().required("you cannot send empty message").max(150,"max 150 leters")
        }),
        validateOnBlur:false,
        validateOnChange:false
    })
    let messeages = props.messages.map((b) => { return (<div key={b.id} className={classes.item}>{b.text}</div>) })
    return (
        <>
            <Container>
                <Row>
                {messeages}           
                </Row>
                <Row>
                <form onSubmit={formik.handleSubmit}>
                <textarea name="mess" onChange={formik.handleChange} value={formik.values.mess}></textarea>
              
                <button type="submit">send</button><br></br>
                {formik.touched.mess && formik.errors.mess ? (<span>{formik.errors.mess}</span>): null }
            </form>
                </Row>
            </Container>
            

        </>

    )
}

export default ChatWindow

/*





*/