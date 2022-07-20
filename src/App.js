import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Error from "./components/common/Error/Error";


const App = (props) => {
 
  return (
      
      <div className="app-wrapper">
       
        <Header />
        <Navbar data={props.data.sidebarPage} />
        <Routes>
          <Route path="/" element={<ProfileContainer dispatch={props.dispatch} store={props.store} />} />
          <Route path="/profile/*"   element={<ProfileContainer dispatch={props.dispatch} store={props.store} />} ></Route>
          <Route path="/dialogs"  element={<DialogsContainer  />} >
            <Route path="1" element={<div></div>} />
            <Route path="2" element={<div></div>} />
            <Route path="3" element={<div></div>} />
            <Route path="4" element={<div></div>} />
            
          </Route>
          <Route path="*" element={<Error text="ERROR 404 page not found" />} ></Route>
          <Route path="/news"  element={<News />} ></Route> 
          <Route path="/users/*"  element={<UsersContainer />} ></Route> 
          <Route path="/music"  element={<Music />} ></Route>
          <Route path="/settings"  element={<Settings />} ></Route>
        </Routes>


      </div>
    
  );
};

export default App;
