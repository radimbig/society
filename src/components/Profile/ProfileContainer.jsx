import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";
import SuperMyPosts from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import { setProfileActionCreator } from '../../redux/actionCreators';

import Error from "../common/Error/Error";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { profileAPI } from "../../api/api";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


class ProfileClass extends React.Component {
  componentDidMount() {
    if(this.props.router.params.id === undefined & this.props.router.params.id ===""){
      profileAPI.getProfile(2).then(
        (data)=>{
          this.props.setProfile(data)
        }
      )
    }else{
      profileAPI.getProfile(this.props.router.params.id).then(
        (data)=>{
          this.props.setProfile(data)
        }
      )
    }
  
  }

  render() {
    
    if(this.props.router.params.id === undefined){
      profileAPI.getProfile(24856).then(
        (data)=>{
          this.props.setProfile(data)
        }
      )
    }


    if(this.props.profile.fullName === undefined){
      return(<Error text="Profile Not Found" />)
    }else{
          return (
      <div className={w.content}>
        <Profile  user={this.props.profile} />
        
      </div>)
    }

  }
}




let mapStateToProps = (state) =>{
  return({
    profile:state.profilePage.currentProfile,
   
    
  })
}
let mapDispatchToProps = (dispatch) =>{
  return({
    setProfile:(profile)=>{
      
      dispatch(setProfileActionCreator(profile))
    }
  })
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileClass))


export default ProfileContainer