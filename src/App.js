import React from "react";
import Header from "./component/Header/header";
import Main from "./component/main/main";
import Section from "./component/main/section/section";
import Footer from "./component/footer/footer";
import Nav from "./component/main/nav/nav";
import Dialogs from "./component/main/Dialogs/dialogs";
import Videos from "./component/main/Video/video";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bar from "./component/main/MiniBar/minibar";
import Login from "./component/main/Login/login";
import Users from "./component/main/Users/users";





function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header name="Header"/>
              <Main>
                  <Nav/>
                  <Routes>
                      <Route path="profile/:userId" element={<Section name="section" />}/>
                      <Route path="message/*" element={<Dialogs/>}/>
                      <Route path='/users/' element={<Users/>}/>
                      <Route path="videos/" element={<Videos/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
                  <Bar/>
              </Main>
              <Footer name="Footer"/>
          </div>
      </BrowserRouter>
  );
}

export default App;
