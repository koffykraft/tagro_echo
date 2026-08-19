# TAGRO × ECHO — Public Experience Manifest

**Status:** Governing design contract for all current and future public UI/UX work in this repository.

**Purpose:** Define how the TAGRO × ECHO public site must look, behave, persuade and retain trust. Every contributor and AI agent must read this document completely before changing public pages.

---

## 1. The visitor owes us nothing

Most visitors will not arrive as committed buyers.

They may come:

- accidentally from Google
- from social media
- from a shared product link
- from a direct TAGRO message
- while casually comparing machines
- because they already own a machine and need help

Assume low commitment, limited attention and no knowledge of ECHO model numbers.

The first task is therefore not to explain the website. The first task is to make the visitor feel, quickly:

1. **This is relevant.**
2. **This looks credible.**
3. **There is something here worth exploring.**
4. **I know where I can go next.**

Roughly 80% of traffic may be casual browsing rather than immediate purchase intent. The experience must therefore work both for today’s enquiry and for a visitor who remembers TAGRO × ECHO and returns later.

---

## 2. Three-minute attention architecture

Design around a short persuasion window without forcing a funnel.

### 0–10 seconds — recognition

The visitor should immediately see:

- visible **TAGRO × ECHO** identity
- real ECHO machines
- what kind of work/products the site covers
- one obvious way to browse or ask for help

### 10–45 seconds — relevance

The visitor should be able to scan several products and understand:

- what each machine is
- what work it suits
- 2–4 important facts
- MRP

### 45–120 seconds — confidence

On a product page the visitor should quickly understand:

- why the model is worth considering
- key specifications
- its real differentiator
- whether it may fit their use
- nearby alternatives or support

### 120–180 seconds — action

Useful next steps should be clear:

- Ask AI
- compare
- request an estimate
- contact TAGRO
- manuals
- parts
- continue browsing

The visitor remains in control and may enter or leave at any stage.

---

## 3. Governing principle

**The machine and the visitor’s task are the heroes. The interface is only the guide.**

Every visible element must help one or more of these jobs:

- recognise
- understand
- become interested
- browse
- choose
- compare
- verify
- buy / request an estimate
- operate / maintain
- find a manual or part
- ask for help
- contact TAGRO
- return later without relearning the site

If an element does not materially help one of those jobs, remove it.

---

## 4. Flawlessness is a release priority

Visible imperfection damages trust disproportionately.

One defect can outweigh many good design decisions:

- missing or invisible TAGRO logo
- wrong machine image
- broken image
- clipped brand mark
- title hidden by navigation
- fixed navigation covering content
- unexpected horizontal page scroll
- dead-end link
- contradictory price
- vague action label
- unexpected external redirect
- long empty regions
- controls separated from the content they affect

**Flaw-first review comes before visual polish.**

Review in this order:

1. incorrect/broken content
2. rendering defects
3. navigation and dead ends
4. missing/contradictory information
5. cognitive pressure or uncertainty
6. hierarchy and hook
7. visual refinement

A page is not ready because it is mostly correct.

---

## 5. Standards and quality references

Use as design references, not certification claims:

- **ISO 9241-210:2019** — human-centred design
- **ISO 9241-110:2020** — interaction principles
- **ISO/IEC 25010:2023** — software/product quality
- **ISO/IEC 40500** and current WCAG guidance — accessibility

The experience must be task-suitable, self-descriptive, predictable, controllable, accessible, error-tolerant, performant and consistent.

---

## 6. Desktop and mobile are separate experiences

Do not design desktop first and merely squeeze it into mobile.

Shared:

- product data
- brand assets
- terminology
- navigation destinations
- action semantics
- accessibility rules

### Desktop

Use width to improve comparison and scanning, not to spread related elements apart.

Use a coherent working canvas around **1280–1440 px** maximum content width.

### Mobile

Mobile must be:

- vertical-first
- thumb-friendly
- compact
- image-led
- easy to scan one-handed
- free from accidental horizontal page overflow

Primary mobile product discovery should use vertical rows with image + model + classification + useful facts + MRP.

Horizontal scrolling is acceptable only for compact secondary navigation, not as the main catalogue experience.

---

## 7. Persistent navigation and freedom

The visitor must never feel trapped on a page.

Primary destinations remain visible on every public page:

1. Equipment
2. Support
3. Parts
4. Ask AI

A second persistent product-classification navigation must also be available on every public page:

- All equipment
- Chainsaws
- Brushcutters
- Hedge trimmers
- Blowers
- Other equipment

A visitor on Support, Parts, AI or a model page must be able to jump directly into another classification without returning to Home first.

