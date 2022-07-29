const TEMP_MESS = "TEMP_MESS"
const SEND_MESS = "SEND_MESS"

let initializationState = {
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
  messeages: [
    { id: 1, text: "Hello my name Radim" },
    { id: 2, text: "What`s your name?" },
    { id: 3, text: "my name`s Radim!" },
  ],
  temp: "My message",
};

const dialogsReduser = (state = initializationState, action) => {
  switch (action.type) {
    case TEMP_MESS:
      return {
        ...state,
        temp: action.text,
      };
    case SEND_MESS:
      let newMess = {
        id: state.messeages.length + 1,
        text: action.text,
      };
      return {
        ...state,
        messeages: [...state.messeages, newMess],
        temp: "",
      };
    default:
      return state;
  }
};

export default dialogsReduser;
