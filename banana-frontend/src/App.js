import logo from './logo.svg';
import './App.css';
import InputArea from "./components/InputArea";
import React, {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <InputArea/>
        </p>
      </header>
    </div>
  );
}

export default App;
