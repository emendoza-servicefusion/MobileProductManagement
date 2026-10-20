# Epic: Technician Happy Path – Mobile App Update

Jira: SF-43094 · Prototype: [technician-happy-path.html](technician-happy-path.html) · Detailed change tracker: [technician-happy-path-CHANGELOG.md](technician-happy-path-CHANGELOG.md)
Status: Early discovery · Platform: iOS (parity plan for Android to be confirmed)

> The prototype is the source of truth for layout and interaction. This Epic captures the intent and the direct requirements. IDs in brackets (MW-6, JD-4…) map to rows in the change tracker.

## 1. Summary

Streamline the daily technician flow in the ServiceFusion mobile app: **Home → My Work → Job Details → change status / add notes → Complete**. This is an evolution of today's experience, not a redesign. Navigation (bottom tabs Home / Work / Time / More, avatar side menu) and terminology stay the same. The work reduces taps for the most repeated actions (status changes and notes), puts the most important job information first, and makes Home a working view instead of a launcher.

## 2. Problem and evidence

Heap data (last 90 days to Oct 7):

- About 75% of mobile sessions reach My Work, and about 57% of My Work users open Job Details. These two screens are the front door of the app.
- From Job Details, the most common next actions are **Job Notes (33%)** and **Job Status (31%)**. Invoice is 8.6%, Docs 6.1% and Tasks 4.1%.
- Status changes are the highest-volume event: Completed ~760k, On The Way ~520k, On Site ~400k, Started ~330k.
- Today, changing status or adding a note means opening the job first. Time and status are buried in label/value tables. Home is six equal launcher tiles with no live data. The floating "+" covers card content.
- Competitors (Housecall Pro, FieldPulse, CompanyCam, Workiz) show live work and status on their home screens.

## 3. Goals

