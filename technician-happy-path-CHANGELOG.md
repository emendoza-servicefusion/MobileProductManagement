# Technician Happy Path – Change & Test Tracker

Jira: SF-43094 · Prototype: [technician-happy-path.html](technician-happy-path.html) (iOS, iPhone) · Earlier base: [my-work.html](my-work.html)
Last updated: 2026-10-20

**Purpose.** One place to track every design change in the prototype against the current Android app, so each can be scoped, built and tested individually. This is an *evolution* of today's experience (same navigation, same terminology), not a redesign.

**How to use it.** Each change has an ID. Status values: **Decided** (keep), **Open** (needs a product/design call), **Provisional** (placeholder – needs real input), **Dropped** (tried and removed, kept for history). Add the ticket/PR next to the ID as work is created.

---

## 1. Design principles applied

| # | Principle | Source |
|---|---|---|
| P1 | Keep the existing navigation: bottom tabs (Home / Work / Time / More), avatar → side menu, My Work → Job Details | Customers are sensitive to navigation change |
| P2 | Make the most repeated actions fewer taps: status changes, notes | Heap |
| P3 | Primary info first (what/when/where/state); secondary info smaller, not removed | Design review |
| P4 | Keep object iconography: Jobs, Estimates, Tasks each have their own icon, icon/colour varies by that object's status | Design review |
| P5 | iOS conventions (sheets, segmented controls, nav bars), same content and terminology | Platform decision |

## 2. Evidence (Heap, last 90 days to Oct 7)

| Signal | Value | Used for |
|---|---|---|
| Mobile sessions that reach My Work | ~75% (26.5k users) | My Work is the front door |
| My Work → Job Details | ~57% of My Work users | Job Details is the main surface (27.1k users) |
| Job Details → next action | Job Notes 33%, Job Status 31%, Invoice 8.6%, Docs 6.1%, Description 5.5%, Tasks 4.1%, Edit Job 3.2%, Equipment 2.1% | Order and prominence of shortcuts |
| Status changes (volume) | Completed ~760k, On The Way ~520k, On Site ~400k, Started ~330k, Partially Completed ~215k, Custom ~85k, Paused ~65k | Status capsule/picker design |
| Users per job area | Notes 23.0k, Status 21.0k, Completion Notes 15.6k, Docs 15.0k, Invoice 13.1k, Tasks 12.9k, Description 12.8k, Site Visits 12.0k, Custom Fields 11.1k, Equipment 10.9k | What stays visible |

## 3. Changes – My Work (Current tab)

