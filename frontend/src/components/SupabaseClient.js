


import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://bnquktqogqulqzzssqqq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJucXVrdHFvZ3F1bHF6enNzcXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2Njg0NjUsImV4cCI6MjAwMzI0NDQ2NX0.XDw8iXXvc6bAsoLzrPUm3DSQmqmkWMczNBHtXl6n1LI';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;