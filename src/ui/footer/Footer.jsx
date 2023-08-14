import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
function Footer() {
  return (
    // Your footer component content here
    <footer className='container mx-auto mt-[120px] w-full flex flex-col'>
      <div class='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-[40px]'>
        <a href='#'>
          <h1 className='text-3xl  font-semibold'>Mashaly</h1>
        </a>
        <div className='flex flex-col md:flex-row items-center  gap-4 md:gap-8'>
          <a href='https://wa.me/01024654819' target='_blank'>
            <p className='text-heading dark:text-lightContent font-DMSans font-regular text-lg flex items-center gap-2'>
              <BsPhone />
              +201024654819
            </p>
          </a>
          <a href='mailto:abdallahmashaly144@gmail.com' target='_blank'>
            <p className='text-heading dark:text-lightContent font-DMSans font-regular text-lg flex items-center gap-2'>
              <AiOutlineMail />
              abdallahmashaly144@gmail.com
            </p>
          </a>
          <div className='flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 text-3xl text-heading'>
            <a
              href='https://www.linkedin.com/in/abdallah-mashaly-797482250/'
              target='_blank'
            >
              <AiFillLinkedin className='cursor-pointer' />
            </a>

            <a href='https://github.com/Mashaly144' target='blank'>
              <AiFillGithub className='cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/mashalyabdallah/' target='blank'>
              <AiOutlineInstagram className='cursor-pointer' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCeVSDHjRKk-rsnQlXcSksAg'
              target='blank'
            >
              <AiOutlineYoutube className='cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between py-[40px]'>
        <div className='flex-1'>
          <ul className='md:flex md:items-center md:justify-between w-full grid grid-cols-3 gap-6 lg:gap-10 xl:gap-12 text-dark dark:text-lightContent font-medium text-xl'>
            <li>
              <a className='font-DMSans' href='/home'>
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
        </div>
        <div className='flex-1 text-start md:text-end'>
          <h1 className='text-lg text-dark dark:text-lightContent'>
            Designed and built by{' '}
            <span className='gradient_heading'>Abdallah Mashaly</span> with{' '}
            <span className='gradient_heading'>Love</span> &amp;{' '}
            <span className='gradient_heading'>Coffee</span>
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
