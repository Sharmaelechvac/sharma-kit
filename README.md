# sharma-kit (v1.2)

One shared look for every Sharma Electric & HVAC app.

```html
<link rel="stylesheet" href="https://sharma-kit.sharma-crew.workers.dev/sharma-kit.css">
<script src="https://sharma-kit.sharma-crew.workers.dev/sharma-kit.js" defer></script>
```

- `sharma-kit.css`: fonts, colours, header, tab bar, buttons, cards, lists, pills, search, segmented control, sheets, empty state, offline banner, lock screen. Light and dark. `data-theme="track"` for Sharma Track.
- `sharma-kit.js`: icon set, tab highlighting, sheets, toast, offline banner, shared lock screen, and (v1.2) the native feel: `SK.stack` screen stack (push/pop slide, edge swipe back, browser back, tab cross-fade with scroll kept, large title collapsing into the header), draggable sheets, pull to refresh, instant press, `SK.data` last-data-first loading. Holds no data or secrets. About 13 KB gzipped with the icons.
- `sharma-sw.js`: service worker each app copies to its own `/sw.js` (app shell + kit files offline; never the lock screen or data).
- `icons/`: line icons (single SVGs + `sprite.svg`). Edit `tools/icons.py`, then run `python3 tools/icons.py` to rebuild the sprite and `sharma-kit.js`.
- `assets/`: home-screen icons and the white Sharma logo for headers.
- `manifest/`: web app manifest template and head snippet.
- `showcase.html`: every piece, light, dark and Track.

Served from Cloudflare (`wrangler deploy` in this folder; `_headers` adds CORS so any app can load it).

This repo is public on purpose (apps on other sites must load it). Never put data, passcodes, keys, prices or customer names in it.
