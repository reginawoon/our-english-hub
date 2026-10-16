[README.md](https://github.com/user-attachments/files/33541514/README.md)
# Our English Hub — MLDS Website Starter

A responsive bilingual-friendly **public showcase and resource website**, designed for an MLDS English programme. This is a static website, with no accounts or data collection. It works offline if you open `index.html` locally, and can be hosted for free with GitHub Pages.

## What it contains

- Home: welcoming message and educational ethos.
- Projects: *Welcome to France* (four weeks), *My Internship Story* (two weeks), *My Next Chapter* (planned).
- Resources: six practical mini-activities and a working level filter.
- Showcase: three **clearly labelled fictional examples**, ready to replace with authorised work.
- My journey: prompts for reflective learning and a button to your approved **private** school space.
- Mobile navigation, accessible labels, lightweight styles; no tracking, third-party scripts or cookies introduced by this template.

## Quick preview

Open `index.html` in a web browser. No setup or programming tools are needed.

## Publish with GitHub Pages (free public site)

1. Create a free GitHub account if you do not already have one.
2. Create a new **Public** repository, e.g. `our-english-hub`.
3. Upload `index.html`, `styles.css`, `app.js`, `config.js`, `.nojekyll`, and `README.md` to the repository **root** (not inside an extra folder).
4. Go to repository **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Choose branch `main`, folder `/(root)`, then **Save**.
6. The site will be available at `https://YOUR-USERNAME.github.io/our-english-hub/` once GitHub finishes deployment.
7. To update content later, edit the files from GitHub's web editor, then commit the changes. GitHub Pages republishes the public site.

Your site is **publicly accessible**. A private GitHub repository does not provide a free, secure, private student area in GitHub Pages. GitHub Pages does **not** process uploads, user accounts, teacher approval, or private portfolios; use the school's approved learning platform (e.g. Éléa) for that.

## Connect private student space

When the institution confirms the platform and course link, open `config.js` and set:

```js
window.OUR_ENGLISH_HUB_PRIVATE_URL = 'https://YOUR-SCHOOL-APPROVED-URL/';
```

All buttons labelled *Student space* / *private portfolio* will open that link in a new tab. The template does **not** implement a login or store student work. Until you add the URL, the buttons show a clear setup message instead of pretending uploads work.

## Recommended safe publication workflow

1. Students log into the **school-approved Éléa** course (or equivalent).
2. Students submit texts, audio, photos or documents using `Devoir` / `Partage de fichiers`.
3. Teacher selects the `Approbation par l'enseignant` setting so submissions are not automatically visible to classmates.
4. Teacher reviews work and, where appropriate, approves sharing in class.
5. For the public showcase **separately** obtain and record necessary school authorisations and rights to publish the creation (and any images, voices, names). Avoid identifying students; use anonymised extracts when permitted. Never assume consent to class sharing implies permission to publish on the open web.
6. Publish only approved public-ready content, without student accounts, internal links, tokens, screenshots of the LMS or assessment/behavioural details.

**Important:** Anything pushed to a public GitHub repository can remain in its version history even after an edit. Never upload private student information to the repository in the first place. Coordinate with the school's direction and data protection officer (DPO/DPD) before using an external public site for real student work.

## Edit the website

- Titles, pages, weeks, learning prompts, examples: edit `index.html`.
- Colours, layout, fonts, spacing: edit `styles.css` (see variables at top).
- Menu, resource filters, safe student-space button: edit `app.js`.
- School-approved student-space link: edit `config.js`.

## Free hosting options

- **GitHub Pages** — free for public static sites; great for custom design, no built-in student login or uploads.
- **Google Sites** — easier no-code editing, but limited custom design and no built-in moderated student submission system.
- **Éléa** — ministry-supported Moodle learning environment, suited to student submissions, feedback and teacher moderation, subject to institutional access.

Suggested split: **GitHub Pages (public website) + Éléa (private student learning)**.
