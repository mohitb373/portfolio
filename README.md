# Portfolio

A single-page, 3D-rotating portfolio built with **Next.js (App Router) + React + TypeScript + Tailwind CSS**, inspired by the layout/interaction style of https://guzhiregem.github.io/.

Five screens — `home` / `about` / `experience` / `skills` / `contact` — sit on a
perspective-tilted carousel. Navigate with the on-screen buttons, the header
arrows, **arrow keys**, or **swipe** on touch devices. Includes a typewriter
intro, an animated masked background, and a dark/light toggle.

## Edit your content

All text lives in one file — **`src/data/profile.ts`**. Replace the placeholder
strings (name, title, about, experience, skills, contact links). Nothing else
needs editing for the content.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel)

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) —
Next.js is detected automatically, no config needed.

## Structure

```
src/
  app/            layout, page, global + Tailwind styles
  components/      Portfolio (carousel/state), Page, Header,
                   Typewriter, Parallax, DarkModeSelector
  components/sections/  Home, About, Experience, Skills, Contact
  data/profile.ts  <- your content
```
