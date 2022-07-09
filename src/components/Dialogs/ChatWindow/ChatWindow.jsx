import React from "react";

import classes from "./ChatWindow.module.css"



const ChatWindow = (props) => {
    const onChange = (e) =>{
        let text = e.target.value;
        
        props.onChange(text)
    }
    const send = () =>{
        
        props.sendMess()
    }
    
    let messeages = props.messages.map((b)=>{return(<div key={b.id} className={classes.item}>{b.text}</div>)})
    return(
        <div className={classes.root}>
            {messeages}
            <textarea onChange={onChange} value={props.temp}></textarea>
            <button onClick={send}>Send!</button>
        </div>
    )
}

export default ChatWindow