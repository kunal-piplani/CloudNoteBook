import "./App.css";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoteState from "./context/note/NoteState";
function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />


        <Switch>
          <Route exact path="/">
          <Home />

          </Route>
          <Route exact path="/about">
            <Aboutus/>
          </Route>
          
        </Switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
