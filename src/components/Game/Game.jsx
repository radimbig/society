import React, { useState } from "react";
import { Col, Row } from "antd";



const Game = (props) => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    let keyDownFun = (e) => {
       
        if (e.key === "a") {
            
            setCount(count + 1)
        }
        if (e.key === "l") {
            
            setCount2(count2 + 1)
        }

    }
    return (
        <div  >
            Here my temp game!
            rule:<br />
            Press A to +1 point to left side <br />
            press L to +1 point to right side <br />
            For playing you have to click to the input
           
                <Row>
                        <Col className="justify-content-center">
                        <input value={""} placeholder="******" onKeyDown={keyDownFun}>
                        </input>
                        <button onClick={()=>{setCount(0); setCount2(0)}} >restart game</button>
                        </Col>
                        <Col>
                            <span>{count}</span>
                        </Col>
                        <Col>
                            <span>{count2}</span>
                        </Col>
                </Row>
           
        </div>
    )
}

export default Game;