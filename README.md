# TechNova Solutions

A modern, responsive technology-company website built as a frontend technical assessment. The project presents TechNova's services, insights, client feedback, and contact experience in a polished single-page layout.

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
git clone YOUR_REPOSITORY_URL
cd technova-solutions
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
npm start
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

The application is ready for deployment on Vercel. Connect the repository in Vercel and use the standard Next.js build settings.

Set `NEXT_PUBLIC_SITE_URL` to the final production origin so generated social metadata uses the live address:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Verify the generated production URL after deployment.
