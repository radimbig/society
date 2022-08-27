import React from "react";
import styles from "./Users.module.css";
import { useState } from "react";
import {Slider, Row, Col} from 'antd'



type Props = {
  pagesCount:number
  setPage: () =>void
  temp:number
  onChange:(pageNumber:number) =>void
}

const Pagenator: React.FC<Props> = ({pagesCount, setPage, temp, onChange}) =>{
    let [isvalid, setValid] = useState(true)
    let [editMode, setEditMode] = useState(true)
    let onChangeHandler = (e:any)=>{
        if(e.target.value > pagesCount){
          setValid(false)
        }else{
          setValid(true)
        }
        onChange(parseInt(e.target.value))
      }
      let keyDownFun = (e:any) => {
        if (e.key === 'Enter' && isvalid) {
          setPage()
        }
      }
    let karusel = <div  onDoubleClick={()=>{if(editMode === false){setEditMode(true)}else{setEditMode(false)}}}>

  </div>
    return(
        <>
    {editMode ? <input autoFocus onKeyDown={keyDownFun} onChange={onChangeHandler} value={temp} type=""></input>:null}
      <button disabled={isvalid ? false:true} onKeyDown={keyDownFun} onClick={setPage}>Go to page!</button>
      <div>
        <Row>
          <Col onKeyDown={keyDownFun} span={3}>
          <Slider  step={1} defaultValue={temp} min={1} max={pagesCount} onChange={onChange} />
          </Col>
        </Row>
        {isvalid ? karusel : null}
      </div>
        </>
    )
}



export default Pagenator