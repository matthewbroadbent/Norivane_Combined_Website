import { supabase_server } from '$lib/supabase.server.js';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');

        console.log(`Received CRM data on the server: ${name}, ${email}`);

        // In the future, you would use the secure client to write to the DB:
        /*
        const { data, error } = await supabase_server
            .from('crm_contacts')
            .insert([{ name, email }]);

        if (error) {
            console.error('Error inserting data:', error);
            return { success: false, error: error.message };
        }
        */

        console.log('Data ready to be inserted into Supabase via secure client.');
        return { success: true };
    }
};
