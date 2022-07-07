import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";




const App = (props) => {
 
  return (
      
      <div className="app-wrapper">
        
        <Header />
        <Navbar data={props.data.sidebarPage} />
        <Routes>
          <Route path="/" element={<Profile data={props.data.profilePage.postsObj} />} />
          <Route path="/profile"  element={<Profile dispatch={props.dispatch} temp={props.data.profilePage.TempPost} data={props.data.profilePage.postsObj} />} ></Route>
          <Route path="/dialogs"  element={<Dialogs dispatch={props.dispatch} data={props.data.dialogsPage} />} >
            <Route path="1" element={<div></div>} />
            <Route path="2" element={<div></div>} />
            <Route path="3" element={<div></div>} />
            <Route path="4" element={<div></div>} />
            
          </Route>
          <Route path="/news"  element={<News />} ></Route> 
          <Route path="/music"  element={<Music />} ></Route>
          <Route path="/settings"  element={<Settings />} ></Route>
        </Routes>


      </div>
    
  );
};

export default App;
