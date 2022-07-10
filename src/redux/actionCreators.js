const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"

export const tempPostActionCreator = (b) => {
    return {
      type: TEMP_POST,
      text: b,
    };
  };
  
  export const addPostActionCreator = () =>{
    return({
      type:ADD_POST
    })}
  
  
  export const tempMessActionCreator = (value) =>{
  return(
    {
      type:TEMP_MESS,
      text:value
    }
  )
  }
  
  export const sendMessActionCreator = () =>{
    return(
      {
        type:SEND_MESS
      }
    )
  }
  
export const followActionCreator = (id) =>{
  return(
    {
      type:FOLLOW,
      userId:id
    }
  )
}
export const unfollowActionCreator = (id) =>{
  return(
    {
      type:UNFOLLOW,
      userId:id
    }
  )
}

export const setUsersActionCreator = (users) =>{
  return({
    type:SET_USERS,
    users
  })
}