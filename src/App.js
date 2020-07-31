import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./containers/Nav";

const App = () => {
  return (
    <div data-test="app-component">
      <BrowserRouter data-test="browser-router">
        <Nav data-test="nav-component" />
      </BrowserRouter>
    </div>
  );
};

export default App;
