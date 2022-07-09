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
  }

const profileReducer = (state = initializationState, action) =>{
  let tempState = {...state}
  tempState.postsObj = [...state.postsObj]
    switch(action.type){
        case ADD_POST:
            let NewPost = {
                id: tempState.postsObj.length + 1,
                likes: 0,
                text: tempState.tempPost,
              };
              tempState.postsObj.push(NewPost);
              tempState.tempPost = "";
              return tempState
        case TEMP_POST:
            tempState.tempPost = action.text;
            return tempState
        default: 
              return state


    }


}
export default profileReducer