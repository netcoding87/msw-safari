import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = async () => {
    console.log("click");
    const response = await fetch("/login");
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Fetch some data...</button>
      </header>
    </div>
  );
}

export default App;
