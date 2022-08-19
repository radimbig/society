import { userAPI, authAPI, profileAPI } from "../api/api";
import { message } from 'antd';
import Debagger from "../components/debagger/Debbager";
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
const SET_AUTH_FETCHING = "SET_AUTH_FETCHING"
const SET_AUTH_ERROR = "SET_AUTH_ERROR"
const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE"
const SET_PROFILE_ERROR = "SET_PROFILE_ERROR"

export const tempPostActionCreator =  (b) => {
    return {
      type: TEMP_POST,
      text: b,
    };
  };
  
  export const addPostActionCreator = (text) =>{
    return({
      type:ADD_POST,
      text
    })}
  
  
  export const tempMessActionCreator = (value) =>{
  return(
    {
      type:TEMP_MESS,
      text:value
    }
  )
  }
  
  export const sendMessActionCreator = (text) =>{
    return(
      {
        type:SEND_MESS,
        text
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
export const setAuthFetchingActionCreator = value =>({
  type:SET_AUTH_FETCHING,
  value
})
export const setAuthErrorActionCreator = (error, captcha) =>{
  return({
    type:SET_AUTH_ERROR,
    error,
    captcha
  })
}


export const setProfilePictureActionCreator = (img) =>{
  return({
    type:SET_PROFILE_PICTURE,
    img
  })

}
export const setProfileErrorActionCreator = (error) =>{
return({
  type:SET_PROFILE_ERROR,
  error
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
      dispatch(setPageActionCreator())
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
      dispatch(getStatus(id))
      dispatch(setProfileFetchingActionCreator(false))
    })
  }
}

export const getStatus = (id)=>{
  return (dispatch)=>{
    dispatch(setProfileFetchingActionCreator(false))
    profileAPI.getStatus(id).then(data=>{
      
      if(data.data !== undefined & data.status === 200){
        dispatch(setProfileStatusActionCreator(data.data))
        dispatch(setProfileFetchingActionCreator(false))
      }
      else{
        dispatch(setProfileFetchingActionCreator(true))
      }
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
    dispatch(setAuthFetchingActionCreator(true))
    let setUserPicture = (id)=>{
      profileAPI.getProfile(id).then(data=>{
        if(data.photos.small !== null){
          dispatch(setUserPictureActionCreator(data.photos.small))
        }else{
          dispatch(setUserPictureActionCreator("default"))
        }
        dispatch(setProfileFetchingActionCreator(false))
        dispatch(setAuthFetchingActionCreator(false))
      })
    }
    authAPI.authMe().then(data=>{
      if(data.resultCode === 0){
        dispatch(setUserDataActionCreator(data))
        setUserPicture(data.data.id)
      }
    })
    dispatch(setProfileFetchingActionCreator(false))
    dispatch(setAuthFetchingActionCreator(false))
  }
}
export const loginMe = (email, password, rememberMe,captcha)=>{
  Debagger("login thunk input", email, password, rememberMe, captcha)
  return(dispatch)=>{
    dispatch(setAuthFetchingActionCreator(true))
    authAPI.login(email, password, rememberMe, captcha).then(data=>{
      if(data.resultCode === 0){
        message.success("Successful login!")
        dispatch(setAuthErrorActionCreator(false))
        Debagger("succes", data)
        dispatch(authMe())
      }else{
        Debagger("feiled", data)
      }
      if(data.resultCode === 1){

        message.error("Wrong password or email")
        dispatch(setAuthErrorActionCreator("Wrong password or email, try again"))
       
      }
      if(data.resultCode === 10){
        
        authAPI.captcha().then(payload=>{
          message.info("Please write a captcha")
          dispatch(setAuthErrorActionCreator("Our bot thinks that you bot...", payload))
        })

      }
      dispatch(setAuthFetchingActionCreator(false))
    })
  }
}
export const LogOut = ()=>{
  return(dispatch)=>{
    authAPI.logout()
    dispatch(setUserDataActionCreator("delete"))
    dispatch(setAuthErrorActionCreator(false))
    message.success("logout...")
  }
}

export const updateProfileImg = (img) =>{
  return async (dispatch)=>{
    dispatch(setProfileFetchingActionCreator(true))
   let response = await profileAPI.updateProfileImg(img)
   if(response.resultCode === 0){
    dispatch(setProfilePictureActionCreator(response.data))
    message.success("image updated successfully")
    dispatch(authMe())
   }else{
    message.error("something went wrong")
   }
   dispatch(setProfileFetchingActionCreator(false))
  }
}


export const updateProfile = (profile) =>{
  return async (dispatch)=>{
    dispatch(setProfileFetchingActionCreator(true))
    let response = await profileAPI.updateProfile(profile)
    if(response.data.resultCode === 0){
      dispatch(getProfile(profile.userId))
    }
    dispatch(setProfileErrorActionCreator(response.data))
    dispatch(setProfileFetchingActionCreator(false))
  }
}