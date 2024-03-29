const TEMP_POST = "TEMP_POST";
const ADD_POST = "ADD_POST";
const SET_PROFILE ="SET_PROFILE"
const SET_PROFILE_FETCHING = "SET_PROFILE_FETCHING"
const SET_STATUS = "SET_STATUS"
const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE"
const SET_PROFILE_ERROR = "SET_PROFILE_ERROR"

type PostType = {
  id:number,
  likes:number,
  text:string
}
type photosType={
  small:string
  large:string
}
type sosialType = {
  instagram:string
  facebook:string
  github:string
}
type initializationStateType ={
  currentProfile:{
    id:number,
    fullname:string
    surname:string
    
    lookingForJob:boolean,
    photos:photosType
    job:string,
    bio:string,
    country:string,
    age:number,
    instagram:string,
    facebook:string,
    github:string
  },
  postsObj: Array<PostType>, 
  tempPost:string,
  isFetching:boolean
  error:boolean
  errorMes:boolean|Array<String>|null
  
}


let initializationState:initializationStateType = {
  currentProfile:{
    id:1,
    fullname:"Radim",
    lookingForJob:false,
    surname:"Voronianskyi",
    photos:{
      small:"",
      large:""
    },
    job:"I`m loking for job as react developer!",
    bio:"I study react!",
    country:"Ukraine",
    age:17,
    instagram:"https://www.instagram.com/radimbig/",
    facebook:"https://www.facebook.com/radimvadim1",
    github:"https://www.github.com/radimbig"
  },
  
  postsObj: [
    { id: 1, likes: 133, text: "ja churka" },
    { id: 2, likes: 45, text: "lysa boshka" },
    { id: 3, likes: 89, text: "kruchu binance" },
    { id: 4, likes: 22, text: "bebromentr" },
  ],

  tempPost: "Radim",
  isFetching:true,
  error:false,
  errorMes:[]
};

const profileReducer = (state = initializationState, action) => {
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        id: state.postsObj.length + 1,
        likes: 0,
        text: action.text,
      };
      return {
        ...state,
        tempPost: "",
        postsObj: [...state.postsObj, NewPost],
      };
    case TEMP_POST:
      return {
        ...state,
        tempPost: action.text,
      };
    case SET_PROFILE:
      return{
        ...state,
        currentProfile:{...action.profile}
      }
    case SET_STATUS:
      return{
        ...state,
        currentProfile:{...state.currentProfile, status:action.text}
      }
    case SET_PROFILE_FETCHING:
      return{
        ...state,
        isFetching:action.value
      }
    case SET_PROFILE_PICTURE:
      return{
        ...state,
        currentProfile:{...state.currentProfile, photos:{
          small:action.img.photos.small,
          large:action.img.photos.large
        }}
      }
    case SET_PROFILE_ERROR:
      if(action.error.resultCode === 0){
        return({
          ...state, 
          error:false,
          errorMes:[]
        })
      }else{
        return({
          ...state,
          error:true,
          errorMes:action.error.messages
        })
      }
    default:
      return state;
  }
};
export default profileReducer;
