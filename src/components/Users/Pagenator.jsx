import React from "react";
import styles from "./Users.module.css";
import { useState } from "react";






const Pagenator = (props) =>{
    let [isvalid, setValid] = useState(true)
    let [editMode, setEditMode] = useState(true)
    let onChangeHandler = (e)=>{
        if(e.target.value > props.pagesCount){
          setValid(false)
        }else{
          setValid(true)
        }
        props.onChange(e.target.value)
      }
      let keyDownFun = (e) => {
        if (e.key === 'Enter' && isvalid) {
          props.setPage()
        }
      }
    let karusel = <div  onDoubleClick={()=>{if(editMode === false){setEditMode(true)}else{setEditMode(false)}}}>
    <span className={styles.smalNum}>{parseInt(props.temp) -1 === 0 ?  null:parseInt(props.temp) - 1 }</span> 
      <span className={styles.mainNub}>{parseInt(props.temp)}</span>
    <span className={styles.smalNum}>{parseInt(props.temp) === props.pagesCount ? null : parseInt(props.temp) + 1 }</span>
  </div>
    return(
        <>
    {editMode ? <input autoFocus onKeyDown={keyDownFun} onChange={onChangeHandler} value={props.temp} type=""></input>:null}
      <button disabled={isvalid ? false:true} onKeyDown={keyDownFun} onClick={props.setPage}>Go to page!</button>
      <div>
        <input onKeyDown={keyDownFun} onChange={onChangeHandler} value={props.temp}  type="range" min="1" step={1} max={props.pagesCount}></input>
            {isvalid ? karusel : null}
      </div>
        </>
    )
}



export default Pagenator