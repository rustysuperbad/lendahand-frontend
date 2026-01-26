// frontend/supabase.js
// supabase.js

const SUPABASE_URL = "https://agmchftvtxmzfvnvhdon.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_voYxd08fOABtJPNDBO5b8A_-xWJZNes";

const { createClient } = window.supabase;

window.supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

