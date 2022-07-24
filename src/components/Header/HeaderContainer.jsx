import React from "react";

import { connect } from 'react-redux/es/exports';

import { authMe} from '../../redux/actionCreators';

import Header from "./Header";

class HeaderClass extends React.Component {

  componentDidMount() {
    this.props.authMe()
  }

  render() {

    return (<Header isLogin={this.props.isLogin} user={this.props.user} />)
  }
}




let mapDispatchToProps = (dispatch) => {
  return ({
    authMe: () => {
      dispatch(authMe())
    }})
}
let mapStateToProps = (state) => {
  return ({
    user: state.authReduser.user,
    isLogin: state.authReduser.isLogin
  })
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass)


export default HeaderContainer