import React from "react";
import { setThemeActionCreator } from "../../redux/actionCreators";
import { Switch } from "antd";
import { connect } from "react-redux";
const Settings = (props) =>{

    return(
        <div>
            <span style={props.user.theme? {color:"white"}:{color:"black"}}>Dark theme</span>
            <Switch defaultChecked={props.user.theme} onChange={(e)=>{props.changeTheme(e); 
            if(e){
                document.body.style.backgroundColor = "#002329"
            }else{
                document.body.style.backgroundColor = "#87e8de"
            }
            }} />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return({
        user:state.authReduser.user
    })
}
const mapDispatchToProps = (dispatch)=>{
    return({
        changeTheme:(theme)=>{
            dispatch(setThemeActionCreator(theme))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);