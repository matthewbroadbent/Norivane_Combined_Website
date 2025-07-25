import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY

// Create a new client instance that can only be used on the server.
export const supabase_server = createClient(supabaseUrl, supabaseServiceKey)