### Desktop

Use compact sticky top navigation plus a light classification row.

### Mobile

Use:

- a compact sticky brand/header area
- a compact classification strip beneath it
- persistent thumb-accessible primary navigation

Fixed navigation must reserve real layout space. It must **never cover titles, content, forms, footer actions or the last product row**.

Safe-area spacing must be respected.

---

## 8. Brand lock-up

Every public page must visibly show:

**TAGRO × ECHO**

Rules:

- real supplied TAGRO logo
- official ECHO logo
- TAGRO first
- preserve natural aspect ratios
- size logos by one dimension where possible; do not force mismatched width/height boxes
- never crop or stretch either logo
- both must remain readable on mobile and desktop
- provide an asset fallback if the preferred TAGRO asset fails to load

A logo existing in the DOM but not visibly rendering is a release failure.

The visitor must understand that TAGRO is the seller/support relationship and ECHO is the equipment brand.

---

## 9. Visual character

The site should feel:

- current
- quiet
- product-led
- trustworthy
- technically competent
- easy to scan
- locally useful
- memorable enough to revisit

It must not feel like:

- an admin dashboard
- a copied PDF catalogue
- a workshop database
- a generic SaaS template
- a slogan-heavy landing page
- disconnected rounded boxes

---

## 10. Colour system

White remains dominant.

Approximate proportions:

- White / near-white: **78–85%**
- Near-black / dark text: **10–14%**
- ECHO orange: **3–5%**
- Warm/light grey: **4–8%**

Orange is an accent, not a theme.

Colour must never be the only indicator of state.

---

## 11. Typography

Use one primary UI font family: modern system sans / Inter-like.

Use approximately three weights:

- Regular 400–450
- Semibold 600–650
- Bold 700–800

Avoid widespread 900/950 weights.

### Desktop

- Page title: 36–44 px
- Product/model: 30–40 px
- Section heading: 22–28 px
- Body: 16–18 px
- Supporting text: 14–15 px

### Mobile

- Page title: 27–32 px
- Product/model: 21–27 px
- Section heading: 19–23 px
- Body: 16 px
- Supporting text: 13–14 px

Use whitespace and grouping before increasing font size.

---

## 12. Equipment discovery

The Equipment page must be product-led from the first viewport.

Do not spend the first screen explaining the site.

Show:

- TAGRO × ECHO identity
- one short relevance statement
- compact help/search controls
- real machines immediately

Search is secondary because many visitors do not know a model number.

Filters must remain compact and understandable.

The classification selected from persistent navigation must remain selected when Equipment opens.

---

## 13. Product cards

Information order:

1. machine image
2. model
3. classification/use
4. 2–4 buyer facts
5. MRP

Desktop: clean 3–4 column grid where images carry strong visual weight.

Mobile: vertical list row, approximately 95–120 px image at left and concise information at right.

The full row/card should be tappable.

---

## 14. Model page

The model page is the main persuasion/decision page.

The first view must resolve:

- what machine this is
- what it is good for
- why it is worth considering
- 4–6 useful facts
- MRP
- one clear next action

Every model should have an evidence-based hook: low weight, high output, professional construction, high torque, reach, larger bar capacity, backpack format, etc.

Typical action hierarchy:

1. Ask if this fits my work
2. Compare
3. Manuals & parts
4. Contact / estimate

Persistent primary and classification navigation remain available.

---

## 15. Support

Support is a task experience, not a database index.

Keep the intro compact:

**Support**

**Find your ECHO**

[model search]

Show machines immediately.

Group support actions close to the machine. Prefer specific labels such as:

- Operator manual
- Maintenance
- Parts
- Ask

Avoid vague “View support” when the destination can be named more precisely.

---

## 16. Parts

Parts is a task page.

Keep the intro compact:

**Parts**

**Which ECHO do you have?**

[model search]

Then show models immediately.

Possible precise actions:

- Parts catalogue
- Common service parts
- Ask TAGRO

Do not imply an exact resource exists when it does not.

---

## 17. AI

AI must feel like a knowledgeable ECHO adviser, not a generic chatbot.

Lead with:

**What are you working on?**

Supporting line:

**Tell me the job, approximate size and how often you use the machine. I’ll narrow it down.**

Show lightweight intent prompts and the free-text field immediately.

Prefer prompts such as:

- Cutting trees
- Clearing grass / brush
- I already have a machine
- I need a manual or part

If arriving from a model page, acknowledge the model visibly.

Behaviour:

**Grab → Clarify → Narrow → Recommend**

Do not guess unfamiliar local tree names or terminology.

---

## 18. Casual browsing and return value