| ID | Change | Was (Android) | Rationale | Status |
|---|---|---|---|---|
| MW-1 | Customer name on its own full-width line (16px bold, wraps; same size as the time range, was 19px) | Name shared the row with icon and chevron | Names need maximum room | Decided |
| MW-2 | Card order: customer name, then time range (bold 16px, primary) followed by Duration on the same line, then address (12px, same size as Duration) | Time buried in a label/value table | P3 | Decided |
| MW-3 | Duration (12px, gray) follows the time range on the same line (wraps under it if space runs out); Job #/Estimate # and Assigned To are two smaller secondary lines (12px) at the bottom. "Unassigned" shown when empty | Separate "Job #:", "Duration:", "Assigned To:" rows; Assigned To left blank | P3; nothing removed | Decided (see T-1 on size) |
| MW-4 | Status shown as a capsule in the top row, replacing the "Status:" row | Text row | Status is scannable; capsule is also the action (MW-6) | Decided |
| MW-5 | Object icon is the leading element on every card; Job, Estimate and Task icons with status-driven icon/colour (table in §7) | Same, but flattened to one generic chip in an earlier prototype revision | P4 | Decided; some icons Provisional |
| MW-6 | Status capsule is tappable (small caret, ~44px hit area). Opens status picker for that job without opening it. Estimates show a stub | Status change required opening the job | P2 | Decided; tap vs advance is Open (Q-1) |
| MW-7 | Next active job has an accent outline | None | "What's next" | Decided |
| MW-8 | Finished work collapses into a "Done today (n)" list at the bottom | Completed items mixed into the list | Less clutter | Decided |
| MW-9 | List sorted by start time | – | Predictable | Decided |
| MW-10 | Floating "+" moved to the header (next to search and calendar) | Floating blue "+" covered card content | Overlap, iOS convention | Decided (from the first prototype) |
| MW-12 | State and postal code removed from the address on Job and Estimate cards (e.g. "1450 Polaris Pkwy, Suite B, Columbus"). Job Details still shows the full address | Full address with state and ZIP | Shorter, fits one line; local technicians know the state | Decided (confirm handling of cross-state/border jobs) |
| MW-13 | Navigation icon before the address on Job and Estimate cards (tap opens directions without opening the job) – tried, then **removed**. "Get Driving Directions" stays on Job Details as today | Directions only from Job Details | Heap shows very low use of Get Directions (reported as 5 users of ~23K – confirm figure); not worth card space or noise | Dropped |
| MW-14 | Notes icon button (icon only, no count) in the card's top row, right side before the chevron, 44×44pt target. The status capsule sits directly after the object icon on the left. Tapping opens the Notes sheet directly without opening the job. Shown on Job **and Estimate** cards, always, even when the object has no notes. A Docs icon was tried alongside it and removed | Notes reachable only inside Job Details | Notes is the #1 next action from Job Details (33%); saves one navigation step | Decided in prototype; counts/unread markers considered and deferred (Q-10) |
| MW-15 | Forward chevron removed from Job and Estimate cards | Chevron on every card | Users already know cards are tappable; frees space in the top row | Decided (confirm "Done today" rows, which still show a chevron) |
| MW-16 | Status capsule on cards enlarged: 14px text (was 12px), 32px tall (was ~24px), slightly larger dot and caret; tap area still ~44px. A first pass at 15px/38px was too big | 12px capsule, ~24px tall | Status is the 2nd most-changed item on a job after notes (31% of next actions from Job Details; highest-volume event type in Heap); easier to see and hit | Decided |
| MW-11 | Large per-card quick-action button ("On The Way", "I've Arrived", "Start Job", "Mark Complete") | – | Added, then removed in favour of MW-6 | Dropped |

**Not built (seen in screenshots, deliberately out of this iteration):** Past and Future tabs; Complete/Incomplete toggle; Filters count; "Collapse All"; collapsible date groups with counts. These must be preserved in the real build.

## 4. Changes – Job Details

