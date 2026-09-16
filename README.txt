# Utkarsh E-Portfolio

This is a responsive HTML/CSS/JavaScript e-portfolio starter.

## Files
- index.html — public portfolio
- style.css — design and responsive layout
- script.js — public rendering
- admin.html — admin interface
- admin.js — local demo admin logic
- assets/ — place your own photos here

## IMPORTANT SECURITY NOTE
The included admin panel is a local/browser demo. It stores added achievements/projects/certificates in localStorage, so changes are NOT automatically visible to your teacher on another phone.

For a real online admin system, connect the site to a backend/authentication service (for example Supabase) and use real authentication and database rules. Do not put a real password directly in public JavaScript.

## Setup
1. Open the folder in VS Code.
2. Open index.html in Chrome, or use Live Server.
3. Open admin.html to see the admin panel.
4. Before publishing, replace placeholder gallery content with your own photos.
5. For public deployment, use a static host such as GitHub Pages for the frontend, then connect the admin panel to a real backend for persistent updates.

## Next upgrade
The next version can use:
- Supabase Auth for admin login
- Supabase Postgres for projects/achievements/certificates
- Supabase Storage for photos/certificates
- A secure admin dashboard
- Public website that automatically reflects new entries
