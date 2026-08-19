# TAGRO × ECHO — Public Experience Manifest

**Status:** Governing design contract for all current and future public UI/UX work in this repository.

**Purpose:** Define, from first principles, how the TAGRO × ECHO site must look, behave and persuade. This document replaces all previous design-manifest guidance. Future contributors and AI agents must read it completely before changing public pages.

---

## 1. The visitor arrives with almost no obligation to stay

A visitor may arrive:

- accidentally from Google
- from a social-media post
- from a shared link
- from a product search
- because TAGRO sent a direct link
- because they already own a machine and need help

The site must assume low commitment and limited attention.

The first responsibility is not to explain the website. It is to make the visitor immediately feel:

1. **This is relevant to me.**
2. **This looks credible.**
3. **There is something here worth looking at.**
4. **I know what I can do next.**

The public experience should therefore be designed around a short persuasion window of roughly three minutes.

### Attention sequence

**0–10 seconds — recognition**

The visitor should see:

- TAGRO × ECHO identity
- real ECHO machines
- what kind of work/products the site covers
- one obvious way to browse or ask for help

**10–45 seconds — relevance**

The visitor should be able to scan multiple products quickly and understand:

- what each machine is
- what kind of work it suits
- 2–4 important facts
- approximate MRP

**45–120 seconds — confidence**

The visitor should be able to open a machine and understand:

- why it is worth considering
- its key specifications
- what differentiates it
- whether it fits their use
- what alternatives or support exist

**120–180 seconds — action**

A useful next step should be obvious:

- Ask AI
- compare
- request an estimate
- contact TAGRO
- find a manual
- find parts
- continue browsing

Do not force this sequence. The visitor remains in control and can enter at any stage.

---

## 2. Governing principle

**The product and the visitor's task are the heroes. The interface is only the guide.**

The site must not be designed around pages, database fields, internal workflows or decorative marketing sections.

Every visible element must help one or more of these jobs:

- recognise
- understand
- become interested
- choose
- compare
- verify
- buy / request an estimate
- operate / maintain
- find a manual or part
- ask for help
- contact TAGRO

If an element does not materially help one of those jobs, remove it.

---

## 3. Flawlessness is a release priority

Perceived imperfection damages trust disproportionately.

One visible defect can outweigh many good design decisions:

- broken image
- wrong machine image
- clipped logo
- awkward spacing
- unexplained control
- missing fact
- contradictory price
- dead-end link
- unexpected external redirect
- horizontal overflow
- content hidden by navigation
- inconsistent button treatment
- long empty regions
- vague wording

**Flaw-first review comes before visual polish.**

Review every page in this order:

1. incorrect/broken content
2. rendering defects
3. navigation and dead ends
4. missing or contradictory information
5. cognitive pressure or uncertainty
6. hierarchy and hook
7. visual refinement

A page is not ready because it is mostly correct.

---

## 4. Design standards and references

Use these as quality references, not certification claims:

- **ISO 9241-210:2019** — human-centred design
- **ISO 9241-110:2020** — interaction principles
- **ISO/IEC 25010:2023** — product/software quality
- **ISO/IEC 40500** and current WCAG guidance — accessibility

The experience must be:

- task-suitable
- self-descriptive
- predictable
- controllable
- error-tolerant
- accessible
- consistent
- performant

---

## 5. Desktop and mobile are separate experiences

Do not design desktop first and merely squeeze it into a smaller viewport.

Shared:

- data
- brand assets
- terminology
- product hierarchy
- navigation destinations
- accessibility rules
- action semantics

### Desktop

Desktop should use width to improve:

- comparison
- product visibility
- scanning
- side-by-side understanding

Do not stretch components across the entire monitor simply because space exists.

Use a coherent working canvas, generally around **1280–1440 px maximum content width**, so related information stays visually connected.

### Mobile

Mobile should be:

- vertical-first
- thumb-friendly
- compact
- image-led
- easy to scan one-handed
- free from unnecessary horizontal browsing

Primary product discovery on mobile should normally use **vertical product rows** with thumbnail + model + classification + key facts + MRP.

Horizontal scrolling is acceptable only when it clearly improves a secondary task.

---

## 6. Visual character

The site should feel:

- current
- quiet
- premium without luxury affectation
- technically competent
- product-led
- trustworthy
- easy to scan
- locally useful

It must not feel like:

- an admin dashboard
- a copied PDF catalogue
- a workshop database
- a generic SaaS template
- a slogan-heavy landing page
- an early-2000s dealer website
- a page made of disconnected rounded boxes

---

## 7. Colour system

White remains the dominant surface.

Approximate visual proportion:

- **White / near-white:** 78–85%
- **Near-black / dark text:** 10–14%
- **ECHO orange:** 3–5%
- **Warm/light grey:** 4–8%

These are design proportions, not mathematical quotas.

### White

Use for:

- page background
- content surfaces
- navigation
- cards
- forms

### Near-black

Use for:

- primary text
- selected navigation
- important actions
- high-confidence hierarchy

Do not use giant black hero panels.

### ECHO orange

Use sparingly for:

- brand emphasis
- one important action in a local area
- active indicators
- small highlights

Orange is an accent, not a page theme.

### Grey

Use only to create hierarchy:

- product image wells
- dividers
- secondary information
- inactive controls

Colour must never be the only indication of state.

---

## 8. Typography

Use **one primary UI font family**.

Preferred stack:

- modern system sans / Inter-like stack

Brand logos remain artwork.

### Weight discipline

Use three practical levels:

- Regular: 400–450
- Semibold: 600–650
- Bold: 700–800

Avoid widespread 900/950 weights.

If everything is heavy, nothing has hierarchy.

### Desktop targets

- Page title: **36–44 px**
- Product/model name: **30–40 px**
- Section heading: **22–28 px**
- Body: **16–18 px**
- Supporting text: **14–15 px**
- Metadata: **12–13 px minimum where practical**

### Mobile targets

- Page title: **27–32 px**
- Product/model name: **21–27 px**
- Section heading: **19–23 px**
- Body: **16 px**
- Supporting text: **13–14 px**

### Line height

- Body/interface: approximately **1.4–1.55**
- Headings: approximately **1.05–1.15**

Use whitespace and grouping before increasing font size.

---

## 9. Brand lock-up

Every public page must visibly show:

**TAGRO × ECHO**

Rules:

- use the real supplied TAGRO logo
- use the official ECHO logo
- TAGRO appears first
- preserve both aspect ratios
- never crop, stretch or substitute either mark
- both must remain clearly readable on desktop and mobile
- do not render TAGRO as an invisible/tiny mark beside ECHO

The visitor must immediately understand that TAGRO is the seller/support relationship and ECHO is the equipment brand.

---

## 10. Navigation

Primary destinations remain:

1. Equipment
2. Support
3. Parts
4. Ask AI

The meaning and order remain stable everywhere.

### Desktop

Use compact top navigation. Navigation should not visually overpower the brand or products.

### Mobile

Use a compact thumb-accessible pattern. If bottom navigation is used, it must:

- not cover content
- have text labels
- remain visually light
- preserve safe-area spacing

Navigation labels must not depend on icon interpretation alone.

---

## 11. Home / Equipment page

The Equipment page must be **product-led from the first viewport**.

Do not spend the first screen explaining the website.

### First desktop view should show

- TAGRO × ECHO brand
- one short relevance statement
- compact help/search controls
- actual product imagery immediately

A visitor should see real machines before scrolling far.

### Intro copy

Use at most one short relevance statement, for example:

**ECHO outdoor power equipment for farm, estate and professional work.**

Avoid large generic statements such as “Find the machine that fits the work” if they consume space without adding information.

### Help action

**Help me choose** should be visible but connected to the product-discovery area, not isolated in a large empty region.

### Search

Search is secondary.

A visitor who knows a model should be able to search quickly, but the site must not demand a search term from someone who does not know what they want.

### Filters

Keep filters compact.

Use clear task/category labels such as:

- All
- Chainsaws
- Brushcutters
- Hedge trimmers
- Blowers
- Other equipment

Avoid oversized pill rows that resemble a control panel.

---

## 12. Product discovery cards

### Information order

The eye should encounter:

1. machine image
2. model
3. classification / use
4. 2–4 useful buyer facts
5. MRP
6. next action implied by the clickable card

### Desktop

Use a clean 3–4 column grid depending on width.

Images should carry strong visual weight, generally around 45–55% of card height.

Cards should not be over-framed with heavy chrome.

### Mobile

Use vertical list rows:

- image approximately 95–120 px at left
- model and classification at right
- key facts below
- MRP visible
- entire row tappable

Do not use the main mobile catalogue as a horizontal carousel.

---

## 13. Model page

