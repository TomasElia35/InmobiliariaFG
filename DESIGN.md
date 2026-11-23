---
name: FG Departamentos
description: Un amanecer en Cabo Corrientes; la luz sube sobre el mar a medida que bajás.
colors:
  noche: "#07090f"
  noche-2: "#0e1636"
  cobalto: "#1d3fa8"
  cobalto-osc: "#16318a"
  violeta: "#2e3aa0"
  rosa: "#e88aa0"
  rosa-claro: "#f6c3cf"
  durazno: "#ffd9c2"
  dia: "#fff7ee"
  blanco: "#ffffff"
  luz: "#fff7ee"
  luz-suave: "#c9d2f5"
  tinta: "#0b1020"
  tinta-suave: "#3d4460"
  tinta-rosa: "#4a1f2e"
  tinta-durazno: "#5a3524"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(44px, min(6vw, 9.5vh), 96px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 68px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.16em"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "max(32px, calc(58px - var(--min) * 2.3px))"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
rounded:
  radio: "4px"
  pleno: "50%"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "72px"
  s9: "120px"
  gutter: "clamp(16px, 4.5vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.cobalto}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.radio}"
    padding: "12px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cobalto-osc}"
  button-night:
    backgroundColor: "{colors.rosa}"
    textColor: "{colors.noche}"
    rounded: "{rounded.radio}"
    padding: "12px 24px"
    height: "52px"
  button-night-hover:
    backgroundColor: "{colors.rosa-claro}"
  input-day:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.radio}"
    padding: "8px 12px"
    height: "52px"
  input-night:
    textColor: "{colors.luz}"
    rounded: "{rounded.radio}"
    padding: "8px 12px"
    height: "52px"
  nav:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.luz-suave}"
    height: "64px"
  day-free:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.cobalto}"
    rounded: "{rounded.radio}"
  day-selected:
    backgroundColor: "{colors.cobalto}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.radio}"
---

# Design System: FG Departamentos

## Overview

**Creative North Star: "El ciclorama del amanecer"**

The page is one continuous lit backdrop, like a theater cyclorama at dawn. The top is the last hour of night over the sea at Cabo Corrientes; as you scroll the light rises through a cobalt horizon band, then dawn pink, then peach, until it reaches full morning day. Every section begins in the color the previous one ended in, so there are no hard cuts between sections, only the sky changing. The footer runs the sequence backwards and returns to night.

The world is made of light, not objects. Its only ornament is a thin horizon line with a pink-peach glow that gathers once when the page loads. Type is a single grotesque (Archivo) at large sizes in sentence case for headings, with spaced uppercase small labels and tabular numerals for times, dates and distances. Photographs are real and sit square-cornered-but-softened (4px) on the gradient. Action is pink on the night and cobalt on the day.

The world rejects the Airbnb-style listing template, the earlier black-and-gold luxury site, and the nautical-chart direction it replaced.

**Key Characteristics:**
- One unbroken vertical sky gradient: noche, cobalto, violeta, rosa, durazno, día, and back to noche in the footer.
- Action color follows the light: rosa on dark ground, cobalto on light ground.
- A single ornament: the horizon line with its glow.
- One family, Archivo, from 12px labels to 96px display; tabular numerals everywhere.
- A fixed sun rail on the right where the sun rises and the clock advances (05:52 to 09:30) with scroll.

## Colors

A dawn sky palette: deep night blues, a saturated cobalt horizon, dusty pink, warm peach and a cream daylight, each with its own text ink.

### Primary
- **Horizon Cobalt** (`cobalto`): the action color on daylight grounds: submit buttons, selected date range, links with arrow, focus rings and hover states in the light sections, the floating WhatsApp button. Darkens to **Deep Cobalt** (`cobalto-osc`) on hover.

### Secondary
- **Dawn Pink** (`rosa`): the action color on night grounds: the hero consult button, the nav "Consultar" outline, the sun disc, focus rings on dark, text selection, the skip link. **Pale Pink** (`rosa-claro`) is its hover and the error text on dark.

### Tertiary
- **Peach Light** (`durazno`): the sun's warmth at the horizon glow and the ground of the Location section; never used for text or controls.

### Neutral
- **Last Night** (`noche`): page body, nav, lightbox, top of hero, end of footer.
- **Deep Night Blue** (`noche-2`): the hero's middle band and the image placeholder behind photos.
- **Dawn Violet** (`violeta`): the bridge between cobalt and pink at the bottom of the photo section.
- **Full Day** (`dia`): ground of availability, questions and contact sections.
- **White** (`blanco`): input fields, free days, cards that must lift off the day (contact box, payment logos).
- **Night Light** (`luz`) and **Soft Night Light** (`luz-suave`): primary and secondary text on night and cobalt.
- **Ink** (`tinta`) and **Soft Ink** (`tinta-suave`): primary and secondary text on day.
- **Pink Ink** (`tinta-rosa`) and **Peach Ink** (`tinta-durazno`): secondary text tinted to sit on the pink and peach grounds.

