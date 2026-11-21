# Hailey Portfolio

A portfolio website built with Next.js (App Router), React and Bootstrap 5.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

All of your content lives in one file: `data/portfolio.js`
(name, tagline, about text, skills, projects, social links, email).
Colors and spacing tweaks are in `app/globals.css`.

## Structure

```
app/            layout, page, global styles
components/     NavBar, Hero, About, Skills, Projects, Contact, Footer
data/           portfolio.js (your content)
```

## Deploy

Push to GitHub and import the repo on Vercel, or run `npm run build && npm start`.
