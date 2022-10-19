import "./App.css";

import React from 'react';
import Garden from './components/Garden';
import ExperienceList from "./components/ExperienceList";
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div id="navigation">
        <h1 id="headerTitle">Joe Bruin</h1>
        <div>
          <Link to="/">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/experience">Experience</Link>{" | "}
          <Link to="/garden">Garden</Link>
        </div>
      </div>
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<ExperienceList />} />
          <Route path="/garden" element={<Garden owner={"Joe Bruin"} />} />
        </Routes>
        {/* <Home />
        <AboutMe />

        <Garden owner={"Joe Bruin"} />
        <ExperienceList /> */}
      </div>
    </Router>
    
  );
}

export default App;
