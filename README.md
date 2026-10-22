# Janna Fawy — Portfolio

Personal software-engineering portfolio for **Janna Khalid Fawy Mohamed** (Computer Science, South Valley National University).

Built with React 19, Vite 8 and Tailwind CSS v4.

## Stack

| Layer | Choice                             |
| ----- | ---------------------------------- |
| UI    | React 19 + Tailwind CSS v4         |
| Build | Vite 8 (`@vitejs/plugin-react`)    |
| Lint  | Oxlint                             |
| Fonts | Plus Jakarta Sans + Dancing Script |

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Structure

```
src/
  components/        # Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
  assets/data/       # siteData.js (email + social links), skillsData.js, projectsData.js, certsData.js
  assets/            # local images (profile.jpg)
  index.css          # Tailwind entry + theme tokens
public/              # favicon + generated project / certification artwork
```

## Sections

1. **Hero** — intro, role badges and primary links
2. **About** — journey, philosophy and quick stats
3. **Skills Orbit** — interactive solar-orbit / grid-matrix skill explorer
4. **Projects** — featured work with tech-stack highlights
5. **Certifications** — NTI MEAN-Stack (95%) and EG-CERT security credentials
6. **Contact** — direct contact card and an email composer form

## Customising

- Content lives in `src/assets/data/*.js` — edit those to change skills, projects and certifications.
- Personal details (name, email, social links) live in `src/assets/data/siteData.js`.
- Colors are defined as theme tokens in `src/index.css` (`--color-ink`, `--color-rose-brand`, `--color-cream`).
- Replace `src/assets/profile.jpg` with your own portrait; drop real screenshots into `public/` and update the `image` fields in `src/assets/data/`.
