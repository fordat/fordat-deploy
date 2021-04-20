import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Painting from './components/Painting.js';

function App() {
  return (
    <div>
      <div className="App-box">
        <h1 className="content">Ford Atwater</h1>
        <BrowserRouter>
          <Navbar />
          <br />
          <Route path="/" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/painting" exact component={Painting} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
