import React from "react";
import 'antd/dist/antd.css';
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {Row, Col} from 'antd'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Error from "./components/common/Error/Error";
import LoginContainer from "./components/Login/LoginContainer";
import Game from "./components/Game/Game";


const App = (props) => {
 
  return (
    
  <>
    <Row  >
      <Col className="header" span={24}>
      <HeaderContainer />
      </Col>
    </Row>
    <Row className="g-0">
      <Col span={1} className="navBar" >
      <Navbar data={props.data.sidebarPage} />
      </Col>
      <Col  span={23} className="content"  >
      <Routes>
          <Route path="/" element={<ProfileContainer  />} />
          <Route path="/profile"   element={<ProfileContainer  />} >
            <Route path=":id" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs"  element={<DialogsContainer  />} >
            <Route path="1" element={<div></div>} />
            <Route path="2" element={<div></div>} />
            <Route path="3" element={<div></div>} />
            <Route path="4" element={<div></div>} />
            
          </Route>
          <Route path="*" element={<Error text="ERROR 404 page not found" />} ></Route>
          <Route path="/news"  element={<News />} ></Route> 
          <Route path="/users"  element={<UsersContainer />} ></Route> 
          <Route path="/game" element={<Game />}></Route>
          <Route path="/music"  element={<Music />} ></Route>
          <Route path="/settings"  element={<Settings />} ></Route>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </Col>
    </Row>
  </>
     
  );
};

export default App;
