import React from 'react';
import { Router } from '@reach/router'
import './App.css';

import Home from './components/Home'
import Number from './components/Number'
import Hello from './components/Hello'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <Router>
        <Home path='/home'></Home>
        <Number path='number/:num'></Number>
        <Hello path='hello/:word'></Hello>
        <Color path='hello/:word/:color1/:color2'></Color>
      </Router>
    </div>
  );
}

export default App;
