
# TASK.MD — Bali Wedding Films

## Project Goal

Build and deploy a premium, responsive wedding videography and video-editing website demo.

The website must demonstrate strong visual design, cinematic video presentation, professional service descriptions, and a clear inquiry journey.

This is a client-acquisition demo. Prioritize quality, speed of implementation, and a polished live presentation.

---

## Phase 1 — Project Setup

- [ ] Inspect the existing repository before making changes.
- [ ] Initialize Next.js with App Router if the project is not already configured.
- [ ] Configure TypeScript.
- [ ] Configure Tailwind CSS according to the installed version.
- [ ] Install only necessary dependencies.
- [ ] Add Framer Motion for animations if appropriate.
- [ ] Add Lucide React for icons.
- [ ] Establish a clean and maintainable folder structure.
- [ ] Configure global styles and design tokens.
- [ ] Load Cormorant Garamond and Inter using an appropriate font-loading strategy.
- [ ] Confirm the development server runs successfully.

### Expected Result

A functioning project foundation with reusable styles and typography.

---

## Phase 2 — Shared Components

- [ ] Create a responsive navigation component.
- [ ] Create a brand wordmark component.
- [ ] Create reusable primary and secondary buttons.
- [ ] Create reusable section headings.
- [ ] Create an accessible video modal or player component.
- [ ] Create a reusable film portfolio item.
- [ ] Create a responsive footer.
- [ ] Establish consistent container and spacing utilities.
- [ ] Add loading, error, and focus states where necessary.

### Expected Result

Reusable components that maintain consistent styling throughout the website.

---

## Phase 3 — Cinematic Hero

- [ ] Build a full-width hero section.
- [ ] Use a legally usable wedding video or cinematic poster image.
- [ ] Add a gradient or overlay when necessary for text contrast.
- [ ] Add an editorial headline.
- [ ] Add supporting copy.
- [ ] Add the "Watch Our Films" CTA.
- [ ] Add the "Inquire Now" CTA.
- [ ] Connect the film CTA to the portfolio section.
- [ ] Connect the inquiry CTA to the contact section.
- [ ] Add a subtle scroll indicator if appropriate.
- [ ] Ensure mobile fallback behavior.
- [ ] Respect reduced-motion preferences.

### Expected Result

A strong first impression with a premium cinematic aesthetic.

---

## Phase 4 — Featured Film Portfolio

- [ ] Build the featured films section.
- [ ] Add three to six curated sample film entries.
- [ ] Use custom thumbnails and play buttons.
- [ ] Display film titles and relevant location metadata.
- [ ] Create a responsive editorial layout.
- [ ] Implement video playback using authorized media.
- [ ] Add accessible playback controls.
- [ ] Implement modal close behavior and keyboard support if using a modal.
- [ ] Handle missing or unavailable media gracefully.
- [ ] Avoid loading all full-resolution videos at once.
- [ ] Clearly treat sample films as demo content unless they are verified client projects.

### Expected Result

A professional portfolio that demonstrates how wedding films and editing samples will be presented.

---

## Phase 5 — Services

- [ ] Build the services section.
- [ ] Add configurable service entries.
- [ ] Use elegant editorial layouts instead of generic cards.
- [ ] Add concise service descriptions.
- [ ] Add relevant calls to action.
- [ ] Keep service data separate from presentation components.
- [ ] Mark unconfirmed services as demo content until verified.

### Potential Demo Services

- Wedding Highlight Films.
- Full-Length Wedding Films.
- Short-Form Wedding Reels.
- Color Grading.
- Wedding Video Post-Production.
- Custom Editing Packages.

### Expected Result

Visitors can quickly understand the available service categories.

---

## Phase 6 — About and Workflow

- [ ] Build the about section.
- [ ] Use a balanced image and text composition.
- [ ] Add an editorial introduction to the creative approach.
- [ ] Avoid fabricated company details.
- [ ] Build a four-step workflow section.
- [ ] Explain the process from inquiry to final delivery.
- [ ] Adapt workflow copy to the confirmed client business model.

### Expected Result

The website communicates a clear creative identity and understandable workflow.

---

## Phase 7 — Contact and Inquiry

- [ ] Build the contact section.
- [ ] Add name input.
- [ ] Add email input.
- [ ] Add service-interest selection.
- [ ] Add optional event-date input.
- [ ] Add project-details textarea.
- [ ] Add required-field validation.
- [ ] Add email-format validation.
- [ ] Add clear error messages.
- [ ] Add a submission state.
- [ ] Prevent duplicate submissions while processing.
- [ ] Configure contact links only after receiving the real client details.
- [ ] Do not claim a message was delivered without a functioning integration.

### Initial Scope

The first demo does not require a database or backend.

