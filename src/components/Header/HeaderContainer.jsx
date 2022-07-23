import React from "react";

import { connect } from 'react-redux/es/exports';

import { setUserDataActionCreator, setUserPictureActionCreator } from '../../redux/actionCreators';

import Header from "./Header";
import { authAPI, profileAPI } from "../../api/api";
class HeaderClass extends React.Component{

  componentDidMount(){
     authAPI.authMe().then((data)=>{
      
        if(data.resultCode === 0){
          
          this.props.setUserData(data)
          
          this.setUserPicture(data.data.id)
        }
      
          


      })
  }
  setUserPicture = (id)=>{
    profileAPI.getProfile(id).then(data=>{
      if(data.photos.small !== null){
        this.props.setUserPicture(data.photos.small)
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