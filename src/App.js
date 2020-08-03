import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./containers/Routes";

const App = () => {
  return (
    <div data-test="app-component">
      <BrowserRouter data-test="browser-router">
        <Routes data-test="nav-component" />
      </BrowserRouter>
    </div>
  );
};

export default App;
