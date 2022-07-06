const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"



 const dialogsReduser = (state, action) =>{
    switch(action.type){
        case TEMP_MESS:
            state.temp = action.text;
            return state;
        case SEND_MESS:
            let newMess = {
                id:state.messeages.length+1,
                text:state.temp
              }
              state.messeages.push(newMess)
              state.temp = ""
              return state
        default: return state      
    }

}

export default dialogsReduser