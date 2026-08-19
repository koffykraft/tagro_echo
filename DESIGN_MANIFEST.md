# TAGRO × ECHO — Design Manifest

**Status:** Governing design handoff for all current and future public UI/UX work in this repository.

**Purpose:** This document defines the visual, interaction, content and implementation rules for the TAGRO × ECHO site. Future changes must preserve these principles unless the owner explicitly approves a revision to this manifest.

---

## 1. Product principle

This is not a catalogue dumped onto a website.

The site exists to help a visitor:

**Enter → Glance → Understand → Get interested → Select → Check it out → Continue / Compare / Go back / Ask / Contact.**

A first-time visitor may not know a model number, product category or technical term. The site must therefore guide before it asks the visitor to search.

Every visible element must help at least one of these jobs:

- identify
- understand
- choose
- compare
- buy / request an estimate
- operate / maintain
- find a manual or part
- ask for help
- contact TAGRO

If an element does not help one of those jobs, remove it.

---

## 2. Human-centred standard

Design decisions should be guided by:

- **ISO 9241-210:2019** — human-centred design for interactive systems
- **ISO 9241-110:2020** — interaction principles
- **ISO/IEC 25010:2023** — software/product quality model
- **ISO/IEC 40500** and current WCAG guidance — web accessibility

These are design and quality references only. Do not imply certification.

The site must be task-suitable, predictable, controllable, consistent, accessible and tolerant of missing data or user error.

---

## 3. Desktop and mobile are separate designs

Do **not** make one desktop layout and merely squeeze it with breakpoints.

Shared between desktop and mobile:

- product data
- brand assets
- terminology
- navigation destinations
- visual identity
- accessibility rules

Different by design:

### Desktop

- spacious
- comparative
- multi-column where useful
- larger product imagery
- easier side-by-side scanning
- full top navigation
- more information visible without opening another view

### Mobile

- thumb-first
- predominantly vertical
- minimal horizontal scrolling
- fast scanning
- compact top brand lock-up
- persistent, clear primary navigation
- product list rows with thumbnail + key facts
- tap to open a larger product view
- avoid long forced scroll before useful content appears

Horizontal carousels are not the default solution. Use them only where they materially improve the task.

---

## 4. Visual character

The site should feel:

- current
- quiet
- clean
- precise
- product-led
- trustworthy
- easy to scan
- technically competent without looking like a workshop database

It must not feel like:

- an early-2000s catalogue
- an internal admin page
- a PDF copied into HTML
- a marketing landing page filled with slogans
- a dashboard full of boxes
- a dense technical database

---

## 5. Colour system

White is the dominant surface.

Recommended visual proportion:

- **White / near-white:** 75–85%
- **Near-black / dark text:** 10–15%
- **ECHO orange:** 3–6%
- **Light warm grey / separators:** 5–10%

These are design proportions, not mathematical page quotas.

### White

Use for:

- page background
- primary content surfaces
- cards
- navigation
- forms

### Near-black

Use for:

- main text
- selected states
- primary navigation emphasis
- occasional primary action

Do not use giant decorative black hero panels unless the content genuinely requires one.

### ECHO orange

Use sparingly for:

- brand moments
- active indicators
- selected states where appropriate
- small emphasis
- important CTA emphasis

Orange is an accent, not the page background.

### Grey

Use only to establish hierarchy:

- image wells
- dividers
- secondary controls
- low-priority supporting information

Do not add decorative colours without a functional reason.

Colour must never be the only indicator of state or meaning.

---

## 6. Typography

Use **one primary interface font family**.

Preferred approach:

- modern system sans-serif / Inter-like stack
- brand logos remain artwork and are not recreated as text

Do not introduce multiple decorative fonts.

### Weight system

Use approximately three levels:

- Regular: 400–450
- Semibold: 600–650
- Bold: 750–800

Avoid excessive 900/950 weight across many elements. If everything is heavy, nothing has hierarchy.

### Desktop sizes

Approximate targets:

- Page title: 40–48 px
- Major model/product name: 34–42 px
- Section heading: 24–30 px
- Body: 16–18 px
- Supporting text: 14–15 px
- Small metadata: 12–13 px minimum where practical

### Mobile sizes

Approximate targets:

- Page title: 28–34 px
- Product/model name: 22–28 px
- Section heading: 20–24 px
- Body: 16 px
- Supporting text: 13–14 px

Use relative/rem sizing in implementation.

### Line height

- Body/interface text: roughly 1.4–1.55
- Headings: roughly 1.0–1.15

Do not create hierarchy merely by making headings huge. Prefer spacing, grouping, position and weight first.

---

## 7. Brand lock-up

The public header must always show the real supplied **TAGRO** logo and the official **ECHO** logo.

Rules:

- TAGRO first, ECHO second
- preserve original aspect ratios
- never crop or stretch either logo
- both brands must remain readable on mobile and desktop
- do not replace TAGRO with plain text
- do not substitute unofficial ECHO artwork
- maintain one consistent lock-up specification across all public pages

The brand lock-up belongs at the top-left of the desktop interface and in the compact top brand area on mobile.

---

## 8. Navigation

Primary destinations:

1. Equipment
2. Support
3. Parts
4. Ask AI

The meaning and order should remain stable.

### Desktop

Use clear top navigation.

### Mobile

Use a deliberately designed compact navigation pattern. Bottom navigation is acceptable when it improves thumb access, but it must not cover content or create excessive permanent visual weight.

Navigation labels must be understandable without relying on icon interpretation alone.

External-site links must say what happens, e.g.:

- **Visit TAGRO website**
- **Visit ECHO India website**

Do not rely on an arrow symbol alone to communicate that a visitor is leaving the site.

---

## 9. Home / equipment discovery

Do not open with a large hero, slogan, or dominant search box.

A new visitor may not know what to search for.

The first screen should quickly establish:

- TAGRO × ECHO identity
- what kind of equipment is available
- an obvious way to browse or get help
- the beginning of real machine content

Search is secondary and should be available for visitors who already know a model or term.

Do not use filler slogans such as:

> Choose by job, not by catalogue page.

A phrase stays only if it materially helps the user act.

### Mobile equipment browsing

Preferred pattern:

- vertical list
- machine thumbnail at left
- model and classification at right
- 2–4 key facts
- price/MRP where useful
- tap anywhere on the row to open model detail

### Desktop equipment browsing

Preferred pattern:

- clean grid or comparative layout
- image is visually important
- key facts visible without opening every model
- no excessive card chrome

---

## 10. Product card information hierarchy

The visitor should perceive information in approximately this order:

1. machine image
2. model
3. what it is / classification
4. 3–5 useful buyer facts
5. price / next action

Do not show internal notes, source-status notes, serial applicability caveats or workshop workflow on public cards.

---

## 11. Model page anatomy

A model page should progressively disclose information.

### First view

- large correct machine image
- model name
- short classification / one-line sales pitch
- 4–6 useful buyer facts
- MRP
- primary action

### Buyer facts where applicable

Priority fields:

- engine displacement / power
- dry weight
- bar / cutting attachment / working capacity
- chain specification where applicable
- fuel capacity
- chain oil / relevant tank capacity
- 2–4 distinctive features

Do not leave empty fact boxes. If a field does not apply or is not verified, omit it cleanly.

### Secondary actions

Depending on availability:

- Compare
- Ask AI
- Operator manual
- Parts catalogue / IPL
- Accessories
- Contact / enquiry

Avoid multiple equally dominant buttons.

---

## 12. Images

Every public model should have a usable machine image.

Source priority:

1. supplied ECHO India material
2. official ECHO regional material
3. temporary reputable third-party source only when necessary

Future ECHO dealer-authoritative assets replace interim sources.

Approved product imagery should eventually be stored/localised rather than permanently hotlinked where practical.

### Image behaviour

- contain, do not crop important machine parts
- preserve aspect ratio
- use an intentional neutral image well
- lazy-load below-the-fold images
- optimise dimensions and file size
- meaningful alt text

On mobile list rows, image size should be compact enough to scan but large enough to identify the machine.

---

## 13. Price presentation

Public price language must be consistent.

The supplied MRP is GST-inclusive.

Preferred public format:

**MRP ₹35,500 incl. GST**

Do not display “MRP + GST”.

If a future selling/offer price is introduced, clearly distinguish it from MRP.

---

## 14. Support and parts

Support and Parts are customer-facing experiences, not workshop-process pages.

Do not lead with:

- serial applicability warnings
- internal verification workflow
- workshop checklists
- sourcing-status language
- generic database tables

Preferred flow:

**Choose model → stay in TAGRO model context → see available manual / parts / support resources → open exact external document only when useful.**

Do not send a customer directly to a generic ManualsLib or generic parts-site homepage merely because an exact resource is missing.

If an exact resource is unavailable, omit the action or offer Ask AI / Contact TAGRO.

---

## 15. AI behaviour and presentation

The AI is not a presumptive catalogue salesman.

Its operating pattern is:

**Grab → Clarify → Narrow → Recommend.**

It should ask only the missing questions that materially affect the answer.

Useful discovery dimensions include:

- work type
- tree / vegetation / material
- approximate diameter or scale
- hours per session
- frequency of use
- home / farm / commercial / professional
- existing machine
- what the customer likes about it
- pain points
- weight / starting / speed / vibration / durability concerns
- budget where relevant

Do not guess Malayalam/local tree names or local terminology. Ask briefly when uncertain.

AI must retain page/model context when invoked from a product.

It should be able to:

- help choose
- compare
- explain differences
- answer product questions
- help with manuals / parts / maintenance
- create an estimate
- offer a handoff to TAGRO

AI responses should be concise by default and expand when the customer asks.

---

## 16. Contact actions

Public contact should be available but quiet.

- WhatsApp may be represented by an icon
- Email may be represented by an icon
- do not expose owner/internal notification numbers in visible page copy
- no floating WhatsApp bubble
- no nuisance popup
- no animated contact prompt

Contact should be easy to find without interrupting browsing.

---

## 17. Accessibility

Required baseline:

- semantic HTML
- keyboard-accessible controls
- visible focus state
- meaningful labels / aria-labels for icon-only controls
- useful alt text
- adequate text and UI contrast
- touch targets approximately 40–48 px for important mobile actions where practical
- no information conveyed by colour alone
- no content loss when text is resized
- layout must tolerate increased text/line/letter spacing
- logical heading order
- understandable link names

Do not use tiny text as a way to fit more information onto a card.

---

## 18. Performance

The page should feel immediate.

Requirements:

- avoid unnecessary libraries
- minimise render-blocking CSS/JS
- optimise and resize product images
- lazy-load appropriate imagery
- avoid huge remote image assets
- avoid duplicate CSS systems
- do not load internal data that the current page does not need
- maintain graceful behaviour on average mobile networks

---

## 19. Component discipline

Do not create a different visual system inside every HTML file.

Common components should have shared implementation and shared visual rules:

- header
- brand lock-up
- navigation
- model row/card
- price display
- fact item
- button hierarchy
- contact icons
- footer
- resource links
- AI entry

Page-specific inline `<style>` blocks should be exceptional, not the normal architecture.

---

## 20. Data and content discipline

Public content and internal evidence/workshop data must be separated.

Public product record should contain customer-useful fields.

Internal/source layer may contain:

- verification status
- serial applicability
- source provenance
- suffix warnings
- dealer-only notes
- unresolved document matching

Internal notes must never leak into public copy by default.

A product should have one reliable joined record for:

- identity
- category
- commercial configurations
- specs
- features
- price
- image
- manuals
- parts resources
- accessories
- applications

Do not silently invent missing values.

---

## 21. Content style

Public copy should be:

- short
- plain
- useful
- specific
- confident only when evidence supports it

Avoid:

- internal workflow prose
- legalistic caveats on normal product pages
- marketing filler
- slogans without purpose
- long paragraphs before useful facts
- repeated headings saying the same thing
- generic “Open ↗” where “Operator manual” or “Parts catalogue” is clearer
- unexplained abbreviations
- needless technical jargon

A buyer often needs only a handful of facts. Lead with those.

---

## 22. What must not return

Do not reintroduce:

- giant decorative black hero boxes
- dominant first-screen search
- long horizontal product carousels as the main mobile browsing method
- public workshop/checklist wording
- duplicate visual systems between Equipment / Support / Parts / AI
- multiple font families
- excessive bold/black typography
- excessive ECHO orange
- blank image placeholders when a usable image exists
- internal phone numbers as visible page text
- floating WhatsApp popups
- accidental root-level static deployment
- repo internals as public assets
- stale duplicate front ends

---

## 23. UX acceptance test

Before a redesign is considered complete, test the following:

### First-time visitor

Within a few seconds, can the visitor understand:

- what this site offers?
- where the machines are?
- how to get help if they do not know a model?

### Equipment discovery

Can the visitor scan several machines quickly without excessive scrolling or side-scrolling?

### Model inspection

Can the visitor see image + model + key facts + MRP before reading long copy?

### Freedom

Can the visitor:

- go back
- continue browsing
- compare
- ask AI
- find manuals/parts
- contact TAGRO

without becoming trapped in an external site or a long flow?

### Consistency

Do Equipment, Model, Support, Parts and AI feel like the same product?

### Mobile

Can the primary journey be completed comfortably with one hand and normal scrolling?

### Desktop

Does the additional width improve comparison and scanning rather than merely enlarging everything?

---

## 24. Implementation rule for future contributors / AI agents

Before changing public UI/UX:

1. Read this manifest completely.
2. Inspect the current shared CSS/components and affected pages completely.
3. Do not infer design intent from filenames or partial snippets.
4. Preserve working functions and data relationships unless a change is explicitly required.
5. Avoid isolated patches that create visual drift.
6. Prefer coordinated component-level fixes.
7. Verify desktop and mobile separately.
8. Check rendering, navigation, missing assets, overflow, focus, links and back behaviour.
9. Do not claim completion without checking the changed paths.
10. If a requested change conflicts with this manifest, follow the owner's explicit instruction and update the manifest if the new rule is meant to persist.

---

## 25. Governing principle

**The design is successful when it disappears behind the visitor's task.**

The visitor should notice the machine, understand the choice and know what to do next—not notice that we designed a website.
