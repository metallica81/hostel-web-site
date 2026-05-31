# Hostel "Высотка" Website

## Project Overview
Static website for hostel "Высотка" (ООО "Высота") in Bratsk, Russia.
Domain: vysotka-bratsk.ru

## Structure
- `/index.html` — main hostel page
- `/cafe/index.html` — cafe "Смак" page
- `/gym/index.html` — sports complex "Спортхолл" page
- `/sauna/index.html` — sauna page
- `/docs/` — assets (CSS, SCSS, JS, images, SVGs)
- `/docs/style.scss` — main SCSS entry point, compiled to `docs/style.css`
- `/docs/assets/scss/` — SCSS partials, JS scripts, SVG icons
- `/docs/assets/photo/` — photographs (hostel, cafe, gym, sauna)
- `/sitemap.xml` — sitemap for search engines

## Tech Stack
- Pure HTML/CSS/JS (no frameworks, no build tools, no package.json)
- SCSS compiled externally (likely via IDE/WebStorm)
- 2GIS Maps API for location map
- Google Fonts: Cormorant Garamond, Oswald, Roboto, Source Serif 4
- Yandex.Metrika analytics (counter 100123372, only on main page)

## Key Scripts
- `docs/assets/scss/header/header.js` — mobile menu toggle
- `docs/assets/scss/components/slider/slide.js` — image slider with swipe
- `docs/assets/scss/footer/initMap.js` — 2GIS map initialization
- `docs/assets/scss/footer/map.js` — unused mapgl-based map (imports from key.js)

## Design
- Primary color: #2A254B (dark purple)
- Accent: #4E4D93
- Responsive breakpoints: 400px, 600px, 756px, 1299px
- Fixed header with desktop nav and mobile hamburger menu

## Conventions
- Russian language content
- BEM-like class naming (e.g., `section-main__wrapper`, `header__nav-button`)
- Phone numbers: +7-914-896-10-98, +7-924-634-54-10
- Address: Южная 18а, г. Братск, 665708
