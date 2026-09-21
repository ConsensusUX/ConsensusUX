# Contributing to ConsensusUX

Thank you for your interest in contributing to ConsensusUX. This document explains how to contribute effectively.

## Ways to Contribute

- **Code**: TypeScript, React, React Native, Node.js, PostgreSQL
- **Design**: UX research, wireframing, prototyping, accessibility audits
- **Theory**: academic research, case studies, comparative analysis
- **Documentation**: wiki pages, user guides, translations
- **Testing**: community testing, game-theoretic analysis, security review
- **Community**: running co-design workshops, outreach, facilitating feedback

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+
- [PostgreSQL](https://www.postgresql.org/) 16+
- [Docker](https://www.docker.com/) (optional, for self-hosting testing)

### Setup

```bash
# Clone the repository
git clone git@github.com:ConsensusUX/ConsensusUX.git
cd ConsensusUX

# Install dependencies
pnpm install

# Set up the database
# (instructions will be added once the schema is in place)

# Start development
pnpm dev
```

### Repository Structure

```
ConsensusUX/
├── apps/
│   ├── web/              # Next.js web application
│   └── mobile/           # Expo mobile application
├── packages/
│   └── core/             # Shared: scoring, data models, E2EE
├── docs/                 # Architecture decision records
├── .github/              # Issue templates, CI workflows
├── ROADMAP.md            # Development roadmap
└── CONTRIBUTING.md       # This file
```

## Development Workflow

### Fork-Only Workflow

We do not use branches on the main repository. All contributions come through forks:

1. **Fork** the repository to your own GitHub account
2. **Clone** your fork and create a branch there
3. **Write code**: follow the existing style and conventions
4. **Write tests**: all new functionality should include tests
5. **Open a PR** from your fork to `ConsensusUX/ConsensusUX:main`
6. **Link the issue**: every PR must reference a GitHub issue. Use `Closes #N` or `Fixes #N` in the PR description to auto-close the issue on merge
7. **Wait for review**: at least one other contributor should review before merge

PRs that are not linked to an issue will not be merged. If no relevant issue exists, open one first.

### Commit Messages

Use clear, descriptive commit messages. No strict format enforced, but be specific:

```
# Good
Add consent check UI component with degrees of resistance slider
Fix scoring algorithm: degree 5 should map to green_score 0.5

# Bad
fix stuff
update
```

### Code Style

- TypeScript strict mode
- Functional React components with hooks
- No `any` types. If you can't type it, ask for help
- ESLint + Prettier (config in the repo root)

## Design Contributions

If you're contributing UX or design work:

- Reference the [Design Principles](https://consensusux.github.io/theory/design-principles) documented in the wiki
- Explain how your design connects to the project's theoretical foundations
- Wireframes and mockups should be shared as images or Figma links in the PR description
- The [Figma file](https://www.figma.com/design/6xXQKCxXbBoOBSEGL9YzyX/Consensus_UX) contains the current wireframes

## Security

ConsensusUX is designed for at-risk communities. Security is not optional.

If you find a security vulnerability:
- **Do not open a public issue**
- Email the project at the contact address in the wiki
- We will work with you to understand and address the issue before any public disclosure

### Security-Critical Code Areas

These areas require extra scrutiny in review:

- Authentication and session management
- QR code generation and scanning
- E2EE implementation (encryption, key exchange, key storage)
- Push notification dispatch (must never include message content)
- Profile data isolation between groups

## Principles

ConsensusUX is committed to the same principles it builds:

- **Horizontal organisation**: no one in this project has authority over anyone else
- **Informed consent**: decisions about the project are made by the group, not imposed
- **Accessibility**: code, docs, and design should be understandable and usable by non-specialists
- **Prefiguration**: the way we build is as important as what we build
- **Transparency**: decisions, disagreements, and reasoning are documented

All work on this project is hand-over work. The goal is distributed ownership, not individual control.

## Contact

- **Wiki**: [consensusux.github.io](https://consensusux.github.io)
- **GitHub**: [github.com/ConsensusUX](https://github.com/ConsensusUX)
