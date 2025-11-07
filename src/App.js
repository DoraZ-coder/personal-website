import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Internship from './pages/Internship';
import Music from './pages/Music';
import Sports from './pages/Sports';
import Photos from './pages/Photos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;