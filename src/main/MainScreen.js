import React, {useEffect, useState} from 'react';
// import _ from "lodash";
import './styles.css'
import logo from "../logo.svg";

const MainScreen = () => {

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          main screen Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
};

export default MainScreen;