| ID | Change | Was (Android) | Rationale | Status |
|---|---|---|---|---|
| JD-1 | Status card: object icon + status capsule (tappable; the capsule is the only status control). The "Change Status" link was removed as redundant | Icon + status text + "Change Status" link | Capsule already opens the picker | Decided |
| JD-2 | ~~Lifecycle stepper~~ (On The Way → On Site → Started → Completed with timestamps) | None | Dropped: redundant to the status pill; status history stays in Activity Logs | **Dropped** |
| JD-3 | Running on-the-job timer while Started/Paused | None | Time awareness (ties to Clock In) | Open (Q-4: relation to Time/Clock In) |
| JD-4 | Sticky bottom action bar with one primary button naming the next step (not shown for Scheduled jobs, so there is no big On The Way button; set it from the status pill) (I've Arrived / Start Job / Complete Job / Resume Job); Pause button while Started; "Back to My Work" when finished | Status changes only via "Change Status" | P2, thumb reach | **Open** (Q-2) |
| JD-5 | Info card combines date/time/duration, address with a circular directions button, and contact. The contact row shows the name only: no phone number and no call or message buttons (calling and texting live in the Primary contact sheet on Home) | Separate Status/Date card, "No Address" card with full-width Get Driving Directions button | Less clutter | Decided; call/message buttons are new (Q-5) |
| JD-6 | Contact shows person and role for commercial customers (e.g. "Dana Whitfield · Office Manager") | Contact name only | Realism for commercial jobs | Provisional (data model) |
| JD-7 | Shortcut row reordered: **Notes**, Tasks, Docs, Equipment, Invoice, with count badges (notes count, tasks done/total, green when all done) | Tasks, Notes, Docs, Equipment, Invoice; no counts | Notes is the #1 next action (33%) | Decided; badge counts need API support |
| JD-8 | Description moved into the status card (under the status pill and timer) as a larger preview, six lines, expands in place; the toggle only shows when the text overflows | Full card with chevron to a detail screen | Status and context in one group; show more of the text before expanding | Decided |
| JD-9 | Assigned to, Custom Fields, Additional Visits kept as quiet rows, placed below the date/address/contact card | Same, spread across cards | Secondary info | Decided |
| JD-10 | Tabs (Details / Customer Info / Photos / Sign) and edit pencil unchanged | – | P1 | Unchanged |

## 5. Changes – Sheets (status, notes, tasks, complete)

| ID | Change | Was (Android) | Rationale | Status |
|---|---|---|---|---|
| SH-1 | **Status picker** (bottom sheet): customer name in header, current status checked, next step tagged "Next". Options: On The Way, On Site, Started, Paused, Partially Completed, Completed, plus custom (e.g. "Waiting on Parts") | Change Status list/dialog | Same statuses, clearer next step | Decided |
| SH-2 | Paused ↔ Resume; Resumed logged in Activity Logs | – | Covers Paused/Resumed in Heap | Decided |
| SH-3 | **Notes sheet**: same three tabs (Tech Notes / Job Notes / Activity Logs); composer pinned at bottom replaces the "Add Note" header link; sheet instead of full-screen modal | Full-screen with X and "Add Note" link | P2 | Decided |
| SH-4 | Activity Logs are written automatically for status changes, notes, completion notes | – | Office visibility | Decided (confirm backend event model) |
| SH-5 | **Tasks sheet**: tap to check off; progress feeds the badge (JD-7) and the Complete reminders | Tasks screen | Connected flow | Decided |
| SH-6 | **Complete sheet**: outcome toggle (Completed / Partially Completed), Completion Notes, soft reminders for open tasks / no photos / no notes; button label follows outcome | Separate steps | One place to finish | **Open** (Q-3) |
| SH-7 | Reminders are advisory – never block completion | – | Avoid friction | Decided |
| SH-8 | After completing, return to My Work; job moves to "Done today" | – | Fast to next job | Decided |

## 6. Global changes

| ID | Change | Notes | Status |
|---|---|---|---|
| G-1 | iOS conventions: SF-style tab bar, nav bars with chevron back, swipe-back, bottom sheets with grabber, segmented controls, iOS toggle | Prototype only emulates these | Decided |
| G-2 | Side menu from avatar → Settings with Auto / Light / Dark (from `my-work.html`); not included in the happy-path prototype | Needed for the real flow | Decided (other prototype) |
| G-3 | Light and Dark themes | Match system "Auto" | Decided |
| G-4 | Typeface: prototype defaults to **Inter**; switcher offers Plus Jakarta Sans and iOS System (SF). Real app font is **unknown** | Requested "more modern" look | **Open** (Q-6) |
| G-5 | Dummy data: HVAC/plumbing day (dental office RTU, water heater swap, restaurant walk-in cooler, estimate, completed tune-up) | Realism for reviews | Decided |

## 6a. Changes – Home & Notifications (R24)

Source: Notifications epic (v1 location + time triggers; v2 dispatcher events and v3 Live Activities noted for future-proofing) and a review of Housecall Pro, FieldPulse, CompanyCam and Workiz mobile home screens. The Home tab is now live in the prototype and opens by default; Work is one tap away. Notifications act on the same jobs and status engine as My Work.

| ID | Change | Was (Android / today) | Rationale | Status |
|---|---|---|---|---|
| HN-1 | Home becomes a working view: date line, **Next up** card, clock-in tile, Today list, Shortcuts | Six equal launcher tiles (My Work, Customers, Catalogs, Inventory, Map View, FusionDrive) with no data | Every competitor shows live work and status on home | Decided (layout Provisional) |
| HN-2 | Next up card = the next active job, same status flow as My Work. Primary button follows the status (On The Way → I've Arrived → Start Job → Complete Job); **Mark On Site** is offered once the window is open | n/a | One object across card, push, inbox and Job Details | Decided |
| HN-3 | Next up pill is state-driven: Starts in… · Window open · Window closes in… (amber) · Window passed (red) · On site · In progress · Paused · Left without Complete (red). Border colour follows | n/a | Same states a v3 Live Activity would render | Decided |
| HN-4 | Next up shows a two-line preview (tap to expand or collapse; chevron only when the text is longer than two lines) of the job **Description** and the latest **Tech note** (each omitted if empty). Replaces the earlier "tools & materials" block | Not surfaced | Uses data that already exists on the job, so no new field or business logic. Answers the customer ask for what to bring and expect | Decided |
| HN-5 | ~~Needs attention list~~ (collapsed row with a count and inline actions) | n/a | Dropped: what counts as "needs attention" (unsigned estimates, unreviewed time, missed windows…) is business logic we would need to standardise. Survey customers first. A visit left without Complete now stays on Next up in red with a Mark Complete button | **Dropped** |
| HN-6 | Clock-in tile and weekly hours on Home | Time is its own tab | Housecall Pro pattern; fewer taps | Provisional (not wired to Time) |
| HN-7 | Old tiles shrunk to a Shortcuts row; the "+" create button was removed from Home | Large tiles | Gives the space back to work content | Provisional |
| HN-8 | Device-state banner on Home when push is off or location isn't "Always" | n/a | Geofence triggers silently fail without it | Decided |
| HN-9 | Bell in the Home and My Work headers; opens the inbox. The unread-count badge on the bell was removed (the bell still rings when a notification arrives, and unread items are tinted in the inbox) | No notifications | Epic listed a bell + unread badge; badge dropped by design review | Decided (differs from epic) |
| HN-10 | Inbox: All / Unread, Mark all read, grouped by day, unread tint + dot, 7-day clear footer, empty state | n/a | Epic: reverse-chron list, read/unread, auto-clear 7 days | Decided |
| HN-11 | Inbox rows are resolvable: inline action until done, then "Marked On Site at 9:44 AM". Resolves no matter where the status is changed (push, row, Home, Job Details) | n/a | One-tap actions from the notification | Decided |
| HN-12 | Tapping a push or row opens the real Job Details; back returns to where the tech was (inbox if opened from there) | n/a | Epic: deep link with quick actions | Decided |
| HN-13 | iOS-style push banner with action buttons shown (Mark On Site / Mark Complete / Open job). If push is off the item still lands in the inbox | n/a | Push can fail; inbox is the fallback | Decided |
| HN-14 | Notification settings: device status (push, location), per-tech toggle per trigger, admin-set timing shown as text, v2 dispatcher toggles | n/a | Epic: per-tech opt-in/out; admin-configured radius and lead times | Decided |
| HN-15 | Shared tab bar (Home / Work / Time / More); More opens a side menu with Notifications and Notification Settings | Tab bar belonged to My Work | One prototype across tabs | Decided |
| HN-16 | Prototype-only controls in the review panel: fire each trigger, set push and location state, reset | n/a | Lets reviewers walk the triggers | Prototype only |
| HN-17 | **Primary contact** on Next up: the contact name is a tappable chip in the existing tag row (no layout change); the separate call button on the card was removed as redundant. Opens a sheet with name, role, mobile, email and big **Text** and **Call** actions. No separate contact → the customer is the contact | Contact row with call/message circles inside Job Details only | Reach the on-site contact without opening the job | Decided (data fields Provisional: email is new) |
| HN-18 | **Notes** icon button on the Next up card, next to Navigate. Opens the same Notes sheet (Tech Notes / Job Notes / Activity Logs) as the Notes icon on My Work cards and Job Details | Notes reachable from My Work cards and Job Details | Notes is the most-opened job area (~23k users / 90 days); one tap from Home | Decided |

Triggers covered: morning reminder, arrive at site (geofence entry), arrival window closing, leave without Complete (geofence exit), and v2: schedule changed, job assigned, job cancelled. Placeholders: arrival window = first hour of the scheduled slot; closing warning = 15 min; radius 500 ft; reminder 7:30 AM.

## 7. Iconography map

Object icons are preserved. Colour and glyph depend on **object type + that type's status**.

| Object | Status | Icon | Colour | Source |
|---|---|---|---|---|
| Job | Scheduled | Calendar with check (outline) | Green | Confirmed in screenshots |
| Job | Dispatched | Circle with technician figure | Green | Confirmed in screenshots |
| Job | On The Way | Circle with technician figure | Orange | **Provisional** |
| Job | On Site | Circle with technician figure | Purple | **Provisional** |
| Job | Started | Circle with technician figure | Green | **Provisional** |
| Job | Paused | Circle with technician figure | Yellow | **Provisional** |
| Job | Partially Completed | Calendar with check (filled) | Orange | **Provisional** |
| Job | Completed | Calendar with check (filled) | Green | **Provisional** |
| Estimate | Estimate Provided | Document with "$" | Green | Confirmed in screenshots |
| Estimate | Estimate Accepted | Document with "$" and check badge | Orange | Confirmed in screenshots |
| Task | Incomplete | Clock in circle | Orange | Confirmed in screenshots |
| Task | Completed | Calendar with check (filled) | Green | Confirmed in screenshots |
| Any | Custom status | Not defined | – | **Open** (Q-7) |

Status capsules reuse the icon's colour so the two never disagree. Statuses not listed (e.g. estimate statuses beyond the two above, custom job statuses) need a mapping.

## 8. Typography audit (sizes in px = iOS pt at 393-wide frame)

| Size | Used for | Assessment |
|---|---|---|
| 10 | Tab bar labels | Tab bar is the iOS standard |
| 12 | Card secondary line; capsules; shortcut labels; sheet hints | At the floor of caption sizes; tight for outdoor/glove use |
| 13–15 | Remaining secondary and body text | Fine |
| 16–22 | Time, names, buttons, titles | Fine |

Decision: keep as is for now and gather feedback on the smaller sizes (T-1). Prototype does not implement Dynamic Type.

## 9. Open questions

| ID | Question | Owner | Resolution |
|---|---|---|---|
| Q-1 | Capsule tap: open picker (current) or advance to next status in one tap? Picker avoids accidental advances; one tap is faster | | |
| Q-2 | Keep the sticky bottom primary button on Job Details, or make the capsule the only status control? | | |
| Q-3 | Is a combined Complete sheet (outcome + Completion Notes + reminders) acceptable vs today's separate steps? | | |
| Q-4 | Should the on-the-job timer connect to Time / Clock In, or stay separate? | | |
| Q-5 | (Closed – call and message buttons removed from the Job Details contact row, see JD-5) | | |
| Q-6 | Which typeface does the iOS app use; is a more modern face acceptable? | | |
| Q-7 | Full status → icon/colour mapping for all job, estimate and custom statuses | | |
| Q-9 | (Closed – icon removed, see MW-13) Card directions icon: Settings has "Map Provider: None" by default – on first tap, prompt to choose a provider, or use the system default? Also: icon should be hidden/disabled for jobs with no address | | |
| Q-10 | Should the card Notes icon later show a count or an "unread/new from office" marker? Photos count only after completion? Needs list-API counts and read-tracking | | |
| Q-8 | Should Past/Future keep the Complete/Incomplete toggle, filters and date groups unchanged? | | |
| Q-11 | Arrival window: does the app have a real arrival-window field per job/site visit, or is it the scheduled slot? The prototype assumes the first hour of the slot | | |
| Q-12 | A visit left without Complete stays as Next up (red) until completed. Should it ever expire, and should it block the next job from becoming Next up? | | |
| Q-13 | One-tap Complete from a push skips the Complete sheet (notes, reminders). Acceptable, or should it open the sheet? | | |
| Q-14 | Next up previews the latest Tech note only. Show more than one, or note author/date? Should Description and Tech notes also be in the morning reminder push? (Prototype: Description only) | | |
| Q-15 | Do the Home clock-in tile and weekly hours replace anything on the Time tab? | | |
| Q-16 | Survey customers: which items should an optional "needs attention" surface show (unsigned estimates, unreviewed time entries, missed windows, unpaid invoices…) and who defines them? | | |

## 10. Test plan (per change)

**Functional**
- MW-1…3: long names (2 lines+), long addresses, no address, multi-assignee ("A, B"), unassigned, 0-minute and multi-hour durations.
- MW-5/6: every status shows the correct icon and capsule colour; capsule tap area ≈44pt; tapping capsule does not open the job; estimate capsule behaviour; list updates immediately after a change.
- MW-14: tapping Notes never opens the job; adjacent targets (capsule, Notes, card body) are each ≥44pt and not mis-tapped; Notes from the card shows the right job and a note added there appears in Job Details; roles without Notes access hide the icon.
- MW-8: completed jobs move to Done today; empty-state when everything is done.
- JD-1: the status capsule reflects every status, including Paused, Partially Completed and custom statuses, and opens the picker.
- JD-4: button label correct for each status; Pause/Resume; button hidden or replaced when finished; does not cover content (bottom padding) or the home indicator.
- JD-7: badge counts match real data; badges absent at zero; tasks badge turns green when complete.
- SH-1: status picker from list and from Job Details; custom statuses appear; Completed/Partially Completed route to the Complete sheet; skipping steps (e.g. Scheduled → Started) behaves per business rules.
- SH-3/4: add Tech vs Job note; composer disabled when empty; Activity Logs tab has no composer; new entries appear; keyboard avoids composer.
- SH-6/7/8: outcome toggle, completion note saved, reminders reflect real task/photo/note counts, completion works with every reminder showing a warning.

**Cross-cutting**
- Offline and sync: status changes, notes and completion while offline; conflict if the office changes status meanwhile.
- Permissions: technicians who cannot change status or complete jobs; roles without Notes/Docs/Invoice access.
- Accessibility: VoiceOver labels on capsules (e.g. "Change status: Scheduled"), icons not the sole carrier of status, colour contrast of capsule text on light and dark, Dynamic Type at larger sizes (card layout, stepper, 10–12px text), Reduce Motion for sheet and push animations.
- Theming: Auto / Light / Dark including icon colours and capsule tints.
- Devices: smallest and largest supported iPhones, landscape behaviour.
- Localisation/time: 12h/24h formats, long translations, time zones for start/end.

**Analytics – keep existing Heap events so before/after is comparable**
`MyWork_Mobile`, `JobDetails_Mobile`, `OpenJobNotes_Mobile`, `ClickStatus_MobileJob` / "Mobile - Jobs - Click - Job Status", `CompletionNotes_Mobile`, `OpenDocs_Mobile`, `Invoice_MobileJob`, `OpenTasks_Mobile`, `description_MobileJob`, `siteVisits_MobileJob`, `customFields_MobileJob`, `Equipment_Mobile`, `Past_MobileMyWork`, `Future_MobileMyWork`.
Add: status change source (list capsule / Job Details capsule / bottom button / picker), taps-to-complete per job, time from On The Way to Completed, completion-sheet reminder views and overrides.

**Success checks to define before build:** taps and time to first status change; share of status changes made from My Work vs Job Details; Notes open rate and notes added per job; completion rate with Completion Notes; no drop in Job Details → Invoice/Docs/Tasks usage.

## 11. Known gaps in the prototype (not designed yet)

Past and Future tabs; Estimate and Task detail screens; Docs, Equipment, Invoice, Custom Fields, Additional/Site Visits screens; Clock In; Photos and Sign tabs; Edit Job; search and filters behaviour; map provider and driving directions; Time tab; payments (Tap to Pay); Live Activities / lock-screen widgets (v3); real push permission and geofence behaviour (simulated); Shortcuts and the "+" create menu on Home.

## 12. Revision history

| Rev | Summary |
|---|---|
| R1 | iOS My Work prototype with side menu and Settings (Auto / Light / Dark) – `my-work.html` |
| R2 | Technician happy-path prototype: My Work → Job Details → status → Notes → Complete (`technician-happy-path.html`) using Heap and competitor review |
| R3 | Restored object iconography (Job / Estimate / Task); added an estimate and task to the list |
| R4 | Removed the incomplete task from the mock; customer name on its own line; time and location primary; Job #, duration and assignee kept as smaller secondary text |
| R5 | Typography audit; sizes kept as is pending feedback |
| R6 | Realistic dummy data (HVAC/plumbing technician day) |
| R7 | Removed per-card quick-action button; status capsules tappable with status picker (MW-6, SH-1) |
| R8 | Typeface changed to Inter by default with switcher (Inter / Plus Jakarta Sans / iOS System) |
| R9 | State and postal code removed from card addresses (MW-12) |
| R10 | Navigation icon before the card address opens directions from the list (MW-13) |
| R11 | Notes and Docs icon buttons on Job cards (MW-14); Docs is a stub in the prototype |
| R12 | Notes/Docs moved from a footer row into the card's top row; status capsule moved next to the object icon (MW-4, MW-14) |
| R13 | Docs icon removed from Job cards; Notes icon kept (MW-14) |
| R14 | Forward chevron removed from Job and Estimate cards (MW-15) |
| R15 | Status capsule enlarged on cards (MW-16) |
| R16 | Customer name on cards set to 16px, matching the time range (MW-1) |
| R17 | Notes icon added to Estimate cards; always visible regardless of whether notes exist (MW-14) |
| R18 | Colored dot removed from all status capsules (cards and Job Details) – redundant with icon colour and status text |
| R19 | Card secondary text: Assigned To moved to its own line; separator between Job #/Estimate # and Duration enlarged (MW-3) |
| R20 | Duration moved next to the time range on the right; separator removed (MW-3) |
| R21 | Navigation icon removed from cards (MW-13); Q-9 closed |
| R22 | Card reordered: name → address (12px) → time range → Duration (below the time) → Job #/Assigned To (MW-2, MW-3) |
| R23 | Reverted R22 order: name → time range + Duration (same line) → address (12px) → Job #/Assigned To (MW-2, MW-3) |
| R24 | Home tab and notifications merged into this prototype: Next up, bell + inbox, push banner, notification settings, shared tab bar, trigger controls (HN-1 to HN-18; HN-5 Needs attention dropped). Prototype now opens on Home. Standalone `home-notifications.html` removed. Next up later shows Description + latest Tech note (HN-4) |
| R25 | Job Details: lifecycle stepper and the Change Status link removed; the status capsule is the single status control (JD-1, JD-2) |
| R26 | Job Details: Description moved into the status card with a six-line preview (JD-8) |
| R27 | Job Details: contact phone number and call/message buttons shown only for upcoming jobs (JD-5, Q-5) |
| R28 | Job Details order: status + description card, then the assignee group (Assigned to, Custom Fields, Additional Visits), then the date/address/contact card and shortcuts |
| R29 | Job Details: big On The Way button removed; Scheduled jobs show no bottom action bar (JD-4) |
| R30 | Dummy data: job assignee changed from the reviewer's name to "Jordan Reyes"; Job Details Assigned to row now reads the job's assignee |
| R31 | Job Details: phone number and call/message buttons removed from the contact row (JD-5); supersedes R27 |
| R32 | Job Details order: status + description, date/address/contact, then the assignee group (Assigned to, Custom Fields, Additional Visits), then shortcuts; supersedes R28 (JD-9) |
| R33 | Unread-count badge removed from the bell (HN-9) |
| R34 | PO and Completion epic added to this prototype ([po-and-completion-EPIC.md](po-and-completion-EPIC.md), SF-43631): Parts tile, Parts Needed with stock indicators, PO / Part Request form, vendor picker, review, Parts & POs screen, Waiting on Parts sheet, return-visit card, Parts Used sheet, completion checklist with a required signature, invoice and payment summary, Ready for Office Review. Demo button added for permission level and simulated office / vendor / dispatch events |
| R35 | Behaviour change: the Complete sheet now blocks completion until the customer signature is captured (all jobs); other items stay reminders. Supersedes "reminders never block" for the signature only (PQ-1, PQ-2) |
| R36 | Job Details shortcuts: six tiles (Notes, Tasks, Parts, Docs, Equipment, Invoice); tile width now flexes. Info card duration reads the job's real duration |
| R37 | PO flow rebuilt around the invoice: the Parts tile and Job Products list are gone. A **POs** tile (jobs only, never estimates) opens the PO form, which offers the invoice's products with stock, one tap each or Add all. Catalog search is secondary and products-only. "Add to invoice" is an optional switch, off by default, for invoice-rights users (PQ-9, PQ-10) |
| R38 | Demo controls merged into the notes panel; bottom-left Demo button removed |
| R39 | A job can have several POs. Vendor is required and chosen per PO from the vendor list, as on the web (Zendesk reference), so products from different vendors go on separate POs. Purchase Orders screen has a section per PO; "New Purchase Order" adds another; invoice products already on a PO are not offered again; the job-level tracker follows the PO furthest behind ("Partially received" appears while some POs are in and others are not). Print / Email / Share / Delete per PO |
| R40 | Inventory Orders follow the web: an IO is created when a PO is received (partly or fully), not when it is sent; a PO can have several IOs and each shows its warehouse. Receiving adds the quantities to warehouse stock (Out of stock turns into In stock), recording parts used takes them out. PO sections show a red / orange / green received state (PQ-11, PQ-12, PQ-13) |
| R41 | A PO is per vendor and a product carries its vendor: the first product sets it and only that vendor's products can join (others dimmed with the vendor named). The "On the invoice" list on the PO form is removed. Instead the **Invoice** tile opens a line-item view where each product line has Create PO (Request PO without purchasing rights) and shows its vendor and stock; ordered lines show the PO. Services get no button. Vendor row is read-only; vendor picker removed (PQ-3) |
| R42 | PO form simplified to the web form's essentials (vendor, PO number, date, reference / memo, item list with editable unit cost and line total, vendor message, subtotal). Removed the separate Review step, the "add new products to the invoice" switch, the vendor banner and dimmed products, and the pending-product logic. The vendor is picked from a sheet or set by the first product; changing it drops other-vendor products. The form is the summary (deviation from Story 2's review step; see Epic S2) |
| R43 | PO flow is vendor-first: pick the vendor, then search or select one or more of that vendor's products. Add product with no vendor opens the vendor list first and then goes straight to that vendor's products; Create is disabled until a vendor and a product are set. Starting from an invoice product line still prefills its vendor. Supersedes "the first product sets the vendor" in R41 / R42 |
| R44 | Purchase Orders screen: removed the job-level status card with the 8-step tracker (stage, owner, next step). Each PO keeps its own section. The summary bar, owner and next step remain on the Purchase Orders card on Job Details |
