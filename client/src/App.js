import React from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/">
            <Hero />
            <About />
            <Skills />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
