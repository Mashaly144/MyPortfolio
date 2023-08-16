import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
      <ul className='md:flex md:items-center md:justify-between hidden lg:grid grid-cols-5 gap-6 lg:gap-10 xl:gap-12 items-center text-dark dark:text-lightContent font-medium text-xl'>
        <li>
          <Link className='font-DMSans' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='font-DMSans' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='font-DMSans' to='/techstack'>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link className='font-DMSans' to='/projects'>
            Projects
          </Link>
        </li>
        <li>
          <Link className='font-DMSans' to='/contact'>
            Contact
          </Link>
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
              <li>
                <Link to='/' onClick={() => setToggle(false)}>
                  home
                </Link>
              </li>
              <li>
                <Link to='/about' onClick={() => setToggle(false)}>
                  about
                </Link>
              </li>
              <li>
                <Link to='/techstack' onClick={() => setToggle(false)}>
                  techstack
                </Link>
              </li>
              <li>
                <Link to='/projects' onClick={() => setToggle(false)}>
                  projects
                </Link>
              </li>
              <li>
                <Link to='/contact' onClick={() => setToggle(false)}>
                  contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
