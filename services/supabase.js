const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env" });

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.PUBLIC_ANON_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);

module.exports = supabase;
