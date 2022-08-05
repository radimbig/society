const TEMP_POST = "TEMP_POST";
const ADD_POST = "ADD_POST";
const SET_PROFILE ="SET_PROFILE"
const SET_PROFILE_FETCHING = "SET_PROFILE_FETCHING"
const SET_STATUS = "SET_STATUS"
const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE"
let initializationState = {
  currentProfile:{
    id:"1",
    fullname:"Radim",
    surname:"Voronianskyi",
    image:"https://paintbynumbersforsale.com/wp-content/uploads/2021/11/aesthetic-Capybara-paint-by-numbers-247x296.jpg",
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
  isFetching:true
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
    default:
      return state;
  }
};
export default profileReducer;
