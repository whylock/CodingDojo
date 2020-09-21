import React, { useState, useEffect } from "react";
import Chat from "./components/chat";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./views/main";

function App() {
    return (
      <div className="App">
        <Router>
          <Main path="/" />
        </Router>
      </div>
    );
}

export default App;
