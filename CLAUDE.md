# Sunwing Revenue Management System — POC

## What this is
A UI prototype / proof-of-concept for a **travel revenue management platform** built for **Sunwing** — part of the WestJet Group, one of Canada's largest tour operators specializing in sun-destination vacation packages, flight-only bookings, hotel-only bookings, and group travel. This is a demo/sales tool, not a production app. There is no backend. All data is seeded in `data.js`.

The design is a clean enterprise dashboard aesthetic (dark nav, white body, pink accent). Do not re-use or reference any third-party IP — all designs are original recreations in spirit only.

---

## Tech stack
- **Pure HTML + CSS + Vanilla JS** — no framework, no build step, no npm
- Files open directly in a browser
- Charts use **Chart.js 4** via CDN (`https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js`)
- Fonts: **Archivo** + **JetBrains Mono** via Google Fonts
- All shared styles in `styles.css`
- All seed data in `data.js` (loaded via `<script src="data.js">` on every page)
- All prices shown in **CAD ($)**

---

## File structure
```
swdemo/
├── CLAUDE.md               ← you are here
├── index.html              ← redirects to pricing.html
├── styles.css              ← ALL shared styles (do not inline styles in HTML unless minor tweaks)
├── data.js                 ← ALL seed data and data helper functions
├── pricing.html            ← Main Pricing screen: Vacation Packages subtab (BUILT)
└── demand.html             ← Demand Forecast screen (stub, two Chart.js charts)
```

---

## Product / business concepts

Sunwing is a tour operator selling several product types:

- **Vacation Packages** — bundled flight + hotel (7, 10, 14 nights typical); the flagship product
- **Hotel Only** — hotel room nights sold without a flight
- **Flight Only** — flight seats sold standalone on Sunwing-branded / WestJet aircraft
- **Groups** — bulk contracts (weddings, incentives, sports teams)
- **Ancillaries** — transfers, excursions, insurance, seat selection, baggage
- **Dynamic Packaging** — on-the-fly package assembly from live inventory

Key revenue-management concepts used throughout:
- **Load factor (LF)** — % of packages/seats/beds sold vs total available
- **Beds bought / Seats bought** — contracted hotel room nights vs contracted flight seats
- **Beds:Seats ratio** — if < 1.0 there are more seats than beds (risk of unsold seats); if > 1.0 there are more beds than seats (risk of distressed hotel inventory)
- **Booking pace** — actual bookings curve vs target booking curve at this days-out
- **Margin** — difference between total cost (land + air) and sell price; RM actions recommend margin changes
- **Gateway** — the departure airport (YYZ Toronto, YVR Vancouver, YWG Winnipeg, YUL Montreal, YYC Calgary)
- **Regions** — Caribbean, Mexico, Europe, Sun/Sand (catch-all warm-weather)

---

## Design system

### Colors (CSS variables in styles.css)
```
--nav-bg:         #16181d      ← dark charcoal nav/header background
--nav-border:     #2a2d35      ← nav border / divider color
--accent:         #e8007d      ← Sunwing pink — primary action color, active states, highlights
--accent-dim:     #c4005e      ← darker pink for hover
--warn:           #f5a623      ← amber warning (pace alerts, ratio warnings)
--danger:         #e05252      ← red for negative deltas, behind-pace
--body-bg:        #f5f6f8      ← light grey page background
--surface:        #ffffff      ← white cards, table backgrounds, modals
--border:         #e4e6eb      ← default border
--text-primary:   #1a1d23      ← main text
--text-secondary: #6b7280      ← secondary/label text
--text-muted:     #9ca3af      ← muted/placeholder text
```

### Typography
- Body font: `Archivo` (weights 300, 400, 500, 600, 700)
- Monospace (package IDs, flight numbers, codes): `JetBrains Mono` (weights 400, 500)
- Base font size: 13px
- Table cell font size: 12.5px
- Column headers: 11.5px, font-weight 600, color `--text-secondary`

### Layout
- App shell: `display:flex; flex-direction:column; height:100vh; overflow:hidden`
- Top nav height: 52px
- Filter bar height: 44px
- Sub-tab bar height: 44px
- Remaining space: scrollable table area

### Key CSS classes
- `.topnav` — dark top navigation bar
- `.filter-bar` — dark filter row below nav
- `.subtab-bar` — white sub-tab row with underline active indicator
- `.data-table` — main data table (sticky header)
- `.row-property` — top-level destination row (bold, white bg)
- `.row-bedtype` — 2nd level duration row (indented 28px, slightly grey bg)
- `.row-unit` — leaf level package row (indented 44px, mono font ID)
- `.expand-btn` — chevron toggle button for tree expansion
- `.modal-backdrop` / `.modal` — modal overlay system
- `.adv-drawer` — right-side advanced filters / rules panel
- `.exposure-panel` — slide-up chart panel at bottom (booking curve / competitor prices)
- `.btn-primary` — pink filled button
- `.btn-ghost` — outlined button
- `.pace-ahead` / `.pace-ontrack` / `.pace-behind` — booking pace badges
- `.ratio-badge` — beds:seats ratio indicator
- `.region-badge` — destination region label
- `.price-input` — inline borderless margin/price input field
- `.ms-trigger` — pill-shaped dark dropdown in filter bar
- `.highlight-teal` — accent colored text (retained class name, now pink)
- `.delta-neg` — red text for negative deltas
- `.delta-pos` — accent text for positive deltas

