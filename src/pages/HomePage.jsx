<<<<<<< HEAD
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
=======
import React from 'react';
import Header from '../ui/header/Header';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import { getProjects, insertProjects } from '../services/apiProjects';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { projects } from '../constants/projects';

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
>>>>>>> c3cc4f9 (portfolio)
