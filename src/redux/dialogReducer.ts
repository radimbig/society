const TEMP_MESS = "TEMP_MESS"
const SEND_MESS = "SEND_MESS"
type dialogType = {
  id:number
  name:string
  profileLink:string
}
type MesType ={
  id:number
  text:string, 
  from:number
  to:number
}
type initializationStateType={
  chatsData: Array<dialogType>
  messeages: Array<MesType>
  temp:string
}


let initializationState:initializationStateType = {
  chatsData: [
    {
      id: 2,
      name: "Vadim",
      profileLink:
        "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
    },
    {
      id: 3,
      name: "Eva",
      profileLink:
        "https://icon-library.com/images/steam-icon-ico/steam-icon-ico-16.jpg",
    },
    {
      id: 4,
      name: "Masha",
      profileLink:
        "https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico",
    },
    {
      id: 5,
      name: "Lera",
      profileLink:
        "https://icon-library.com/images/2018/10170247_rei-ayanami-imagenes-de-evangelion-ayanami-transparent-png.png",
    },
  ],
  messeages: [
    { id: 1, text: "Hello What`s your name?", from:2, to:1},
    { id: 2, text: "Hello my name Radim",from:1, to:2 },
    { id: 3, text: "Hello how are you?", from:3, to:1 },
    { id: 4, text: "thanks for subscribing", from:4, to:1 },
    { id: 5, text: "I`m fine! thx for asking!", from:1, to:3 },
    { id: 6, text: "Your welcome!", from:1, to:4 },
    {id:7, text:"How it`s going?", from:1, to:5},
    {id:8, text:"I`m fine! What about meeting?", from:5, to:1},
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
        from:1,
        to:action.to
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
