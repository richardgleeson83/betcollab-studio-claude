# PROJECT LEDGER — Betcollab Retainer Site

> Source of Truth. Read at the start of every session.
> Do not modify the Master Roadmap without an explicit approved Change Request.

## Resume Protocol
On session start: read this file, state last action, state next step, ask for confirmation.

## You Are Here
**Status:** Active development — landing page built, syntax error in ComponentShowcase.tsx
**Mode:** Bug fixing / component refinement

## Master Roadmap
| Phase | Status | Description |
|-------|--------|-------------|
| 0 — Initial scaffold | ✅ DONE | Vite + React + shadcn/ui + Tailwind + Framer Motion |
| 1 — Landing page sections | ✅ DONE | Hero, Navbar, SoundFamiliar, Features, Showcase, CTA, Footer |
| 2 — Bug fixes | 🔄 IN PROGRESS | Fix syntax error in ComponentShowcase.tsx |
| 3 — Polish & content | ⏳ TODO | Copy, images, animations, responsiveness |
| 4 — Launch | ⏳ TODO | Deploy, domain, analytics |

## Component / Feature Registry
| Component | File | Status |
|-----------|------|--------|
| Navbar | `src/components/Navbar.tsx` | ✅ Built |
| HeroSection | `src/components/HeroSection.tsx` | ✅ Built |
| ComponentShowcase | `src/components/ComponentShowcase.tsx` | ⚠️ Syntax error (line 50) |
| SoundFamiliarSection | `src/components/SoundFamiliarSection.tsx` | ✅ Built |
| FeaturesSection | `src/components/FeaturesSection.tsx` | ✅ Built |
| ShowcaseSection | `src/components/ShowcaseSection.tsx` | ✅ Built |
| SportsbookExpertiseSection | `src/components/SportsbookExpertiseSection.tsx` | ✅ Built |
| SkipHiringSection | `src/components/SkipHiringSection.tsx` | ✅ Built |
| DeliverySpeedSection | `src/components/DeliverySpeedSection.tsx` | ✅ Built |
| CTASection | `src/components/CTASection.tsx` | ✅ Built |
| FooterSection | `src/components/FooterSection.tsx` | ✅ Built |
| NavLink | `src/components/NavLink.tsx` | ✅ Built |
| DesignSystem page | `src/pages/DesignSystem.tsx` | ✅ Built |

## Active Technical Decisions
- Stack: Vite + React 18 + TypeScript + shadcn/ui + Tailwind CSS + Framer Motion + react-router-dom
- Routing: `/` → Index (landing page), `/design-system` → DesignSystem
- Animations: Framer Motion (`motion.*` components with `whileInView`, `initial`, `transition`)
- Dev server runs on port 8081 (8080 in use)

## Known Issues
- `ComponentShowcase.tsx` line 50: Vite/SWC syntax error on `initial` prop — likely a JSX parsing issue with Framer Motion props

## Change Log
| Date | Action |
|------|--------|
| 2026-04-30 | PROJECT_LEDGER.md created — project surveyed, structure documented |

## Next Immediate Step
Fix the syntax error in `src/components/ComponentShowcase.tsx` around line 50 — Vite is failing to parse a Framer Motion `motion.h2` component's `initial` prop.
