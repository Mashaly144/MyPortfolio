import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './ui/footer/Footer';
import Navbar from './ui/Navbar/Navbar';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import ProjectForm from './pages/ProjectForm';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
            {/* <Route path='/addproject' element={<ProjectForm />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
      <Toaster
        position='top-center'
        containerStyle={{ margin: '8px' }}
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '0.6rem 1.2rem',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
