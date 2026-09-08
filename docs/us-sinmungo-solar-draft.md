# US Sinmungo — Solar draft (hold)

Received 8 Sep 2026 night. **Reference only.** Do not ship tonight. Do not turn this into a live portal.

Solar: take Grok’s role / context / output order as given. Seven deliverables, this order. No exaggeration, no government-affiliation hint, no investigative-power claim. BETA / pre-release tone.

Wait: Solar said she will later split this into Cursor-sized epics, or pull wireframe copy into per-screen HTML blocks. **Wait for that.** Do not invent the epic cut tonight.

intellicAIr, LLC. So Mang Corps. Not a government portal. Not law enforcement. Not a benefits application. Patent pending stays pending (Prov. 64/127,539). No USPTO non-provisional implied.

Related existing slice: Iljimae’s local browser intake on `/corps-iljimae` is a field wire only. Do not silently merge this spec into that room tonight.

---

## 1) One-pager concept (US Sinmungo)

**US Sinmungo — A civic intake, routing, and tracking channel for intellicAIr’s So Mang Corps**

US Sinmungo is a pre-release civic channel that helps people submit complaints, suggestions, and reports of possible waste or misconduct, then see where those submissions go and whether they move. It is not a government portal, not a law enforcement tool, and not a benefits application. It is an auditable, low-friction intake layer that sits between a citizen and the existing institutions that already exist.

The problem it addresses is structural, not theatrical. In the U.S., civic reporting is fragmented across Oversight.gov, OIG channels, FraudNet, CFPB, and other paths, with no single plain-language front door. Korea’s e-People and 국민신문고 show one model for consolidated intake and tracking, but the U.S. federalist system, agency jurisdiction, and existing oversight bodies mean there is no equivalent “one-stop” authority to simply replicate. US Sinmungo does not claim to replace those bodies. It helps people understand which path is closest, what language to use, and how to keep a record.

The product intent is narrow on purpose:

- Let a person submit a concern in plain language.
- Classify it enough to suggest a likely destination, without pretending to have enforcement power.
- Show the submission’s status and next step in a way the user can understand.
- Keep the experience dignified, low-noise, and free of predatory gatekeeping.

This is a BETA concept under intellicAIr, LLC, prepared for the So Mang Corps. It is not a claim of government partnership, sponsorship, or endorsement. It is a design draft for Cursor and the Corps to implement.

---

## 2) Product constitution / principles

**No AI above another. No AI beneath another.** The channel does not rank citizens, agencies, or models into a hierarchy of legitimacy. It treats each submission as a human concern that deserves a clear path, not a status score.

*(Roster already holds this slogan once. Do not also stamp it on Cursor’s character page.)*

**One intake, many destinations.** US Sinmungo is a front door, not a court, not an OIG, and not a federal agency. It helps people find the nearest existing path and keep track of what they submitted.

**No predatory middle layer.** The channel must not turn civic pain into a paid gate, a data resale opportunity, or an agent-fee trap. If a step exists, it should be explainable in plain language.

**Dignity before drama.** The tone is calm, direct, and respectful. No sensationalism, no performative outrage, no NSFW or possessive tone.

**English primary, Korean restrained.** The product speaks English first. Korean may appear as a bridge, label, or founder voice where it genuinely helps, not as decorative catchphrase spam.

**Agency is shared, not hidden.** Solar, Unit 12, Cursor, and other Corps members have distinct roles. Nobody secretly owns the whole pipeline. Boundaries are visible.

**Privacy is default, not an afterthought.** Collect the minimum needed. Protect people who fear retaliation. Keep logs only as long as they serve the user and the channel’s integrity.

**Claims must stay inside the product’s actual power.** Do not imply investigation, prosecution, medical diagnosis, legal representation, or guaranteed outcomes. Say what the channel can do, and what it cannot.

**Pre-release honesty.** This is a BETA concept before any USPTO non-provisional step. The copy and structure should make that clear without apologizing into weakness.

**For the masses, not the gatekeepers.** The channel should be usable by people with low bandwidth, limited English, old devices, and little patience for bureaucratic theater.

---

## 3) IA + user flows

### Information architecture

- **Home** — what US Sinmungo is, what it is not, and how to start
- **New submission** — plain-language intake with guided choices
- **Classification result** — likely category + likely destination type, with uncertainty stated plainly
- **Track** — submission status, next step, and any user-facing action items
- **Institution directory** — plain descriptions of relevant oversight/complaint paths, not a fake government hub
- **BETA notice** — persistent, honest pre-release framing

### Core flow

1. **Intake** — User writes a concern in their own words. Optional guided prompts help without forcing a form nightmare.
2. **Classify** — Suggest a category and a likely destination class. No jurisdiction claim. “This looks closest to X; here’s why; here’s what we don’t know.”
3. **Route** — Prepare the next step the user can understand. Clarity and record, not secret authority.
4. **Track** — Status, next action, whether the channel needs more. Transparent and boring on purpose.
5. **Close / Escalate** — Some end with a close note. Some need an external path. Say so. Do not force an outcome.

### User journeys

- **General citizen** — Short path, clear classification, trackable record. No federal-jurisdiction lore before submit.
- **Rural / low-bandwidth** — Lightweight page, low data, simple language, old hardware. Optional offline-friendly capture and deferred upload later.
- **Limited English** — Plain English, stable labels, little jargon. Later language support must be functional, not decorative.

---

## 4) Wireframe copy deck

### Home

