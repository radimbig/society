import { createStore, combineReducers, applyMiddleware } from "redux";
import authReduser from "./authReducer";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReducer"
import thunk from 'redux-thunk'

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReduser,
        authReduser:authReduser
    }
);



let store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
export default store;