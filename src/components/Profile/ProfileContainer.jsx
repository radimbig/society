import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";

import { connect } from "react-redux";
import { getProfile} from '../../redux/actionCreators';

import Error from "../common/Error/Error";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Loader from './../common/Loader/Loader';

import { updateStatus } from './../../redux/actionCreators';



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
  if(this.props.router.params.id !== undefined){
    this.props.getProfile(this.props.router.params.id)
  }else{
    this.props.getProfile(24856)
  }
  }
  
  render() {
    let you
    let ProfileSuper = withAuthRedirect(Profile)
    if(this.props.isFetching === true){
      return(<Loader />)
    }
    if(this.props.currentUser.id === this.props.profile.userId){you=true}else{you=false}


    if(this.props.profile.fullName === undefined){
      return(<Error text="Profile Not Found" />)
    }else{
          return (
      <div className={w.content}>
        {you? <div>it`s you</div>:<div>it`s not your profile</div>}
        <ProfileSuper you={you} updateStatus={this.props.updateStatus} isLogin={this.props.isLogin} user={this.props.profile} />
       
       
      </div>)
    }

  }
}




let mapStateToProps = (state) =>{
  return({
    profile:state.profilePage.currentProfile,
    isLogin:state.authReduser.isLogin,
    currentUser:state.authReduser.user,  
    isFetching: state.profilePage.isFetching
  })
}
let mapDispatchToProps = (dispatch) =>{
  return({
    getProfile:(id)=>{
      dispatch(getProfile(id))
    },
    updateStatus:(text)=>{
      dispatch(updateStatus(text))
    }
  })
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileClass))


export default ProfileContainer