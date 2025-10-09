# Visual Design Review

## Global Layout
- The root `.App` class still sets `text-align: center` from the CRA starter template, which forces *all* text—including multi-paragraph biography content—to center-align by default. This makes long-form text hard to read and breaks the intended layout of pages like About that expect left-aligned copy.【F:src/App.css†L1-L33】【F:src/pages/About.js†L7-L78】
- `<main className="main-content">` lacks any associated styles, so page sections butt directly against the viewport edges. The site needs consistent padding or a constrained content width on the main container to avoid cramped layouts on larger displays.【F:src/App.js†L15-L26】

## Header & Navigation
- The hamburger button is plain text without any visual affordances (no background, spacing, or focus outline customization), so it is easy to miss and visually inconsistent with the rest of the header. Consider providing a styled icon button for clarity.【F:src/components/Header.js†L15-L28】【F:src/components/Header.css†L1-L73】
- When the mobile menu opens it renders as a full-width white block that sits flush with the viewport edges. Adding padding and separating it from surrounding content would improve scannability on small screens.【F:src/components/Header.css†L45-L67】

## About Page
- Because of the inherited center alignment, the `profile-section` flex layout collapses into a centered column of text, making the two-column desktop design ineffective. Explicitly resetting `text-align` and defining column widths would fix this.【F:src/App.css†L1-L33】【F:src/pages/About.css†L1-L96】
- The placeholder portrait is hard-coded at 200×200px and doesn’t scale down on narrow screens, which can overflow smaller phones. Use relative sizing or max-width constraints for responsiveness.【F:src/pages/About.css†L17-L41】
- Headings and body text use the browser defaults; introducing a consistent typography scale (font sizes, weights, line heights) would make the long biography sections easier to read.【F:src/pages/About.css†L1-L96】

## Publications Page
- `PublicationCard.css` is empty, so the cards render as unstyled blocks of text with no separation, hierarchy, or spacing. Readers can’t easily distinguish titles, metadata, and abstracts. At minimum, add padding, borders, and typographic styling.【F:src/components/PublicationCard.js†L1-L15】【F:src/components/PublicationCard.css†L1-L1】

## Other Sections
- The Home, Talks, Awards, and Contact pages rely entirely on inherited styles, leaving them visually sparse and center-aligned. Introduce section-level layouts (spacing, typography, background accents) to keep the site from feeling like placeholder content.【F:src/pages/Home.js†L1-L11】【F:src/pages/Talks.js†L1-L12】【F:src/pages/Awards.js†L1-L11】【F:src/pages/Contact.js†L1-L11】

## Data / Content Notes
- Several placeholder strings (“bla bla…”, “Cutest PhD Student”, etc.) remain. Replacing them with real copy will help evaluate the design with representative content lengths.【F:src/pages/About.js†L34-L65】【F:src/pages/Awards.js†L1-L11】
