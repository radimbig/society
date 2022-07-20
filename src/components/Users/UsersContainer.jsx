import React from "react";
import {
    followActionCreator,
    setCountActionCreator,
    setFetchActionCreator,
    setPageActionCreator,
    setPagesCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
  } from "../../redux/actionCreators";

import { connect } from "react-redux/es/exports";
import axios from "axios";
import PureUsers from "./Users";



  
  const mapStateToProps = (state) => ({
    users:state.usersPage.users,
    currentPage:state.usersPage.currentPage,
    usersPerPage:state.usersPage.usersPerPage,
    usersCount: state.usersPage.usersCount,
    pagesCount:state.usersPage.pagesCount,
    isFetching:state.usersPage.isFetching
  })
  let mapDispatchToProps = (dispatch) =>{
      return({
          follow:(a) => {
            
            dispatch(followActionCreator(a))
            axios.get(`http://server.fsvsgroup.com:1880/update?value=1&id=${parseInt(a)}`)
        },
          unfollow:(b) => {
            
            dispatch(unfollowActionCreator(b))
            axios.get(`http://server.fsvsgroup.com:1880/update?value=1&id=${parseInt(b)}`)

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
        axios.get(`http://server.fsvsgroup.com:1880/user?page=${this.props.currentPage}&count=${this.props.usersPerPage}`).then((res) => {
          this.props.setUsers(res.data);
          
        });
      }
      axios.get("http://server.fsvsgroup.com:1880/count").then((res)=>{
        let temp = res.data[0].usersCount;
        this.props.setCount(temp)
        
        let pagesCount = Math.ceil(temp/this.props.usersPerPage);
        this.props.setPagesCount(pagesCount)
      })
      this.props.setFetch(false)
    }
    setPage = (number) =>{
     this.props.setFetch(true)
    this.props.setPage(parseInt(number))
    axios.get(`http://server.fsvsgroup.com:1880/user?page=${parseInt(number)}&count=${this.props.usersPerPage}`).then((res) => {
      
      this.props.setUsers(res.data)
      this.props.setFetch(false)
    });
    }
    render() {return(
      
      
      <PureUsers 
      isFetching={this.props.isFetching}
      setPage={this.setPage}
      users={this.props.users}
      currentPage = {this.props.currentPage}
      pagesCount={this.props.pagesCount}
      unfollow={this.props.unfollow}
      follow={this.props.follow}  
      />
    )}
  }

  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
  
  
  
  
  // currentPage:1,
  // usersPerPage:3,
  // usersCount:5
  
  
  
  
  
  
  
  
  export default UsersContainer;
  