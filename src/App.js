import "./App.css";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />


        <Switch>
          <Route exact="/">
          <Home />

          </Route>
          <Route exact="/about">
            <Aboutus/>
          </Route>
          
        </Switch>
      </Router>

    </>
  );
}

export default App;