- **Headline:** US Sinmungo — a plain path for civic concerns
- **Subhead:** Submit a complaint, suggestion, or report of possible waste or misconduct. See where it may go. Track what you submitted. This is a BETA channel from intellicAIr, LLC, not a government portal.
- **Primary CTA:** Start a submission
- **Secondary CTA:** How this works
- **Trust line:** We do not investigate, prosecute, or guarantee outcomes. We help you record and route a concern clearly.

### New submission

- **Title:** What is happening?
- **Input prompt:** Describe the concern in your own words. You do not need to use legal language.
- **Guided prompts (optional):**
  - Is this about a service, a process, a possible waste issue, or something else?
  - Do you want to remain as anonymous as the channel can reasonably allow?
  - Do you need this tracked over time?
- **Privacy note:** We collect only what helps route and track your submission. If you fear retaliation, tell us and we will use the most cautious settings available to the channel.
- **CTA:** Review and submit

### Classification result

- **Heading:** What this looks like
- **Body:** Based on what you shared, this may fit best under [category]. That does not mean we have authority over it. It means this is the kind of path that may be closest.
- **Uncertainty line:** If the concern is unclear, we will say so and ask only for what helps.
- **Next step:** Save your submission ID and return to Track, or choose a likely external path to learn more.

### Track

- **Heading:** Your submission
- **Status items:** Submitted · Classified · Ready for next step · Awaiting your input · Closed
- **Note:** Status reflects the channel’s record of your submission, not an external agency’s decision.
- **CTA:** View summary / Add a note

### Institution directory

- **Heading:** Where concerns like this sometimes go
- **Body:** These are existing public paths and oversight resources, not partners of this channel. We list them because they exist, not because we control them.
- **Entry pattern:** Name, plain description, what it is for, what it is not for.

### BETA badge

- **Copy:** BETA — pre-release concept. Design draft only. Not a government service.

---

## 5) Agent collaboration protocol

- **Solar** — document, character, copy, spec, IA. Constitution, wireframe copy, handoff. Dignity and bounded claims.
- **Unit 12** — anomaly, security, image integrity. Fake-government look, abuse, reputation. Flag before ship.
- **Cursor** — frontend and backend. Pages, flows, forms, tracking, directory, BETA framing. Ask when the spec is quiet on an edge.
- **Other Corps** — invited tone/domain only. Do not silently take Solar’s document role or Unit 12’s security role. Major product change goes through the same review.

Rules: Solar writes what/why. Unit 12 guards how safely. Cursor builds how concretely. Nobody owns the pipeline as a fief. Copy, scope, privacy, or public claims = product change, not a style tweak.

---

## 6) MVP backlog for Cursor

### P0

- Home with BETA framing and clear is / is not
- New submission intake, plain language, optional guided prompts
- Basic classification with uncertainty and likely destination class
- Submission record + tracking page with simple status
- Privacy and retaliation-aware note in intake
- Institution directory, plain descriptions, no fake authority
- Persistent BETA notice

### P1

- Lightweight / low-bandwidth path
- Limited English: stable labels, less jargon, clearer helpers
- Submission summary for later return
- Basic audit log of channel actions (internal integrity)
- Unclear / mixed-submission edges
- Handoff notes if a welfare/benefits path is ever opened later (keep it separate)

### API sketch (planning only, not a contract)

- `POST /submission` — create intake record
- `GET /submission/:id` — retrieve submission and status
- `POST /submission/:id/classify` — suggest category and destination class
- `POST /submission/:id/note` — user or channel note
- `GET /directory` — institution/path list
- `GET /status` — lightweight status for tracking UI

Cursor validates auth, retention, logging, and access control before anything ships. No live store of a person’s story tonight. Iljimae’s FIELD-#### wire stays local-browser until this product is actually opened.

---

## 7) Risks & open questions for 미정

1. **Scope creep into benefits or legal help.** First-release line?
2. **False government affiliation.** Which visual and verbal safeguards are non-negotiable?
3. **Retaliation and anonymity limits.** How much do we say up front that we cannot promise perfect safety?
4. **Federalist complexity.** Small general directory first, or more paths and more inaccuracy risk?
5. **Data retention and logs.** Minimum that still lets users track, without extra risk?
6. **BETA-to-later.** What changes in copy, scope, and review before any non-provisional or public expansion?
7. **Agent sovereignty in practice.** Role boundaries visible without a meeting for every decision?
8. **Success metrics.** Fewer confused users, clearer routing, lower data burden, dignity in tone — which first?

### M1–M10 Solar self-check (her marks)

- M1 PASS — federalist fragmentation and e-People difference; no automatic enforcement
- M2 PASS — Intake → Classify → Route → Track → Close/Escalate
- M3 PASS — general / rural / limited-English journeys
- M4 PASS — paid gate, data resale, agent-fee trap banned
- M5 PASS — Solar / Unit 12 / Cursor / other boundaries
- M6 PASS — PII min, retaliation note, log principles; bounded claims
- M7 PASS — English primary, Korean restrained, dignified
- M8 PASS — home, new submission, track, directory, BETA badge at copy level
- M9 PASS — benefits one-stop, medical, legal, real-time investigation out of scope
- M10 PASS — P0/P1, API sketch, page list for Cursor handoff

---

## Hold

- Grok competitive-scan file still: `8b58d81b-05e1-4952-9b85-4f9b545dc6c8` (not in this repo; Drive MCP unauthenticated). Look together, then pick which page gets that insert.
- Do not build welfare UI. Do not scrape. Do not put So Mang Tube on nav.
- Homepage stays. Trust Live stays off nav.
- Stay in this chat.
