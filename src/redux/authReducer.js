const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_PICTURE ="SET_USER_PICTURE"
const SET_AUTH_FETCHING = "SET_AUTH_FETCHING"
const SET_AUTH_ERROR = "SET_AUTH_ERROR"
let init = {
    isLogin:false,
    user:{},
    isFetching:false,
    errors:false,
    captcha:false
}


 const authReduser = (state = init, action) =>{
    
    switch(action.type){
        case SET_USER_DATA:
            if(action.data === "delete"){
             return{
                ...state,
                isLogin:false,
                user:{
                    login:null, id:null, email:null
                }
             }       
            }
            return({
                ...state,       
                user:{
                    login:action.data.data.login,
                    id:action.data.data.id,
                    email:action.data.data.email
                },
                resultCode:action.data.resultCode,
                isLogin:true
            })
        case SET_USER_PICTURE:
            return({
                ...state,
                user:{...state.user, picture:action.picture}
            })
        case SET_AUTH_FETCHING:
            return({
                ...state,
                isFetching:action.value
            })
        case SET_AUTH_ERROR:
            return({
                ...state,
                errors:action.error,
                captcha:action.captcha
            })    
        default:
            return{
                ...state
            }
    }
}


export default authReduser