The model page is the principal persuasion and decision page.

### First view must resolve

- what machine this is
- what it is good for
- why it is worth considering
- 4–6 important facts
- MRP
- the next useful action

### Desktop composition

Use product image and product summary as a visually connected pair, not two isolated blocks.

### Mobile composition

Image first, then concise summary, facts and one primary action.

### Buyer facts

Where applicable, prioritise:

- displacement / power
- dry weight
- bar / cutting attachment / working capacity
- chain specification
- fuel capacity
- chain oil / relevant tank capacity
- 2–4 distinctive features

Do not leave blank fact boxes.

### Product hook

Every model page should contain at least one real differentiator, such as:

- unusually low weight
- stronger output
- professional construction
- high-torque gearbox
- larger bar capacity
- backpack format
- reach/articulation

A hook must be evidence-based, not a slogan.

### Actions

One action should dominate locally.

Typical hierarchy:

1. **Ask if this fits my work**
2. Compare
3. Manuals & parts
4. Contact / estimate

---

## 14. Support page

Support must feel like a product-support service, not a database index.

### Intro

Keep it compact:

**Support**

**Find your ECHO**

[model search]

Then show machines immediately.

Do not occupy a large first-screen area explaining that manuals are attached to machines.

### Desktop support result

Use a compact machine card/row with:

- visible image
- model
- classification
- available support actions grouped close to the machine

Possible actions, only when applicable:

- Manual
- Maintenance
- Parts
- Ask

Do not place “View support” hundreds of pixels away from the model.

Do not use vague action labels when a more specific label exists.

---

## 15. Parts page

Parts is a task page.

### Intro

Keep it compact:

**Parts**

**Which ECHO do you have?**

[model search]

Then show models immediately.

Do not explain site architecture or external-link behaviour in the headline area.

### Model result

Show:

- image
- model
- classification
- clear resource status/actions

Possible actions:

- Parts catalogue
- Common service parts
- Ask TAGRO

If no exact resource exists, do not imply that it does.

---

## 16. AI page

AI should feel like a knowledgeable product adviser, not a generic chatbot.

### First view

Lead with:

**What are you working on?**

Supporting line:

**Tell me the job, approximate size and how often you use the machine. I’ll narrow it down.**

Then immediately show:

- a few lightweight starter prompts
- free-text input

Do not create a large empty chat region before the user interacts.

### Starter prompts

Prefer intent-based prompts such as:

- Cutting trees
- Clearing grass / brush
- I already have a machine
- I need a manual or part

Estimate is generally a later-stage action, not the primary first impression.

### Context continuity

If the visitor arrives from a model page, the AI should visibly acknowledge it:

**You’re looking at CS-620SX. What are you planning to use it for?**

### Behaviour

Use:

**Grab → Clarify → Narrow → Recommend**

Ask only the missing questions that materially change the answer.

Do not guess local Malayalam tree names or unknown terminology.

---

## 17. External links and visitor control

No silent external departures.

Any normal browsing link that leaves TAGRO must first open the internal Resources/exit page.

The exit page must state:

- resource title
- destination/operator
- that the visitor is leaving TAGRO
- that the destination may use its own cookies, analytics or privacy practices

The visitor then chooses whether to continue.

Direct user-initiated contact actions such as email or WhatsApp may open their respective apps/services without an additional browsing gate.

---

## 18. Contact actions

Contact must be available but quiet.

Allowed:

- WhatsApp icon
- Email icon
- clear text link in contact/footer areas where useful

Do not:

- expose internal notification numbers as page copy
- use floating WhatsApp bubbles
- use popups
- animate contact prompts
- interrupt browsing

---

## 19. Whitespace and composition

Whitespace is used to clarify relationships, not merely to make pages look minimal.

Good whitespace separates groups.

Bad whitespace separates related items.

Avoid patterns such as:

**machine → hundreds of pixels of emptiness → action**

or

**headline → huge empty field → CTA**

Keep related information physically close.

---

## 20. Information haze is a defect

The visitor should not leave a section wondering:

- what this machine is
- what a button will do
- whether a manual actually exists
- whether a parts link is exact
- whether the price includes GST
- whether a link leaves TAGRO
- what to do next

Use precise labels.

Prefer:

- Operator manual
- Parts catalogue
- Ask about this model
- Compare

Avoid:

- Open
- View support
- View parts
- Learn more

unless the destination is genuinely broad.

---

