# Speech Timer — Help Guide

**Westlake Toastmasters Speech Timing Tool — v1.5.1**

---

## 🎬 Quick Start: Demonstration Mode

The fastest way to learn the timer is to try the **Demonstration** mode:

1. Select **"Demonstration"** from the Speech Type dropdown
2. Click **Start**
3. Watch the screen cycle through all four phases in 20 seconds:
   - **White** (0–5s) → **Green** (5–10s) → **Yellow** (10–15s) → **Red** (15–20s)
4. At 20 seconds the screen will **flash red/white** for 3 seconds, then automatically reset
5. The demo is **never recorded** in the Speech Log

This is perfect for showing the audience what the colours mean at the start of a meeting.

---

## ⏱️ Custom Speech Times

To time a speech with non-standard durations:

1. Select **"Custom"** from the Speech Type dropdown
2. Three input fields appear for **Green**, **Yellow**, and **Red** times
3. Enter times in **m:ss** format (e.g. `5:30` for five minutes thirty seconds)
4. The colour hints above will update to show your chosen thresholds

**Live editing:** You can change the speech type and custom times **while the timer is running** — the colour thresholds shift immediately.

---

## 📝 Editing the Speech Log

After clicking **Finished**, each speech is recorded in the Speech Log at the bottom. Every entry is fully editable:

- **Speaker name** — click the name field to correct it
- **Speech type** — use the dropdown to change the type; if you select "Custom", the red time becomes editable
- **Red time** — only editable when type is set to "Custom" (locked for presets)
- **Speech time** — click to adjust the recorded time
- **Status** — automatically recalculates as "Within-time" or "Over-time" whenever you change any field
- **Delete** — click the ✕ button to remove an entry

The status badge shows the time difference in m:ss format (e.g. "Within-time (0:23)" or "Over-time (1:15)").

---

## 🎤 Timer Role Introduction Script

Click the **Timer Script** button at the top of the app to see a ready-made introduction script for the Timer role. Use this at the start of a meeting to explain the timing system to the audience.

---

## Colour System

The timer uses the standard Toastmasters traffic-light system:

| Phase | Meaning |
|-------|---------|
| **White** | Speech in progress — below minimum time |
| **Green** | Minimum time reached — speaker is within the time window |
| **Yellow** | Closing midpoint reached — speaker should begin wrapping up |
| **Red** | Maximum time reached — speaker should stop |

---

## Speech Type Presets

| Type | Green | Yellow | Red |
|------|-------|--------|-----|
| Standard Speech | 5:00 | 6:00 | 7:00 |
| Ice Breaker | 4:00 | 5:00 | 6:00 |
| Table Topics | 1:00 | 1:30 | 2:00 |
| Evaluation | 2:00 | 2:30 | 3:00 |
| Custom | You choose | You choose | You choose |
| Demonstration | 0:05 | 0:10 | 0:15 |

---

## Controls

### Start / Pause / Resume
- **Start** begins the timer
- While running, the button changes to **Pause** — click to pause (screen rests on white if flashing)
- While paused, click **Resume** to continue

### Finished
- Stops the timer and records the speech in the log
- Not available during Demonstration mode

### Reset
- Opens a confirmation dialog with three options:
  - **Finish & Record** — saves the speech to the log, then resets
  - **Discard** — resets without saving
  - **Cancel** — returns to the timer (which keeps running)
- The timer **continues running** while the dialog is open

---

## Overtime Features

### Overtime Alarm
- **Off by default** — tick the checkbox to enable
- Triggers **30 seconds after red** with an audible beep
- **Repeats every 15 seconds** while the speaker continues
- Can be toggled on/off mid-speech — if turned on after the 30s mark has passed, it fires immediately

### Overtime Flashing
- Activates **1 minute after red** — screen alternates between red and white
- Runs at **1 Hz (1 flash per second)** — well within epilepsy-safe limits
- The checkbox to disable flashing only becomes available once flashing starts
- Flashing is independent of the alarm — it works whether the alarm is ticked or not

**Epilepsy safety:** The 1 Hz (1 flash per second) rate is deliberately chosen to stay well below the photosensitive epilepsy danger zone of **3–60 Hz** identified by the Epilepsy Foundation. Flashing content only becomes a seizure risk at 3 flashes per second or faster — this timer flashes three times more slowly than that threshold.

---

## Mid-Speech Editing

While the timer is running, you can still change:
- **Speaker name** — editable at any time
- **Speech type** — switch between presets or custom; colours shift live
- **Custom times** — adjust Green/Yellow/Red thresholds on the fly

---

## Install as an App

This timer can be installed as a standalone app on your phone or computer. See the [README](./README.md) for installation instructions for iPhone, Android, and desktop.

---

## Version History

| Version | Changes |
|---------|---------|
| v1.0 | Initial release — basic timer with colour changes |
| v1.1 | Added speech log, editable entries, custom times in m:ss, demonstration mode, overtime flashing with epilepsy-safe toggle, reset confirmation dialog |
| v1.2 | Added Help page, Timer Script popup, Help and Timer Script buttons |
| v1.3 | Settings, localStorage persistence, dated log, mobile card layout, Install App and Check Updates buttons |
| v1.3.1 | Dark mode, CSV export, print view, speaker name autocomplete, ko-fi link, simplified Settings |
| v1.3.2f | Dark mode fix (persists through phases), settings redesign, overtime UX, wake lock, timer script updates, demo finish button |
| v1.4.0 | Renamed to "Speech Timer", new app icon, sticky header, folded dark-mode button into top bar, print fixes (no blank page, header, no dropdown arrows), better speech log contrast, cleaner settings dialog, smarter update check |
| v1.5.0 | Fixed ko-fi widget offline caching, added optional phase-change sound cues (off by default), undo for deleted log entries, bigger sticky title with a second sticky timer block underneath, unbolded sub-header lines |
| v1.5.1 | Fixed mobile speech log alignment — Type now gets a label so it lines up with Time/Red, and the delete (✕) button sits at the right of the name row instead of the left |

---

*Powered by The Club with Heart ♥️*
*[www.westlaketoastmasters.co.za](https://www.westlaketoastmasters.co.za)*
