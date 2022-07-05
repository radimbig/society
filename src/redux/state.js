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
    if (action.type == "ADD-POST") {
      console.log("addPost was called");

      let NewPost = {
        id: this._state.profilePage.postsObj.length + 1,
        likes: 0,
        text: this._state.profilePage.TempPost
       
      };
      this._state.profilePage.postsObj.push(NewPost);
      this._state.profilePage.TempPost = "";
      ReRenderAll(this._state);
    }
    if (action.type == "TEMP-POST"){
      console.log("tempPost was called");
      this._state.profilePage.TempPost = action.text;
  
      ReRenderAll(this._state);
    }
  }
};

let state = {
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
  addPost(messege) {
    let NewPost = {
      id: 5,
      text: messege,
      likes: 0,
    };
    state.profilePage.postsObj.push(NewPost);
    state.profilePage.TempPost = "";
    ReRenderAll(state);
  },
  subscribe(callBack) {
    console.log("subscribed");
    ReRenderAll = callBack;
  },
  TempPost(a) {
    state.profilePage.TempPost = a;

    ReRenderAll(state);
  },
  getState() {
    return state;
  },
};
let ReRenderAll = () => {
  console.log("state changed");
};

window.store = store;
export default store;
