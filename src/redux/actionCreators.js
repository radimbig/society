const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"
const ADD_USERS = "ADD_USERS"
const SET_PAGE = "SET_PAGE"
const SET_PAGES_COUNT = "SET_PAGES_COUNT"
const SET_COUNT = "SET_COUNT"
const SET_FETCH = "SET_FETCH"
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
export const addUsersActionCreator = (users) =>{
  return({
    type:ADD_USERS,
    users
  })
}

export const setPageActionCreator = (number) =>{
  return({
    type:SET_PAGE,
    number
  })
}

export const setPagesCountActionCreator = (number) =>{
  return(
    {
      type:SET_PAGES_COUNT,
      number
    }
  )
}
export const setCountActionCreator = (number) =>{
  return({
    type:SET_COUNT,
    number
  })
}

export const setFetchActionCreator = (value) =>{
  return({
    type:SET_FETCH,
    value
  })
}