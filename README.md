# aSoftLabs website

Static bilingual website for `asoftlabs.app`.

## Deployment

Upload these items to the GitHub Pages repository root:

- `index.html`
- `styles.css`
- `app.js`
- `apps-data.js`
- `assets/`

Keep the existing `privacy-policy.html` in the same repository. The footer links to:

`https://asoftlabs.app/privacy-policy.html`

## Updating apps

The complete catalog is stored in `apps-data.js`. Each app entry contains localized English and German copy, platform filters, links, icon, and screenshot paths.

App Store screenshots are stored as optimized WebP files and loaded lazily by the browser.
