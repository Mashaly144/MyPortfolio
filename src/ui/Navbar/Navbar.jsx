import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
  }, []);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const handleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className='flex justify-between items-center container mx-auto py-10'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt='logo' />
         */}
        <h1 className='text-3xl  font-semibold'>Mashaly</h1>
      </div>
      <ul className='md:flex md:items-center md:justify-between hidden lg:grid grid-cols-3 gap-6 lg:gap-10 xl:gap-12 text-dark dark:text-lightContent font-medium text-xl'>
        <li>
          <a className='font-DMSans' href='/'>
            Home
          </a>
        </li>
        <li>
          <a className='font-DMSans' href='/about'>
            About
          </a>
        </li>
        <li>
          <a className='font-DMSans' href='/techstack'>
            Tech Stack
          </a>
        </li>
        <li>
          <a className='font-DMSans' href='/projects'>
            Projects
          </a>
        </li>
        <li>
          <a className='font-DMSans' href='/contact'>
            Contact
          </a>
        </li>
      </ul>
      <div className='text-3xl cursor-pointer' onClick={() => handleDarkMode()}>
        {darkMode === 'dark' ? (
          <MdDarkMode className='dark:text-white' />
        ) : (
          <MdOutlineDarkMode />
        )}
      </div>
      <div className='app__navbar-menu lg:hidden'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'techstack', 'projects', 'contact'].map(
                (item) => (
                  <li key={item}>
                    <a href={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
