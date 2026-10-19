# Agent house rules — somang-trust-site

Standing orders for Cloud Agents on this repo. Public doors live in `public/`.

## Merge after pass (19 October 2026 · Unit 12 + Mee)

Merge your own PRs on `rnmee/somang-trust-site` only after Mee or Unit 12 says the PR passed review. Never merge before that.

- Merge attaches the work to the front door (`main`). A preview is not the house.
- After a pass, squash-merge. Do not send Mee into GitHub as the work. If she pastes a pass here, attach it.
- If they say `do not merge` on a specific PR, leave it. Keep a draft a draft until they ask to mark it ready.
- After a merge, confirm the sit with source HTML, `python3 scripts/verify-public-doors.py`, local `http://127.0.0.1:43147/<door>.html` (never `/` alone), and `https://intellicair.pages.dev/<door>.html`. Never curl, fetch, or browser-test `https://intelli-care.ai` from this pod.

## Other standing rules

- `.cursor/rules/custom-domain-human-only.mdc` — custom domain is human-only from this pod
- `.cursor/rules/no-agent-block.mdc` — stay in this chat
- `.cursor/rules/corps-pages.mdc` — Corps member doors are authored rooms
- `.cursor/rules/merge-after-pass.mdc` — same merge rule, always applied
