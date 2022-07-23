const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_PICTURE ="SET_USER_PICTURE"


let init = {
    isLogin:false,

}


 const authReduser = (state = init, action) =>{
    
    switch(action.type){
        case SET_USER_DATA:
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
        default:
            return{
                ...state
            }
    }
}


export default authReduser