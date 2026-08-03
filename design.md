# Design — AI Assets Hub

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal — AI asset library / platform, executed dark-first. Stripe /
Linear school: confident sans display, generous whitespace, restrained accent.

## Macrostructure family
Pages within a family share the family's shape; they vary only in component archetypes.

- Marketing/home pages: **Marquee Hero** — single bold statement fills the fold, nothing else.
- App pages:           **Stat-Led** — a giant number is the hero; data is the narrative.
- Content list pages:  **Catalogue** — uniform index grid of inventory (skills/agents/workflows/profiles).
- Content detail pages: **Long Document** — continuous prose, inline section heads, minimal chrome.
- Graph page:          **Map / Diagram** — spatial organisation of a single large diagram.
- Search page:         **Index-First** — the page IS a list of links.

## Theme
Dark-first, brand-anchored. Accent is the existing violet→teal brand pair,
re-tuned to OKLCH, used ≤ 5 % of viewport.

Dark (default):
- `--color-paper`   oklch(0.14 0.012 280)
- `--color-paper-2` oklch(0.16 0.012 280)
- `--color-paper-3` oklch(0.19 0.014 280)
- `--color-ink`     oklch(0.93 0.006 280)
- `--color-ink-2`   oklch(0.66 0.02 280)
- `--color-ink-3`   oklch(0.48 0.02 280)
- `--color-rule`    oklch(0.24 0.015 280)
- `--color-accent`  oklch(0.64 0.19 295)   /* brand violet #7c6cff */
- `--color-accent-2` oklch(0.78 0.12 190)  /* brand teal #4dd6c8 */
- `--color-accent-ink` oklch(0.98 0 0)
- `--color-focus`   oklch(0.7 0.19 295)
- `--color-good`    oklch(0.72 0.16 155)
- `--color-warn`    oklch(0.72 0.14 70)
- `--color-bad`     oklch(0.62 0.18 25)

Light (toggled via `data-theme="light"`):
- `--color-paper`   oklch(0.97 0.006 280)
- `--color-paper-2` oklch(0.995 0.002 280)
- `--color-paper-3` oklch(0.93 0.008 280)
- `--color-ink`     oklch(0.2 0.02 280)
- `--color-ink-2`   oklch(0.42 0.02 280)
- `--color-ink-3`   oklch(0.58 0.02 280)
- `--color-rule`    oklch(0.88 0.01 280)
- `--color-accent`  oklch(0.55 0.19 295)
- `--color-accent-2` oklch(0.55 0.12 190)
- `--color-accent-ink` oklch(0.98 0 0)

## Typography
- Display: Space Grotesk, weight 500–700, style normal
- Body:    Inter, weight 400
- Mono:    JetBrains Mono, weight 400–500
- Display tracking: -0.03em (hero) / -0.02em (h1–h2)
- Type scale anchor: `--text-display` = clamp(2.5rem, 5vw + 0.5rem, 4.75rem)
- Chinese fallback: PingFang SC / Microsoft YaHei / Noto Sans SC
- Italic headers: banned globally. Emphasis carried with weight / accent / underline.

## Spacing
4-point named scale, defined in `tokens.css`. Pages must use named tokens
(`var(--space-md)`), never raw values.
`--space-3xs: 0.25rem · --space-2xs: 0.5rem · --space-xs: 0.75rem · --space-sm: 1rem
 · --space-md: 1.5rem · --space-lg: 2rem · --space-xl: 3rem · --space-2xl: 4.5rem
 · --space-3xl: 7rem`

## Motion
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1) · `--ease-in` cubic-bezier(0.4, 0, 1, 1) · `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1)
- Durations: `--dur-short` 150ms · `--dur-md` 220ms · `--dur-long` 320ms
- Reveal pattern: none — the page is composed. Hover/transition only.
- Reduced-motion fallback: opacity-only, ≤ 150 ms.

## Microinteractions stance
- Silent success — no celebratory toasts.
- Hover tooltips delay 800 ms · focus tooltips 0 ms.
- Animate transform + opacity only; never layout properties.
- `:focus-visible` ring ≥ 3:1 contrast, appears instantly (never animated).

## CTA voice
- Primary CTA: filled paper (`--color-ink` bg / `--color-paper` text), radius `--radius-pill`, small size.
- Secondary CTA: outlined rule, radius `--radius-pill`.

## Per-page allowances
- Marketing pages (home) MAY use enrichment (Tier-A CSS art).
- App pages (overview) MUST NOT use enrichment — the stat grid carries the page.
- Content pages: typography only.

## What pages MUST share
- The wordmark / logotype.
- The accent colour pair and its placement (≤ 5 % per viewport).
- The display + body fonts.
- The CTA voice (button shape, border-radius, padding rhythm).
- Section heading rhythm (kicker + display heading pattern).
- Nav + footer archetypes.

## What pages MAY differ on
- Macrostructure within the page-type family (already declared above).
- Hero archetype within the family's allowance.
- Enrichment — only on marketing pages, only Tier-A.

## Exports

Drop-in formats for re-using this design system in other projects.
See [`export-formats.md`](../.claude/skills/hallmark/references/export-formats.md) for the canonical mapping.

### tokens.css
```css
:root {
  --color-paper:      oklch(0.14 0.012 280);
  --color-paper-2:    oklch(0.16 0.012 280);
  --color-paper-3:    oklch(0.19 0.014 280);
  --color-ink:        oklch(0.93 0.006 280);
  --color-ink-2:      oklch(0.66 0.02 280);
  --color-ink-3:      oklch(0.48 0.02 280);
  --color-rule:       oklch(0.24 0.015 280);
  --color-accent:     oklch(0.64 0.19 295);
  --color-accent-2:   oklch(0.78 0.12 190);
  --color-accent-ink: oklch(0.98 0 0);
  --color-focus:      oklch(0.7 0.19 295);

  --font-display: "Space Grotesk", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-body:    "Inter", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono:    "JetBrains Mono", "SF Mono", Consolas, monospace;

  --space-3xs: 0.25rem;  --space-2xs: 0.5rem;  --space-xs: 0.75rem;
  --space-sm:  1rem;     --space-md:  1.5rem;  --space-lg: 2rem;
  --space-xl:  3rem;     --space-2xl: 4.5rem;  --space-3xl: 7rem;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.125rem; --text-xl: 1.375rem; --text-2xl: 1.75rem;
  --text-3xl: 2.25rem; --text-display: clamp(2.5rem, 5vw + 0.5rem, 4.75rem);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:  cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-short: 150ms; --dur-md: 220ms; --dur-long: 320ms;
  --radius-sm: 6px; --radius-md: 8px; --radius-lg: 12px; --radius-pill: 999px;
}
```
