# Home-screen icons and install setup

Files (in `assets/`, made from the current Sharma logo, not redrawn):
- `apple-touch-icon.png` 180x180: iPhone home screen. Navy square, white Sharma logo.
- `icon-192.png`, `icon-512.png`: Android / Chrome install.
- `icon-maskable-512.png`: same icon with extra padding so Android's round crop never cuts the logo.
- `apple-touch-icon-track.png`, `icon-512-track.png`: Sharma Track blue (#0058a3) versions.
- `favicon-32.png`: browser tab.
- `logo-white-header.png` (header, shown 20px tall) and `logo-white-lock.png` (lock screen, 30px tall). Both are the existing white Sharma logo, trimmed.

Per app:
1. Copy `manifest.template.webmanifest` to the app as `/manifest.webmanifest` and fill APP_NAME, APP_SHORT (12 letters max, e.g. "Bids", "Permits", "My Day"), APP_ONE_LINE.
2. The app must serve that file with `Content-Type: application/manifest+json` (locked apps: let it through without the passcode, it holds nothing private).
3. Paste `head-snippet.html` into `<head>`.
4. `theme-color` stays #264387 (Track apps: #0058a3). Status-bar style `black-translucent` lets the navy header sit under the notch; the kit header already pads for it.
5. Test: open on an iPhone in Safari > Share > Add to Home Screen. It should open full screen with no browser bar and the navy icon.

The home-screen name comes from APP_SHORT, so the icon itself stays the same Sharma mark for every app. One clean brand on the phone, the label tells them apart.
