# TAGRO × ECHO — Zero-Friction Quality Gate

This document supplements `DESIGN_MANIFEST.md` and is mandatory for all public UI/UX work.

## Principle

A good-looking page is not acceptable if visible imperfections create uncertainty, stress, distrust or friction.

The visitor may arrive accidentally from search, social media, a shared link or a direct recommendation. The site has only a short window to establish relevance, credibility, interest and a useful next action.

**Imperfection compounds.** One broken image, unexplained control, awkward transition, missing fact, contradictory price, clipped logo, dead-end link or confusing layout can disproportionately damage the whole experience.

Therefore visual and interaction flawlessness is a release priority, not post-launch polish.

## Every public page must pass these gates

### 1. No visible defects
- no broken images
- no clipped/cropped brand marks
- no overflowing text
- no accidental horizontal page scrolling
- no controls hidden under fixed navigation
- no empty cards, empty fact boxes or unexplained blank space
- no duplicate headings or duplicated actions
- no inconsistent button/icon treatment

### 2. No avoidable uncertainty
The visitor should never wonder:
- what page they are on
- what a control does
- whether a price includes GST
- whether a link leaves TAGRO
- what the next useful action is
- whether a resource actually exists
- whether the machine shown matches the model named

If information is unavailable, omit the unsupported claim and provide a useful next action.

### 3. No cognitive pressure
- do not force a funnel
- do not demand a search term from a visitor who may not know one
- do not present many equally important CTAs
- do not interrupt with popups
- do not overload first view with specifications
- do not force horizontal browsing for the primary mobile journey
- do not make the visitor decode internal terminology

### 4. Every page needs a hook
A hook is a useful reason to continue, not a slogan.

Examples:
- recognisable machine image
- an immediately relevant application
- a meaningful differentiator
- a concise comparison
- a useful price
- an exact manual/parts resource
- a clear invitation to ask about the visitor's own work

The hook must be supported by real content and must lead naturally to another useful action.

### 5. Information must resolve haze
A visitor should leave each view knowing more than when they entered.

For a product, the first view should normally resolve:
- what it is
- who/what work it suits
- the key 3–6 facts
- approximate price/MRP
- why it may be worth considering
- what to do next

### 6. Continuity must be preserved
Moving between Equipment, Model, Support, Parts and Ask AI must feel like one product.

Preserve:
- brand lock-up
- navigation order
- typography
- action hierarchy
- terminology
- selected model context
- return/back paths

### 7. External destinations require informed choice
TAGRO must not silently push a visitor to another website.

Rules:
- all normal external web destinations route through the internal `resources.html` gateway first
- the gateway names the destination and operator clearly
- the gateway states that the visitor is leaving TAGRO
- the gateway warns that the external site may use its own cookies, analytics or privacy practices
- only the visitor's explicit **Continue** action opens the external site
- use `noopener noreferrer` on the final external link
- provide a clear way back to the current model or TAGRO page
- external manuals, parts sites, TAGRO website and ECHO India website follow the same rule

Direct `mailto:` and user-initiated WhatsApp actions are contact actions, not silent browsing redirects, and may remain direct.

### 8. Flaw-first review
Before judging beauty, inspect for defects.

Review in this order:
1. broken/incorrect content
2. rendering defects
3. navigation and dead ends
4. missing or contradictory information
5. cognitive load / stress
6. hierarchy / hook
7. visual refinement

### 9. Desktop and mobile must pass independently
Do not approve a page because one viewport looks correct.

Check both designs separately for:
- first-screen comprehension
- scroll length
- target size
- text wrap
- logo readability
- image scale
- action visibility
- navigation
- back/return behaviour
- external-link clarity

### 10. Release rule
A page is not ready because it is mostly correct.

If a visible defect materially weakens trust or flow, fix it before release rather than compensating with more content or decoration.

**Priority: flawless useful experience over feature count.**