---

## Page structure (every page must have)

### 1. Top nav (.topnav)
- Logo: simple sun/wing SVG mark + "Sunwing RMS" text
- Nav tabs: Pricing | Demand Forecast | Rules & Parameters | Audit Log
- Divider + hamburger menu with dropdown: Settings, Reports
- Active tab gets `.active` class

### 2. Filter bar (.filter-bar) — dark background, same on every page
Dropdowns (in order):
1. **Region** — Caribbean / Mexico / Europe / Sun/Sand / All
2. **Destination** — cascades from Region, uses `DESTINATIONS` from data.js
3. **Duration** — 7 nights / 10 nights / 14 nights / All
4. **Revenue Manager** — from `REVENUE_MANAGERS`
5. **Departure from** — gateway airport

### 3. Sub-tab bar (.subtab-bar) — white, page-specific
- pricing.html: "Vacation Packages" (active) | "Hotel Only" | "Flight Only" | "Groups"
- Right side: "Run Evaluation" (primary) + "Publish Changes" (ghost)

---

## Data (data.js)

### Key arrays
- `DESTINATIONS` — 12 Sunwing sun/warm destinations with: `id, name, region, country, departureGateway, revenueManager, salesManager`
- `REVENUE_MANAGERS` — ['Sarah Chen','Marcus Webb','Priya Patel','Jordan Kim']
- `SALES_MANAGERS` — ['Tom Reyes','Diana Novak','Amir Hassan','Chloe Martin']
- `PACKAGE_DATA` — extends DESTINATIONS with:
  - `totalPackages, loadFactor, bedsBought, seatsBought, bedsToSeatsRatio`
  - `durations[]` — array of 7 / 10 / 14-night duration groups
  - Each duration has `packages[]` with individual package rows
- `TRIP_DURATIONS` — [7, 10, 14]
- `REGIONS` — ['All','Caribbean','Mexico','Europe','Sun/Sand']
- `GATEWAYS` — ['YYZ','YVR','YWG','YUL','YYC']

### Package row fields
Each package in `durations[].packages[]`:
- `id` (e.g. 'CUN-7N-001', mono-font display)
- `hotel`, `roomCategory` ('Standard','Deluxe','Ocean View','Suite')
- `departureDate`, `flightNum`
- `totalCost` — land + air cost
- `currentMargin`, `recMargin`, `deltaMargin`
- `currentPrice` = totalCost + currentMargin
- `recPrice` = totalCost + recMargin
- `bookingPace` — 'ahead' | 'on track' | 'behind'
- `lf` — package-level load factor
- `competitor1Price`, `competitor2Price`

### Helper functions
- `makeBookingCurveData(baseLF)` — returns 12-week booking pace chart data (actual vs target)
- `makeCompData(basePrice)` — returns competitor price chart data over 12 weeks
- `CHART_WEEKS` — ['Wk 1 Jan' … 'Wk 12 Apr']

---

## Pages

### pricing.html — Vacation Packages pricing (BUILT)
Tree table: Destination → Duration → Package.
- Destination row: name, region badge, gateway, avg margin, avg rec margin, delta, LF, beds:seats badge, pace icon
- Duration row: "7 Nights" etc., avg margin, avg LF across that duration's packages
- Package row: ID (mono), hotel + room category, departure date, flight #, total cost, current margin (editable), rec margin (clickable accept), delta, current price, rec price, LF, comp prices, pace badge, action icons (📊 booking curve, ⚙️ rules, 🔒 lock)

Slide-up panel (exposure-panel CSS class): Booking Curve chart (actual vs target) + Competitor Price chart — opened by 📊 on a package row.

Right drawer (adv-drawer CSS class): min/max price rules, min/max margin rules, price lock toggle, last modified info — opened by ⚙️ on a package row.

### demand.html — Demand Forecast (stub, two Chart.js charts)
- Chart 1: Booking pace by destination (line chart, 12 weeks, 3–4 destination lines)
- Chart 2: Forward bookings vs same time last year (bar + line combo)
- Same top nav + filter bar as pricing.html
- No sub-tabs

---

## Conventions & rules
1. **Always load `data.js` before page scripts** — `<script src="data.js"></script>` in `<head>` or before closing `</body>`
2. **Always load `styles.css`** — `<link rel="stylesheet" href="styles.css">`
3. **Never duplicate nav/filter HTML** — copy the exact same block across pages and update the `.active` class
4. **Table headers must be sticky** — `position:sticky; top:0; z-index:10` already in styles.css
5. **Use CSS variables** — never hardcode colors, always use `var(--accent)` etc.
6. **Expand/collapse state** — store in JS Sets/objects, re-render table on toggle
7. **No external dependencies** except Chart.js CDN and Google Fonts
8. **File naming** — all lowercase, hyphenated (e.g. `demand.html`)
9. **All prices in CAD ($)**
10. **Use realistic travel industry terminology** (load factor, booking curve, gateway, beds:seats, pace, etc.)
