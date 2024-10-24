import React from 'react';
import { useForm } from 'react-hook-form';
import FormRow from '../ui/FormRow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createProject } from '../services/apiProjects';

function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success('Project created successfully');
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className='max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
      <form onSubmit={handleSubmit(onSubmit, onError)} className='space-y-6'>
        {/* Project Name */}
        <FormRow label='Project Name' error={errors.name?.message}>
          <input
            type='text'
            name='name'
            id='name'
            {...register('name', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Description */}
        <FormRow label='Description' error={errors.description?.message}>
          <textarea
            name='description'
            id='description'
            {...register('description', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Stack */}
        <FormRow label='Stack' error={errors.stack?.message}>
          <input
            type='text'
            name='stack'
            id='stack'
            {...register('stack', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Preview Link */}
        <FormRow label='Preview Link' error={errors.live_preview?.message}>
          <input
            type='text'
            name='live_preview'
            id='live_preview'
            {...register('live_preview', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Repository Link */}
        <FormRow label='Repository Link' error={errors.repo_preview?.message}>
          <input
            type='text'
            name='repo_preview'
            id='repo_preview'
            {...register('repo_preview', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Project Photo */}
        <FormRow label='Project Photo'>
          <input
            type='file'
            id='image'
            accept='image/*'
            {...register('image', {
              required: 'This field is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </FormRow>

        {/* Buttons */}
        <FormRow>
          <button
            type='reset'
            className='px-4 py-2 mr-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-500'
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={isCreating}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50'
          >
            Add Project
          </button>
        </FormRow>
      </form>
    </div>
  );
}

export default ProjectForm;
