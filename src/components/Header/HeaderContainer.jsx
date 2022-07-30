import React from "react";
import { connect } from 'react-redux/es/exports';
import { authMe, getProfile, LogOut} from '../../redux/actionCreators';
import Header from "./Header";
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

class HeaderClass extends React.Component {

  componentDidMount() {
    this.props.authMe()
  }

  render() {

    return (<Header logout={this.props.logout} setProfile={this.props.getProfile} isLogin={this.props.isLogin} user={this.props.user} />)
  }
}




let mapDispatchToProps = (dispatch) => {
  return ({
    authMe: () => {
      dispatch(authMe())
    },
    getProfile:(id)=>{
      
      dispatch(getProfile(id))
    },
    logout:()=>{
      dispatch(LogOut())
    }

  })}
let mapStateToProps = (state) => {
  return ({
    user: state.authReduser.user,
    isLogin: state.authReduser.isLogin
  })
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderClass))


export default HeaderContainer