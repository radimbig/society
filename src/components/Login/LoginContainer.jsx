import React from "react";
import Login from "./Login";
import { connect } from 'react-redux/es/exports';
import Loader from "../common/Loader/Loader";
import { loginMe } from "../../redux/actionCreators";
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component{


    render(){
        if(this.props.isLogin === true){
            return(<Navigate to="/profile" />)
        }
       if(this.props.isFetching){
        return(<Loader />)
       }else{
        return(<Login login={this.props.login} isLogin={this.props.isLogin} />)
       }
        
    }
}

let mapStateToProps = (state)=>{
    return({
        isLogin:state.authReduser.isLogin,
        isFetching:state.authReduser.isFetching
    })
}
let mapDispatchToProps = (dispatch)=>{
    return({
        login:(email, password, rememberMe, captcha)=>{
            dispatch(loginMe(email, password, rememberMe, captcha))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)