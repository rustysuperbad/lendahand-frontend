// frontend/supabase.js

const SUPABASE_URL = "https://agmchftvtxmzfvnvhdon.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_voYxd08fOABtJPNDBO5b8A_-xWJZNes";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
