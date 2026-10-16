# ProcrastiNOT student space

The app uses Supabase Auth for email/password accounts and a Supabase table to
save each account's display name, current focus, favorite subject, and study
pace. Saved work is private to the signed-in account through Supabase row-level
security policies.

## Configure Supabase

1. Create a Supabase project.
2. Open the project's SQL Editor, run [`supabase-schema.sql`](./supabase-schema.sql),
   and confirm that the `student_profiles` table has row-level security enabled.
3. Copy the project's **Project URL** and **anon/public key** into
   [`supabase-config.js`](./supabase-config.js):

   ```js
   window.SUPABASE_CONFIG = {
       url: 'https://YOUR-PROJECT.supabase.co',
       anonKey: 'YOUR_PUBLIC_ANON_KEY'
   };
   ```

   The anon/public key is intended for browser use. Never put a service-role
   key or other secret in this file.
4. In Supabase Authentication settings, configure the site URL and allowed
   redirect URLs for the address where the app will be hosted. Email
   confirmation can be enabled in the same settings.
5. Serve or deploy this folder over HTTP(S), then create an account in the app.
   The Supabase JavaScript client is loaded from jsDelivr, so the browser needs
   an internet connection.

Without valid Supabase project settings, the sign-in screen explains that
account service is not configured. The app does not save account passwords or
saved work in browser storage.
