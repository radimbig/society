const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"


const profileReducer = (state, action) =>{
    switch(action.type){
        case ADD_POST:
            let NewPost = {
                id: state.postsObj.length + 1,
                likes: 0,
                text: state.TempPost,
              };
              state.postsObj.push(NewPost);
              state.TempPost = "";
              return state
        case TEMP_POST:
            state.TempPost = action.text;
            return state
        default: 
              return state


    }


}
export default profileReducer