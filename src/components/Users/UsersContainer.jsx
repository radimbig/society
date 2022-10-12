import React from "react";
import {
  follow,
  setTempPageActionCreator,
  unfollow,
  getUser,
} from "../../redux/actionCreators";

import { connect } from "react-redux/es/exports";

import PureUsers from "./Users";

const mapStateToProps = (state) => ({
  temp: state.usersPage.temp,
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  usersPerPage: state.usersPage.usersPerPage,
  usersCount: state.usersPage.usersCount,
  pagesCount: state.usersPage.pagesCount,
  isFetching: state.usersPage.isFetching,
  isLogin: state.authReduser.isLogin,
  user: state.authReduser.user,
});
let mapDispatchToProps = (dispatch) => {
  return {
    getUser: (a, b) => {
      dispatch(getUser(a, b));
    },
    onchange: (a) => {
      dispatch(setTempPageActionCreator(a));
    },
    follow: (a) => {
      dispatch(follow(a));
    },
    unfollow: (b) => {
      dispatch(unfollow(b));
    },
  };
};

class UsersAPI extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUser(this.props.usersPage, this.props.usersPerPage);
    }
  }
  setPage = () => {
    this.props.getUser(parseInt(this.props.temp), this.props.usersPerPage);
  };
  render() {
    return (
      <PureUsers
        user={this.props.user}
        onChange={this.props.onchange}
        temp={this.props.temp}
        isFetching={this.props.isFetching}
        setPage={this.setPage}
        users={this.props.users}
        currentPage={this.props.currentPage}
        pagesCount={this.props.pagesCount}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        usersCount={this.props.usersCount}
        isLogin={this.props.isLogin}
      />
    );
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

// currentPage:1,
// usersPerPage:3,
// usersCount:5

export default UsersContainer;
