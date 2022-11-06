import "./App.css";

import React, {useEffect, useState} from 'react';
import Garden from './components/Garden';
import ExperienceList from "./components/ExperienceList";
import AboutMe from './components/AboutMe';
import Home from './components/Home';

// npm install react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";


function App() {
  let location = useLocation();
  const [navId, setNavId] = useState('color');

  useEffect(() => {
    const str = 'color' + location.pathname.substring(1);
    console.log(str);
    setNavId(str);
  }, [location]);

  return (
    <div>
      <div id={navId}>
        <h1 id='headerTitle'>Joe Bruin</h1>
        <div>
          <Link to='/'>Home</Link>
          {' | '}
          <Link to='/about'>About</Link>
          {' | '}
          <Link to='/experience'>Experience</Link>
          {' | '}
          <Link to='/garden'>Garden</Link>
        </div>
      </div>
      <div id='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/experience' element={<ExperienceList />} />
          <Route path='/garden' element={<Garden owner={'Joe Bruin'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
