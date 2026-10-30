# FlowPilot Landing Page — Frontend

A mobile-first responsive product landing page built with semantic HTML5, CSS3 and vanilla JavaScript.

## Run locally
1. Start the backend using the backend README.
2. Open this `frontend` folder in VS Code.
3. Use the Live Server extension to open `index.html` (usually `http://127.0.0.1:5500`).

The lead form posts to `http://localhost:5000/api/leads`.

## Customize before production
FlowPilot is a fictional demo product. Replace its branding, product claims, logos, and demo testimonials with your real product information. Update contact and privacy information as required.

## Deploy frontend to Vercel
Import the `frontend` directory as a Vercel project. Framework preset: Other; build command: blank; output directory: `.`. Configure the API URL by defining `window.LANDING_API_URL` before `script.js` in `index.html`, or edit `API_BASE` in `script.js` to your deployed backend URL plus `/api`.
