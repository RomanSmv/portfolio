import './App.css';
import Header from "./Header/Header";
import React from "react";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import TeleWork from "./TeleWork/TeleWork";
import Contacts from "./Contacts/Contacts";
import FooterDown from "./Footer/FooterDown";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <TeleWork />
      <Contacts />
      <FooterDown />
    </div>
  );
}

export default App;
