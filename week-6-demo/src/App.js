import './App.css';

import React, { useEffect, useState } from 'react';
import Garden from './components/Garden';
import ExperienceList from './components/ExperienceList';
import AboutMe from './components/AboutMe';
import Home from './components/Home';

// npm install react-router-dom
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  const colors = {
    home: '#2774ae',
    about: 'red',
    experience: 'yellow',
    garden: 'green',
  };

  const location = useLocation();
  const [navColor, setNavColor] = useState(colors.home);

  useEffect(() => {
    let path = location.pathname.substring(1);
    if(path === '') path = 'home';
    setNavColor(colors[path]);
  }, [location]);

  return (
    <div>
      <div id='navigation' style={{ backgroundColor: navColor }}>
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
