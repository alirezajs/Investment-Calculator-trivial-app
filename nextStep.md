# Next Steps — Feature & Enhancement Roadmap

This document lists ideas, logic improvements, UX enhancements, tests, and engineering tasks you can add to the Investment Calculator to learn and demonstrate more advanced frontend and full-stack skills. Each item includes a short description, suggested complexity (Low / Medium / High), suggested priority, and a short implementation note.

---

## Quick wins (Low complexity)

- Componentize and clean structure
  - Description: Split UI into more focused components (e.g., `InputForm`, `ResultTable`, `Chart`, `Summary`).
  - Complexity: Low
  - Priority: High
  - Implementation: Create `src/components/InputForm.jsx`, `src/components/Summary.jsx`, `src/components/Chart.jsx` and move logic into props/hooks.

- Add input validation & user feedback
  - Description: Validate ranges, show inline errors, prevent invalid submits.
  - Complexity: Low
  - Priority: High
  - Implementation: Add a `useValidation` hook or small validators; show messages under each input.

- Improve number input UX
  - Description: Allow formatted inputs, prevent leading zeros, add stepper controls, handle negative values and empty values gracefully (already partially implemented).
  - Complexity: Low
  - Priority: High
  - Implementation: Use controlled inputs that store strings while typing and parse on blur; use `inputmode="numeric"` and pattern attributes for mobile.

- Add export to CSV
  - Description: Let users export the results table to CSV.
  - Complexity: Low
  - Priority: Medium
  - Implementation: Create an export utility, e.g., `src/utils/exportCsv.js`, and a small button to download.

---

## Visualization & UX (Medium)

- Add charts (line / area / stacked)
  - Description: Visualize investment growth, contributions, and interest over time.
  - Complexity: Medium
  - Priority: High
  - Libraries: Recharts, Chart.js, or Victory
  - Implementation: Add `src/components/InvestmentChart.jsx`. Example: `npm i recharts` and render `LineChart` with `resultData`.

- Add presets & scenarios
  - Description: Provide example scenarios (Aggressive, Conservative) and let users apply them.
  - Complexity: Medium
  - Priority: Medium
  - Implementation: Add `src/data/presets.js` and a selector component.

- Add dark mode / theme switcher
  - Description: Support themes stored in localStorage and applied via CSS variables.
  - Complexity: Low–Medium
  - Priority: Low
  - Implementation: Add a `ThemeContext` and small toggle in header.

- Improve accessibility (A11y)
  - Description: Keyboard navigation, proper labels, ARIA attributes, color contrast checks.
  - Complexity: Medium
  - Priority: High
  - Implementation: Run an a11y audit (Lighthouse, axe), fix issues and add tests where appropriate.

---

## Advanced financial logic (Medium–High)

- Support variable annual returns
  - Description: Instead of a single expected return, accept a year-by-year schedule or random variability.
  - Complexity: Medium
  - Priority: Medium
  - Implementation: Extend `calculateInvestmentResults` to accept an array or a stochastic generator.

- Add inflation adjustment
  - Description: Show results in real vs nominal terms, adjusting for user-provided inflation.
  - Complexity: Medium
  - Priority: Medium
  - Implementation: Add an `inflation` input and compute `realValue = nominal / (1 + inflation)^year`.

- Add taxes & fees
  - Description: Model taxes on interest, capital gains, and management fees.
  - Complexity: High
  - Priority: Medium
  - Implementation: Add fields for tax rates, fee %, tax-deferred account types; modify calculation pipeline.

- Contribution schedules
  - Description: Support monthly/quarterly contributions, one-time contributions, or escalating contributions (increase by X% per year).
  - Complexity: Medium–High
  - Priority: Medium
  - Implementation: Replace annual-only logic with a per-period (monthly) loop and adjust the UI to accept schedule options.

