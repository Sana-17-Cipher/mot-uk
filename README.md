# Moms on Teaching UK — Next.js

A Next.js App Router and TypeScript website with static generation. The wording, images, and responsive styles were carried over from https://gulf.momsonteaching.com/ on 11 October 2026. All content is in editable React components; it is not an iframe or a runtime copy of the Gulf website.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
```

The `out/` folder is the complete static website. Upload its **contents** to your UK domain's web root (for example, Hostinger's `public_html`), or connect the source to Vercel/Netlify and use their Next.js support. Do not upload `node_modules` or `.next` to a static host.

Before building for your own domain, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real site origin. This controls canonical URLs, Open Graph URLs, sitemap, and organisation schema. The included fallback is the private review site's URL; the UK domain example is not a configured or verified domain.

## Pages

- `/` — Home
- `/about/`
- `/services/`
- `/faq/`
- `/pricing/`
- `/contact/`
- `/locations/`
- `/locations/london/`
- `/locations/leicester/`
- `/locations/birmingham/`
- `/locations/manchester/`
- `/locations/coventry/`
- `/locations/slough/`
- `/site-map/`, `/sitemap.xml`, `/robots.txt`

## Editing guide

- `app/`: Next.js routes and SEO metadata.
- `components/*Content.tsx`: original page wording and layout.
- `components/Navbar.tsx` and `Footer.tsx`: shared navigation and footer.
- `components/ContactContent.tsx`: demo request form.
- `components/TeacherCarousel.tsx` and `data/teachers.ts`: teacher cards and controls.
- `components/Testimonials.tsx`: original illustrative feedback and pause control.
- `data/locations.ts`: six UK city names and slugs.
- `components/LocationContent.tsx`: shared city-page content.
- `styles/reference.css`: preserved responsive styles with readable class names.
- `styles/adjustments.css`: small interaction and accessibility adjustments.
- `public/images/`: original logo and hero image.
- `public/fonts/`: locally bundled fonts.

## Content scope

Location navigation, directory cards, city-page wording, local time zone, and the contact form location field were changed to the UK. The city pages use GMT/BST and GBP. The rest of the source wording, curricula, teachers, and numeric INR pricing are unchanged, as requested. In particular, the source Pricing and FAQ still mention AED in their conversion notes; those were retained because they are outside the requested location changes. They can be updated separately to GBP when approved.

All five supplied social media links are active. The footer retains the original GCC website resource link. Blog, Privacy Policy, and Terms of Use are non-linked text, as on the source website; no legal or blog content was supplied or invented. The Site Map item is now a working index.

## Contact and analytics

The form validates required fields and opens the visitor's email application with a prepared message to `info@momsonteaching.com`. The visitor must send the email. There is no database, email delivery service, or false success notification. WhatsApp and phone links also work directly.

Google Analytics `G-YKYVH5SZ2G` is configured once in the root layout through `components/Analytics.tsx` using `next/script` with `afterInteractive`. Normal anchor navigation generates a new page load, so no duplicate route-tracking hook is installed. Live receipt of analytics events and actual email sending have not been tested.

## Verification

Production build includes TypeScript checking and static generation. Additional output checks compare the page wording against the source, validate local routes and assets, and confirm all six UK city pages and supplied social links. Browser-based visual and interaction testing was unavailable in this environment; check desktop and mobile layouts on the review site before public launch.
