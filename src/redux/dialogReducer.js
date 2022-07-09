
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
  let tempState = {...state}
  tempState.messeages = [...state.messeages]
    switch(action.type){
        case TEMP_MESS:
          
            tempState.temp = action.text;
            return tempState;
        case SEND_MESS:
            let newMess = {
                id:tempState.messeages.length+1,
                text:tempState.temp
              }
              tempState.messeages.push(newMess)
              tempState.temp = ""
              return tempState
        default: return state      
    }

}

export default dialogsReduser