The site must reward exploration even when the visitor does not buy today.

Design for memory and re-entry through:

- stable TAGRO × ECHO brand treatment
- consistent classification names
- predictable navigation locations
- memorable real machine imagery
- concise differentiators
- no forced registration
- no popups
- no pressure language
- links that are easy to share and reopen

A casual browser should be able to leave with a clear mental memory such as:

**“TAGRO has the ECHO range, I saw the machines clearly, and I can find that chainsaw/brushcutter again.”**

---

## 19. External links and visitor control

No silent external departures.

Any ordinary web link leaving TAGRO first opens the internal Resources page showing:

- resource title
- destination/operator
- that the visitor is leaving TAGRO
- that the destination may have its own cookies, analytics or privacy practices

Only the visitor’s explicit Continue action opens the external site.

Direct user-initiated WhatsApp and email actions may remain direct.

---

## 20. Contact

Contact must remain available but quiet.

Allowed:

- WhatsApp icon
- Email icon
- clear contact/footer text where useful

Do not:

- display internal notification numbers
- use floating WhatsApp bubbles
- use popups
- animate contact prompts
- interrupt browsing

---

## 21. Whitespace and composition

Whitespace clarifies relationships.

It must not separate related objects.

Avoid:

**machine → huge empty gap → action**

or

**headline → empty field → CTA**

Keep related information physically close.

---

## 22. Information haze is a defect

The visitor should not wonder:

- what a machine is
- what a button does
- whether a manual exists
- whether parts information is exact
- whether MRP includes GST
- whether a link leaves TAGRO
- how to move to another product type
- what to do next

Prefer precise labels:

- Operator manual
- Parts catalogue
- Ask about this model
- Compare

Avoid generic “Open”, “Learn more” or “View” where a precise action is available.

---

## 23. Price

Public MRP is GST-inclusive.

Use:

**MRP ₹35,500 incl. GST**

Do not use ambiguous “MRP + GST”.

---

## 24. Images

Every public model should have a usable machine image.

Source priority:

1. supplied ECHO India material
2. official ECHO regional material
3. reputable interim third-party source only when necessary

Images must preserve aspect ratio, contain the complete machine where practical, use meaningful alt text and lazy-load below the fold.

A broken/missing image is a release defect.

---

## 25. Accessibility and physical usability

Required baseline:

- semantic HTML
- keyboard access
- visible focus
- meaningful labels and alt text
- adequate contrast
- important mobile targets around 40–48 px where practical
- no information conveyed by colour alone
- no content loss at increased text size/spacing
- logical heading order
- no navigation overlaying content

---

## 26. Performance

The site should feel immediate.

- avoid unnecessary libraries
- minimise render-blocking assets
- optimise images
- lazy-load below-fold imagery
- avoid oversized remote assets
- avoid duplicate CSS systems
- keep average mobile-network use in mind

---

## 27. Component discipline

Shared components must remain shared:

- header
- TAGRO × ECHO lock-up
- primary navigation
- classification navigation
- product card/row
- price treatment
- actions
- contact icons
- footer
- external-resource gate

Do not invent a new visual system inside each HTML file.

---

## 28. Public vs internal data

Public pages show customer-useful information.

Internal/source layers may hold:

- serial applicability
- verification status
- provenance
- suffix warnings
- dealer-only notes
- unresolved document matching

Internal notes must not leak into public copy.

Do not invent missing values.

---

## 29. Release acceptance test

Before release, independently test desktop and mobile.

### First screen

Can a new visitor immediately see:

- TAGRO and ECHO
- what this site offers
- real machines
- where to browse or ask

### Navigation

From **every page**, can the visitor reach:

- Equipment
- Support
- Parts
- Ask AI
- Chainsaws
- Brushcutters
- Hedge trimmers
- Blowers
- Other equipment

without navigation covering the page?

### Product

Can the visitor see machine image + model + useful facts + MRP quickly?

### Freedom

Can the visitor continue, switch classification, go back, compare, ask, contact or leave without surprise?

### Mobile-specific

Verify:

- TAGRO logo visibly renders
- ECHO logo visibly renders
- neither is stretched or cropped
- top header does not overlap the title
- bottom navigation does not cover content or the composer
- classification strip remains usable
- no accidental page-wide horizontal scrolling

### Return visitor

Can someone who saw the site days earlier quickly recognise the brand and relocate the same product category without relearning the interface?

---

## 30. Final governing principle

**A visitor should notice the machine, trust the seller, understand the choice and always know where they can go next.**

The best public experience is not the one with the most features. It is the one with the least friction, least uncertainty and strongest reason to return.