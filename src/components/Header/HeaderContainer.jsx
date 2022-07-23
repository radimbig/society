import React from "react";
import classes from "./Header.module.css";
import { connect } from 'react-redux/es/exports';
import logos from "../../assets/logo/logo.png"
import { setUserDataActionCreator, setUserPictureActionCreator } from '../../redux/actionCreators';
import axios from "axios";
import Header from "./Header";
class HeaderClass extends React.Component{

  componentDidMount(){
      axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials:true}).then((res)=>{
      
        if(res.data.resultCode === 0){
          
          this.props.setUserData(res.data)
          
          this.setUserPicture(res.data.data.id)
        }
      
          


      })
  }
  setUserPicture = (id)=>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(res=>{
      if(res.data.photos.small !== null){
        this.props.setUserPicture(res.data.photos.small)
      }else{
        this.props.setUserPicture("default")
      }
      
    })
  }
  render(){

    return(<Header isLogin={this.props.isLogin} user={this.props.user} />)
  }
}




let mapDispatchToProps = (dispatch)=>{
  return({
    setUserData:(data)=>{
      dispatch(setUserDataActionCreator(data))
    },
    setUserPicture:(link)=>{
      dispatch(setUserPictureActionCreator(link))
    }
  })
}
let mapStateToProps = (state)=>{
return({
 user:state.authReduser.user,
 isLogin:state.authReduser.isLogin
})
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass)


export default HeaderContainer