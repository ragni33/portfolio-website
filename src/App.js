import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import Experience from './pages/Experience/Experience';
import Project from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Skills />
        <Services />
        <Experience />
        <Project />
        <Contact />
       <Footer />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
