import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";

import { connect } from "react-redux";
import { getProfile, getStatus, updateProfile, setProfileErrorActionCreator} from '../../redux/actionCreators';
import { Navigate } from "react-router-dom";
import Error from "../common/Error/Error";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from './../common/Loader/Loader';
import { updateStatus, updateProfileImg } from './../../redux/actionCreators';
import debagger from "../debagger/Debbager";













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
  componentDidUpdate(prevProps, prevState){
    if(prevProps.router.params.id !== this.props.router.params.id){
      if(this.props.router.params.id === undefined){
        this.props.getProfile(this.props.currentUser.id)
      }else{
        this.props.getProfile(this.props.router.params.id)
      }
    }
  }
  state = {
    text:this.props.text
  }
  componentDidMount() {
   

  if(this.props.router.params.id !== undefined){
    this.props.getProfile(this.props.router.params.id)
    this.props.getStatus(this.props.router.params.id)
  }else{
    if(this.props.isLogin === true){
      this.props.getProfile(this.props.currentUser.id)
      this.props.getStatus(this.props.currentUser.id)
    }
      
    
  }
  }
  componentWillUnmount(){
    this.props.clearError()
  }
  render() {
    
    let you
   
    if(this.props.isFetching === true){
      return(<Loader />)
    }

    if(this.props.currentUser.id === this.props.profile.userId){you=true}else{you=false}


    if(this.props.profile.fullName === undefined){
      return(<Error text="Profile Not Found" />)
    }else{
          return (
      <div className={w.content}>
        <Profile clearError={this.props.clearError} you={you} error={this.props.error} errorMes={this.props.errorMes} updateProfile={this.props.updateProfile} owner={this.props.currentUser} updateImg={this.props.updateImg} getStatus={this.props.getStatus} status={this.props.status}  updateStatus={this.props.updateStatus} isLogin={this.props.isLogin} user={this.props.profile} />       
      </div>)
    }

  }
}




let mapStateToProps = (state) =>{
  return({
    profile:state.profilePage.currentProfile,
    status:state.profilePage.currentProfile.status,
    isLogin:state.authReduser.isLogin,
    currentUser:state.authReduser.user,  
    isFetching: state.profilePage.isFetching,
    error:state.profilePage.error,
    errorMes:state.profilePage.errorMes
  })
}
let mapDispatchToProps = (dispatch) =>{
  return({
    getProfile:(id)=>{
      dispatch(getProfile(id))
    },
    updateStatus:(text)=>{
      dispatch(updateStatus(text))
    },
    getStatus: (id)=>{
      dispatch(getStatus(id))
    },
    updateImg:(img)=>{
      dispatch(updateProfileImg(img))
    },
    updateProfile:(profile)=>{
      dispatch(updateProfile(profile))
    },
    clearError:()=>{
      dispatch(setProfileErrorActionCreator({resultCode:0}))
    }
  })
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileClass))


export default ProfileContainer