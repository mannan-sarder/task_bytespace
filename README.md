# ByteSpace New

Frontend assessment for Doin Tech Limited (Jr. Software Engineer, Frontend). Built from the Figma design: landing page, login and signup.

## Stack

Next.js 15 (App Router), TypeScript (strict), Tailwind CSS v4, Lucide React, Framer Motion, React Hook Form, Zod.

## Getting started

Requires Node.js 20 or newer. Add the Satoshi and Clash Display font files first (see `app/fonts/README.md`).

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Structure

```text
app/           routes, global CSS (design tokens), fonts
components/    ui (reusable primitives), layout, sections
constants/     static site values
lib/           helpers and font setup
data/, types/  added together with the first section that needs them
```

## Design tokens

`app/globals.css` holds the tokens from the Figma variables (colors, text styles, radius, shadow, content width). Names follow Figma: `text-heading-l`, `bg-shuttle-gray-950`, `text-electric-lime-400`. Tailwind's default color, radius, shadow and font-size scales are disabled, so only values from the design are available.
