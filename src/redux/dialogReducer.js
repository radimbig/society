const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"

let initializationState ={
    chatsData: [
      { id: "1", name: "radim", profileLink: "" },
      {
        id: "2",
        name: "vadim",
        profileLink:
          "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
      },
      {
        id: "3",
        name: "eva",
        profileLink:
          "https://icon-library.com/images/steam-icon-ico/steam-icon-ico-16.jpg",
      },
      {
        id: "4",
        name: "masha",
        profileLink:
          "https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico",
      },
    ],
    messeages:[
      {id:1, text:"Hello my name Radim"},
      {id:2, text:"What`s your name?"},
      {id:3, text:"my name`s Radim!"}
    ],
    temp:"My message"
  }

 const dialogsReduser = (state = initializationState, action) =>{
  
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