<<<<<<< HEAD
import React from 'react';
import { stack } from '../constants/stack';
const TechStack = () => {
  return (
    <div className='container mx-auto py-[50px] lg:pb-[200px]'>
      <div className='w-full flex-col items-center text-center'>
        <h1 className='text-heading dark:text-headingDarkMode font-bold md:text-5xl text-2xl'>
          My Tech Stack
        </h1>
        <p className='text-lg md:text-3xl text-dark dark:text-lightContent mt-[24px] md:mt-[48px]'>
          Technologies I’ve been working with recently
        </p>
        <div className='mt-[60px] md:mt-[140px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[60px]'>
          {stack.map((item, index) => {
            return (
              <div
                key={index}
                className='dark:bg-white rounded-full dark:w-[120px] dark:h-[120px] flex items-center justify-center'
              >
                <img
                  src={item}
                  alt=''
                  className='h-[100px] dark:h-[75px] dark:w-[75px] m-auto object-contain'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
=======
import React from 'react';
import { stack } from '../constants/stack';
const TechStack = () => {
  return (
    <div className='container mx-auto py-[50px] lg:pb-[200px]'>
      <div className='w-full flex-col items-center text-center'>
        <h1 className='text-heading dark:text-headingDarkMode font-bold md:text-5xl text-2xl'>
          My Tech Stack
        </h1>
        <p className='text-lg md:text-3xl text-dark dark:text-lightContent mt-[24px] md:mt-[48px]'>
          Technologies I’ve been working with recently
        </p>
        <div className='mt-[60px] md:mt-[140px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[60px]'>
          {stack.map((item, index) => {
            return (
              <div
                key={index}
                className='dark:bg-white rounded-full dark:w-[120px] dark:h-[120px] flex items-center justify-center'
              >
                <img
                  src={item}
                  alt=''
                  className='h-[100px] dark:h-[75px] dark:w-[75px] m-auto object-contain'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
>>>>>>> c3cc4f9 (portfolio)
