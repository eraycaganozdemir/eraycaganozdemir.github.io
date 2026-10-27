# Eray Çağan Özdemir · Portfolio

Static, bilingual (EN/TR) portfolio site — plain HTML, CSS and JavaScript, no build step.

```
index.html               page skeleton
assets/js/data.js        ALL content (experience, projects, skills…) in { en, tr }
assets/js/main.js        rendering, language toggle, project filters/expand
assets/css/style.css     dark terminal theme
assets/img/eray.jpg      profile photo
assets/ErayCaganOzdemir_CV.pdf   opened in a new tab by the "View CV" button
```

## Editing content

Everything you'd want to change is in `assets/js/data.js`.

- **New project:** copy an entry in `PROJECTS`, give it a unique `id`, set `cats` to any of `"ai"`, `"fullstack"`, `"mobile"`.
- **Repo / demo links:** fill a project's `links`, e.g.
  `links: [{ label: "GitHub", url: "https://github.com/..." }, { label: { en: "Live demo", tr: "Canlı demo" }, url: "https://..." }]`
- **Share one project:** every project has a direct link, e.g. `https://<your-site>/#p-suschedule-r`.
- **After changing CSS/JS:** bump the `?v=...` number on the three asset links in `index.html` (e.g. to today's date). Browsers cache these files for 10 minutes; a new number makes visitors load the new version right away.
- **New CV:** replace `assets/ErayCaganOzdemir_CV.pdf` (keep the file name or update `PROFILE.cv`).

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy to GitHub Pages

1. Create a public repo named **`eraycaganozdemir.github.io`** on GitHub.
2. Push this folder to it:
   ```bash
   git init && git add . && git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/eraycaganozdemir/eraycaganozdemir.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**.
4. After a minute the site is live at **https://eraycaganozdemir.github.io**.
