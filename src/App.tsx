import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Experience />
      <ScrollToTop />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
