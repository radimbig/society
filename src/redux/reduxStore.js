import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer
        
    }
);



let store = createStore(rootReducer);
window.store = store;
export default store;