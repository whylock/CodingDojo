import React from 'react';
import { Router } from '@reach/router'
import Main from './views/main'
import ShowOne from './components/DisplayOne';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/' />
      <ShowOne path='/api/product/:id'/>
      </Router>
    </div>
  );
}

export default App;
