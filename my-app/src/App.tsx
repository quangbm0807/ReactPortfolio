// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;