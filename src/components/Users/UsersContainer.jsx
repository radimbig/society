
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
  } from "../../redux/actionCreators";
import UsersPage from "./UsersPage";
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
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)
  
  
  
  
  
  
  
  
  
  
  
  
  
  export default UsersContainer;
  