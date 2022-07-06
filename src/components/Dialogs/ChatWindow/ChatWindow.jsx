import React from "react";
import { sendMessActionCreator, tempMessActionCreator } from "../../../redux/state";
import classes from "./ChatWindow.module.css"



const ChatWindow = (props) => {
    const onChange = (e) =>{
        let text = e.target.value;
        
        props.dispatch(tempMessActionCreator(text))
    }
    const send = () =>{
        
        props.dispatch(sendMessActionCreator())
    }
    
    let messeages = props.data.messeages.map((b)=>{return(<div className={classes.item}>{b.text}</div>)})
    return(
        <div className={classes.root}>
            {messeages}
            <textarea onChange={onChange} value={props.data.temp}></textarea>
            <button onClick={send}>Send!</button>
        </div>
    )
}

export default ChatWindow