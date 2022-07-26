import { userAPI, authAPI, profileAPI } from "../api/api";
const TEMP_POST = "TEMP_POST";
const ADD_POST = "ADD_POST";
const SET_PROFILE ="SET_PROFILE"
const SET_TEMP_PAGE = "SET_TEMP_PAGE"
const TEMP_MESS = "TEMP_MESS"
const SEND_MESS = "SEND_MESS"
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"
const ADD_USERS = "ADD_USERS"
const SET_PAGE = "SET_PAGE"
const SET_PAGES_COUNT = "SET_PAGES_COUNT"
const SET_COUNT = "SET_COUNT"
const SET_FETCH = "SET_FETCH"
const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_PICTURE ="SET_USER_PICTURE"
const SET_PROFILE_FETCHING = "SET_PROFILE_FETCHING"
const SET_STATUS = "SET_STATUS"

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
    type:SET_PAGE
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

export const setProfileActionCreator = (profile) =>{
  return({
    type:SET_PROFILE,
    profile
  })

}

export const setTempPageActionCreator = (number) =>{
  return{
    type:SET_TEMP_PAGE,
    temp:number
  }
}



export const setUserDataActionCreator = (data) =>{
  return({
    type:SET_USER_DATA,
   data
  })
}     

export const setUserPictureActionCreator = (link)=>{
  return({
    type:SET_USER_PICTURE,
    picture:link
  })
}
export const setProfileFetchingActionCreator = (value)=>{
  return({
    type:SET_PROFILE_FETCHING,
    value
  })
}

export const setProfileStatusActionCreator = text =>{
  return({
    type:SET_STATUS,
    text
  })
}

export const getUser = (page = 1, count = 5) => {
  return (dispatch) => {
    dispatch(setFetchActionCreator(true))
    userAPI.getUser(page,count).then((data) => {
      dispatch(setUsersActionCreator(data.items)) ;
      let temp = data.totalCount;
      dispatch(setCountActionCreator(temp))
      let pagesCount = Math.ceil(temp/count);
     dispatch(setPagesCountActionCreator(pagesCount))
     dispatch(setFetchActionCreator(false))
    });
  
  }
}

export const follow = (userId)=>{
  return (dispatch)=>{
    userAPI.follow(userId).then((data)=>{
      if (data.resultCode === 0) {
       dispatch(followActionCreator(userId))
      }
    })
  }
}
export const unfollow = (userId)=>{
  return (dispatch)=>{
    userAPI.unfollow(userId).then((data)=>{
      if (data.resultCode === 0) {
       dispatch(unfollowActionCreator(userId))
      }
    })
  }
}

export const getProfile = (id) =>{
  return (dispatch)=>{
    dispatch(setProfileFetchingActionCreator(true))
    profileAPI.getProfile(id).then(res=>{
      dispatch(setProfileActionCreator(res))
      
    })
    profileAPI.getStatus(id).then(data=>{
      dispatch(setProfileStatusActionCreator(data))
      dispatch(setProfileFetchingActionCreator(false))
      
    })
  }
}
export const updateStatus = (text)=>{
  return (dispatch)=>{
    profileAPI.updateStatus(text).then(data=>{if(data.resultCode === 0){
      dispatch(setProfileStatusActionCreator(text))
    }})
    
  }
}

export const authMe = ()=>{
  return (dispatch)=>{
    dispatch(setProfileFetchingActionCreator(true))
    let setUserPicture = (id)=>{
      profileAPI.getProfile(id).then(data=>{
        if(data.photos.small !== null){
          dispatch(setUserPictureActionCreator(data.photos.small))
        }else{
          dispatch(setUserPictureActionCreator("default"))
        }
        dispatch(setProfileFetchingActionCreator(false))
      })
    }
    authAPI.authMe().then(data=>{
      if(data.resultCode === 0){
        dispatch(setUserDataActionCreator(data))
        setUserPicture(data.data.id)
      }
    })
  }
}

