# Shreyash Shirsat — Personal Portfolio

A modern React portfolio website built with Vite and TypeScript, showcasing projects, skills, experience, and contact details.

## 🚀 Features

- Responsive hero section with resume download
- Contact form integrated with EmailJS for real email delivery
- Project showcase and experience sections
- Clean modern UI with mobile-friendly layout
- Smooth scroll navigation and social links

## 🧰 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS (via custom CSS and utility classes)
- EmailJS for contact form email delivery
- Lucide icons

## 📁 Project Structure

- `src/components/` — reusable UI sections
- `src/App.tsx` — main application wrapper
- `src/main.tsx` — app entry point
- `public/` — static assets and resume file

## ⚙️ Local Setup

```bash
npm install
npm run dev
```

Open the local development URL shown in the terminal to preview the site.

## ✉️ EmailJS Configuration

The contact form uses EmailJS. To enable real message delivery, create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart the Vite server.

## 📄 Resume Download

The hero section includes a resume download button that serves the file stored in the `public/` folder. Replace or update the resume file there as needed.

## 📦 Deployment

This project can be deployed to Vercel, Netlify, or any static site hosting provider that supports Vite.

## 💡 Notes

If the contact form is not sending email after deployment, double-check that the EmailJS environment variables are set in the deployment platform and match the values in your EmailJS account.

---

Created and customized by Shreyash Shirsat.
