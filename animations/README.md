# Animations (GitHub Pages)

Standalone HTML animations, published to **GitHub Pages** and embedded into
case studies via `<iframe>`. The main portfolio site deploys to Cloudflare
separately — this folder is served independently by GitHub Pages.

## Live URL

Once the `Deploy animations to GitHub Pages` workflow has run on `main`:

```
https://sashatanase.github.io/sashaweb3ux/
```

`index.html` is the current demo (tBTC minting flow). If you add more
animations later, give each its own subfolder (e.g. `animations/foo/index.html`),
which will be served at `https://sashatanase.github.io/sashaweb3ux/foo/`.

## Embedding in a case study

Paste an iframe wherever the case study renders. The demo is up to 800px wide
and centers itself, so a full-width container with a fixed height works well:

```html
<iframe
  src="https://sashatanase.github.io/sashaweb3ux/"
  title="tBTC minting demo"
  loading="lazy"
  style="width:100%;height:620px;border:0;border-radius:12px;"
></iframe>
```

Adjust `height` to taste (~620px fits the demo without inner scrolling on
desktop). `loading="lazy"` defers loading until the iframe scrolls into view.

## Deploying

The workflow (`.github/workflows/pages.yml`) redeploys automatically on every
push to `main` that touches `animations/**`. You can also trigger it manually
from the Actions tab (**Run workflow**).
