# Epic: PO and Completion – Parts to Completion

Jira: SF-43631 · Prototype: [technician-happy-path.html](technician-happy-path.html) (demo controls are in the notes panel: **Show notes**, top right) · Builds on: [technician-happy-path-EPIC.md](technician-happy-path-EPIC.md)
Status: Early discovery · Platform: iOS · Source stories: `EPIC_POandCompletion/Parts.docx`

> The prototype is the source of truth for layout and interaction. This Epic captures intent and direct requirements. It extends the happy-path prototype; it does not add a navigation model.

## 1. Summary

Let a technician who finds a part is needed carry the job from diagnosis to close-out on the phone, with the right actions for their permissions:

**Job → PO button → add products from the invoice (with stock) → Create PO or Send Request → Waiting on Parts → part received → return visit → completion checklist → Complete Job or Ready for Office Review.**

The Job stays the central record. POs, visits, documentation, invoice and payments all hang off it, and every state shows **stage, owner and next step**.

**Where products live.** A job starts as one or more estimate options with products and services, the customer wins one, and it converts to a job whose invoice inherits that option's line items. Products are the only part of that which can need a PO. So the prototype has **no separate parts list**: the invoice's products are the starting point, and the PO button appears on jobs only (a PO makes little sense until the estimate is won, and different options carry different products).

## 2. Problem and evidence

- Field PO and parts access is a steady, year-long ask: ~83 citations in 12 months (Productboard), 97 of 314 tracked citations in 2026. Technicians have to call the office before materials can be ordered.
- Gong: the office wants to keep ordering authority. The common pattern is the technician sets the job to "waiting on parts", which notifies the office, and the office creates the PO. Customers want POs linked to jobs, visible PO status, and a way to schedule a return visit when parts arrive.
- Completion friction: "Requires too many steps or clicks" is the top Field Worker App cancel reason (24 primary, 14 more as secondary). Customers want completion gatekeepers for signatures, photos and notes (Gong, web status rule "Only allow to select status if…").
- Today: the app has no stock availability in the catalog, no PO from mobile, and a Complete sheet whose reminders never block.

## 3. Permission levels in the prototype

| | Purchasing + billing | Approval + handoff |
|---|---|---|
| Main button | Create Purchase Order | Send Request to Office |
| PO number | Automatic (PO-1042) | Assigned on approval |
| Costs / prices | Shown | Hidden |
| Vendor | Required | Optional preference |
| Ends the job with | **Complete Job** | **Ready for Office Review** |
| Invoice, payments, balance | Shown, can collect payment | Hidden; office owns them |

## 4. Requirements by story (IDs map to the story numbers in Parts.docx)

