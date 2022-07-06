import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";




const TEMP_POST = "TEMP-POST";
const ADD_POST = "ADD-POST";
const TEMP_MESS = "TEMP-MESS"
const SEND_MESS = "SEND-MESS"



let store = {
  _state: {
    profilePage: {
      postsObj: [
        { id: 1, likes: 133, text: "ja churka" },
        { id: 2, likes: 45, text: "lysa boshka" },
        { id: 3, likes: 89, text: "kruchu binance" },
        { id: 4, likes: 22, text: "bebromentr" },
      ],
      TempPost: "Radim",
    },
    dialogsPage: {
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
    },
    sidebar: {
      bestFriends: [
        {
          id: "2",
          name: "vadim",
          profileLink:
            "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
        },
        {
          id: "4",
          name: "masha",
          profileLink:
            "https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico",
        },
        {
          id: "3",
          name: "eva",
          profileLink:
            "https://icon-library.com/images/steam-icon-ico/steam-icon-ico-16.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  subscribe(callBack) {
    console.log("subscribed");
    ReRenderAll = callBack;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

    ReRenderAll(this._state);
    console.log("dispatch was called with type:", action.type);

  }
};

let ReRenderAll = () => {
  console.log("state changed");
};
export const tempPostActionCreator = (b) => {
  return {
    type: TEMP_POST,
    text: b,
  };
};

export const addPostActionCreator = () =>{
  return({
    type:ADD_POST
  })}


export const tempMessActionCreator = (value) =>{
return(
  {
    type:TEMP_MESS,
    text:value
  }
)
}

export const sendMessActionCreator = () =>{
  return(
    {
      type:SEND_MESS
    }
  )
}







window.store = store;
export default store;
