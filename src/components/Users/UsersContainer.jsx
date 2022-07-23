import React from "react";
import {
    followActionCreator,
    setCountActionCreator,
    setFetchActionCreator,
    setPageActionCreator,
    setPagesCountActionCreator,
    setTempPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
  } from "../../redux/actionCreators";

import { connect } from "react-redux/es/exports";

import PureUsers from "./Users";
import { userAPI } from "../../api/api";


  
  const mapStateToProps = (state) => ({
    temp:state.usersPage.temp,
    users:state.usersPage.users,
    currentPage:state.usersPage.currentPage,
    usersPerPage:state.usersPage.usersPerPage,
    usersCount: state.usersPage.usersCount,
    pagesCount:state.usersPage.pagesCount,
    isFetching:state.usersPage.isFetching,
    isLogin:state.authReduser.isLogin
  })
  let mapDispatchToProps = (dispatch) =>{
      return({
        
        onchange:(a) =>{
          dispatch(setTempPageActionCreator(a))
        },
          follow:(a) => {

            dispatch(followActionCreator(a))
            
        },
          unfollow:(b) => {
            
            dispatch(unfollowActionCreator(b))
            

        },
            setFetch:(value)=>{
              dispatch(setFetchActionCreator(value))
            },
            setUsers:(users)=>{
                  
                dispatch(setUsersActionCreator(users))
            },
            setPage:(number)=>{
              
              dispatch(setPageActionCreator(number))
            },
            setPagesCount:(number)=>{
              dispatch(setPagesCountActionCreator(number))
            },
            setCount:(number)=>{
              dispatch(setCountActionCreator(number))
            }
      })
  
  }

  class UsersAPI extends React.Component {
    componentDidMount() {

      if (this.props.users.length === 0) {
        this.props.setFetch(true)
        userAPI.getUser(this.props.currentPage,this.props.usersPerPage).then((data) => {
          this.props.setUsers(data.items);
          let temp = data.totalCount;
          this.props.setCount(temp)
          
          let pagesCount = Math.ceil(temp/this.props.usersPerPage);
          this.props.setPagesCount(pagesCount)
          
        });
      }
 
      this.props.setFetch(false)
    }
    setPage = (number=this.props.temp) =>{
     this.props.setFetch(true)
    this.props.setPage(parseInt(number))
    userAPI.getUser(number, this.props.usersPerPage).then((data) => {
      
      this.props.setUsers(data.items)
      this.props.setFetch(false)
    });
    }
    render() {return(
      
      
      <PureUsers 

      onChange={this.props.onchange}
      temp={this.props.temp}
      isFetching={this.props.isFetching}
      setPage={this.setPage}
      users={this.props.users}
      currentPage = {this.props.currentPage}
      pagesCount={this.props.pagesCount}
      unfollow={this.props.unfollow}
      follow={this.props.follow}  
      usersCount={this.props.usersCount}
      isLogin={this.props.isLogin}

      />
    )}
  }

  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
  
  
  
  
  // currentPage:1,
  // usersPerPage:3,
  // usersCount:5
  
  
  
  
  
  
  
  
  export default UsersContainer;
  