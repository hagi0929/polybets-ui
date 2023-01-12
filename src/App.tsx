import React from 'react';
import './App.css';
import logo from "./assets/images/logo.webp";
import polygon from "./assets/images/polygon.webp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={'Header-wrapper'}>
          <p className={"Title"}>
            POLY BETS
          </p>
          <img className={"App-logo Image-Style"} src={logo}/>
          <p className={"Sub-title1 Highlight-color"}>
            Earn up to 100x on your bets.
          </p>
          <div className={"Sub-title2-Wrapper"}>
            <p className={"Sub-title2"}>
            Powered by
            </p>
            <img className={"Polygon Image-Style"} src={polygon}/>
          </div>
          <a className={"Button Highlight-color"}>
            Start Betting!
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
