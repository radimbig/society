const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const ADD_USERS = "ADD_USERS"
const SET_PAGE = "SET_PAGE"
const SET_PAGES_COUNT = "SET_PAGES_COUNT"
const SET_COUNT = "SET_COUNT"
const SET_FETCH = "SET_FETCH"
const SET_TEMP_PAGE = "SET_TEMP_PAGE"

let initState = {
  users: [],
  
  pagesCount:3,
  currentPage:1,
  usersPerPage:5,
  usersCount:5,
  isFetching:true,
  temp:1
};

const usersReduser = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
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
    case SET_PAGE:
      return{
        ...state,
        currentPage:state.temp
      }
    case SET_PAGES_COUNT:
      return{
        ...state,
        pagesCount:action.number
      }
    case SET_COUNT:
      return{
        ...state,
        usersCount:action.number
      }
    case SET_FETCH:
      return{
        ...state,
        isFetching:action.value
      }
    case SET_TEMP_PAGE:
      return{
        ...state,
        temp:action.temp
      }
    default:
      return state;
  }
};

export default usersReduser;
