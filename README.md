# Bhargavi Ganesh - Academic Website

A simple static website for an academic/research professional. No build tools or dependencies required.

## Structure

```
├── index.html          # Home page
├── about.html          # About/bio page
├── publications.html   # Publications list
├── talks.html          # Talks & presentations
├── awards.html         # Awards & honors
├── contact.html        # Contact information
├── css/
│   ├── variables.css   # Colors, fonts, spacing
│   ├── base.css        # Reset, typography, buttons
│   ├── components.css  # Header, footer, cards
│   └── pages.css       # Page-specific styles
├── js/
│   ├── theme.js        # Dark/light mode toggle
│   ├── menu.js         # Mobile menu
│   ├── search.js       # Publications search
│   ├── animations.js   # Scroll animations
│   └── router.js       # Smooth page transitions
└── assets/             # Images, documents
```

## Running Locally

**Option 1: Open directly**
- Double-click `index.html` to open in browser
- Note: Page transitions won't work with `file://` protocol

**Option 2: Local server (recommended)**
```bash
npx serve
```
Then open http://localhost:3000

## What to Update

### Personal Info (all pages)
Search and replace across all HTML files:
- `bg@ed.ac.uk` → your email
- `Room 1000000` → your office
- `https://linkedin.com` → your LinkedIn URL
- `href="#"` near Google Scholar → your Google Scholar URL

### Profile Photo (about.html)
Replace the placeholder with an image:
```html
<!-- Change this: -->
<div class="placeholder-image">BG</div>

<!-- To this: -->
<img src="assets/photo.jpg" alt="Your Name" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
```

### Publications (publications.html)
Each publication is a `<div class="publication-card">` block. Copy/paste and edit for each publication. Update the `data-title`, `data-authors`, `data-abstract` attributes (lowercase) for search to work.

### Talks (talks.html)
Each talk is a `<div class="talk-card">` block. Update or remove as needed. Replace `href="#"` with actual slide/video URLs.

### Awards (awards.html)
Replace placeholder awards with real ones. Each award is a `<div class="award-card">` block within a year group.

## Deployment

This is a static site - upload all files to any web host:

- **GitHub Pages**: Push to a repo, enable Pages in settings
- **Netlify**: Drag and drop the folder
- **University hosting**: Upload via FTP/SFTP

## Features

- Responsive design (mobile-friendly)
- Dark/light mode (auto-detects system preference, saves choice)
- Smooth page transitions
- Publications search/filter
- Scroll-triggered animations