- Monte Carlo simulation
  - Description: Run many random return sequences and show percentiles (median, 10th, 90th).
  - Complexity: High
  - Priority: Low–Medium (great for learning)
  - Implementation: Add a worker or run in the main thread (careful with performance), store results, visualize distribution (histogram).

---

## State, persistence & multi-user (Medium–High)

- Persist settings locally
  - Description: Save user inputs and last results to `localStorage` or `indexedDB`.
  - Complexity: Low
  - Priority: High
  - Implementation: Add a small `useLocalStorage` hook or use `localforage` for async persistence.

- User accounts & sync (backend)
  - Description: Add authentication (OAuth / Email) and persist user scenarios and results server-side.
  - Complexity: High
  - Priority: Low–Medium
  - Implementation: Design a simple REST API (`/api/scenarios`) or use Firebase/ Supabase; create `src/services/api.js`.

- Shareable links / deep links
  - Description: Allow users to share their configuration via URL query params or short links.
  - Complexity: Medium
  - Priority: Medium
  - Implementation: Serialize state to the URL or store it server-side and return an ID.

---

## Testing, CI & quality (Low–Medium)

- Unit tests for calculation logic
  - Description: Add tests for `calculateInvestmentResults` covering edge cases (0 duration, negative contributions, etc.).
  - Complexity: Low
  - Priority: High
  - Tools: Jest + React Testing Library

- E2E tests for flows
  - Description: Use Cypress or Playwright to test input flows and expected table/chart outputs.
  - Complexity: Medium
  - Priority: Medium

- TypeScript migration
  - Description: Migrate files to TypeScript for type safety (particularly useful for the calculation functions and component props).
  - Complexity: Medium–High
  - Priority: Medium

- Storybook and visual testing
  - Description: Document components in Storybook and add visual regression tests.
  - Complexity: Medium
  - Priority: Low–Medium

---

## Performance & engineering (Medium–High)

- Optimize large simulations with Web Workers
  - Description: Run Monte Carlo or heavy calculations in a Web Worker to keep UI responsive.
  - Complexity: High
  - Priority: Low (only if needed)

- Bundle, code-splitting and lazy loading
  - Description: Split heavy components (charts, simulation panel) and lazy-load.
  - Complexity: Medium
  - Priority: Low–Medium

---

## Developer experience & tooling (Low)

- ESLint rules & Prettier
  - Description: Tighten rules and add autofix on save.
  - Complexity: Low
  - Priority: High

- GitHub Actions CI
  - Description: Run tests, lint, and build on PRs.
  - Complexity: Low–Medium
  - Priority: High

---

## Suggested first 6-week roadmap (example)

Week 1 — Foundation
- Componentize UI and add unit tests for calculation logic.
- Persist inputs to localStorage.

Week 2 — UX polish
- Improve input UX, inline validation, responsive layout, accessibility fixes.
- Add export to CSV and small summary component.

Week 3 — Viz and scenarios
- Add charts using Recharts.
- Add presets/scenarios and a presets selector.

Week 4 — Advanced calculations
- Add monthly contribution schedules and inflation adjustment.

Week 5 — Quality & CI
- Add Cypress E2E tests for main flows and configure GitHub Actions CI.

Week 6 — Optional
- Add Monte Carlo simulations (with a Web Worker), or add user accounts & sharing.

---

## Files & patterns to add

- `src/components/InvestmentChart.jsx` — chart component
- `src/components/ScenarioSelector.jsx` — apply presets
- `src/hooks/useLocalStorage.js` — persistence hook
- `src/services/api.js` — fetch/save scenarios
- `src/utils/exportCsv.js` — CSV export helper
- `src/utils/simulate.js` — Monte Carlo / variable return helpers

---

If you want, I can:
- scaffold a few of these (chart component + install instructions); or
- implement monthly contribution schedules and update calculation logic; or
- add unit tests for the calculation function.

Tell me which of the above you'd like to implement first and I will scaffold the files and follow-up tasks.
