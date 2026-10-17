# ProcrastiNOT student space

The app uses Supabase Auth for email/password accounts and a Supabase table to
save each account's display name, current focus, favorite subject, and study
pace. Saved work is private to the signed-in account through Supabase row-level
security policies.

Saving a current focus displays it as a sticky note below the focus form. A
new note animates in when the focus changes; the note reflects the account's
saved focus and appears again after signing in.

The Study preferences view saves the account's favorite subject and
preferred study pace. Custom subjects become selectable favorites in the
subject list. These are currently profile settings and do not yet change task
behavior.

The side menu is the main navigation: Home, Task list, Focus timer, Your
journey, Study buddies, and Preferences each open in their own view. The Task
list lets signed-in users add, complete, and remove tasks. Tasks are stored in
the current browser, separately for each account; they are not synced between
browsers or devices.

Completing each task once earns points and XP based on its size (5, 10, or 20).
Every 100 XP adds a level. Completing a task on a calendar day counts toward
the current and best streak. The journey page includes a placeholder for the
custom bear mascot artwork. Tasks and game progress are saved in the current
browser per account and are not synced between devices. A copy of points, level,
and current streak is synced to Supabase for the buddy feature.

## Focus timer and screen-break reminders

The home page includes a daily motivational quote loaded from QuoteSlate and
cached in the browser for the day. If the quote service is unavailable, an
offline quote is shown with a notice. The Settings panel lets users choose and
save a default Focus timer duration (1–120 minutes, initially 25) and a
screen-break reminder interval (1–120 minutes, initially 5). Settings are
saved automatically in the current browser, and the timer default is applied
to the Focus timer when it is idle.

While the signed-in site is visible, a separate reminder suggests a screen
break after the chosen amount of use and repeats after the same interval when
dismissed. This is only a browser-page reminder; it cannot limit device-wide
screen time or block other apps. Daily reminder time is stored in the current
browser. Users can enable desktop notifications from Settings; browser
permission may also need to be changed in browser settings. Reset local data
clears browser-stored tasks, progress, screen-break usage, and settings without
changing the account profile.

## Study buddies

Run [`buddy-system.sql`](./buddy-system.sql) in the Supabase SQL Editor after
the base schema. If you already set up the buddy feature, rerun this script to
add friend-code name previews. Signed-in users can share their friend code,
check which display name a code belongs to before sending a request, respond to
requests, and remove buddies. Accepted buddies see only each other's display
name, points, level, and current streak—not email addresses or task lists.
Friend codes are 16-character codes; pending requests can be cancelled. The
database policies restrict buddy stats to the account owner and accepted
buddies.

Points and tasks are still calculated/stored in browser-local storage. Buddy
stats are synced to Supabase for display, but because awards are calculated in
the browser, they are not tamper-proof and should not be used for prizes or
competitive leaderboards.

## Feedback

Run [`feedback-system.sql`](./feedback-system.sql) in the Supabase SQL Editor.
Signed-in users can then submit bug reports, feature requests, praise, and other
feedback. Submissions are stored in the `app_feedback` table; review them in
Supabase under **Table Editor → app_feedback**. Row-level security allows users
to submit their own feedback but does not let them read submissions. This setup
does not send email notifications.

## Run locally with Node.js

Install Node.js, then run these commands from the project folder:

```powershell
npm start
```

Open [http://localhost:3000](http://localhost:3000). The server uses Node.js built-in modules, so no `npm install` step is needed. To use a different port, set the `PORT` environment variable before starting the server.

## Configure Supabase

1. Create a Supabase project.
2. Open the project's SQL Editor, run [`supabase-schema.sql`](./supabase-schema.sql),
   and confirm that the `student_profiles` table has row-level security enabled.
3. Run [`buddy-system.sql`](./buddy-system.sql) in the SQL Editor to enable
   friend codes, buddy requests, and shared progress.
4. Run [`feedback-system.sql`](./feedback-system.sql) in the SQL Editor to enable
   feedback submissions.
5. Copy the project's **Project URL** and **anon/public key** into
   [`supabase-config.js`](./supabase-config.js):

   ```js
   window.SUPABASE_CONFIG = {
       url: 'https://YOUR-PROJECT.supabase.co',
       anonKey: 'YOUR_PUBLIC_ANON_KEY'
   };
   ```

   The anon/public key is intended for browser use. Never put a service-role
   key or other secret in this file.
6. In Supabase Authentication settings, configure the site URL and allowed
   redirect URLs for the address where the app will be hosted. Email
   confirmation can be enabled in the same settings.
7. Serve or deploy this folder over HTTP(S), then create an account in the app.
   The Supabase JavaScript client is loaded from jsDelivr, so the browser needs
   an internet connection.

Without valid Supabase project settings, the sign-in screen explains that
account service is not configured. The app never stores account passwords.
