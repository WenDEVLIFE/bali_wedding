
# TYPOGRAPHY.MD — Bali Wedding Films

## 1. Typography Direction

The typography system should communicate luxury, romance, cinematic storytelling, and timeless elegance.

The website combines editorial wedding-magazine typography with clean, modern interface text.

Primary typefaces:
- Display and headings: Cormorant Garamond
- Body and interface: Inter

The typography must feel sophisticated and spacious without sacrificing readability or usability.

## 2. Font Families

### Display Font — Cormorant Garamond

Purpose:
- Hero headlines.
- Section headings.
- Featured film titles.
- Editorial statements.
- About-section headlines.
- Large promotional statements.

Recommended weights:
- Regular: 400
- Medium: 500
- SemiBold: 600

Usage:
- Prefer Regular for elegant editorial headlines.
- Use Medium for emphasis when needed.
- Reserve SemiBold for specific situations requiring stronger hierarchy.

Characteristics:
- Elegant.
- Romantic.
- Refined.
- Editorial.
- Timeless.

### Body Font — Inter

Purpose:
- Body paragraphs.
- Navigation links.
- Buttons.
- Forms.
- Service descriptions.
- Video metadata.
- Captions.
- Footer content.

Recommended weights:
- Regular: 400
- Medium: 500
- SemiBold: 600

Characteristics:
- Clean.
- Modern.
- Neutral.
- Highly readable.
- Suitable for interfaces.

## 3. Font Loading

Use Next.js font optimization where possible.

Recommended implementation:
- Load Cormorant Garamond using `next/font/google`.
- Load Inter using `next/font/google`.
- Define CSS variables for both font families.
- Apply the display font to headings and the body font to interface elements.

If the project requires self-hosted fonts, use properly licensed local font files.

Avoid loading unnecessary font weights or styles.

## 4. Type Scale

Use a responsive type scale with fluid sizing where appropriate.

### Display and Headings

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero headline | 72–104px | 44–60px | 400 |
| H1 | 64–80px | 40–52px | 400 |
| H2 | 48–64px | 34–44px | 400 |
| H3 | 32–40px | 26–32px | 400 |
| H4 | 24–30px | 22–26px | 500 |

Use Cormorant Garamond for all primary display headings.

These values are starting points. Adjust them according to the composition and available screen width.

### Body and Interface

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Large body | 20px | 18px | 400 |
| Body | 16–18px | 16px | 400 |
| Small body | 14px | 14px | 400 |
| Caption | 12–13px | 12–13px | 400 |
| Navigation | 13–15px | 14–16px | 500 |
| Button | 12–14px | 12–14px | 500 |
| Metadata | 12–13px | 12–13px | 500 |

Avoid making essential content excessively small.

## 5. Line Height

### Display Headings
- Hero headline: 0.95–1.08
- H1: 0.98–1.10
- H2: 1.00–1.15
- H3: 1.05–1.20
- H4: 1.10–1.25

### Body Text
- Large body: 1.60–1.75
- Standard body: 1.55–1.75
- Small body: 1.45–1.65
- Captions: 1.40–1.55

Use compact line heights for large editorial headlines and more generous line heights for paragraphs.

## 6. Letter Spacing

### Display Typography
- Hero headlines: -0.03em to -0.01em
- H1 and H2: -0.025em to -0.01em
- H3 and H4: -0.015em to 0em

### Body Typography
- Paragraphs: 0em
- Navigation: 0.02em to 0.06em
- Buttons: 0.04em to 0.10em
- Uppercase captions: 0.10em to 0.16em

Apply tracking carefully. Do not use excessive letter spacing on long paragraphs.

## 7. Hero Typography

The hero should be the strongest typographic moment on the website.

Recommended composition:

Eyebrow:
"DESTINATION WEDDINGS · BALI"

Headline:
"Your Story,
Beautifully Told."

Supporting text:
"Cinematic wedding films shaped by emotion, light, and the moments that matter most."

Primary button:
"Watch Our Films"

Secondary button:
"Inquire Now"

Guidelines:
- Use Cormorant Garamond for the main headline.
- Use a fluid font size between approximately 44px and 104px.
- Keep the headline width controlled.
- Use deliberate line breaks where appropriate.
- Maintain sufficient contrast over video or imagery.
- Keep supporting copy readable and relatively short.
- Avoid oversized body text competing with the headline.

All copy is illustrative demo content until the client's brand messaging is confirmed.

## 8. Section Headings

Use consistent editorial heading patterns.

Example:

Eyebrow:
"THE COLLECTION"

Heading:
"Stories Worth Remembering"

Supporting copy:
"Every celebration holds its own rhythm, emotion, and unforgettable details."

Guidelines:
- Use small uppercase eyebrows sparingly.
- Place the main heading beneath the eyebrow.
- Use concise supporting copy when it improves context.
- Maintain consistent spacing between heading elements.
- Avoid using the same heading size for every section.

