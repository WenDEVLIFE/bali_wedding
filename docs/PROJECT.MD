# PROJECT.MD — Bali Wedding Films

## Project Overview

Build a premium, cinematic website concept for a Bali wedding videography and video-editing service. The website should demonstrate exceptional visual presentation, showcase sample wedding films, explain the available services, and encourage prospective customers to submit inquiries.

This is a client-facing demo intended to help secure a website development project.

## Primary Objectives

1. Create a luxury wedding-film aesthetic.
2. Showcase video editing and wedding cinematography through a curated portfolio.
3. Provide a polished experience on desktop, tablet, and mobile.
4. Encourage visitors to inquire about services.
5. Maintain good performance, accessibility, and SEO fundamentals.

## Technology Stack

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion for restrained animations
- Lucide React for icons
- HTML5 video or authorized YouTube/Vimeo embeds
- Vercel deployment

Use the existing project conventions if a repository already exists. Avoid unnecessary dependencies.

## Design System

### Colors
- Ivory: #F8F5EF
- Warm Sand: #D9C7AE
- Muted Olive: #69705A
- Charcoal: #282923
- White: #FFFFFF

### Typography
- Headings: Cormorant Garamond or a comparable editorial serif.
- Body: Inter or a comparable modern sans-serif.

### Design Principles
- Luxury editorial art direction.
- Large cinematic imagery.
- Generous whitespace.
- Refined spacing and typography.
- Smooth, subtle animations.
- Minimal borders and restrained shadows.
- Consistent buttons, navigation, and interactive states.
- Avoid generic SaaS layouts, excessive gradients, and unnecessary card grids.

## Website Sections

### 1. Navigation
- Brand wordmark.
- Films, Services, About, and Contact navigation.
- Prominent inquiry CTA.
- Responsive mobile menu.

### 2. Hero
- Full-width cinematic video background or optimized poster image.
- Dark overlay to maintain text contrast.
- Elegant headline and short supporting copy.
- Primary CTA: Watch Our Films.
- Secondary CTA: Inquire Now.
- Graceful fallback when video playback is unavailable.

### 3. Featured Films
- Three to six sample wedding films.
- Large custom thumbnails.
- Film title and location.
- Custom play button.
- Accessible modal or inline playback.
- Proper loading, error, and close states.

### 4. Services
Create configurable service descriptions for:
- Wedding highlight films.
- Full-length wedding films.
- Short-form social media edits.
- Color grading and cinematic post-production.
- Custom editing packages.

Present these as illustrative services until the actual client's service list is confirmed.

### 5. About
- Editorial introduction to the creative approach.
- Emphasis on storytelling, emotion, and cinematic craft.
- Placeholder content clearly separated from verified client information.

### 6. Workflow
Present a simple four-step process:
1. Inquiry and consultation.
2. Footage submission or filming arrangements.
3. Editing, review, and revisions.
4. Final delivery.

Adjust the process to match the actual service provider.

### 7. Contact
- Inquiry form with name, email, service interest, event date (optional), and project details.
- Client-side validation.
- Clear submission feedback.
- Configurable email and social contact links.
- Do not imply that a message has been sent unless a working integration confirms submission.

### 8. Footer
- Brand wordmark.
- Navigation links.
- Social links when supplied.
- Copyright notice.
- Privacy link if a corresponding policy is implemented.

## Functional Requirements

- Fully responsive navigation.
- Functional section links and CTAs.
- Video playback with accessible controls.
- Keyboard-accessible dialogs and forms.
- Form validation and useful feedback.
- Reduced-motion support.
- Optimized images and video posters.
- Appropriate metadata, page title, description, and social sharing metadata.
- Semantic HTML and accessible color contrast.

## Content and Asset Rules

- Do not invent client testimonials, awards, reviews, real bookings, or business credentials.
- Use authorized sample footage and images.
- Clearly distinguish concept content from verified client information.
- Keep media URLs and business details configurable.
- Avoid large autoplay videos on mobile; respect reduced-motion preferences.
- Use a poster image if the hero video cannot load.

## Backend Scope

The first version is a front-end demo and must not require a database.

The inquiry form should validate fields and provide honest prototype feedback. Production email delivery, CRM integration, analytics, and any backend functionality are outside the initial scope until approved.

## Quality Assurance

- Run the production build.
- Resolve TypeScript and lint errors.
- Test mobile and desktop layouts.
- Verify navigation, modal playback, and form validation.
- Check image loading and video fallbacks.
- Confirm all contact links are configurable and do not point to invented client accounts.
- Verify the deployed demo before sharing it.

## Delivery Priority

1. Working, polished landing page.
2. Cinematic hero and featured films.
3. Responsive layouts.
4. Services and workflow.
5. Contact section.
6. Performance, accessibility, and final deployment.

## Definition of Done

The deployed website should look professional, have working navigation and video interactions, communicate the service clearly, and provide a compelling inquiry path. All placeholder branding and portfolio content must be replaceable with the client's real assets.