The form may demonstrate validation and prototype feedback, but must clearly indicate that it is a demo if actual delivery is not configured.

### Optional Production Integration

After client approval, implement a suitable email delivery service or backend endpoint.

---

## Phase 8 — Visual Polish and Animation

- [ ] Apply the THEME.MD design system consistently.
- [ ] Refine spacing and typography.
- [ ] Add restrained entrance animations.
- [ ] Add subtle image hover interactions.
- [ ] Add button hover and focus states.
- [ ] Refine section transitions.
- [ ] Verify animations do not interfere with navigation.
- [ ] Respect reduced-motion preferences.
- [ ] Remove unnecessary visual effects.
- [ ] Ensure the site does not look like a generic template.

### Expected Result

A cohesive, premium editorial experience.

---

## Phase 9 — Responsive Design

- [ ] Test desktop layouts.
- [ ] Test tablet layouts.
- [ ] Test mobile layouts.
- [ ] Fix horizontal overflow.
- [ ] Verify heading wrapping.
- [ ] Verify navigation behavior.
- [ ] Verify video modal sizing.
- [ ] Verify form usability on touch devices.
- [ ] Ensure buttons have comfortable touch targets.
- [ ] Optimize mobile media loading.
- [ ] Check image cropping at different aspect ratios.

### Expected Result

A consistent experience across common screen sizes.

---

## Phase 10 — SEO and Performance

- [ ] Add a descriptive page title.
- [ ] Add a meta description.
- [ ] Add Open Graph metadata.
- [ ] Use semantic section headings.
- [ ] Add appropriate image alt text.
- [ ] Optimize image formats and dimensions.
- [ ] Lazy-load below-the-fold media.
- [ ] Avoid unnecessary client-side JavaScript.
- [ ] Avoid autoplay audio.
- [ ] Use poster images for large videos.
- [ ] Verify production build performance.

### Expected Result

A lightweight, accessible, search-friendly landing page.

---

## Phase 11 — Quality Assurance

- [ ] Run the production build.
- [ ] Fix TypeScript errors.
- [ ] Fix lint errors.
- [ ] Check the browser console.
- [ ] Test every navigation link.
- [ ] Test every CTA.
- [ ] Test video playback and modal behavior.
- [ ] Test form validation.
- [ ] Test mobile navigation.
- [ ] Verify media fallbacks.
- [ ] Confirm there are no broken assets.
- [ ] Remove unused components and dependencies.
- [ ] Check accessibility and contrast.
- [ ] Confirm no fabricated testimonials or credentials remain.
- [ ] Confirm all demo content is replaceable.

### Expected Result

A stable demo suitable for sharing with a prospective client.

---

## Phase 12 — Deployment

- [ ] Prepare the project for Vercel deployment.
- [ ] Verify the production build locally.
- [ ] Deploy the website.
- [ ] Verify the deployed URL.
- [ ] Test the deployed website on desktop and mobile.
- [ ] Confirm external media works in production.
- [ ] Confirm there are no exposed secrets.
- [ ] Prepare a concise client presentation message.

### Expected Result

A live, polished demo that can be shared with the prospective client.

---

## Implementation Priorities

### P0 — Essential
- Project setup.
- Design system.
- Hero section.
- Featured films.
- Responsive navigation.
- Inquiry CTA.
- Mobile responsiveness.
- Successful production build.

### P1 — Important
- Services.
- About section.
- Workflow.
- Video modal.
- Contact form validation.
- SEO metadata.
- Performance improvements.

### P2 — Optional
- Advanced scroll animations.
- Additional portfolio layouts.
- Production email integration.
- Analytics.
- CMS integration.
- Database-backed inquiry management.

Do not delay the initial demo for optional P2 features.

---

## Development Rules

1. Inspect the repository before changing existing files.
2. Implement the website in logical phases.
3. Prefer reusable components over duplicated markup.
4. Keep content and media configuration separate from UI components.
5. Use TypeScript appropriately.
6. Avoid unnecessary dependencies.
7. Do not fabricate client information.
8. Do not use unauthorized media.
9. Do not implement a database for the initial demo.
10. Verify functionality rather than relying on appearance alone.
11. Fix build errors before considering the project complete.
12. Prioritize a deployable, visually impressive result.

---

## Definition of Done

The project is complete when:

- The website is deployed and accessible.
- The design follows THEME.MD.
- The hero looks polished.
- Featured sample films are presented professionally.
- Navigation and calls to action work.
- The inquiry form has honest and functional validation states.
- The website works on desktop and mobile.
- Media is optimized and has appropriate fallbacks.
- The production build succeeds.
- Demo content is clearly distinguished from verified client information.
- The live website is ready to be presented to the prospective client.
