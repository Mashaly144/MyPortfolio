import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './ui/footer/Footer';
import Navbar from './ui/Navbar/Navbar';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='dark:bg-[#191919]'>
      <div className='main  dark:hidden'>
        <div className='gradient dark:z-0' />
      </div>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/techstack' element={<TechStackPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
