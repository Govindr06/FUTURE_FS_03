# Aura Premium Salon

A premium single-page landing experience for a luxury hair and styling salon. The project is designed to turn high-intent visitors into consultation inquiries through a polished service showcase and a focused VIP booking flow.

## Live Demo

Explore the deployed website: [Aura Premium Salon on Vercel](https://future-fs-03-g1cjkkyml-citinghorizon0-4608s-projects.vercel.app/)

## Overview

High-end salons can lose valuable bookings when inquiries are scattered across phone calls and social media messages. Aura Premium Salon presents a refined digital front desk: visitors can explore signature services and submit a consultation request at any time.

This portfolio version is a frontend-only demo. The booking form simulates a network request with a 1.5-second delay, allowing the interface to demonstrate loading, disabled-button, reset, and success-message states without an external backend.

## Features

- Full-screen luxury hero section with a clear consultation call to action
- Smooth scrolling from the hero directly to the VIP booking form
- Responsive premium services grid with starting prices
- Accessible form fields for name, email, phone number, and requested service
- Required-field validation for name, email, and service selection
- Simulated async submission with an elegant `Sending...` state
- Form reset and concierge-style success confirmation after submission
- Responsive matte-black and rose-gold visual system
- Minimalist icons from `lucide-react`

## Tech Stack

- [React](https://react.dev/) for the component-based UI
- [Vite](https://vite.dev/) for local development and production builds
- [Tailwind CSS](https://tailwindcss.com/) for styling and responsive layouts
- [Lucide React](https://lucide.dev/) for lightweight interface icons

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone <your-repository-url>
cd FUTURE_FS_03
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

To preview the generated production build:

```bash
npm run preview
```

## Project Structure

```text
FUTURE_FS_03/
├── src/
│   ├── App.jsx          # Landing page sections and booking form logic
│   ├── index.css        # Tailwind layers and global styles
│   └── main.jsx         # React application entry point
├── PITCH.md             # Business-growth pitch for the project
├── index.html           # Vite HTML entry point
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Scripts and dependencies
```

## Booking Flow

1. The visitor selects **Request VIP Consultation**.
2. The page smoothly scrolls to the booking section.
3. The visitor enters their details and chooses a premium service.
4. On submission, the button is disabled and displays `Sending...`.
5. After 1.5 seconds, the form clears and a success message confirms the request.

## Design Direction

The interface uses matte black, crisp white, and champagne-inspired rose accents to position Aura as an elevated local brand. Serif headings, restrained borders, subtle hover states, and generous spacing keep the page luxurious without feeling busy.

## Future Enhancements

- Connect the form to a production CRM or booking API
- Add preferred appointment dates and stylist selection
- Send automated confirmation emails or SMS messages
- Add a gallery of salon work and client testimonials
- Deploy the site with analytics and conversion tracking

## Related Document

See [PITCH.md](./PITCH.md) for the business case behind the landing page.
