# SS Dental Health — "friendly clinic" website

A full MERN-stack website for SS Dental Health: React (Vite) + plain CSS frontend,
Node/Express + MongoDB backend, with WhatsApp appointment notifications via CallMeBot.

## What's included

**Pages:** Home, About Us (owner, doctors, current interns), Services, Book Appointment,
Contact. Home page includes an offers / free checkup camp section.

**Appointment booking flow:** patient fills the form → saved to MongoDB → clinic owner
gets an instant WhatsApp message via CallMeBot → patient sees a confirmation screen
telling them they'll get a call soon.

**Design:** blue & white theme, "Baloo 2" + "Inter" fonts, scroll-reveal animations,
a signature smile-curve divider between sections, floating WhatsApp chat button,
fully responsive down to mobile.

All doctor/intern names and photos are placeholders — replace them any time in
`frontend/src/data/clinicData.js`.

## Project structure

```
ss-dental-health/
├── backend/          Express API + MongoDB models
└── frontend/          React (Vite) app, plain CSS
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env`:
- `MONGO_URI` — your MongoDB connection string (local Mongo or a free MongoDB Atlas cluster)
- `OWNER_WHATSAPP_NUMBER` / `CALLMEBOT_API_KEY` — see WhatsApp setup below
- `ADMIN_KEY` — any secret string, used to protect the `GET /api/appointments` endpoint

Run it:
```bash
npm run dev      # with nodemon, auto-restarts
# or
npm start
```
API runs at `http://localhost:5000`.

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Site runs at `http://localhost:5173`.

## 3. WhatsApp notifications (CallMeBot — free, no business account needed)

CallMeBot lets you send yourself WhatsApp messages for free via a simple API call.

1. Save **+34 644 59 71 44** as a contact on the phone that should receive booking alerts.
2. From that phone, send this exact WhatsApp message to the contact:
   `I allow callmebot to send me messages`
3. Within a minute or two you'll get a reply on WhatsApp containing your personal API key.
4. In `backend/.env`, set:
   ```
   OWNER_WHATSAPP_NUMBER=91XXXXXXXXXX   # your number, country code, no + or spaces
   CALLMEBOT_API_KEY=the_key_you_received
   ```
5. Restart the backend. New appointment bookings will now WhatsApp you automatically.

If you outgrow CallMeBot's free tier (rate-limited, single recipient), swap
`backend/utils/whatsapp.js` for the official WhatsApp Business Cloud API — the rest
of the app doesn't need to change.

## 4. Before going live

- Replace placeholder doctor/intern photos and bios in `frontend/src/data/clinicData.js`
- Update the clinic address, phone, and email in `Footer.jsx`, `Contact.jsx`, and `WhatsAppFloat.jsx`
- Point `frontend/.env` `VITE_API_URL` at your deployed backend URL
- Use MongoDB Atlas (free tier) for a hosted database instead of local MongoDB
- Consider adding authentication before exposing any admin/appointments dashboard

## Tech stack

- **Frontend:** React 18, React Router, plain CSS (CSS variables, no framework), Vite
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Notifications:** CallMeBot WhatsApp API
