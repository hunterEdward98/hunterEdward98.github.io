import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, NavLink, Route } from "react-router-dom";
import headshot from "../../Hunter3.jpg";
import Bio from "../Bio/Bio";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Tech from "../Tech/Tech";
class App extends React.Component {
  state = {
    component: "Biography",
  };
  render() {
    return (
      <Router>
        <div className="body overflow-auto">
          <div className="row ">
            <div className="App col-12 ">
              <div className="header">
                <img
                  src={headshot}
                  alt="<professional Headshot>"
                  width="200em"
                  className="my-1"
                />
                <div className="h1">Hunter Scheel</div>
              </div>
              <div className="d-flex justify-content-around">
                <NavLink to="/projects" className="col-3 btn">
                  Projects
                </NavLink>
                <NavLink to="/resume" className="col-3 btn">
                  Resume
                </NavLink>
                <NavLink to="/tech" className="col-3 btn">
                  Tech Known
                </NavLink>
                <NavLink to="/bio" className="col-3 btn">
                  Biography
                </NavLink>
              </div>
            </div>
            <div className="container">
              <Routes>
                <Route exact path="/bio" element={<Bio />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="/tech" element={<Tech />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