### Named Rules
**The Continuous Sky Rule.** Each section's background is a vertical gradient that starts at the exact color the previous section ended on. No section starts on a color its neighbor did not finish on, and there are no divider bands between sections.

**The Action Follows the Light Rule.** On night or cobalt ground the action is rosa with noche text; on pink, peach or day ground the action is cobalto with white text. Focus rings switch the same way (rosa on dark, cobalto on light).

**The Own Ink Rule.** Secondary text on a tinted ground uses that ground's ink (tinta-rosa on pink, tinta-durazno on peach, luz-suave on night), never a generic grey.

## Typography

**Display Font:** Archivo (with system-ui, sans-serif), self-hosted variable 100 to 900
**Body Font:** Archivo
**Label/Mono Font:** Archivo, uppercase and tracked; tabular numerals globally

**Character:** One sturdy grotesque doing everything. Very heavy (800), tightly tracked sentence-case headings give the sky something solid to stand against; spaced uppercase labels stay quiet and technical.

### Hierarchy
- **Display** (800, clamp(44px, min(6vw, 9.5vh), 96px), 0.98): the hero headline only, max 13ch. On mobile clamp(40px, 11vw, 56px).
- **Headline** (800, clamp(36px, 4.6vw, 68px), 1): section titles, sentence case, balanced wrap.
- **Title** (700, 20px): question summaries; the street address uses 600 at 22px; month names 800 at 22px.
- **Body** (400, 17px desktop / 16px mobile, 1.55): running text, 34 to 62ch measures; lead paragraphs at 18 to 22px.
- **Label** (700, 12px, 0.16em, uppercase): field labels, list headings ("Comodidades", "Reglas de la casa"), payment heading. Nav links use 600, 13px, 0.16em, uppercase; the wordmark 700, 15px, 0.22em.
- **Numeral** (800, size scales with proximity, 1, -0.03em): walking minutes in the distance list; closer places get bigger numbers.

### Named Rules
**The Tabular Clock Rule.** Body sets `font-variant-numeric: tabular-nums` globally; every hour, date and minute count aligns.

**The Closer Is Bigger Rule.** Distance numerals size from the minutes value (max(32px, 58px minus 2.3px per minute)) and the list is ordered by proximity.

## Layout

Content runs to a 1400px max width with a fluid gutter (clamp(16px, 4.5vw, 64px)). Sections pad 104px top and 72px bottom on desktop (72px / 48px under 900px), with section headers as a two-column grid: title left, supporting paragraph right, aligned to the bottom. Content sections use asymmetric 5fr/7fr or 5fr/6fr splits. The hero is a full small-viewport-height block: a 7fr/4fr title and photo row, the full-bleed horizon line, then the inline date form on a dark strip.

Spacing follows a 4px-based scale (4, 8, 12, 16, 24, 32, 48, 72, 120). The photo grid is four columns with a 2x2 lead image and two 2:1 wide tiles, dropping to three columns at 1180px and two at 600px. At 900px everything stacks to one column, the nav collapses to a menu button, and the hero reorders to title, horizon, form, photo. The sun rail hides below 1180px.

## Elevation & Depth

Depth comes from light, not from stacked surfaces. The system is flat; a few soft, long, low-opacity drop shadows let photographs and the one white card sit forward of the sky. Glows (the horizon and the sun disc) are the only luminous effects and they belong to the light metaphor.

### Shadow Vocabulary
- **Hero photo lift** (`box-shadow: 0 30px 60px -20px #000000aa`): the hero photograph over the night.
- **Map lift** (`box-shadow: 0 20px 40px -24px #5a352466`): the embedded map on peach, tinted with peach ink.
- **Card lift** (`box-shadow: 0 20px 50px -30px #0b102040`): the white consult card on day.
- **Floating button** (`box-shadow: 0 10px 24px -6px #0b102066`): the fixed WhatsApp button.
- **Horizon glow** (`box-shadow: 0 0 24px 6px #ffd9c2aa`): the 2px horizon highlight.
- **Sun glow** (`box-shadow: 0 0 0 4px #e88aa033, 0 0 18px 4px #e88aa066`): the sun disc on the rail.

### Named Rules
**The Tinted Shadow Rule.** Shadows are soft, negative-spread and tinted toward the ground they sit on (black on night, peach ink on peach, ink on day). No hard or offset shadows.