## 9. Portfolio Typography

Featured film titles:
- Font: Cormorant Garamond
- Desktop: 28–36px
- Mobile: 24–30px
- Weight: 400
- Line height: 1.10–1.20

Film metadata:
- Font: Inter
- Size: 12–13px
- Weight: 500
- Letter spacing: 0.04em

Metadata examples:
- BALI, INDONESIA
- WEDDING HIGHLIGHT FILM
- CINEMATIC STORYTELLING

Guidelines:
- Let the imagery remain the primary focus.
- Use restrained metadata.
- Avoid excessive text overlays.
- Ensure text remains readable on all backgrounds.

## 10. Services Typography

Service headings:
- Font: Cormorant Garamond
- Size: 28–36px
- Weight: 400

Service descriptions:
- Font: Inter
- Size: 15–17px
- Weight: 400
- Line height: 1.60–1.75

Service labels:
- Font: Inter
- Size: 12–13px
- Weight: 500

Use clear hierarchy between the service title, description, and any supporting label.

Only present services as confirmed offerings after the client verifies them.

## 11. Navigation and Buttons

### Navigation

- Font: Inter
- Size: 13–15px
- Weight: 500
- Letter spacing: 0.02em

Navigation should be clean and understated.

### Buttons

- Font: Inter
- Size: 12–14px
- Weight: 500
- Letter spacing: 0.04em

Buttons should use clear labels and comfortable padding.

Suggested labels:
- WATCH OUR FILMS
- VIEW THE COLLECTION
- EXPLORE OUR SERVICES
- INQUIRE NOW

Button typography should remain legible and should not rely on uppercase styling alone to establish importance.

## 12. Body Copy

Body copy should sound natural, refined, and emotionally engaging.

Guidelines:
- Use short paragraphs.
- Prefer clear sentences.
- Avoid unnecessary marketing jargon.
- Maintain a comfortable reading width.
- Use Inter for long-form text.
- Use Cormorant Garamond for selected editorial emphasis only.

Recommended paragraph width:
- Approximately 45–70 characters per line for comfortable reading.

Avoid long, uninterrupted blocks of text.

## 13. Contact Form Typography

Labels:
- Font: Inter
- Size: 13–14px
- Weight: 500

Input text:
- Font: Inter
- Size: 15–16px
- Weight: 400

Placeholder text:
- Font: Inter
- Size: 14–15px
- Weight: 400

Validation messages:
- Font: Inter
- Size: 13–14px
- Weight: 400

Guidelines:
- Always provide visible field labels.
- Do not rely on placeholders as the only labels.
- Keep validation messages concise.
- Maintain sufficient contrast.
- Use clear success and error states.

## 14. About and Editorial Statements

Use Cormorant Garamond for selected emotional statements.

Example:
"Some moments deserve to be felt again."

Guidelines:
- Use large text selectively.
- Keep supporting paragraphs in Inter.
- Give editorial statements generous whitespace.
- Avoid placing oversized statements in every section.
- Use typography to create rhythm throughout the page.

## 15. Responsive Typography

### Large Desktop
- Use large display headings.
- Allow expressive line breaks.
- Maintain generous spacing.

### Tablet
- Reduce heading sizes gradually.
- Prevent awkward line wrapping.
- Preserve the editorial hierarchy.

### Mobile
- Use fluid typography.
- Keep headlines within the viewport.
- Avoid excessive line breaks.
- Maintain readable body text.
- Keep buttons and navigation legible.
- Avoid horizontal overflow.

Prefer CSS `clamp()` for fluid sizing.

Example:

```css
.hero-title {
  font-size: clamp(2.75rem, 7vw, 6.5rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
}
```

## 16. Accessibility

- Maintain readable font sizes.
- Use semantic heading levels.
- Do not skip heading levels unnecessarily.
- Maintain adequate color contrast.
- Avoid excessively thin text on moving video backgrounds.
- Ensure form labels are readable.
- Do not use color as the only indicator of meaning.
- Allow browser zoom without breaking the layout.

## 17. Typography Consistency

- Use the defined font families throughout the website.
- Avoid introducing additional typefaces without a clear design reason.
- Use consistent heading sizes and weights.
- Maintain consistent line heights.
- Apply letter spacing intentionally.
- Use shared typography utilities or design tokens.
- Avoid arbitrary font sizes scattered across components.

## 18. Implementation Notes

Create reusable typography styles for:
- Hero display.
- Section headings.
- Editorial statements.
- Body text.
- Eyebrow labels.
- Film titles.
- Metadata.
- Buttons.
- Form labels and validation messages.

Use Tailwind utilities or CSS variables according to the existing project structure.

## 19. Final Typography Standard

The final typography system should feel:
- Elegant.
- Cinematic.
- Romantic.
- Editorial.
- Timeless.
- Readable.
- Consistent.

The combination of Cormorant Garamond and Inter should establish a distinctive luxury wedding identity while maintaining practical usability across all devices.
