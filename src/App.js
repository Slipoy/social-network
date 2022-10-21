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
import DialogContainer from "./component/main/Dialogs/dialogContainer";
import UsersContainer from "./component/main/section/Users/UsersContainer";





function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header name="Header"/>
              <Main>
                  <Nav/>
                  <Routes>
                      <Route path="profile" element={<Section name="section" />}/>
                      <Route path="message/*" element={<DialogContainer/>}/>
                      <Route path='/users' element={<UsersContainer />}/>
                      <Route path="videos" element={<Videos/>}/>
                  </Routes>
                  <Bar/>
              </Main>
              <Footer name="Footer"/>
          </div>
      </BrowserRouter>
  );
}

export default App;