1. Fewer taps to change a job's status or open its notes.
2. Make "what's next, when, where, what state" scannable at a glance.
3. Make Home useful on open (next job, today's list, clock-in).
4. No loss of existing function and no navigation relearning.

## 4. In scope – requirements

### 4.1 My Work (Current tab)
- **Job and Estimate card layout** [MW-1, 2, 3, 12]: customer name on its own full-width line; time range (primary) with duration on the same line; address (state and ZIP removed on the card only); Job #/Estimate # and Assigned To as small secondary lines ("Unassigned" when empty). Nothing removed from the data shown today.
- **Tappable status capsule** [MW-4, 6, 16]: shows current status, opens the status picker for that job without opening it (~44pt hit area). Estimates show a stub for now.
- **Notes shortcut on cards** [MW-14]: Notes icon button on Job and Estimate cards opens the Notes sheet directly, without opening the job. Always shown, no count in v1.
- **Object icons** [MW-5, §7 of tracker]: Job, Estimate and Task keep their own icons; icon and colour follow the object's status, and the capsule uses the same colour.
- **List behaviour** [MW-7, 8, 9, 10, 15]: sorted by start time; next active job gets an accent outline; finished work collapses into "Done today (n)"; "+" moves to the header; forward chevron removed from cards.
- **Preserve unchanged**: Past and Future tabs, Complete/Incomplete toggle, filters, Collapse All, date groups. These exist today and must remain.

### 4.2 Job Details
- **Status card** [JD-1, 8]: object icon, status capsule (the only status control; "Change Status" link removed) and a description preview (six lines, expands in place).
- **Info card** [JD-5, 6, 9]: date/time/duration, address with a circular directions button, and contact name (plus role for commercial customers where the data exists). Assigned To, Custom Fields and Additional Visits stay as quiet rows.
- **Shortcut row** [JD-7]: Notes first, then Tasks, Docs, Equipment, Invoice, with count badges (notes count, tasks done/total).
- **Sticky bottom action bar** [JD-4]: one primary button naming the next step (I've Arrived / Start Job / Complete Job / Resume Job), a Pause button while Started, and "Back to My Work" when finished. Hidden for Scheduled jobs. *Open (Q-2).*
- **Job timer** [JD-3] while Started/Paused. *Open (Q-4).*
- Tabs (Details / Customer Info / Photos / Sign) and the edit pencil are unchanged.

### 4.3 Status, Notes, Tasks and Complete sheets
- **Status picker** [SH-1, 2]: bottom sheet showing current status, next step tagged "Next", and all existing statuses including custom ones; Paused ↔ Resume.
- **Notes sheet** [SH-3, 4]: same three tabs (Tech Notes / Job Notes / Activity Logs); composer pinned at the bottom. Status changes, notes and completion notes write to Activity Logs automatically (confirm backend event model).
- **Tasks sheet** [SH-5]: tap to check off; progress feeds the Job Details badge and the Complete reminders.
- **Complete sheet** [SH-6, 7, 8]: outcome toggle (Completed / Partially Completed), Completion Notes, and advisory reminders for open tasks, no photos and no notes. Reminders **never block** completion. After completing, return to My Work and move the job to "Done today". *Open (Q-3).*

### 4.4 Home
- **Working Home view** [HN-1, 7]: date line, Next up card, clock-in tile with weekly hours, Today list, and the old launcher tiles shrunk to a Shortcuts row. Layout is provisional.
- **Next up card** [HN-2, 4, 17, 18]: the next active job with the same status flow as My Work (primary button follows status). Shows a two-line preview of Description and the latest Tech note, a tappable Primary Contact chip (sheet with Text and Call), and a Notes shortcut. Uses data that already exists on the job.
- **Visit left without Complete** [HN-5 outcome]: stays on Next up in red with a Mark Complete button. The broader "Needs attention" list was dropped.
- **Clock-in tile** [HN-6]: provisional, not yet wired to the Time tab (Q-15).

### 4.5 Global
- iOS conventions (sheets with grabber, segmented controls, swipe-back) and Light/Dark/Auto themes [G-1, 3].
- Typeface: prototype uses Inter for review only. The real app font is unknown (Q-6).

## 5. Out of scope

- **Notifications** (push, geofence and time triggers, inbox, bell, notification settings, device-state banner, dispatcher events, Live Activities). These have their own Epics: HN-8 to HN-14 and HN-16 are covered there.
- Dropped ideas: lifecycle stepper (JD-2), card directions icon (MW-13), per-card quick-action button (MW-11), "Needs attention" list (HN-5).
- Not designed yet: Estimate/Task detail, Docs, Equipment, Invoice, Custom Fields and Site Visits screens, Clock In, Photos/Sign tabs, Edit Job, search/filter behaviour, map provider, Time tab, payments, "+" create menu.

## 6. Dependencies and integration points

- **Notifications Epics**: they act on the same jobs and status engine. Home's Next up state pill (Starts in… / Window open / Window passed) and "Mark On Site" depend on an arrival-window definition (Q-11). Align with that team so the status flow is built once.
- **API/data**: count badges for notes and tasks; Activity Log events for status, notes and completion; contact role and email fields (new); per-job assignee on list payloads.
- **Roles and permissions**: technicians who cannot change status or complete jobs, and roles without Notes/Docs/Invoice access, must see the correct controls hidden or disabled.
- **Offline and sync**: status changes, notes and completion offline, with conflict handling if the office changes status meanwhile.

## 7. Open questions for discovery

| ID | Question |
|---|---|
| Q-1 | Capsule tap: open the picker (prototype) or advance to the next status in one tap? |
| Q-2 | Keep the sticky bottom primary button on Job Details, or make the capsule the only status control? |
| Q-3 | Is a combined Complete sheet acceptable vs today's separate steps? |
| Q-4 | Should the job timer connect to Time / Clock In? |
| Q-6 | Which typeface does the iOS app use, and is a more modern face acceptable? |
| Q-7 | Full status → icon/colour mapping for all job, estimate and custom statuses |
| Q-8 | Past/Future: keep the Complete/Incomplete toggle, filters and date groups unchanged? |
| Q-10 | Should the card Notes icon later show a count or unread marker? (needs list-API counts) |
| Q-11 | Does the app have a real arrival-window field, or is it the scheduled slot? |
| Q-12 | Should a visit left without Complete ever expire, and should it block the next job from becoming Next up? |
| Q-14 | Show more than one Tech note on Next up, or author/date? |
| Q-15 | Do the Home clock-in tile and weekly hours replace anything on the Time tab? |
| MW-12 | Confirm handling of cross-state/border jobs now that the state is hidden on cards |

## 8. Acceptance criteria (epic level)

- A technician can change a job's status from My Work, Home or Job Details without opening the job first (My Work and Home), and each path updates all views immediately.
- A technician can open and add to Notes from a My Work card, the Next up card and Job Details, and a note added in one place appears in the others.
- Completing a job shows advisory reminders that never block completion, and the job moves to "Done today".
- All existing statuses, including custom statuses, are available and display the correct icon and colour.
- Past, Future, filters and the Complete/Incomplete toggle behave as they do today.
- Works in Light and Dark, with VoiceOver labels on capsules and icon buttons, and layouts hold at larger Dynamic Type sizes.
- Existing Heap events are preserved so before/after is comparable (list in tracker §10), plus new events for status-change source and taps-to-complete.

## 9. Success measures (to confirm before build)

- Taps and time to first status change.
- Share of status changes made from My Work/Home vs Job Details.
- Notes open rate and notes added per job.
- Completion rate with Completion Notes.
- No drop in Job Details → Invoice / Docs / Tasks usage.

## 10. Suggested story breakdown (for refinement)

1. My Work card redesign (layout, icons, address, secondary lines)
2. Status capsule + status picker sheet
3. Notes shortcut on cards + Notes sheet (composer, tabs, Activity Log writes)
4. My Work list behaviour (sort, next-up outline, Done today, header "+")
5. Job Details status card, info card and shortcut row with badges
6. Job Details sticky action bar and timer (pending Q-2, Q-4)
7. Tasks sheet and Complete sheet with advisory reminders
8. Home: Next up card, Today list, Shortcuts, clock-in tile
9. Primary Contact sheet
10. Accessibility, theming, offline, permissions and analytics pass
