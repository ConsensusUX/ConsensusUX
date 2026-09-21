# ConsensusUX

**Open source infrastructure for consent-based decision-making in horizontal community groups.**

ConsensusUX is a multi-platform application (web + mobile) that enables groups to make decisions together without hierarchy. Unlike voting platforms that produce winners and losers, ConsensusUX uses **degrees of consent** to surface proposals the group can live with, and makes dissent visible, reasoned, and productive.

This project is grounded in anarchist cybernetics, public sphere theory, and decolonial design. Every design decision traces back to these theoretical commitments. The UX was developed through a dissertation process including community co-design workshops.

📖 **Wiki & Documentation**: [consensusux.github.io](https://consensusux.github.io)

---

## Core Concepts

- **No admins.** All settings are outputs of group consensus. No one has elevated privileges.
- **Dual chat architecture.** Every conversation has an input chat (raw discussion) and an output chat (proposals ordered by consent).
- **Degrees of resistance.** Judgments range from enthusiastic consent (1) to hard dissent (10), not just up/down.
- **Chain messages.** Judgments can be judged, creating nested debate that dynamically resolves disagreements.
- **Soft lock disputes.** A novel conflict resolution mechanism where both parties are mutually immobilised until one concedes. No admin override, no vote-to-kick.
- **Federation.** Groups form relationships and share decision-making through the same consensus mechanics. Federation upward and subgroups downward use identical architecture.
- **End-to-end encryption.** All communications are E2EE as a mandatory requirement, not an optional feature.

---

## Architecture

```
ConsensusUX/
├── apps/
│   ├── web/              # Next.js (React) web application
│   └── mobile/           # Expo (React Native) mobile application
├── packages/
│   └── core/             # Shared TypeScript: scoring algorithm, data models, crypto
├── docs/                 # Architecture decision records
├── .github/              # Issue templates, CI workflows
├── package.json          # pnpm workspace root
├── turbo.json            # Turborepo pipeline config
└── docker-compose.yml    # Self-hosting setup
```

### Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Web | Next.js (React) | SSR for public-facing pages, SPA for app |
| Mobile | Expo (React Native) | Shared core logic with web |
| Shared | TypeScript | Scoring algorithm, data models, E2EE primitives |
| Backend | Node.js | Real-time via WebSockets |
| Database | PostgreSQL | Relational model (groups, members, vouches, chats) |
| Encryption | Signal Protocol / libsignal | E2EE for all message content |
| Self-hosting | Docker Compose | Groups can run their own instances |

### Security Constraints (Non-Negotiable)

These are architectural invariants, not configurable settings:

- **No email anywhere in the system.** Email is an attack vector for at-risk users.
- **End-to-end encryption on all message content.** The server cannot read messages.
- **No message preview in push notifications.** Notifications alert but never leak content.
- **Profile data is group-scoped.** A user's identity in Group A cannot be linked to Group B.
- **QR codes contain session tokens, not user identity.** Scanning reveals nothing about the scanner.
- **Safe defaults.** When no consensus exists on a setting, the most conservative option applies automatically.

---

## Features

| Feature | Description | Status |
|---------|-------------|--------|
| [Getting on the Network](https://consensusux.github.io/features/getting-on-network) | Account creation, QR onboarding, vouching | Planned |
| [Group Membership](https://consensusux.github.io/features/group-membership) | Member tiers, profiles, vouch tracking | Planned |
| [Core Flow](https://consensusux.github.io/features/core-flow) | Consent check, dual chat, scoring, chain messages | Planned |
| [Soft Lock Disputes](https://consensusux.github.io/features/soft-lock-disputes) | Horizontal conflict resolution | Planned |
| [Federation](https://consensusux.github.io/features/federation) | Multi-group relations, shared chats, info flow | Planned |
| [Settings](https://consensusux.github.io/features/settings) | Admin-less settings via relay chat consensus | Planned |
| [Relay Chat](https://consensusux.github.io/features/relay-chat) | Settings resolution, cross-group relay, checklists | Planned |

---

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the full development roadmap with milestones.

**Current phase: Foundation (M0 + M1)**

| Phase | Milestone | Focus |
|-------|-----------|-------|
| Foundation | M0: Infrastructure | Monorepo, CI, E2EE primitives, database schema, Docker |
| Foundation | M1: Getting on the Network | Auth, account creation, group creation, QR onboarding, vouching |
| Core | M2: Core Flow | Input/output chat, consent check, scoring algorithm, chain messages |
| Core | M3: Group Membership | Member list, tiers, vouch tracking, probationary status |
| Safety | M4: Soft Lock Disputes | Dispute initiation, mutual lock, resolution paths |
| Configuration | M5: Settings & Relay Chat | Settings-by-consensus, relay chat, chat ordering, checklists |
| Scale | M6: Federation | Group vouching, shared chats, consensual information flow |

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL 16+
- Docker & Docker Compose (for self-hosting)

### Development

```bash
git clone git@github.com:ConsensusUX/ConsensusUX.git
cd ConsensusUX
pnpm install
pnpm dev
```

This starts both the web app and any local backend services. See [CONTRIBUTING.md](CONTRIBUTING.md) for full development setup.

---

## Contributing

ConsensusUX is an open source project. We welcome contributions from developers, designers, researchers, and community organisers.

👉 **Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.**

---

## Theory

This project is not arbitrary software. Every feature traces back to specific theoretical commitments documented in the [wiki's Theory section](https://consensusux.github.io/theory/):

- **Anarchist Cybernetics** (Swann 2021): communication, control, and collective autonomy
- **Public Sphere Theory** (Habermas 1962): infrastructure for discursive networks
- **Decolonial Design** (Smith et al. 2024): foregrounding alternative epistemologies
- **Consensus Decision-Making**: from the Occupy tradition, modified for digital space
- **Design Justice**: centering people marginalised by existing design decisions

---

## License

TBD. To be decided by the working group through consensus.
