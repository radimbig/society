import React from "react";

import w from "./Profile.module.css"
import Profile from "./Profile";

import { connect } from "react-redux";
import { getProfile} from '../../redux/actionCreators';

import Error from "../common/Error/Error";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Loader from './../common/Loader/Loader';
import Status from "./Status/Status";



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
    let ProfileSuper = withAuthRedirect(Profile)
    if(this.props.isFetching === true){
      return(<Loader />)
    }



    if(this.props.profile.fullName === undefined){
      return(<Error text="Profile Not Found" />)
    }else{
          return (
      <div className={w.content}>
        
        <ProfileSuper isLogin={this.props.isLogin} user={this.props.profile} />
       
       
      </div>)
    }

  }
}




let mapStateToProps = (state) =>{
  return({
    profile:state.profilePage.currentProfile,
    isLogin:state.authReduser.isLogin,
    isFetching: state.profilePage.isFetching
  })
}
let mapDispatchToProps = (dispatch) =>{
  return({
    getProfile:(id)=>{
      dispatch(getProfile(id))
    }
  })
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileClass))


export default ProfileContainer