### Parts and PO (Stories 1–7)
- **S1 Start the PO workflow.** Two entry points, neither of which changes job status (so the flow is not linear): a **Create PO** button on each **product line of the invoice**, and a **POs** tile on Job Details for products that are not on the invoice. Both are for jobs only, never estimates. **Stock** shows where the technician decides what to order: the catalog picker (with truck and warehouse split) and the invoice product lines (*Out of stock*, *Low · n*, *n in stock*). It is not shown on the PO form or the PO itself. Notes live on the form. The main button follows permissions.
- **S2 Create a PO from the job.** The mobile PO form is the web form cut down: **Vendor** (required), **PO number** (automatic), **date**, **Reference / Memo**, the **item list** (product, quantity, unit cost, line total), **Vendor message** and the **item subtotal**. Left out: PO and receive status, ship-to, shipping method and address, payment terms, sent-by and sent-on, discount, sales tax and freight. Unit cost starts from the catalog's internal cost and is editable. **Vendor first, then products**: the technician picks the vendor (required), then searches or selects one or more of *that vendor's* products (a product carries its vendor). Changing the vendor removes products from the old one. A job with products from two vendors therefore gets two POs. A PO can start from a **Create PO button on an invoice product line** (prefilled with that product, quantity and vendor) or from the **POs** tile (search the catalog). Services have no PO button. Costs show only where permitted. The form doubles as the summary, so there is no separate review screen; saving confirms the PO and opens it in the job.
- **S3 Request approval.** Same screens, no PO number, no costs, vendor optional. Ends in *Awaiting approval* with the office as owner. Restricted purchasing actions are not shown.
- **S4 POs on the job.** The **POs** tile opens a *Purchase Orders* summary: the overall stage with a progress bar, who owns the next step, and one row per PO (number, vendor, item count, created time, status, received count). Tapping a row opens that **PO's details**: status, the received state, items with quantity and unit cost, the Inventory Order(s) once something is received, and its actions. Statuses: Draft, Awaiting approval, Approved, Sent to vendor, Partially received, Received, Closed. Actions per PO, by permission: Print, Email, Share, Delete (purchasers; web offers Print, Email, Delete); View, Cancel (requests). *New Purchase Order* on the summary adds another PO. Job Details itself carries no PO card, only the tile with a count badge.
- **S5 Pause with a clear owner.** *Waiting on Parts* (the label is customer-defined) is a normal status in the picker, and choosing it simply updates the job status, with no extra screen. The job stays on My Work as active work with the PO state under it, and Home moves on to the next job. The *Purchase Orders* screen then shows **This visit: Complete / Overall job: Waiting for parts** together with each PO's status, the next owner and the next step.
- **S6 Track readiness.** Eight steps: Part requested, Awaiting approval, PO created, Ordered, Partially received, Received, Ready to schedule, Return visit scheduled. The *Purchase Orders* summary shows them as a progress bar with the current stage, owner and next step; each PO's own details show only that PO's status. The job is ready to schedule once all its POs are received, and the owner then becomes Dispatch.
- **S7 Resume.** The return visit shows why you are back, what was received (with the PO), the last note, and *Confirm Parts Used*, which sets the quantities on the invoice and updates its total.

### Completion (Stories 8–10)
- **S8 Checklist.** The Complete sheet becomes a checklist built from existing job records: customer signature, parts used, tasks, photos, notes; Completion form and Documents shown as *not applicable* in the demo. Each item is complete, incomplete or not applicable, with an action. **Required vs reminder:** in the demo only the signature is required. The main button stays disabled with "1 required item left" until it is signed; everything else is a reminder.
- **S9 Financial status.** With permission: invoice, total, paid, balance and *Collect Payment*. Without: a locked row saying the office handles it. Invoice total reflects parts recorded.
- **S10 Complete or hand off.** Purchasing + billing completes the job through the checklist (Partially Completed is set from the status pill and simply updates the status; the checklist sheet has no Completed / Partially Completed switch). Approval + handoff selects **Ready for Office Review**; the job moves to Done today and no financial detail is shown.

## 5. Demo controls

The demo controls in the notes panel (**Show notes**, top right) switch permission level and play the events outside the app: office approves, PO sent, partial receipt, remaining part received, dispatch schedules the return visit, go to the return visit. Reset restores the starting state. The demo job is Greenfield Family Dental (the Home *Next up* job): the run capacitor and fan motor are out of stock, the contactor is on the truck.

## 6. Out of scope for this prototype

PO edit after save; services on POs (not allowed by design); PDF preview, email and share (toasts only); receiving against the PO from the phone; the Completion form and Docs screens; partial payments and payment methods; barcode scanning; notifications for parts events (they belong with the Notifications epics); offline behavior.

## 7. Dependencies and integration points

- **Catalog and inventory:** stock by truck and warehouse per product; inventory order created when a PO is sent.
- **PO engine:** automatic sequential numbering; vendor comes from the product, one per PO; payment terms from company configuration; statuses above; received quantities per line. Web "Company Preferences > Personalize Product Description On Purchase Orders" decides which product fields print on a PO; the PO email template ("PO email to Vendor") comes from Communication Templates.
- **Inventory:** receiving a PO (fully or partly) creates an **Inventory Order** (IO) that adds the quantities to a warehouse ("Received To"); several IOs can belong to one PO. Using products on a job or invoice takes them out of stock. The prototype mirrors this: stock goes up when a PO is received and down when parts are recorded as used. A PO can only hold products from the Product Catalog, and each line's unit cost starts from the catalog's Internal Cost (editable on the web).
- **Integrations:** POs sync with QuickBooks Online and Desktop.
- **Web parity:** on the web a PO is created from the job (More > Purchase Order) or from Jobs > Purchase Orders, appears on the job above Products and Services, and links to the Inventory Order(s) created when it is received. The web PO dashboard shows each PO's received state as a red, orange or green symbol (not, partly, fully received); the prototype uses the same colours.
- **Status engine:** one customer-defined "waiting" status, a handoff status, and the existing "only allow if…" rules for what blocks completion.
- **Permissions:** purchasing, cost visibility, invoice and payment, and completion rights.
- **Scheduling:** "ready to schedule" signal to dispatch; return visit on the same job.
- **Activity log:** parts, PO and signature events.

