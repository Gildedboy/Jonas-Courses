import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvdqyypblbsrfxomkyyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZHF5eXBibGJzcmZ4b21reXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMDQ3MTIsImV4cCI6MTk5Mzg4MDcxMn0.uoLkR7AusVffZ3Fz-m139na0bdAknzHJHhAE7X8Ei_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
