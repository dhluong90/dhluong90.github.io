---
name: creative-webgl-hero
description: Expert in designing, architecting, and generating high-performance, Awwwards-style interactive WebGL hero landing pages using 2D Mesh Skinning, procedural kinematics, fabric simulation, and fluid ripple effects.
---

# Creative WebGL Hero Skill

Activate this skill whenever the user asks to:
- Build interactive hero landing pages with organic creature movements (koi fish, dragons, jellyfish, birds, butterflies, silk ribbons).
- Create smooth WebGL animations without heavy 3D GLTF/FBX models.
- Implement fluid ripple water refraction shaders, cloth/fabric physics, or interactive audio experiences.

---

## 1. Architectural Principles

### "Cheap Trick, Expensive Look"
- **Never default to heavy 3D models** (GLTF/FBX with Three.js `SkinnedMesh`) when a 2D procedural deformation achieves superior visual fluidity at 1/10th the payload and 120 FPS performance.
- Use a single, clean painted 2D PNG sprite (horizontal orientation, head facing right, transparent background).

---

## 2. The 5-Layer Visual Stacking Hierarchy

```
[Layer 5 - z:10] WebGL Fluid Ripple Canvas (Mouse refraction & clicks)
[Layer 4 - z: 4] UI Badges, Controls, Counters, Audio Toggle
[Layer 3 - z: 3] WebGL Creature Canvas (Deformed 2D Mesh swimming OVER typography)
[Layer 2 - z: 2] High-contrast Display Typography (e.g. 24vw Instrument Serif / Didone)
[Layer 1 - z: 1] Solid Minimalist Background (e.g. Vermillion #9C0400 or Slate #0B0E14)
```

---

## 3. Mathematical & Physics Engine Blueprint

### A. 2D Mesh Skinning
1. Define a `COLS x ROWS` vertex grid (minimum 32x16, recommended 48x24 for silk smoothness).
2. Each vertex $(u, v)$ maps to sprite texture coordinates.
3. Deform vertex $(x, y)$ positions each frame along a procedural spine.

### B. Procedural Spine Kinematics
1. **Head joint ($p_0$)**: Follows autonomous steering velocity and target heading.
2. **Body joints ($p_1 \dots p_n$)**: Follow preceding joint using Inverse Kinematics / Follow-chain constraint:
   $$\vec{d} = p_i - p_{i-1}$$
   $$p_i = p_{i-1} + \frac{\vec{d}}{\|\vec{d}\|} \cdot L$$
3. **Travelling S-Wave**:
   $$\text{offset}_i = A_i \cdot \sin(\omega \cdot t - i \cdot \phi)$$
   Increase frequency $\omega$ when darting/sprinting; increase amplitude $A_i$ towards tail stem.

### C. Fabric Wave Physics (Veil Tails & Silk Appendages)
1. Deconstruct appendages into multiple independent lobes (e.g., upper, outer, inner lobes).
2. Apply lagging heading physics (*inertia swing*) per lobe to simulate water resistance.
3. Scale oscillation amplitude quadratically with distance from the central spine.
4. Apply dynamic alpha shimmering in the fragment shader for translucency.

### D. Screen-Space Fluid Ripple Refraction
1. Implement a 2D wave equation on a ping-pong framebuffer.
2. Calculate normal perturbation $\vec{N}_{xy}$ from wave height gradient.
3. Displace underlying texture UVs: $(u', v') = (u, v) + \vec{N}_{xy} \cdot \text{refractionStrength}$.

### E. Web Audio Gesture Unlocking
- Modern browsers block AudioContext autoplay.
- Bind audio initialization to the first `pointerdown` / `click` on the container canvas.

---

## 4. Master Prompt Template for Code Generation

```markdown
Build a production-grade single-page Interactive Hero Landing Page using HTML5/WebGL:

1. Visual Layout:
   - Solid backdrop (#9C0400 or #0B0E14).
   - High-contrast serif headline (24vw) placed at z-index: 2.
   - Creature canvas at z-index: 3 swimming OVER the headline.
   - Fluid ripple canvas at z-index: 10 refracting headline and creature.

2. Physics & WebGL Engine:
   - 2D Mesh Skinning (48x24 grid) deformed along a 12-joint follow-chain spine.
   - Travelling sinusoidal S-wave for swimming undulation.
   - Fabric wave physics for veil tails with lagging swing and distance-scaled amplitude.
   - Shimmering alpha for silk translucency.
   - Click-activated 2D water ripple refraction.

3. Audio & Interaction:
   - Obstacle/cursor avoidance AI.
   - Unlock ambient water sound on first user click.
   - Water plop sound effect on ripple trigger.
```
