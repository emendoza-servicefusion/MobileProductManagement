# Epic: PO and Completion – Parts to Completion

Jira: SF-43631 · Prototype: [technician-happy-path.html](technician-happy-path.html) (demo controls are in the notes panel: **Show notes**, top right) · Builds on: [technician-happy-path-EPIC.md](technician-happy-path-EPIC.md)
Status: Early discovery · Platform: iOS · Source stories: `EPIC_POandCompletion/Parts.docx`

> The prototype is the source of truth for layout and interaction. This Epic captures intent and direct requirements. It extends the happy-path prototype; it does not add a navigation model.

## 1. Summary

Let a technician who finds a part is needed carry the job from diagnosis to close-out on the phone, with the right actions for their permissions:

**Job → Parts Needed → stock check → Create PO or Send Request → Waiting on Parts → part received → return visit → completion checklist → Complete Job or Ready for Office Review.**

The Job stays the central record. Parts, POs, visits, documentation, invoice and payments all hang off it, and every state shows **stage, owner and next step**.

## 2. Problem and evidence

- Field PO and parts access is a steady, year-long ask: ~83 citations in 12 months (Productboard), 97 of 314 tracked citations in 2026. Technicians have to call the office before materials can be ordered.
- Gong: the office wants to keep ordering authority. The common pattern is the technician sets the job to "waiting on parts", which notifies the office, and the office creates the PO. Customers want POs linked to jobs, visible PO status, and a way to schedule a return visit when parts arrive.
- Completion friction: "Requires too many steps or clicks" is the top Field Worker App cancel reason (24 primary, 14 more as secondary). Customers want completion gatekeepers for signatures, photos and notes (Gong, web status rule "Only allow to select status if…").
- Today: the app has no stock availability in the catalog, no PO from mobile, and a Complete sheet whose reminders never block.

## 3. Permission levels in the prototype

| | Purchasing + billing | Approval + handoff |
|---|---|---|
| Parts Needed button | Create Purchase Order | Send Request to Office |
| PO number | Automatic (PO-1042) | Assigned on approval |
| Costs / prices | Shown | Hidden |
| Vendor | Required | Optional preference |
| Ends the job with | **Complete Job** | **Ready for Office Review** |
| Invoice, payments, balance | Shown, can collect payment | Hidden; office owns them |

## 4. Requirements by story (IDs map to the story numbers in Parts.docx)

