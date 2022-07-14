
import {
    followActionCreator,
    setCountActionCreator,
    setPageActionCreator,
    setPagesCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
  } from "../../redux/actionCreators";
import Users from "./Users.jsx";
import { connect } from "react-redux/es/exports";
import axios from "axios";
  
  
  const mapStateToProps = (state) => ({
    users:state.usersPage.users,
    currentPage:state.usersPage.currentPage,
    usersPerPage:state.usersPage.usersPerPage,
    usersCount: state.usersPage.usersCount,
    pagesCount:state.usersPage.pagesCount
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
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
  
  
  
  
  // currentPage:1,
  // usersPerPage:3,
  // usersCount:5
  
  
  
  
  
  
  
  
  export default UsersContainer;
  