## 21. Price presentation

The supplied public MRP is GST-inclusive.

Use:

**MRP ₹35,500 incl. GST**

Do not use:

- MRP + GST
- ambiguous pre-tax pricing as the primary public price

If a future selling/offer price is added, distinguish it clearly from MRP.

---

## 22. Images

Every public model should have a usable image.

Source priority:

1. supplied ECHO India material
2. official ECHO regional material
3. reputable interim third-party source only when necessary

### Image rules

- correct machine/model
- preserve aspect ratio
- contain, do not crop essential machine parts
- neutral image well
- optimised dimensions and file size
- lazy-load below fold
- meaningful alt text

Broken or mismatched product imagery is a release blocker.

---

## 23. Data and content discipline

Public content and internal evidence must be separated.

Public product data may contain:

- identity
- category
- application
- buyer specs
- features
- price
- image
- public resources
- accessories

Internal/source data may contain:

- provenance
- verification status
- suffix warnings
- serial applicability
- dealer-only notes
- unresolved document matching

Internal notes must never leak into public copy.

Do not silently invent missing values.

---

## 24. Accessibility

Required baseline:

- semantic HTML
- logical heading order
- keyboard-accessible controls
- visible focus
- meaningful labels
- useful alt text
- adequate contrast
- important touch targets around 40–48 px where practical
- no information conveyed by colour alone
- no content loss when text is enlarged
- layout tolerant of increased text spacing

Do not shrink important text merely to fit more content.

---

## 25. Performance

Pages must feel immediate.

Requirements:

- avoid unnecessary frameworks/libraries
- minimise render-blocking assets
- optimise product images
- lazy-load below-fold images
- avoid giant remote assets
- avoid duplicate CSS systems
- load only the data required for the page
- degrade gracefully on average mobile networks

---

## 26. Component discipline

Common public components must have shared rules and implementation:

- header
- brand lock-up
- navigation
- product card/row
- price
- fact item
- buttons/actions
- footer
- contact icons
- support/parts result row
- external-resource link
- AI starter/input

Page-specific visual systems are not acceptable.

---

## 27. What must not return

Do not reintroduce:

- giant black hero panels
- giant generic headline sections
- dominant first-screen search
- long horizontal product carousels as primary mobile discovery
- public workshop/process language
- multiple font families
- excessive bold typography
- excessive orange
- blank product placeholders when imagery exists
- huge unexplained empty regions
- vague far-away actions such as “View support”
- silent external redirects
- floating WhatsApp prompts
- internal phone numbers as visible content
- stale duplicate front ends
- repo internals in public assets

---

## 28. Page acceptance test

### First 10 seconds

Can a new visitor immediately identify:

- TAGRO
- ECHO
- actual equipment
- relevance to their work
- one next action

### First 45 seconds

Can they scan several machines and understand differences without opening every page?

### Model page

Can they see image + model + application + key facts + MRP + action quickly?

### Support / Parts

Can they identify their machine visually and know exactly what resources/actions are available?

### AI

Does the page invite a useful first sentence instead of demanding commitment to a generic chatbot?

### Freedom

Can the visitor:

- go back
- continue browsing
- compare
- ask
- contact
- open resources intentionally

without surprises?

### Consistency

Do Equipment, Model, Support, Parts, AI and Resources feel like one product?

### Desktop

Does width improve understanding rather than create emptiness?

### Mobile

Can the primary journey be completed one-handed with normal vertical scrolling?

---

## 29. Mandatory implementation procedure

Before changing public UI/UX:

1. Read this manifest completely.
2. Inspect every affected page and shared component completely.
3. Inspect both desktop and mobile behaviour.
4. Preserve working data/functions unless intentionally replaced.
5. Prefer coordinated rewrites over isolated patches when the system is drifting.
6. Verify logos, images, paths, navigation and external-link behaviour.
7. Check for overflow and hidden content.
8. Check missing-data states.
9. Check keyboard/focus behaviour.
10. Perform flaw-first review before aesthetic approval.
11. Do not claim completion without checking the changed code and rendered paths.
12. If the owner establishes a new enduring rule, rewrite this manifest accordingly rather than accumulating contradictory addenda.

---

## 30. Final design law

**Attention is earned by relevance. Confidence is earned by clarity. Interest is earned by the product. Action is earned by removing uncertainty.**

The best page should feel almost effortless: the visitor notices the machine, understands why it might matter, and always knows what they can do next.