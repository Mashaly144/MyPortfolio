import React from 'react';

import images from '../../constants/images';
import './Header.css';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className='container mx-auto'>
    <div className='min-h-[calc(100vh-(70px+32px+16px))] flex flex-col lg:flex-row items-center  md:items-center md:justify-between mt-12 md:mt-0 justify-center gap-6'>
      <h1 className='slide_left flex-1 md:text-[58px] text-[48px] text-left font-bold text-heading dark:text-headingDarkMode max-w-[630px]'>
        Hi 👋 <br /> My name is <br />{' '}
        <span class='gradient_heading'>Abdallah Mashaly</span> <br /> I build
        things for web
      </h1>
      <div
        class='flex 
                  items-center p-2 justify-center text-center w-[340px] h-[340px]
                  rounded-full gradient_container'
      >
        <img
          src={images.profile}
          className=' w-full h-full rounded-full object-cover'
        />
      </div>
    </div>
  </div>
);

export default Header;
