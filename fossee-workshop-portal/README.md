# FOSSEE Workshop Booking Redesign

## Project Overview
This project is a comprehensive redesign of the FOSSEE Workshop Booking website. The goal was to transform a functional but dated interface into a prestigious, modern, and highly responsive platform that reflects the academic excellence of IIT Bombay and the FOSSEE project.

## Design Choices (Luxury / Prestige Aesthetic)
The redesign follows the **Luxury / Prestige** design recipe, which is characterized by:
- **Typography**: A sophisticated pairing of `Cormorant Garamond` (Serif) for headlines to convey tradition and authority, and `Montserrat` (Sans) for UI elements to ensure modern legibility.
- **Color Palette**: A warm off-white background (`#f5f2ed`) paired with deep charcoal text (`#1a1a1a`) and bronze/gold accents (`#b8860b`). This creates a high-end, academic feel.
- **Visual Language**:
    - **Editorial Layout**: Large, bold headlines with tight leading and tracking.
    - **Oval Masks**: Used for instructor photos to add a unique, prestigious touch.
    - **Thin Borders**: 1px borders with low opacity to create a structured but light grid.
    - **Vertical Text**: Used as "rail text" for decorative but informative elements.
    - **Grain Overlay**: A subtle noise texture applied globally to give the digital surface a tactile, paper-like quality.

## Responsiveness Strategies
- **Mobile-First Approach**: All components were designed for mobile first, ensuring that navigation and content hierarchy remain clear on small screens.
- **Grid System**: Used Tailwind's responsive grid (`grid-cols-1 lg:grid-cols-12`) to manage complex layouts that collapse gracefully.
- **Bottom Navigation**: Implemented a `MobileNav` (via `Sheet` component) to ensure easy access to key sections on touch devices.
- **Fluid Typography**: Used viewport-based units (`vw`) for hero headlines to ensure they scale perfectly across all screen sizes.

## Performance & Optimization
- **Vite & React 19**: Leveraged the latest React features and Vite's fast build system for optimal developer experience and production performance.
- **Tailwind CSS 4**: Used the latest utility-first CSS framework for minimal CSS bundle size.
- **Framer Motion**: Used for smooth, hardware-accelerated animations that guide the user's eye without sacrificing performance.
- **Image Optimization**: Used `picsum.photos` with specific seeds and dimensions, ensuring consistent and relevant placeholder assets.

## Accessibility (a11y)
- **Contrast**: Ensured high contrast between text and background (Deep Charcoal on Warm Off-White).
- **Semantic HTML**: Used appropriate tags (`<section>`, `<nav>`, `<main>`, `<h1>`-`<h6>`) for better screen reader support.
- **Focus States**: Maintained visible focus rings for keyboard navigation.

## SEO Optimization
- **Semantic Structure**: Proper heading hierarchy and descriptive metadata.
- **Meta Tags**: Updated `metadata.json` with a descriptive name and purpose.
- **Alt Text**: Included descriptive `alt` attributes for all images.

## Challenges & Solutions
- **Marquee Animation**: Initially encountered build errors with custom marquee animations. Solved by refactoring the animation definition directly into the Tailwind theme block.
- **Design Consistency**: Maintaining a "Luxury" feel while keeping it an "Academic" portal. Solved by using bronze accents sparingly and focusing on strong typography.

---
*Developed as part of the FOSSEE Redesign Challenge.*
