# TAGRO ECHO

Standalone TAGRO × ECHO equipment, service and AI-assistant site for Cloudflare Workers.

## Governing design handoff

Before changing any public UI/UX, read **[DESIGN_MANIFEST.md](DESIGN_MANIFEST.md)** completely. It is the persistent design contract for desktop/mobile behaviour, visual hierarchy, typography, colour, navigation, product pages, AI behaviour, accessibility, content discipline and future UI work.

Current architecture:
- Static assets served only from `public/`
- Worker API under `/api/*`
- Anthropic Claude Sonnet 4.6 through Cloudflare AI Gateway `tagro-echo-ai`
- Cloudflare gateway authentication token stored as Worker secret `CF_AIG_TOKEN`
- Existing ECHO model catalogue and stable per-model pages preserved

The public site is intentionally open at this stage. Authentication/customer persistence/WhatsApp integration will be added incrementally after the AI proxy is verified.
