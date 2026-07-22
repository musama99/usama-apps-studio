# Usama Apps Studio Website

A production-ready static website for a growing portfolio of mobile apps published by Usama Apps Studio. It can be hosted on GitHub Pages without a build step.

## Website structure

- `index.html` — Studio-first homepage and portfolio introduction
- `apps/index.html` — Scalable app catalog for current and future products
- `apps/cricscore/index.html` — CricScore product page
- `privacy/index.html` — Studio Privacy Center
- `privacy/cricscore.html` — Public CricScore Privacy Policy for Google Play
- `support/index.html` — Studio-wide support hub with current CricScore support
- `about/index.html` — Studio mission, standards, and growth model
- `profile/index.html` — Muhammad Usama profile
- `contact/index.html` — App support, ideas, and professional contact options

## Adding a future app

1. Create `apps/<app-slug>/index.html` by following the structure of the CricScore page.
2. Add the app to `apps/index.html` and the homepage portfolio section.
3. Add its support entry to `support/index.html`.
4. Create `privacy/<app-slug>.html` and list it in `privacy/index.html`.
5. Add the new public URLs to `sitemap.xml`.
6. Update global footer links only when the app should receive permanent prominence.
7. Keep claims, permissions, release status, and privacy statements specific to the actual app.

The navigation links to the app catalog rather than directly to CricScore, so future products can be added without changing the site's main information architecture.

## Google Play Privacy Policy URL for CricScore

`https://musama99.github.io/usama-apps/privacy/cricscore.html`

The page is public, does not require sign-in, is mobile-friendly, and contains the developer/app identity, data handling, permissions, sharing, retention, deletion, children’s privacy, policy updates, and contact details.

## Before publishing CricScore

The public Privacy Policy and Play Console Data Safety form must match the final AAB exactly. Before release, confirm that version 1.0.0:

1. Does not include ads, analytics, crash-reporting, tracking, or cloud-sync SDKs.
2. Does not transmit match data, identifiers, diagnostics, or device information off-device.
3. Requests only the permissions described in the policy.
4. Does not provide user accounts.
5. Stores match data locally and deletes local app data as described.
6. Uses the Android share sheet only after a user chooses to share.
7. Handles Android/device backups consistently with the policy.

If any item changes, update both `privacy/cricscore.html` and the Play Console Data Safety form before publishing the new version.

## Deployment

For GitHub Pages, publish the repository root from the `main` branch. No build process is required.

## Performance and accessibility

- Optimized WebP assets are used by the pages.
- Navigation supports keyboard, Escape, outside-click, and mobile menu states.
- Content remains visible if JavaScript is unavailable.
- Reduced-motion preferences are respected.
- Pages include metadata, canonical URLs, Open Graph data, a sitemap, robots.txt, and a custom 404 page.
