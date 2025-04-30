// Supabase client setup
// This file is used to create a Supabase client instance that can be used throughout the application. It imports the `createClient` function from the Supabase library and uses it to create a client instance with the Supabase URL and anon key stored in environment variables.
// The client instance is then exported for use in other parts of the application.
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);