import React from 'react';
import { projects } from '../constants/projects';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
const CardProject = () => {
  return (
    <div className='mt-[60px] md:mt-[140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className='cardProjects cursor-pointer min-h-[570px] overflow-hidden rounded-3xl shadow-2xl flex flex-col justify-between w-full bg-white'
          >
            <a
              href={project.livePreview}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={project.image}
                class='w-full h-[320px] md:h-[280px] object-cover'
              />
            </a>
            <div className='flex flex-col justify-between items-start flex-1 p-[20px]'>
              <h1 class='mb-4 font-medium text-start text-xl dark:text-headingDarkMode md:text-2xl'>
                {project.name}
              </h1>
              <p class='flex-1 mb-3 text-dark dark:text-headingDarkMode text-start font-light text-md md:text-lg'>
                {project.description}
              </p>
              <p class='mb-2 md:mb-6 text-heading dark:text-headingDarkMode font-regular text-base'>
                Tech Stack:{' '}
                <span class='font-light text-sm'>{project.stack}</span>
              </p>
              <div className='w-full flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start md:items-center'>
                <a href={project.livePreview} target='_blank'>
                  <div class='flex items-center gap-1 text-base  font-regular underline'>
                    <AiOutlineLink /> Live Preview
                  </div>
                </a>
                <a href={project.viewCode} target='_blank'>
                  <div class='flex items-center gap-1 text-base  font-regular underline'>
                    <AiFillGithub /> View Code
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProject;
