import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReduser from "./authReducer";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReducer"
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
      );



let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReduser,
        authReduser:authReduser
    }
);



let store = createStore(rootReducer, enhancer);
window.store = store;
export default store;