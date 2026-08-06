# Personal website (al-folio–inspired)

A minimal personal site built with plain **HTML + CSS** (plus a tiny bit of JS
for the dark-mode toggle). Inspired by the look of the Jekyll
[al-folio](https://github.com/alshedivat/al-folio) theme. No build step, no
dependencies — just static files.

## Pages
- `index.html` — **about** (intro, profile photo, CV link, social icons)
- `publications.html` — publications (empty for now)
- `projects.html` — projects (empty; card template included in the source)
- `blog.html` — blog (empty for now)

## What to customize
1. **Your name & bio** — search-and-replace `Your Name` and edit the intro
   paragraphs in `index.html`. Update the affiliation/email in the subtitle.
2. **Profile photo** — drop your image at `assets/img/prof_img.jpg`
   (that exact path is already referenced on the about page).
3. **CV** — replace `assets/cv/cv.pdf` with your real CV (keep the same name,
   or update the link in `index.html`).
4. **Social links** — edit the `href`s in the `.social` block of `index.html`
   (GitHub, LinkedIn, Google Scholar, ORCID, X, email). Delete any you don't want.
5. **Accent color** — change `--accent` at the top of `assets/css/style.css`.
6. **Favicon / brand initial** — `assets/img/favicon.svg` and the `.brand` text.

## Preview locally
You have Node installed, so from this folder run:

```bash
npx serve .
# or:  python -m http.server 8000
```

Then open the printed URL. (Opening `index.html` directly in a browser also
works, though a local server behaves closer to production.)

## Deploy to GitHub Pages (user site)
This is set up as a **user site** served at `https://<username>.github.io/`.

1. Create a GitHub repo named **exactly** `<username>.github.io`
   (e.g. if your username is `romy`, name it `romy.github.io`).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source: "Deploy from a branch"**, branch **`main`**, folder **`/ (root)`**.
4. Wait ~1 minute, then visit `https://<username>.github.io/`.

The `.nojekyll` file tells GitHub Pages to serve the files as-is (no Jekyll
processing needed).
