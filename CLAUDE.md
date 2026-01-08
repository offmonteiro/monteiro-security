# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for hosting pentesting writeups. Built with vanilla JavaScript (ES modules) and Microsoft Fluent Design 2 principles. Displays CTF solutions and security research documentation with filtering and search capabilities.

## Development

No build tools required. To develop locally, serve the directory with any static web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then open `http://localhost:8000` in a browser.

**Note**: ES modules require a server - opening `index.html` directly won't work due to CORS.

## Architecture

### File Structure

```
monteiro-security/
├── index.html              # Minimal HTML structure
├── writeups.json           # Content configuration
├── Monteiro.png            # Logo
├── writeups/               # PDF files
├── css/
│   ├── main.css            # CSS imports orchestrator
│   ├── design-system/
│   │   ├── variables.css   # Fluent Design tokens (colors, spacing, shadows)
│   │   ├── reset.css       # CSS reset and base styles
│   │   └── animations.css  # Keyframes and transitions
│   └── components/
│       ├── navbar.css      # Acrylic blur navbar
│       ├── hero.css        # Hero section
│       ├── stats.css       # Statistics cards
│       ├── filters.css     # Filter chips and search
│       ├── cards.css       # Writeup cards with reveal effect
│       └── states.css      # Loading, empty, error states
└── js/
    ├── main.js             # Entry point, initialization
    ├── config.js           # Constants (platform names, months)
    ├── data.js             # Fetch and data management
    ├── filters.js          # Filter state and logic
    ├── stats.js            # Statistics calculations
    ├── render.js           # DOM rendering functions
    └── utils.js            # Helpers (formatDate, debounce, animateCounter)
```

### Design System

Uses Fluent Design 2 dark theme with CSS custom properties in `variables.css`:
- Background layers: `--fluent-bg-base`, `--fluent-bg-layer-1`, etc.
- Accent color: `--fluent-accent` (#ff3e3e)
- Spacing scale: `--space-1` through `--space-20` (4px base)
- Shadows: `--shadow-2` through `--shadow-28`
- Typography: Segoe UI + Roboto Mono

### Key Features

- **Acrylic effect**: Navbar uses `backdrop-filter: blur(40px)`
- **Reveal highlight**: Cards have radial gradient following mouse position
- **Animated counters**: Stats count up on page load
- **Debounced search**: 300ms delay on search input

### Content Configuration

Writeups are defined in `writeups.json`:

```json
{
  "title": "Machine Name",
  "platform": "htb|thm|ctf|bugbounty",
  "difficulty": "easy|medium|hard|insane",
  "description": "Brief description",
  "tags": ["Tag1", "Tag2"],
  "date": "YYYY-MM-DD",
  "pdf": "writeups/filename.pdf"
}
```

## Adding New Writeups

1. Place the PDF file in `writeups/`
2. Add an entry to the `writeups` array in `writeups.json`

## Deployment

Static files served via GitHub Pages from the `main` branch. No build step required.
