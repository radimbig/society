const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS"

let initState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   sex: true,
    //   name: "Radim",
    //   age: 17,
    //   bio: "I like react",
    //   location: { city: "Ukraine", country: "Poltava" },
    //   profileImg: "",
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   sex: true,
    //   name: "Vadim",
    //   age: 45,
    //   bio: "I like c#",
    //   location: { city: "Ukraine", country: "Poltava", profileImg: "" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   sex: false,
    //   name: "Eva",
    //   age: 25,
    //   bio: "i`m so pretty!",
    //   location: { city: "Russia", country: "Moscow", profileImg: "" },
    // },
  ],
};

const usersReduser = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: 1 };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: 0 };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case ADD_USERS:
      return{
        ...state,
        users:[...state.users, ...action.users]
      }
    default:
      return state;
  }
};

export default usersReduser;
