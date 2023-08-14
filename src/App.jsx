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
    <div className='bg-white dark:bg-[#191919]'>
      <Navbar />

      {/* <SocialMedia /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<AboutPage />} />
        <Route path='/' element={<TechStackPage />} />
        <Route path='/' element={<ProjectsPage />} />
        <Route path='/' element={<ContactsPage />} />

        {/* <About />
        <Work />
        <Skills />
        <Testimonial /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
