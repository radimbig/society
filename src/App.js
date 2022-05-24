import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Router, Routes, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile"  element={<Profile />} ></Route>
          <Route path="/dialogs"  element={<Dialogs />} >
            <Route path="1" element={<div>Chat1</div>} />
            <Route path="2" element={<div>Chat2</div>} />
            <Route path="3" element={<div>Chat3</div>} />
            <Route path="4" element={<div>Chat4</div>} />
          </Route>
          <Route path="/news"  element={<News />} ></Route> 
          <Route path="/music"  element={<Music />} ></Route>
          <Route path="/settings"  element={<Settings />} ></Route>
        </Routes>


      </div>
    
  );
};

export default App;
