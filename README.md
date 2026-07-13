# Speech Timer

**Toastmasters Speech Timing Tool — by Westlake Toastmasters**

A web-based speech timer for Toastmasters meetings. Works in any browser, installs as a standalone app on your phone, and runs offline.

🌐 **Live app:** [https://levelone-co.github.io/speech-timer/](https://levelone-co.github.io/speech-timer/)

---

## Version

**v1.5.2** — Westlake Toastmasters

---

## Features

- **Colour-coded timing** — screen changes from White → Green → Yellow → Red as the speaker progresses
- **Preset speech types** — Standard (5–7 min), Ice Breaker (4–6 min), Table Topics (1–2 min), Evaluation (2–3 min)
- **Custom timing** — set your own Green / Yellow / Red thresholds in m:ss format
- **Demonstration mode** — cycles through all colours in 20 seconds for testing
- **Overtime alarm** — optional repeating audio alarm 30 seconds after red (every 15s)
- **Overtime flashing** — red/white screen flash 1 minute past red (epilepsy-safe 1 Hz frequency, can be disabled)
- **Speech log** — records speaker name, type, time, and over/within status with editable fields
- **Start / Pause / Finish / Reset** controls with confirmation dialog
- **Fully offline** — works without an internet connection once installed

---

## Install as an App (PWA)

### iPhone / iPad (Safari)

1. Open the live link above in **Safari**
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** — the app appears on your home screen with the TM♥ icon

### Android (Chrome)

1. Open the live link above in **Chrome**
2. Tap the **three-dot menu** (⋮) in the top right
3. Tap **"Add to Home Screen"** or **"Install app"**
4. Tap **"Install"** — the app appears in your app drawer

### Desktop (Chrome / Edge)

1. Open the live link in Chrome or Edge
2. Click the **install icon** in the address bar (or go to Menu → "Install Speech Timer")
3. The app opens in its own window and is available from your applications

### Note
Once installed, the app works fully offline — no internet connection needed at your Toastmasters meeting.

---

## Host It Yourself (GitHub Pages)

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch, root folder `/`
5. Click **Save**
6. Your timer will be live at `https://YOUR-USERNAME.github.io/speech-timer/`

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The complete timer app (single HTML file, no build step) |
| `manifest.json` | PWA manifest — tells browsers this is an installable app |
| `sw.js` | Service worker — caches everything for offline use |
| `icons/` | App icons for home screen (192px, 512px, 180px) |

---

*Powered by The Club with Heart*
♥️
*[www.westlaketoastmasters.co.za](https://www.westlaketoastmasters.co.za)*
