import React from 'react';
import Header from '../ui/header/Header';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div>
      <Header />
      <TechStack />
      <Projects />
    </div>
  );
};

export default HomePage;
