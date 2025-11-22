# Investment Calculator (Trivial App)

This is a small React + Vite practice application created while following the "React — The Complete Guide 2025" course. The goal is to collect user input for an investment, calculate results using the provided utility, and display the output in a table.

Core tasks implemented in this project

- Use the starting project attached to the lecture
- Add components for a header, user input form, and a result table
- Fetch and store user input (investment parameters)
- Derive investment results using the provided utility at `src/util/investment.js`
- Display investment results in an HTML table using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`
- Show an informational message when an invalid duration (less than 1) is entered

Quick overview

This repo uses Vite and React. The app reads the user-provided investment parameters, computes the projection via the helper function in `src/util/investment.js`, and shows a per-year breakdown in a table.

Prerequisites

- Node.js (LTS recommended) and npm (or a compatible package manager)

Install

Run this from the project root:

```bash
npm install
```

Development

Start the dev server (uses the `dev` script from `package.json`):

```bash
npm run dev
```

This will start Vite and typically serve the app at http://localhost:5173 — open that URL in your browser.

Available scripts (from package.json)

- `dev` — start Vite dev server
- `build` — build production assets with Vite
- `preview` — preview the production build locally
- `lint` — run ESLint on the codebase

Project structure (important files)

- `index.html` — Vite entry
- `package.json` — project metadata and scripts
- `src/App.jsx` — main app component
- `src/index.jsx` — React entry
- `src/index.css` — global styles
- `src/util/investment.js` — calculation helper used to derive the results
- `public/` — static assets

Usage notes and behaviour

- The app validates the duration and will show an information message if a value less than 1 is entered.
- Results are displayed in a table (thead/tbody rows) with a yearly breakdown.

Credits

Built while following course materials from "React — The Complete Guide 2025".

If you want me to also add a short CONTRIBUTING section, tests, or CI, tell me what you'd like and I can add those next.
