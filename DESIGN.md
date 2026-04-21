# Design System: artFix Greenwich
**Project ID:** 11905049790747101863
**Anchor Screen ID:** 284cd71ae68c4022b6a3e6e24ec8892e (artFix Home - Gallery Style)

---

## 1. Visual Theme & Atmosphere

**Creative North Star: The Archival Gallery / The Curated Frame**

This system functions as a structural frame, not a decorative interface. Inspired by the stark, intentional atmosphere of a contemporary Greenwich art gallery, it treats the browser as a physical gallery wall — where community art is the *only* source of colour and organic form. The aesthetic is high-contrast, editorial, and anti-template: brutalist Montserrat weight anchors the page, generous white space gives the "art" room to breathe, and every border is a deliberate frame rather than an afterthought.

---

## 2. Color Palette & Roles

| Descriptive Name | Hex | Role |
|---|---|---|
| Gallery Ink (Primary) | `#000000` | Buttons (primary fill), 1px borders, all headings |
| Custom Brand Black | `#111111` | Accent override — logo, nav links, bold UI elements |
| Paper White | `#ffffff` | Page background (surface-container-lowest), card fills |
| Archival Off-White | `#f9f9f9` | Section background (surface), alternating panels |
| Light Gallery Wall | `#f3f3f3` | Subtle section separation (surface-container-low) |
| Studio Gray | `#eeeeee` | Container backgrounds, hover states (surface-container) |
| Muted Stone | `#777777` | Borders, outlines (outline) |
| Pale Slate | `#c6c6c6` | Ghost borders at 20% opacity (outline-variant) |
| On-Ink White | `#e5e2e1` | Text on primary/black buttons (on-primary) |
| Body Charcoal | `#1a1c1c` | All body text (on-surface, on-background) |
| Secondary Text Gray | `#474747` | Captions, metadata, supporting copy (on-surface-variant) |
| Error Red | `#ba1a1a` | Form validation states only |

**The "No-Line" Rule:** Do NOT use lines to separate major layout sections. Boundaries are defined by tonal surface shifts only (e.g., `#f9f9f9` section next to `#ffffff` section).

---

## 3. Typography Rules

- **Display / Hero H1:** Montserrat ExtraBold, all-caps, tracking increased 2–5%. Used for "ARTFIX – LIFE AS ART" scale headlines. Feels like a gallery title placard.
- **Section Headlines (H2/H3):** Epilogue Bold or Montserrat Bold. Left-aligned. Never centred except inside the full-width black Mission Band.
- **Body Copy:** Inter Regular (0.875rem–1rem). Left-aligned always — no centred body text.
- **Labels & Metadata:** Inter SemiBold, all-caps, tight letter-spacing. Used for section tags like "WHO WE SERVE", card labels, footer nav items.
- **Pull Quotes:** Montserrat Italic, large scale (1.5–2rem), white on black. Used exclusively in the Mission Statement Band.

---

## 4. Component Stylings

- **Buttons (Primary):** Sharp squared-off edges (0px radius). Solid `#000000` fill, `#e5e2e1` / white text. Hover: immediate full inversion — no soft transitions, like a light switch.
- **Buttons (Secondary / Outlined):** 1px `#000000` border, `#ffffff` background, `#000000` text. Same 0px radius. Hover: invert to black fill.
- **Cards / Containers:** Strict 0px radius. 1px `#000000` border on featured cards. `#ffffff` background. No drop shadows — depth through tonal stacking only.
- **Navigation:** Fixed top, full-width. Background: `#ffffff`. Mandatory 1px `#000000` bottom border acting as a "horizon line". Logo: "artFix" bold Montserrat left. Links: all-caps Inter SemiBold right. Main content must use `pt-24` to clear the fixed nav.
- **Input Fields / Forms:** 1px bottom-border only (ledger style) for minimal forms, or full 1px box for dense forms. Active state background: `#e8e8e8` (surface-container-high) for a "recessed" feel.
- **Mission Band:** Full-width `#000000` background, `#ffffff` text. Italic pull-quote. Generous vertical padding (py-20+).
- **Footer:** Full-width `#000000` background, `#ffffff` text. Three-column layout. No rounded elements.

---

## 5. Layout Principles

- **Spacing Scale:** Generous. If you think there is enough white space, add 20% more.
- **Hero Layout:** Always two-column — text LEFT (`items-start`), image RIGHT. Image strictly contained in its column — never overlaps heading text.
- **Grid:** Left-aligned editorial grid. Allow images to break out of containers or sit off-centre for asymmetric dynamism.
- **Section Rhythm:** Alternate between `#ffffff` and `#f9f9f9` backgrounds for section separation — never use horizontal rules.
- **No Shadows:** Never. Hierarchy is expressed through tonal layering and 1px black borders only.
- **No Rounded Corners:** 0px everywhere — buttons, cards, inputs, chips, tooltips, checkboxes.
- **No Gradients:** UI must stay monochrome. Colour comes from community artwork imagery only.
- **No Centred Body Text:** Body copy is left-aligned at all times to maintain Swiss/Editorial structural integrity.

---

## 6. Page Navigation Structure

All sub-pages must include the identical fixed nav bar with these links (all-caps):
`HOME` · `ABOUT` · `SERVICES` · `OUR SPACES` · `COMMUNITY PROJECTS` · `VENUE HIRE` · `JOBS & OPPORTUNITIES` · `CONTACT`

Corresponding `.html` files:
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `our-spaces.html` — Our Spaces
- `community-projects.html` — Community Projects
- `venue-hire.html` — Venue Hire
- `jobs.html` — Jobs & Opportunities
- `contact.html` — Contact
