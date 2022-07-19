import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";
import SuperMyPosts from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import { setProfileActionCreator } from '../../redux/actionCreators';
import axios from "axios";




class ProfileClass extends React.Component {
  componentDidMount() {
      axios.get(`http://server.fsvsgroup.com:1880/profile?id=1`).then(
        (res)=>{
          
          this.props.setProfile(res.data.user)
        }
      )
  }

  render() {
    return (
      <div className={w.content}>
        <Profile user={this.props.profile} />
        <SuperMyPosts />
      </div>)
  }
}




let mapStateToProps = (state) =>{
  return({
    profile:state.profilePage.currentProfile
  })
}
let mapDispatchToProps = (dispatch) =>{
  return({
    setProfile:(profile)=>{
      
      dispatch(setProfileActionCreator(profile))
    }
  })
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileClass)


export default ProfileContainer