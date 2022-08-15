type friendType ={
  id:string,
  name:string
  profileLink:string
}
type initializationStateType ={
  bestFriends:Array<friendType>
}
let initializationState:initializationStateType = {
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
  }


export const sidebarReducer = (state = initializationState, action) =>{
 
    return(state)
}


export default sidebarReducer