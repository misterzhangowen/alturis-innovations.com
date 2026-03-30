# Implementation Plan: Alturis Innovations Landing Page Redesign

This plan outlines the steps to transform the current generic template into a high-end, "Deep-Tech" landing page for Alturis Innovations, following the vision described in [vision.md](file:///e:/alturis/officialLandingPage/Docs/vision.md).

## Goals
- **Redesign Aesthetics**: Shift to a premium Dark Mode (#0F172A) with metallic silver (#94A3B8) and "Cyber Blue" (#38BDF8) accents.
- **Content Realignment**: Focus on AI-Hardware integration, industrial machine vision, and intelligent sports automation.
- **Supply Chain Showcase**: Highlight the strategic partnership with Shenzhen CDRC Electronics.
- **Visual Impact**: Generate custom, professional-grade AI images to replace generic placeholders.
- **Polished Experience**: Fix broken links and ensure smooth performance and responsiveness.

## User Review Required

> [!IMPORTANT]
> The current project uses a large set of pre-built components. I will be replacing these with a more streamlined, modular architecture that precisely follows your vision. Do you have any preferences for the specific font ("Inter" is proposed) or if we should keep any of the existing layout elements (like `Navbar` or `ScrollToTop`)?

## Proposed Changes

### [Aesthetics & Styling]

#### [MODIFY] [index.css](file:///e:/alturis/officialLandingPage/src/index.css)
- Implement Global Dark Mode colors and typography.
- Define custom color tokens: `--bg-primary: #0F172A; --text-silver: #94A3B8; --accent-blue: #38BDF8;`.
- Add smooth transitions and glassmorphism utilities.

#### [MODIFY] [tailwind.config.js](file:///e:/alturis/officialLandingPage/tailwind.config.js)
- Extend the color palette with the brand colors.
- Add custom font families (Inter, Roboto).

### [Component Structure]

#### [MODIFY] [App.tsx](file:///e:/alturis/officialLandingPage/src/App.tsx)
- Reorganize the structure to follow the 5 sections in `vision.md`:
  1. `Hero` (Physicalizing AI)
  2. `Philosophy` (Embodied AI)
  3. `Verticals` (B2B Industrial Vision / B2C Sports Automation)
  4. `Advantage` (Manufacturing/Supply Chain)
  5. `Footer` (Contact Info)

#### [NEW] [Verticals.tsx](file:///e:/alturis/officialLandingPage/src/components/Verticals.tsx)
- Implementation of the two key business card layouts.

#### [MODIFY] [Existing Components]
- Update `Hero.tsx`, `About.tsx` (as Philosophy), `Services.tsx` (as Verticals), `Footer.tsx`.

### [Media & Assets]

#### [NEW] [Assets Generation]
- Generate 3 key high-quality images:
  1. **Hero**: Blue laser scanning a high-precision PCB/robotic arm.
  2. **Industrial Vision**: Close-up of optical detection probe in a dark industrial setting.
  3. **Manufacturing**: Dark-toned, high-speed SMT assembly line in a cleanroom.

## Implementation Steps

1. **Step 1: Core Styling**: Update CSS and Tailwind config to establish the "Deep-Tech" aesthetic.
2. **Step 2: Component Cleanup**: Remove unused components from `App.tsx` and create placeholders for the new ones.
3. **Step 3: Content Implementation**: Write the copy directly from `vision.md`.
4. **Step 4: Image Generation**: Use AI tools to generate the specified visuals and save them to `src/assets`.
5. **Step 5: Refinement & Testing**: Run the dev server, debug in the browser, and verify all links (mailto, etc.) and responsiveness.

## Verification Plan

### Automated Tests
- `npm run dev` to verify build and hot reloading.
- Run `lighthouse` or basic accessibility/performance checks in the browser.

### Manual Verification
- Visual inspection of the "Dark Mode" aesthetic across different screen sizes.
- Testing the "Partner With Us" button (mailto link).
- Verifying the layout of the "Strategic Verticals" cards.
- Ensuring the supply chain section feels "authoritative" as requested.
