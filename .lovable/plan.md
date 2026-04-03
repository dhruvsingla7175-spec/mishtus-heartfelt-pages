

## Plan: Remove Countdown & Timeline, Enhance Hero

### What's changing

1. **Remove CountdownTimer section** — delete the "Aakhri baar baat hue..." section from Index.tsx (remove import + render)

2. **Remove AnimatedTimeline section** — delete the timeline from Index.tsx (remove import + render)

3. **Enhance HeroSection** with:
   - Larger, more dramatic animated heart (pulse glow effect)
   - Add a soft romantic quote rotating below the typewriter text (2-3 lines fading in/out)
   - Add a subtle radial glow/light behind the title
   - More sparkle particles with varied sizes
   - Smoother, more cinematic entrance animation (staggered fade-in for each element)
   - Add a gentle background shimmer/gradient animation

### Files to edit

- **`src/pages/Index.tsx`** — remove CountdownTimer and AnimatedTimeline imports and usage
- **`src/components/HeroSection.tsx`** — enhanced visuals: glowing heart, rotating quotes, radial light effect, richer animations
- **`src/components/FloatingNav.tsx`** — remove countdown/timeline nav dots if they exist

### What stays
- BirthdayCountdown (her birthday section) stays
- All other sections unchanged