## 8. Open questions

| ID | Question |
|---|---|
| PQ-1 | Which checklist items warn and which block completion? The demo requires only the signature. Is the rule per status, per company, or per job type? |
| PQ-2 | Should the signature requirement apply to every job (as in the prototype) or only where the status rule is configured? |
| PQ-3 | Does a product have exactly one vendor, or a default plus alternatives? The prototype assumes one, set on the product, so the PO's vendor follows the first product. What happens for a product with no vendor? |
| PQ-4 | Does "Send to Vendor" (print or email, as on the web) happen from the phone, or is it always an office step? |
| PQ-5 | What is the real stock model: per truck, per warehouse, or a company total? Does the tech see other technicians' trucks? |
| PQ-6 | When a part is partly received, can the tech start the return visit, or does the job wait for everything? |
| PQ-7 | Who is notified, and how, when parts are received or a return visit is scheduled? |
| PQ-8 | Should "Ready for Office Review" be an existing status or a new default? What does the office see? |
| PQ-11 | Can a technician receive a PO on the phone (create the Inventory Order and pick the warehouse), or is receiving always an office or warehouse step? The prototype treats it as outside the app. |
| PQ-12 | Should the technician be able to edit a line's unit cost (the web allows it) or see the catalog's internal cost only? Should the PO carry a ship-to (shop, truck, customer)? Both are left out for now. |
| PQ-13 | How do the stories' statuses (Awaiting approval, Approved, Sent to vendor, Partially received, Received, Closed) map to the web's PO Status (Open…), "PO Sent By" and receive status? |
| PQ-9 | Can a technician add a product to the invoice from a PO (the prototype offers an optional switch, off by default, for invoice-rights users), or only from the invoice or estimate? |
| PQ-10 | Should the PO button be hidden for estimates until they are Won (prototype: jobs only)? Can a job created without an estimate still start a PO? |

## 9. Acceptance criteria (epic level)

- A purchasing technician can go from a job to a saved PO tied to that job, with existing job products offered and new products added.
- The invoice's products can be added to a PO with one tap each, and the PO never changes the invoice.
- A technician who needs approval can send a structured request and then sees *Awaiting approval* with the office as owner.
- Stock availability is visible before a product is added.
- Ending a visit for parts leaves the job active, shows who owns the next step, and Home moves on to the next job.
- Parts progress can be followed from the job through received, ready to schedule and return visit scheduled.
- On the return visit, the technician sees why they are back and can confirm parts used, which sets the invoice quantities and updates its total.
- The checklist shows required items and reminders. Required items stop completion; reminders do not.
- Restricted users never see costs, invoice, payment or balance information or the actions for them.
- A handoff technician finishes with *Ready for Office Review*; a billing technician can complete the job.

## 10. Suggested story breakdown (for refinement)

1. POs tile on jobs, stock indicators and the catalog product picker
2. Create Purchase Order from a job (form, vendor, add invoice products, review, save)
3. Part request for approval (permission variant of 2)
4. Purchase Orders card on Job Details and *Purchase Orders* screen (statuses, quantities, actions)
5. Waiting on Parts status and sheet; My Work and Home treatment
6. Parts tracker and return-visit readiness
7. Return visit card and Parts Used
8. Completion checklist with required and reminder items; signature capture
9. Job-level financial summary and payment
10. Complete vs Ready for Office Review by permission; analytics, accessibility and offline pass