### Parts and PO (Stories 1–7)
- **S1 Start the parts workflow.** A **Parts** tile on Job Details opens *Parts Needed*. It does not change job status, so the flow is not linear. Search by name or SKU (barcode icon stubbed). Every product shows **stock**: *Out of stock*, *Low · n*, or *n in stock*, with truck and warehouse split. Quantity and notes. The main button follows permissions.
- **S2 Create a PO from the job.** Job and customer prefilled. Vendor required. If the job already has products, a prompt offers to add them (pick which, adjust quantity; the job's own quantities never change). New products can also be added to Job Products, and the screen says so. Costs only where permitted. Review screen, then a confirmation, and the PO appears on the job.
- **S3 Request approval.** Same screens, no PO number, no costs, vendor optional. Ends in *Awaiting approval* with the office as owner. Restricted purchasing actions are not shown.
- **S4 POs on the job.** A Parts card on Job Details and a *Parts & POs* screen show PO number, vendor, item count, created time, status, received and outstanding quantities, inventory order reference, and the next owner. Statuses: Draft, Awaiting approval, Approved, Sent to vendor, Partially received, Received, Closed. Actions by permission: View, Email, Share, Delete (purchasers); View, Cancel (requests).
- **S5 Pause with a clear owner.** *Waiting on Parts* (the label is customer-defined) is a normal status in the picker. Its sheet states **This visit: Complete / Overall job: Not complete**, the part, PO or request status, next owner and expected next step. The job stays on My Work as active work, with the parts state under it.
- **S6 Track readiness.** Eight steps: Part requested, Awaiting approval, PO created, Ordered, Partially received, Received, Ready to schedule, Return visit scheduled. A summary bar sits on the job; the full list is on *Parts & POs*. When parts arrive, the owner becomes Dispatch.
- **S7 Resume.** The return visit shows why you are back, what was received (with the PO), the last note, and *Confirm Parts Used*, which updates Job Products and the invoice total.

### Completion (Stories 8–10)
- **S8 Checklist.** The Complete sheet becomes a checklist built from existing job records: customer signature, parts used, tasks, photos, notes; Completion form and Documents shown as *not applicable* in the demo. Each item is complete, incomplete or not applicable, with an action. **Required vs reminder:** in the demo only the signature is required. The main button stays disabled with "1 required item left" until it is signed; everything else is a reminder.
- **S9 Financial status.** With permission: invoice, total, paid, balance and *Collect Payment*. Without: a locked row saying the office handles it. Invoice total reflects parts recorded.
- **S10 Complete or hand off.** Purchasing + billing completes (or partially completes) the job. Approval + handoff selects **Ready for Office Review**; the job moves to Done today and no financial detail is shown.

## 5. Demo controls

The demo controls in the notes panel (**Show notes**, top right) switch permission level and play the events outside the app: office approves, PO sent, partial receipt, remaining part received, dispatch schedules the return visit, go to the return visit. Reset restores the starting state. The demo job is Greenfield Family Dental (the Home *Next up* job): the run capacitor and fan motor are out of stock, the contactor is on the truck.

## 6. Out of scope for this prototype

PO edit after save; PDF preview, email and share (toasts only); receiving against the PO from the phone; the Completion form and Docs screens; partial payments and payment methods; barcode scanning; notifications for parts events (they belong with the Notifications epics); offline behavior.

## 7. Dependencies and integration points

- **Catalog and inventory:** stock by truck and warehouse per product; inventory order created when a PO is sent.
- **PO engine:** numbering, vendors and payment terms from company configuration; statuses above; received quantities per line.
- **Status engine:** one customer-defined "waiting" status, a handoff status, and the existing "only allow if…" rules for what blocks completion.
- **Permissions:** purchasing, cost visibility, invoice and payment, and completion rights.
- **Scheduling:** "ready to schedule" signal to dispatch; return visit on the same job.
- **Activity log:** parts, PO and signature events.

## 8. Open questions

| ID | Question |
|---|---|
| PQ-1 | Which checklist items warn and which block completion? The demo requires only the signature. Is the rule per status, per company, or per job type? |
| PQ-2 | Should the signature requirement apply to every job (as in the prototype) or only where the status rule is configured? |
| PQ-3 | Can a purchaser create a PO with no vendor, or is vendor always required? |
| PQ-4 | Does "Send to Vendor" happen from the phone, or is it always an office step? |
| PQ-5 | What is the real stock model: per truck, per warehouse, or a company total? Does the tech see other technicians' trucks? |
| PQ-6 | When a part is partly received, can the tech start the return visit, or does the job wait for everything? |
| PQ-7 | Who is notified, and how, when parts are received or a return visit is scheduled? |
| PQ-8 | Should "Ready for Office Review" be an existing status or a new default? What does the office see? |
| PQ-9 | Can a technician add new products to Job Products from a PO, or only from the invoice or estimate? |

## 9. Acceptance criteria (epic level)

- A purchasing technician can go from a job to a saved PO tied to that job, with existing job products offered and new products added.
- A technician who needs approval can send a structured request and then sees *Awaiting approval* with the office as owner.
- Stock availability is visible before a product is added.
- Ending a visit for parts leaves the job active, shows who owns the next step, and Home moves on to the next job.
- Parts progress can be followed from the job through received, ready to schedule and return visit scheduled.
- On the return visit, the technician sees why they are back and can confirm parts used, which updates Job Products and the invoice total.
- The checklist shows required items and reminders. Required items stop completion; reminders do not.
- Restricted users never see costs, invoice, payment or balance information or the actions for them.
- A handoff technician finishes with *Ready for Office Review*; a billing technician can complete the job.

## 10. Suggested story breakdown (for refinement)

1. Parts tile, Parts Needed screen and catalog stock indicators
2. Create Purchase Order from a job (form, vendor, add job products, review, save)
3. Part request for approval (permission variant of 2)
4. Parts card on Job Details and *Parts & POs* screen (statuses, quantities, actions)
5. Waiting on Parts status and sheet; My Work and Home treatment
6. Parts tracker and return-visit readiness
7. Return visit card and Parts Used
8. Completion checklist with required and reminder items; signature capture
9. Job-level financial summary and payment
10. Complete vs Ready for Office Review by permission; analytics, accessibility and offline pass
