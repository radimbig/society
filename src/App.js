import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Error from "./components/common/Error/Error";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import Game from "./components/Game/Game";


const App = (props) => {
 
  return (
      <>
  <Container fluid>
    <Row >
      <Col className="header" xs={12}>
      <HeaderContainer />
      </Col>
    </Row>
    <Row>
      <Col sm={12} className="navBar" lg={1} xs={1}>
      <Navbar data={props.data.sidebarPage} />
      </Col>
      <Col  lg={11} className="content"  sm={12} xs={11}>
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
  </Container>
      </>
  );
};

export default App;
