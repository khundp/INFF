# How to Open the Dashboard on Your Computer

## Why double-clicking doesn't work

When you open an HTML file by double-clicking it, your browser runs it as a **local file** (`file://...`). For security reasons, browsers block local files from loading other local files (like `data.js`, `styles.css`). That's why you see white blocks — the page loads but can't fetch its data.

The fix is to run a tiny local web server — it takes 2 minutes to set up and you only do it once.

---

## Option 1 — VS Code (recommended, easiest)

If you already installed VS Code:

1. Open VS Code
2. Go to **Extensions** (left sidebar, looks like 4 squares)
3. Search for: `Live Server`
4. Install it (by Ritwick Dey — 50M+ downloads)
5. Click **File → Open Folder** and select `inff-dashboard`
6. Right-click on `index.html` in the file list
7. Click **"Open with Live Server"**
8. Your browser opens automatically at `http://127.0.0.1:5500/index.html`
9. Everything works — data, charts, navigation, all of it ✓

**Bonus:** Any time you save a change in VS Code, the browser refreshes automatically.

---

## Option 2 — Python (if you have Python installed)

You may already have Python. Check by opening Terminal (Mac) or Command Prompt (Windows) and typing:

```
python --version
```

If you see a version number:

1. Open Terminal / Command Prompt
2. Navigate to the dashboard folder:
   ```
   cd path/to/inff-dashboard
   ```
   (On Mac, you can drag the folder onto the Terminal window after typing `cd `)
3. Run:
   ```
   python -m http.server 8080
   ```
4. Open your browser and go to: **http://localhost:8080**
5. Dashboard loads fully ✓

To stop the server: press `Ctrl+C` in the terminal.

---

## Option 3 — Node.js (if your developer set it up)

```
npx serve inff-dashboard
```

Then open the URL it shows (usually `http://localhost:3000`).

---

## Sharing with colleagues (no server needed)

If you want colleagues to view it without any setup, the easiest options are:

- **Upload the folder to a web host** — any basic hosting (Netlify, GitHub Pages, or even UNDP's server) will serve it correctly. Your developer can do this in 10 minutes.
- **Use VS Code Live Server and share your screen** during a meeting
- **Netlify Drop** — go to https://app.netlify.com/drop, drag the entire `inff-dashboard` folder onto the page, and it gives you a live URL instantly. Free, no account needed.

---

## The landing page

The new `landing.html` / `index.html` now opens to the landing page first:
- **Slide 1:** Title + logos + "Explore" floating button
- **Slide 2:** Description + quick navigation tiles
- Scroll down (or press ↓) to move between slides
- The **Explore** button floats on screen at all times and takes you directly to the dashboard overview

---

*If you have any issues, the most reliable fix is always VS Code + Live Server.*


## Important note
This version uses shared HTML partials loaded with `fetch()` for the navigation, breadcrumbs, and page headers. Please open the site through a local web server, not by double-clicking the HTML files.


## Data file structure
The original `js/data.js` has been split into focused files under `js/data/`:

- `meta.js`
- `kpis.js`
- `byYear.js`
- `bySector.js`
- `states.js`
- `projects.js`
- `reforms.js`

The lightweight `js/data.js` now safely reassembles the global `INFF` object so the existing pages continue to work without changing their chart logic.


## Shared footer
All pages now load a single shared footer from `footer.html` using the existing `[data-include]` loader.