**The One Ornament Rule.** The horizon line with its glow is the only decorative device. Glow belongs to light sources (horizon, sun) and nowhere else.

## Shapes

Gently softened rectangles everywhere: a single 4px radius on photos, buttons, inputs, calendar days, cards, the lightbox and icon buttons. Full circles are reserved for the sun disc and the floating action button. Lists are drawn with hairline rules (1px ink at 12 to 20% opacity) above and between rows rather than boxed. Icons are custom line drawings on a 24 grid with a 1.6 stroke, round caps and joins. The wordmark is a half sun resting on a horizon line.

## Components

### Buttons
Solid, compact, unadorned; the color carries the meaning.
- **Shape:** softened rectangle (4px), min height 52px.
- **Primary (day):** cobalto with white text, 700 at 16px, 12px by 24px padding; hover deep cobalt; press nudges down 1px.
- **Night:** rosa with noche text inside the hero form; hover pale pink.
- **Ghost (nav):** 1px rosa outline with night-light text, filling rosa with noche text on hover.
- **Icon buttons:** 44 to 48px squares, 1px translucent border, 4px radius; fill cobalto on day or rosa on night on hover.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** white on day (consult card, payment logos), translucent cream (#fff7eebf) for the cancellation note on pink, translucent night (#07090fcc) with a faint light border for the hero form strip.
- **Shadow Strategy:** card lift only on the white consult card (see Elevation).
- **Internal Padding:** 32px (24px on mobile); notes 16px.

### Inputs / Fields
- **Style:** 52px tall, 4px radius, 1px ink border at 25%, white fill, tracked uppercase label above, line icon inset left in selects.
- **Focus:** border turns cobalto with a 3px cobalto halo at 15%.
- **On night:** fill white at 6%, light border at 25%, night-light text, dark color scheme; focus turns rosa with a rosa halo.
- **Error:** border #c0264f; status text deep red on day, pale pink on night; free status green.

### Navigation
Fixed 64px night bar (58px on mobile) with a hairline bottom rule. Wordmark left (half-sun mark in rosa plus tracked uppercase name), uppercase tracked links in soft night light that brighten on hover, and the ghost "Consultar" button last. Under 900px it collapses to a 44px menu button revealing a full-width stacked list that fades and slides 8px down.

### Availability Calendar
Two months side by side with hairline borders. Free days are designed, not empty: white fill, peach border, bold cobalto numeral. Booked days carry a fine diagonal pink hatch with a struck-through numeral. The chosen range is a cobalto-tinted wash with cobalto ends filled solid. Past days fade to grey. A legend repeats the three swatches.

### Distance List
Rows ruled by hairlines, each with a large proximity-scaled minutes numeral and a place name with a secondary line in peach ink, ordered closest first.

### Sun Rail (signature)
A fixed 40px rail on the right edge: a 1px line at 30% opacity and a 13px rosa sun disc with glow that rises with scroll progress, carrying a tabular clock that runs from 05:52 to 09:30. Its ink switches from night light to ink once the page passes into daylight. Decorative and hidden from assistive tech; hidden under 1180px.

### Horizon Line (signature)
A full-bleed 1px cream line across the hero with a 2px bright highlight and glow, under a radial pink-peach light that rises into cobalt. The light scales up from 40% height and fades in once on load (2.8s, cubic-bezier(0.16, 1, 0.3, 1)). Static under reduced motion.

## Do's and Don'ts

### Do:
- **Do** start every section on the color the previous one ended on, and end the page by returning to night.
- **Do** use rosa for action on night and cobalto for action on day, with focus rings following the same switch.
- **Do** set headings in Archivo 800 sentence case with -0.03em tracking, and labels in 12px uppercase at 0.16em.
- **Do** keep tabular numerals on every time, date and distance.
- **Do** use the 4px radius on every rectangle and reserve circles for the sun and the floating button.
- **Do** draw lists with hairline rules and use the custom 1.6-stroke line icons.
- **Do** use the shared exit easing cubic-bezier(0.16, 1, 0.3, 1) for motion and make everything static under reduced motion.

### Don't:
- **Don't** cut between sections with flat color blocks or divider bands.
- **Don't** add a second ornament beside the horizon line; glows belong only to the horizon and the sun.
- **Don't** use hard or offset shadows.
- **Don't** fall back on the property-listing template (photo, button, icon cards), black-and-gold luxury, or nautical-chart devices.
- **Don't** put cobalto actions on the night or rosa actions on the day.
- **Don't** set secondary text in plain grey on tinted grounds; use that ground's ink.
