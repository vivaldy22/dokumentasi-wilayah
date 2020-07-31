import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./containers/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
};

export default App;
