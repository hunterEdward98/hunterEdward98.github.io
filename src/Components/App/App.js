import React from "react";
import "./App.css";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import headshot from "../../Hunter3.jpg";
import Bio from "../Bio/Bio";
import Bio2 from "../Bio/Bio2";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Resume2 from "../Resume/Resume2";
function App() {
  return (
    <Router>
      <div className="body overflow-auto">
        <header className="App">
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <nav className=" col-12 col-lg-9 d-flex justify-content-between ">
                <NavLink to="/bio" className="btn App">
                  <h2>About Me</h2>
                </NavLink>
                <NavLink to="/resume" className="btn App">
                  <h2>Resume</h2>
                </NavLink>
                <NavLink to="/projects" className="btn App">
                  <h2>Projects</h2>
                </NavLink>
                <NavLink to="/technology" className="btn App">
                  <h2>What I've Used</h2>
                </NavLink>
              </nav>
            </div>
          </div>
        </header>
        <div className="row ">
          <div className="App col-12 col-lg-3 mb-5 " style={{ height: "25em" }}>
            <div className="header">
              <img
                src={headshot}
                alt="<professional Headshot>"
                width="200em"
                className="my-1"
              />
              <div className="h1">Hunter Scheel</div>
            </div>
            <div className="my-5">
              <Route path="/resume">
                <Resume2 />
              </Route>
            </div>
          </div>
          <div className="col-12 h4 col-lg-9 justify-content-center">
            <div className="col-12 text-left mt-5">
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/technology"></Route>
            </div>
          </div>
          <div className="row h4 justify-content-center mt-3">
            <div className="col-11 text-left">
              <Route path="/bio">
                <Bio2 />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
