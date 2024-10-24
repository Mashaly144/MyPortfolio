import supabase, { supabaseUrl } from './supabase';

export async function getProjects() {
  let { data, error } = await supabase.from('projects').select('*');
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createProject(newProject) {
  const imageName = `${newProject.image.name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/project-images/${imageName}`;
  // https://oqnpgtyaxfrmehnvnvai.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // 1- create a new record in the database
  const { data, error } = await supabase
    .from('projects')
    .insert([{ ...newProject, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  // 2- upload the image
  const { error: storageError } = await supabase.storage
    .from('project-image')
    .upload(imageName, newProject.image);
  // 3 -delete cabins if there are errors
  if (storageError) {
    await supabase.from('projects').delete().eq('id', data.id);
    throw new Error(storageError.message);
  }
  return data;
}

export async function deleteProject(id) {
  const { data, error } = await supabase.from('projects').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}

// add all
export async function insertProjects() {
  const { data, error } = await supabase.from('projects').insert(projects);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}
