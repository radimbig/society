let ReRenderAll  = ()=>{
  console.log("state changed")
}

let state = {
  profilePage: {
    postsObj: [
        { id:1, likes: 133, text: "ja churka" },
        { id:2, likes: 45, text: "lysa boshka" },
        { id:3, likes: 89, text: "kruchu binance" },
        { id:4, likes: 22, text: "bebromentr" },
      ],
    TempPost:"Radim"
  },
  dialogsPage:{
    chatsData: [
        { id: "1", name: "radim", profileLink:"" },
        { id: "2", name: "vadim", profileLink:"https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico" },
        { id: "3", name: "eva", profileLink:"https://icon-library.com/images/steam-icon-ico/steam-icon-ico-16.jpg" },
        { id: "4", name: "masha", profileLink:"https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico" },
      ]
  },
  sidebar:{
    bestFriends:[
        {id:"2", name:"vadim", profileLink:"https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"},
        {id:"4", name:"masha", profileLink:"https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico"},
        {id:"3", name:"eva", profileLink:"https://icon-library.com/images/steam-icon-ico/steam-icon-ico-16.jpg"}
    ]
  }

};

window.state = state;
export function TempPost(a){
  state.profilePage.TempPost = a;
  
  ReRenderAll(state);
}
export function subscribe(callBack){
  ReRenderAll = callBack;
}


export function addPost(messege){
  
  let NewPost = {
    id:5,
    text:messege,
    likes:0
  }
  state.profilePage.postsObj.push(NewPost);
  state.profilePage.TempPost="";
  ReRenderAll(state);
};



export default state;
