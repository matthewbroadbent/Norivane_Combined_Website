import { createClient } from '@supabase/supabase-js';

// Define the allowed origin for CORS
// In production, this should be your actual frontend domain(s)
// For development, you might include localhost or other test domains
const ALLOWED_ORIGIN = 'https://www.norivane.co.uk'; // <-- IMPORTANT: Your frontend URL

// This helper function adds CORS headers to the response
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400'); // Cache preflight for 24 hours
};

const getSupabaseWithAuth = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.split(' ')[1];
  return createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
};

export default async function handler(req, res) {
  // Add CORS headers to ALL responses
  setCorsHeaders(res);

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    // If it's an OPTIONS request, just send 200 OK with the headers
    return res.status(200).end();
  }

  const slug = req.query.slug;
  const supabaseUnauthenticated = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

  // --- START DEBUG LOGS (KEEP THESE FOR NOW) ---
  console.log('Backend received slug:', slug);
  console.log('Type of received slug:', typeof slug);
  console.log('Request Method:', req.method);
  // --- END DEBUG LOGS ---

  if (req.method === 'GET') {
    const { data, error } = await supabaseUnauthenticated.from('posts').select('*').eq('slug', slug).single();

    if (error) {
        console.error('Supabase query error for slug:', slug, error);
        if (error.code === 'PGRST116') { // PostgreSQL error code for no rows found
            return res.status(404).json({ error: 'Post not found (Database returned no rows)' });
        }
        return res.status(500).json({ error: error.message || 'Internal server error during GET' });
    }
    if (!data) {
        return res.status(404).json({ error: 'Post not found (Data is null)' });
    }
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const supabase = getSupabaseWithAuth(req);
    if (!supabase) return res.status(401).json({ error: 'Unauthorized: Missing token' });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return res.status(401).json({ error: 'Unauthorized: Invalid token' });

    const postData = req.body;
    // Ensure that if slug is part of postData and it's being updated, it's also URL-friendly.
    // However, the .eq('slug', slug) uses the slug from the URL, so this is mostly for the payload's slug.
    if (postData.slug) {
        // You might want to re-slugify the incoming slug here if it's user editable
        // postData.slug = slugify(postData.slug); // If slugify is available backend-side
    }

    const { data, error } = await supabase.from('posts').update(postData).eq('slug', slug).select();
    if (error) {
        console.error('Supabase PUT error:', error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data[0]);
  }

  // --- IMPORTANT: You also need a POST endpoint handler for creating new posts ---
  // This will likely be in api/blog/posts/index.js (or similar)
  // For the sake of getting you unblocked, I'll provide a placeholder here
  // If your POST logic is in a different file (e.g. `api/blog/posts.js`), ensure that file also has CORS headers.
  if (req.method === 'POST') {
    const supabase = getSupabaseWithAuth(req);
    if (!supabase) return res.status(401).json({ error: 'Unauthorized: Missing token' });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return res.status(401).json({ error: 'Unauthorized: Invalid token' });

    const postData = req.body;
    // IMPORTANT: When creating a new post, ensure the slug is properly generated/slugified
    // This assumes your BlogEditor sends a slugified slug.
    if (!postData.slug && postData.title) {
        // You'll need a slugify function here if the frontend doesn't guarantee it
        // Or ensure the frontend always sends a valid slug
    }

    const { data, error } = await supabase.from('posts').insert(postData).select();
    if (error) {
        console.error('Supabase POST error:', error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(201).json(data[0]); // Return 201 for successful creation
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}