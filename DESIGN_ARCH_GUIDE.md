# Design Engineering Audit: The "Overlap" Post-Mortem

This document tracks technical debt and architectural decisions made during the development of the 100xDevs landing page.

## 1. The Core Issue: Flow vs. Visuals
The most significant issue encountered was a collision between **Visual Transforms** and **Document Flow**.

### The Mistake: "The Ghost Child"
We used Framer Motion's `y` property to create a parallax effect on the Dashboard.
*   **Technical Breakdown**: `transform: translateY` moves an element visually but leaves its **layout box** at the original coordinates. The browser calculates the height of the `HeroSection` based on where the element *was*, not where it has slid to.
*   **The Result**: The `PricingPage` (and other elements) were placed relative to the "ghost" position of the Dashboard, causing it to slide right over them.

### The Fix: "The Bounding Box"
Always wrap transformed elements in a container that accounts for their travel distance.
```tsx
<div className="pb-40"> {/* Reserve space for the transform travel */}
  <motion.div style={{ y }} /> 
</div>
```

---

## 2. "Magic Numbers" Architectural Debt
The project relied heavily on arbitrary margins like `mt-56` to create spacing.

### The Mistake: "Hardcoded Gaps"
Hardcoding margins is extremely fragile. If you insert a 10px component between two sections separated by `mt-56`, the layout logic breaks immediately.

### The Fix: "The Section Block System"
Think in **Sections**, not **Gaps**. Each component should own its internal space.
*   **Pro Rule**: Use `padding-top` and `padding-bottom` on the parent container of a section.
*   **Result**: Sections naturally push one another down. You can insert 100 new components and they will simply flow correctly without any "magic numbers."

---

## 3. Containment Failure
The Dashboard was allowed to bleed out of its parent `HeroSection`.

### The Mistake: "Unbounded Bleed"
The Hero section was set to `min-h-screen`, but its content actually exceeded a screen's height once the animation started. This "unbounded" growth caused the section to overlap its siblings.

### The Fix: "Explicit Overflow"
When building complex hero sections:
1.  Avoid hard `h-screen` if content is dynamic.
2.  Use `flex flex-col` on the main page wrapper to ensure vertical stacking is strictly enforced by the browser.

---

## 4. Margin vs. Padding (Mental Model)
*   **Incorrect**: "I want a 200px gap here, let me add `mt-52`."
*   **Correct**: "This section needs 100px of internal breathing room, let me add `py-24`."

> [!IMPORTANT]
> **Design Engineer Principle**: A well-architected page should look perfect even if you change the order of the sections in `page.tsx`. If moving a section breaks the layout, your architecture is reliant on Magic Numbers.
