import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ixhnltsqseneqkvcrwud.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4aG5sdHNxc2VuZXFrdmNyd3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNTUwNDQsImV4cCI6MjA0NDYzMTA0NH0.Ic5mdm_T9uwuvwK21u7ONCuTfYHgZVUQqfYoPhcjOQE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
