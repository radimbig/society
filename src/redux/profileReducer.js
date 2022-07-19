const TEMP_POST = "TEMP_POST";
const ADD_POST = "ADD_POST";
const SET_PROFILE ="SET_PROFILE"
let initializationState = {
  currentProfile:{
    id:"1",
    name:"Radim",
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
};

const profileReducer = (state = initializationState, action) => {


  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        id: state.postsObj.length + 1,
        likes: 0,
        text: state.tempPost,
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
    default:
      return state;
  }
};
export default profileReducer;
