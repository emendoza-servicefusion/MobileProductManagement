# Epic: Push Notifications – Job Change Updates

Jira: [SF-43536](https://everpro-tech.atlassian.net/jira/browse/SF-43536) · Prototype: [technician-happy-path.html](technician-happy-path.html) (demo controls are in the notes panel: **Show notes**, top right, under "Changes from the office") · Builds on: [technician-happy-path-EPIC.md](technician-happy-path-EPIC.md)
Status: Early discovery · Platform: iOS

> The prototype is the source of truth for layout and interaction. It deliberately has no telemetry. This section records what the product build needs to log.

## Telemetry (build into the product, not the prototype)

No telemetry UI. The product needs to answer these questions, and the events below are what make them answerable. Every event carries the notification type (`assigned`, `unassigned`, `date`, `time`, `cancelled`, `deleted`) and the work kind (`job`, `estimate`, `site_visit`).

| Question | Events |
|---|---|
| Notification volume by type | `notification_created` |
| Delivery and opens | `push_delivered`, `push_failed` (with reason, e.g. push disabled on the device), `notification_opened` |
| Push opens vs. Notification Inbox opens | `notification_opened.via` = `push` or `inbox`; `inbox_opened` (with unread count) |
| Time from job change to the technician seeing it | `notification_created` timestamp vs. `push_delivered` and first `notification_opened`; per type |
| Technician preference changes | `preference_changed` (preference, on/off) |
| Delivery failures vs. suppressed by preference | `push_failed` vs. `notification_suppressed` (reason = `preference`). A suppressed notification is never created, but the schedule change still applies |

Also log which deep links land on an unavailable state (`notification_opened.deeplink` = `ok`, `unavailable_unassigned`, `unavailable_cancelled`), to size how often technicians open work they can no longer access.
