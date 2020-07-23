import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";


import Wrapper from "./components/Wrapper";

import "./reset.css";
import "./App.css";


//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <Wrapper>
        <Router>
        <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Router>
      </Wrapper>
  );
}

export default App;
