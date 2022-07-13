
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
  } from "../../redux/actionCreators";
import Users from "./Users.jsx";
import { connect } from "react-redux/es/exports";
  
  
  const mapStateToProps = (state) => ({users:state.usersPage.users})
  let mapDispatchToProps = (dispatch) =>{
      return({
          follow:(a) => {
            
            dispatch(followActionCreator(a))
        },
          unfollow:(b) => {
            
            dispatch(unfollowActionCreator(b))
        },
            setUsers:(users)=>{
              
                dispatch(setUsersActionCreator(users))
            }
      })
  
  }
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
  
  
  
  
  
  
  
  
  
  
  
  
  
  export default UsersContainer;
  