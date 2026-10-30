# FlowPilot Landing Page — Backend

REST API built with Node.js, Express and MongoDB. It stores enquiries from the landing page CTA form.

## Requirements
- Node.js 18+
- MongoDB Community Server running locally, or MongoDB Atlas

## Windows PowerShell setup
Run these commands from the project root:
```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```
Edit `.env` if your MongoDB connection string or frontend origin differs.

## URLs
- API status: `http://localhost:5000/`
- Health: `http://localhost:5000/api/health`
- Submit lead: `POST http://localhost:5000/api/leads`
- List leads: `GET http://localhost:5000/api/leads` (development/admin convenience endpoint; protect with authentication before production)

## Example POST body
```json
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "company": "Example Co",
  "message": "We want to improve how our team manages projects."
}
```

Database: `flowpilot_landing`; collection: `leads`.

## Deployment
Deploy this backend to Render, Railway, or another Node.js host. Configure `MONGODB_URI`, `PORT` (normally provided by the host), and `CLIENT_ORIGIN` with your Vercel frontend origin. Update the frontend `API_BASE` in `frontend/script.js` to `https://your-api-domain/api`. Do not commit `.env`. Add authentication and authorization to the lead-list endpoint before exposing it publicly.
