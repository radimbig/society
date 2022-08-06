import React, { useState } from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import s from './Music.module.css'
const Music = (props) =>{
    let [bebra, setBebra] = useState(false)
    let funk = (e) =>{
        if(bebra === true){
            setBebra(false)
        }else{
            setBebra(true)
        }
    }
    console.log(bebra)
    return(
        <Container>
            <Row>
                {bebra? <div className={s.superForm}>
                    <button>123</button><br />
                    <button>123</button><br />
                    <input type="password" ></input><br />
                    <input type="email" ></input><br />
                </div>:null}
            </Row>
            <Row>
                <Col>
                <button onClick={funk}>
                    click me!
                </button>
                </Col>
            </Row>
        </Container>
    )
}

export default withAuthRedirect(Music);