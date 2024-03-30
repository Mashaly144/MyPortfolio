<<<<<<< HEAD
import React from 'react';
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='container mx-auto sm:py-[100px]'>
      <div className='w-full flex-col items-center  text-center'>
        <h1 class='text-heading dark:text-headingDarkMode font-bold md:text-5xl text-2xl'>
          Projects
        </h1>
        <p class='text-lg md:text-3xl text-dark dark:text-lightContent mt-[24px] md:mt-[48px]'>
          Things I've built so far
        </p>
        <div class='mt-[12px] md:mt-[32px] flex items-center justify-center gap-4'>
          <button class='main_button'>All</button>
          <button class='main_button'>Web</button>
          <button class='main_button'>Mobile</button>
        </div>
        <CardProject />
      </div>
    </div>
  );
};

export default Projects;
=======
import React from 'react';
import CardProject from './CardProject';

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <div className='w-full flex-col items-center  text-center'>
        <h1 class='text-heading dark:text-headingDarkMode font-bold md:text-5xl text-2xl'>
          Projects
        </h1>
        <p class='text-lg md:text-3xl text-dark dark:text-lightContent mt-[24px] md:mt-[48px]'>
          Things I've built so far
        </p>
        <div class='mt-[12px] md:mt-[32px] flex items-center justify-center gap-4'>
          <button class='main_button'>All</button>
          <button class='main_button'>Web</button>
          <button class='main_button'>Mobile</button>
        </div>
        <CardProject />
      </div>
    </div>
  );
};

export default Projects;
>>>>>>> c3cc4f9 (portfolio)
