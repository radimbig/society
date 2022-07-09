const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";

let initializationState = {
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
    default:
      return state;
  }
};
export default profileReducer;
