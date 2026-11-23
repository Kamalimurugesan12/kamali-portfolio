# Kamali M | Developer Portfolio

A responsive, dark-themed developer portfolio built with **React 18**, **Vite**, and hand-written CSS. No UI kits, no animation libraries, no templates. All content comes from Kamali's resume.

## Features

- Sections: Home, About, Skills, Experience, Projects, Achievements, Education, Contact, Footer
- Custom loading screen, cursor-follow effect, magnetic buttons, spotlight cards, animated gradient borders
- Scroll-triggered reveals, subtle parallax, typing animation, count-up stats
- Bento project grid with hover reveal (descriptions are always visible on touch devices)
- Sticky navbar with active-section indicator and an accessible mobile menu
- Contact form with real validation
- Respects `prefers-reduced-motion`, keyboard navigation, skip link, semantic HTML, alt text
- Only two runtime dependencies: `react` and `react-dom`

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
public/
  favicon.svg
  images/               profile photos (WebP + JPG, two sizes) and projects/
  resume/               Kamali_M_Resume.pdf (the Download Resume target)
src/
  components/           one component per section, plus shared UI
  hooks/                reveal, typing, magnetic, spotlight, active section, scroll vars
  data/portfolioData.js ALL content lives here
  styles/               global.css (tokens, layout), components.css, animations.css
  App.jsx, main.jsx
```

## Updating content

Almost everything you will want to change is in **`src/data/portfolioData.js`**.

### Replace the profile photo

1. Put your new photo in `public/images/`.
2. Create two sizes (900 px and 480 px wide) in WebP and a 900 px JPG, for example with [Squoosh](https://squoosh.app), and name them `profile-900.webp`, `profile-480.webp`, `profile-900.jpg`, replacing the existing files.
3. Update the `alt` text in `profile.photo` in `portfolioData.js`.

The photo sits on a soft blue backdrop using `mix-blend-mode: multiply`, so it works best with a white or very light studio background.

### Replace the resume PDF

Overwrite `public/resume/Kamali_M_Resume.pdf` with the new file, keeping the same name. If you rename it, update `resume` and `resumeFileName` in `portfolioData.js`.

### Update GitHub, LinkedIn and email

Edit `github`, `linkedin` and `email` in the `profile` object of `portfolioData.js`. They are used in the hero, contact section, footer and page metadata. Also update the JSON-LD block in `index.html`.

### Add internship dates

Both internships have an empty `duration` field because the resume does not list dates. Fill them in (for example `'Jun 2025 - Aug 2025'`) and they appear automatically.

### Projects: repositories, demos and screenshots

Each project in `portfolioData.js` has `repo`, `demo` and `image` fields. A button only appears when its field is filled. The Portfolio Website project has no repository yet; add its URL to `repo` when it exists. To use a real screenshot instead of the built-in illustration, see `public/images/projects/README.txt`.

## Contact form

Out of the box the form validates input and then **opens the visitor's email app** with the message prefilled, and says so. It never claims a message was sent.

To send messages directly from the site, create a form on [Formspree](https://formspree.io) (or a similar service), copy `.env.example` to `.env`, and set `VITE_FORM_ENDPOINT`. The form then POSTs the data and only shows success when the service confirms it. On Vercel or Netlify, add the same variable in the project's environment settings.

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New, Project**, and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.

### Netlify

1. Push this folder to a GitHub repository.
2. On [netlify.com](https://app.netlify.com), choose **Add new site, Import an existing project**, and pick the repository.
3. The included `netlify.toml` sets the build command and publish directory. Click **Deploy**.

After deploying, you can add your live URL to the `og:url` meta tag in `index.html`.

## Accessibility notes

- All animation is disabled or reduced when the visitor prefers reduced motion.
- The custom cursor only appears on devices with a mouse, and never hides the native cursor.
- Links that open new tabs say so for screen readers; form errors are announced.
