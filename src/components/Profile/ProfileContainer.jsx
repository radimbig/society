import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";
import SuperMyPosts from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import { setProfileActionCreator } from '../../redux/actionCreators';
import axios from "axios";
import Error from "../common/Error/Error";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";


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
      console.log(this.props.router.params)
      axios.get(`http://server.fsvsgroup.com:1880/profile?id=${this.props.router.params[Object.keys(this.props.router.params)[0]]}`).then(
        (res)=>{
          
          this.props.setProfile(res.data.user)
        }
      )
  }

  render() {
    if(this.props.profile.name === undefined){
      return(<Error text="Profile Not Found" />)
    }else{
          return (
      <div className={w.content}>
        <Profile  user={this.props.profile} />
        <SuperMyPosts />
      </div>)
    }

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



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileClass))


export default ProfileContainer