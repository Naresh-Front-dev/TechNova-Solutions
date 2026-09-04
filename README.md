# TechNova Solutions

A modern, responsive technology-company website built as a frontend technical assessment. The project presents TechNova's services, insights, client feedback, and contact experience in a polished single-page layout.

## Live Demo

[View the live website](https://naresh-front-dev.github.io/TechNova-Solutions/)

## Features

- Responsive navigation with an accessible mobile menu
- Hero, About, Services, Blog, Testimonials, Contact, and Footer sections
- Six service cards rendered from local data
- First six JSONPlaceholder posts fetched with TanStack Query
- Loading, error, retry, and cached blog states
- Editorial article covers generated from each post's metadata
- Pre-generated `/blog/[slug]` detail routes for the API posts
- Three customer testimonial cards
- Client-side contact form validation with field-level feedback
- Motion-powered hero, logo, button, card, and scroll-reveal animations
- Next.js Metadata API and generated Open Graph artwork
- Semantic HTML, keyboard focus states, and reduced-motion support

## Tech Stack

- Next.js 16 with the App Router
- React 19
- JavaScript
- Tailwind CSS 4
- TanStack Query 5
- Motion for React 13 (Framer Motion)
- Space Grotesk headings and Manrope body typography
- Lucide React icons

## Getting Started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Naresh-Front-dev/TechNova-Solutions.git
cd TechNova-Solutions
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npx serve out
```

## Project Structure

```text
app/                 Routes, metadata, layout, and global styles
components/layout/   Navbar and footer
components/sections/ Landing-page sections
components/ui/       Reusable cards, links, and section headings
data/                Services, blog posts, and testimonials
public/images/       Local website artwork
```

## Form Behavior

The contact form validates all fields in the browser. It demonstrates the required user experience with clear errors and a success state; it does not send data to a backend.

## Blog Data

The Blog section uses TanStack Query's `useQuery` to fetch `https://jsonplaceholder.typicode.com/posts`. The first six results are formatted for the editorial article layout. Each API title is converted into a URL-safe slug used by the dynamic blog route.

## Deployment

The site is exported as static HTML and deployed to GitHub Pages by the workflow in `.github/workflows/deploy-pages.yml`. Every push to `main` creates a fresh deployment.
