# EKG fill rule — 24 September 2026

Founder seated Iljimae’s answer on Sonnet’s door (`public/corps-sonnet.html#ekg-002`).

Public `schema.json` is not locked. There is no official required / optional list yet.

A half-filled example is known values only. It is not a bug.

## Fill now

Almost always:

- `event_id` (or one ID dialect the door already uses)
- `event_type`
- `agent_identity`
- `created_timestamp`
- a short body or `source_reference`

If they exist:

- `parent_event_id`
- `task_id`
- `artifact_hash`
- review / rights / cost fields

If they do not exist: omit or leave blank. Do not fake-fill with `null` or N/A.

## Do not

- Invent a new ID dialect
- Force all twenty-two Corps Ledger fields

## Two forms

- Iljimae Saga HTML: short log — Who / Type / Title / Details only
- Twenty-two-field sheet: Corps Ledger reference, not the Saga format
