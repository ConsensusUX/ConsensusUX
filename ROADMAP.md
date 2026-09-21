# ConsensusUX Roadmap

This roadmap tracks the development of ConsensusUX from wireframe specification to a deployable application.

Each milestone maps to a section of the [wiki](https://consensusux.github.io) and a set of GitHub issues. Milestones are ordered by dependency; later milestones build on earlier ones.

---

## M0: Infrastructure

**Establish the technical foundation.**

- [ ] Monorepo setup (pnpm workspaces, Turborepo)
- [ ] CI/CD pipeline (GitHub Actions: lint, test, build)
- [ ] PostgreSQL schema (initial tables: users, groups, chats, messages, judgments)
- [ ] E2EE architecture decision and library selection (Signal Protocol / libsignal)
- [ ] E2EE key exchange and storage design
- [ ] Docker Compose setup for self-hosting
- [ ] WebSocket infrastructure for real-time messaging
- [ ] Authentication system (username + password, no email)
- [ ] CAPTCHA integration (privacy-respecting, no reCAPTCHA)

**Wiki reference**: [Architecture](https://consensusux.github.io/development/architecture)

---

## M1: Getting on the Network

**Users can create accounts, discover groups, and join through vouching.**

- [ ] Login screen (private username + password)
- [ ] Account creation (private username, password, CAPTCHA)
- [ ] Group discovery screen (create new / join existing)
- [ ] Group-scoped profile setup (public username, self-description, profile photo)
- [ ] QR code generation for new members
- [ ] QR code scanning by existing members
- [ ] Security code fallback (for broken cameras)
- [ ] Group principles display for prospective members
- [ ] Consent checkbox + application submission
- [ ] Vouching flow (judgment + reasoning from existing member)
- [ ] Vouch count tracking and threshold transition (prospective → probationary)

**Wiki reference**: [Getting on the Network](https://consensusux.github.io/features/getting-on-network)

---

## M2: Core Flow

**The central value proposition: consent-based proposal ordering.**

- [ ] Input chat (chronological messaging)
- [ ] Output chat (consent-ordered proposals with green/red sections)
- [ ] Consent check UI (tap-and-hold activation)
- [ ] Binary judgment mode (thumbs up/down)
- [ ] Degrees of resistance mode (1-10 slider)
- [ ] Mandatory reasoning input (minimum word count)
- [ ] Scoring algorithm implementation (green_score / red_score calculation)
- [ ] Output chat ordering (green section by green_score desc, red section by red_score desc)
- [ ] Chain messages (judgments on judgments, nested display)
- [ ] Chain score cancellation mechanic (sustained challenges cancel original scores)
- [ ] X/Y chain depth badge
- [ ] Message search in output chats
- [ ] Red/green section visibility rules
- [ ] Colour-blind accessibility (texture differentiation mode)
- [ ] Notification system (red dots, push notifications without message preview)
- [ ] E2EE integration for all message content

**Wiki reference**: [Core Flow](https://consensusux.github.io/features/core-flow), [Scoring Algorithm](https://consensusux.github.io/development/scoring-algorithm)

---

## M3: Group Membership

**Member tiers, profiles, and ongoing vouch maintenance.**

- [ ] Members list (output chat format, colour-coded by tier)
- [ ] Member tiers (probationary with day count, full, provisional, removed)
- [ ] Member profile pages (group-scoped: public username, self-description, self-vouch, vouch chain)
- [ ] Vouch chain display
- [ ] Probationary → full tier transition (time-based)
- [ ] Vouch count monitoring and provisional status trigger
- [ ] Time-based vouch restrictions (default 14 days between vouches)
- [ ] Removed member persistent record
- [ ] Member search

**Wiki reference**: [Group Membership](https://consensusux.github.io/features/group-membership)

---

## M4: Soft Lock Disputes

**Horizontal conflict resolution without admin authority.**

- [ ] Dispute instigation (complaint on member profile)
- [ ] Strong dissent judgment (red_score +1 trigger)
- [ ] Soft lock warning screen
- [ ] Mutual lock activation (both parties restricted to profile-only)
- [ ] Group notification on dispute creation
- [ ] Padlock UI (replaces back arrow during lock)
- [ ] "Concede the Point" shortcut button
- [ ] Resolution A: accused concedes (negative self-vouch, final statement, group access removed)
- [ ] Resolution B: challenger concedes (both released, dispute resolved)
- [ ] Chain-based group pressure (members post support/opposition in dispute chain)
- [ ] Dispute history preservation

**Wiki reference**: [Soft Lock Disputes](https://consensusux.github.io/features/soft-lock-disputes)

---

## M5: Settings & Relay Chat

**Admin-less configuration through consensus.**

- [ ] Relay chat implementation (standalone output with yellow pending zone)
- [ ] Exclusive settings (single active option with backstop default)
- [ ] Non-exclusive settings (multiple active options, no backstop)
- [ ] Per-chat settings UI (full V-0.6 settings list)
- [ ] Per-group settings UI
- [ ] Settings change via consent check
- [ ] Safe defaults (hard-coded conservative fallbacks)
- [ ] Chat ordering schemes (named, switchable, decimal-ordered)
- [ ] Checklist output chat formatting
- [ ] Message retraction (per-chat toggle, always on for profile pages)

**Wiki reference**: [Settings](https://consensusux.github.io/features/settings), [Relay Chat](https://consensusux.github.io/features/relay-chat)

---

## M6: Federation

**Multi-group relationships and consensual information flow.**

- [ ] Group Relationships tab
- [ ] Federated groups list (output chat format: federated/connected/de-federated)
- [ ] Group vouching flow (modified member vouching for groups)
- [ ] QR/security code for group co-verification
- [ ] Bilateral principle agreement
- [ ] Shared chat creation (with bilateral consent on settings)
- [ ] Three-setting consensual information flow (make visible → publish → accept)
- [ ] Cross-group proposal relay (via relay chat yellow zone)
- [ ] Consent reset for relayed proposals (optional per-chat setting)
- [ ] De-federation (unilateral, preserves chat history as read-only)

**Wiki reference**: [Federation](https://consensusux.github.io/features/federation)

---

## Future / Unscheduled

These are not in the current milestone plan but are tracked for future consideration:

- [ ] Self-hosting documentation and community support
- [ ] Internationalisation (i18n)
- [ ] Offline-first support for intermittent connectivity
- [ ] Tree graph visualisation of group participation health
- [ ] Accessibility audit (screen readers, motor impairment, cognitive load)
- [ ] Explainer videos / onboarding content for the website
- [ ] Mobile-specific UX refinements (haptics, gestures)
