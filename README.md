# saidali-portfolio

Suggested GitHub repository name: `saidali-portfolio`

## Overview
A single-page portfolio for Saidali S, a Software Test Engineer focused on automotive ECU validation and embedded software testing. The page leads with a validation flow (requirement to test report) and then covers what he validates, experience, skills, education and contact details. All content comes from his resume and LinkedIn profile. No metrics or project names have been invented.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. Dark mode follows the system setting. No API keys or environment variables needed.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Customize
- All text lives in `data/content.js`: profile, hero flow, work areas, experience, skills, education, certifications.
- Colors (light and dark) are the CSS variables at the top of `app/globals.css`.
- Layout pieces are in `components/`, one file per section.
- To add real projects later, add entries to `work` in `data/content.js`.

## Structure
```
app/         layout.js, page.js, globals.css
components/  Hero, Work, Experience, Skills, Education, Contact, Section
data/        content.js
```
