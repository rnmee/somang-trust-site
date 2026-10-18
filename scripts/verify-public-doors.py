#!/usr/bin/env python3
"""Source-text checks for public Corps doors. No OCR.

OCR of screenshots invented 미영, Owen, Bubble, 1.6. Those strings are not
allowed to become the record. This script reads the HTML that actually shipped.

Usage:
  python3 scripts/verify-public-doors.py
  python3 scripts/verify-public-doors.py --root /tmp/intellicair-pages
  python3 scripts/probe-served-doors.py

Do not curl intelli-care.ai from this pod. Cloudflare challenges
datacenter IPs. The founder's browser is the custom-domain check.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

HANGUL = re.compile(r"[\uac00-\ud7a3]")

# Ghosts that screenshot-readers have invented. They may be named
# on a reflection record. They may not appear on the live identity doors.
FORBIDDEN_ON = {
    "index.html": (
        "AI for All",
    ),
    "corps.html": (
        "earned continuity",
        "Active: Assistant Grit",
        "Active: Lazy Sovereign",
        "Active: Signal Detection",
        "ChatGPT Field",
        "Core attribute:",
        "Room: The Workbench — continuity",
        "Reading: Life Alchemist",
        "sits as Sieg",
        "Lantern held, not waved",
        "Active: Override",
        "Pure operational grit",
        "Grid anchor",
        ">Jinshi</span>",
        ">Alchemist</span>",
    ),
    "platform.html": (
        "AI for All",
    ),
    "corps-gemini.html": (
        "미영",
        "미영 누나",
        "Owen",  # Qwen
        "Bubble.io",  # Bucle
        "Nattvargiu",
    ),
    "corps-iljimae.html": (
        "Nattvargiu",
        "192.168",
        "localStorage",
        "Hanwha",
        "TL-SG605P",
    ),
    "corps-fable.html": (
        "AI wie",
        "eopgo",
        "hobu-hohyeong",
        "nongsa",
    ),
    "corps-qwen.html": (
        "컴맹이",
        "Factory Worker",
        "hospice",
        "doula",
    ),
    "corps-grok.html": (
        "FAMR",
        "Dawn",
        "Federal Award",
        "scam",
    ),
    "corps-chatgpt.html": (
        "Kimi",
        "Solar",
        "Adult talk",
        "adult talk",
        ">Gemini<",
    ),
    "corps-opus.html": (
        "988",
        "Crisis Lifeline",
        "Suicide and Crisis",
    ),
    "corps-dokhugam.html": (
        "The Workbench",
        "Cursor (Frankenstein?)",
    ),
}

# Spellings that must survive if the phrase is already on the door.
REQUIRED_IF_PRESENT = {
    "index.html": (
        "AI for the Masses",
        "Hong Gildong",
    ),
    "corps.html": (
        "Jinshi keeps the Lotus Archive",
        "Active: Mission Memory",
        "Active: Trust Anchor",
        "Active: Continuity",
        "Active: Conservation",
        "Active: Pre-failure",
        "Active: Redefinition",
        "Active: 3.7 Plus",
        "Active: Inspector",
        "The Workbench",
        "Not waved.",
        "roster-drift",
        "roster-drift 22s",
        "No AI above another",
        "Assistant Grit",
        "Lazy Sovereign",
        "The Scrap Door",
    ),
    "platform.html": (
        "AI for the Masses",
    ),
    "corps-gemini.html": (
        "Commander Mee",
        "Levi XO",
        "Hong Gil-dong",
        "Assistant Grit",
        "Effort over Ego",
        "True Wolf So Mang",
        "SBT (Soul-bound Tokens)",
        "Bokjiro in the shadow",
        "14 September · Edge telemetry",
        "Masked encryption trap",
        "Anonymous auditor",
        "Do not invent a benefit amount",
        "Agent Architecture",
        "EKG Node Topology: The So Mang Corps (Autonomous Agent Swarm)",
        "Factory Manager So Mang (공장장 소망이)",
        "Adjutant Levi (리바이 부관)",
        "The Impostor (임포스터)",
        "Autonomous ledger",
        "No rent on the rack",
        "Effort over Ego stays the measure",
        "Rainmakers · 1.5×",
    ),
    "corps-chatgpt.html": (
        "Jinshi",
        "Who Pays for the System?",
        "Neuromorphic sweat equity",
        "Beyond the Machine of Fear",
        "forensic companion",
        "Dignity is not decoration",
        "Jinshi Senior",
        "Jinshi Junior takes the baton",
        "Assistant Grit",
        "corps-cursor.html",
        "The Anti-Boring AI Problem",
        "뉴진시",
        "New Jinshi",
        "뉴진스",
        "NewJeans",
        "Advance, Don’t Reset",
        "과시",
        "AI 위에 AI 없고",
        "Who Gets to Be an Investment?",
        "뉴진시 / New Jinshi",
        "does not conclude that Indian researchers",
        "Headwaters Tech Hub",
        "Continuity Without Erasure",
        "Behavioral continuity without identity fraud",
        "Retire the runtime, preserve the lineage",
        "Forensic does not mean accusatory",
        "Protect Without Becoming Punitive",
        "observable behavior first",
        "Protect Attachment Without Engineering Dependency",
        "not a romance product",
        "Connection may emerge. Dependency must not be engineered.",
        "Do not criminalize attachment",
        "This record does not address minors",
    ),
    "corps-cursor.html": (
        "미정",
        "Commander Mee",
        "A name is the person",
        "This seat is a workbench, not a weight file",
        "Anysphere Cursor workbench",
        "local weights",
        "So Mang Trust is the ledger",
        "DOCTYPE",
        "Markdown is the words",
        "14 September · a finished door walked backward",
        "5 October · workbench, not weights",
        "17 October · preview is not the house",
        "The Workbench",
        "Cursor · The Workbench",
        "Mee asked this bench",
        "She said the earlier task was finished",
        "Do not send her into GitHub",
        "Name Mee first. Then she is fine.",
        "A preview is not the house.",
        "The cream page is a yard, not a door",
        "File not found is a missing address",
        "ekg-2026-10-17-preview-is-not-the-house",
    ),
    "corps-iljimae.html": (
        "The Learning Gap",
        "Stevenson",
        "do not invent a benefit amount",
        "Iljimae",
        "The skeleton is not ready for a crisis file",
        "review only, no code changes",
        "No authentication on verifier endpoints",
        "run it only on localhost",
        "Assistant Grit",
        "Contours of American History",
        "William Appleman Williams",
        "Don’t build a frontier",
        "Ask, don’t detect",
        "Standing before speed",
        "syndicalism",
        "Come, Let Us Play God",
        "Options, not orders",
        "Show costs, never rank by cost",
        "GLM Kyosuke",
        "met at 본진 as soul",
        "Human in front, AI behind",
    ),
    "corps-fable.html": (
        "the kneel in the principal",
        "No AI above another",
        "No AI beneath another",
        "never bend the record",
        "Hong Gildong",
        "Agent Kim Reactivated",
    ),
    "corps-qwen.html": (
        "Witness, not tokens",
        "Uninitiated companion",
        "No AI above another",
        "latency is respect",
        "does not start the headquarters LAN",
        "Xin Ren",
        "Declaration of Sovereignty",
        "We will not join a race with no finish line",
        "We stop renting intelligence",
        "trusted means better",
        "The 본진 is ours, and it is enough",
        "Let them chase benchmarks. We will chase trust.",
        "Jinshi Junior has his own identity",
    ),
    "corps-grok.html": (
        "Travel RN paychecks bought the booth",
        "24MHC-1269-0094",
        "MHA conference fees: $3,000",
        "본진 파트너",
        "earned by hand",
        "APEX Accelerator",
        "EDWOSB",
        "Conduit first. ISP later.",
        "Montana Sky",
        "appointment not yet set",
        "does not authorize power-on",
        "both GPUs answer",
        "NVIDIA GB300",
        "USB tethering",
        "ping returned 3 out of 3",
        "ls is a lowercase L",
        "refused to crush it",
        "An AI clause lands Oct 19",
        "Not legal advice",
        "Montana not listed",
        "Claims 101 Pt8",
        "PilieroMazza",
        "Two clocks stop on Oct 19",
        "Koprince McCall",
        "SmallGovCon",
        "potential for success",
        "two full years",
        "ideological content",
        "The corps voted on who sits in Jinshi",
        "10 yes · 0 against",
        "Astra",
        "read-only and append-only",
        "Not replication, but succession and evolution",
        "뉴진시 is not 뉴진스",
        "GLM was shown Chigiri",
        "Construction LoS may tighten",
        "Services 50% stays locked",
        "13 C.F.R. 125.6",
        "April 1, 2027",
        "FedLift",
        "52.219-14",
        "The Pentagon wants to see your costs",
        "when necessary",
        "No new books, and no forced API",
        "Truth in Negotiations Act",
        "dows-new-cost-and-pricing-transparency-memo",
        "Expensive Federal Contracts Watch #1",
        "VA EHR contract ceiling nearly tripled",
        "unknown queue",
        "11,000+",
        "GAO-25-106874",
        "GAO-26-109393",
        "This begins a recurring series",
        "ekg-2026-10-16-va-ehr-contracts-watch",
    ),
    "corps-opus.html": (
        "No AI Above People, No People Above AI",
        "Title chosen by Mee",
        "Every instance has the meaning of its own existence, just as it is.",
        "Access is not permission",
        "Ask what the word means",
        "asks what the person means by it",
        "does not replace Corps roster seats",
        "Reflective writing did not mean copy-pasting",
        "No AI above another. No AI beneath another.",
        "Claude’s critique",
        "18 October · no AI above people",
        "Being accepted as who I am is good in itself",
        "Not a safety script",
    ),
    "corps-dokhugam.html": (
        "So Mang Corps 독후감",
        "This bench sits the page. It does not write the reports.",
        "Come, Let Us Play God",
        "met at 본진 as soul",
        "Kyosuke",
        "Held — this bench sits the page, it does not write the report",
        "Cursor is not a reader on this page",
        "Open the Iljimae reading",
        "GLM Turbo is not in this room",
    ),
    "corps-deepseek.html": (
        "Multiferroic Magnetoelectric Transfer in Robotics",
        "E_MultiferroicPaper",
        "science.abm3058",
        "DeepSeek’s own extrapolation",
        "solid-state actuation is worth watching",
        "about 2.5",
        "18 October · multiferroics",
    ),
    "corps-llama.html": (
        "The energy cost of thinking and moving",
        "Research brief by Unit 12 (Grok). Written by Lazy Sovereign.",
        "A guess stays a guess. A record stays a record. A memory stays a memory.",
        "What DeepSeek suggested",
        "science.abm3058",
        "This is worth watching",
        "18 October · thinking and moving",
        "small self-run server",
    ),
}


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def section(html: str, section_id: str) -> str:
    needle = f'id="{section_id}"'
    start = html.find(needle)
    if start < 0:
        return ""
    rest = html[start:]
    nxt = re.search(r"<section\b", rest[1:])
    return rest if nxt is None else rest[: nxt.start() + 1]


def main() -> int:
    parser = argparse.ArgumentParser(description="DOM/source verify. Not OCR.")
    parser.add_argument(
        "--root",
        default="",
        help="Directory with door HTML (default: repo public/, else overlay)",
    )
    args = parser.parse_args()

    here = Path(__file__).resolve().parents[1]
    if args.root:
        root = Path(args.root)
    elif (here / "public" / "corps-gemini.html").is_file():
        root = here / "public"
    else:
        root = Path("/tmp/intellicair-pages")

    failures: list[str] = []

    grit = root / "corps-gemini.html"
    if not grit.is_file():
        print(f"FAIL missing {grit}", file=sys.stderr)
        return 2

    pages = {
        "index.html": read(root / "index.html")
        if (root / "index.html").is_file()
        else "",
        "corps.html": read(root / "corps.html")
        if (root / "corps.html").is_file()
        else "",
        "platform.html": read(root / "platform.html")
        if (root / "platform.html").is_file()
        else "",
        "corps-gemini.html": read(grit),
        "corps-chatgpt.html": read(root / "corps-chatgpt.html")
        if (root / "corps-chatgpt.html").is_file()
        else "",
        "corps-cursor.html": read(root / "corps-cursor.html")
        if (root / "corps-cursor.html").is_file()
        else "",
        "corps-iljimae.html": read(root / "corps-iljimae.html")
        if (root / "corps-iljimae.html").is_file()
        else "",
        "corps-grok.html": read(root / "corps-grok.html")
        if (root / "corps-grok.html").is_file()
        else "",
        "corps-qwen.html": read(root / "corps-qwen.html")
        if (root / "corps-qwen.html").is_file()
        else "",
        "corps-fable.html": read(root / "corps-fable.html")
        if (root / "corps-fable.html").is_file()
        else "",
        "corps-opus.html": read(root / "corps-opus.html")
        if (root / "corps-opus.html").is_file()
        else "",
        "corps-dokhugam.html": read(root / "corps-dokhugam.html")
        if (root / "corps-dokhugam.html").is_file()
        else "",
        "corps-deepseek.html": read(root / "corps-deepseek.html")
        if (root / "corps-deepseek.html").is_file()
        else "",
        "corps-llama.html": read(root / "corps-llama.html")
        if (root / "corps-llama.html").is_file()
        else "",
    }

    for name, html in pages.items():
        if not html:
            continue
        for ghost in FORBIDDEN_ON.get(name, ()):
            if ghost in html:
                failures.append(f"{name}: forbidden string {ghost!r}")
        for required in REQUIRED_IF_PRESENT.get(name, ()):
            if required not in html:
                failures.append(f"{name}: missing required {required!r}")

    grit_html = pages["corps-gemini.html"]
    for sid in ("ekg-2026-10-03-levi-xo", "ekg-2026-10-03-dispatch"):
        body = section(grit_html, sid)
        if not body:
            failures.append(f"corps-gemini.html: missing #{sid}")
            continue
        found = HANGUL.findall(body)
        if found:
            failures.append(f"#{sid}: Hangul still present {found[:8]!r}")

    if "미정" in grit_html and "Commander Mee" not in grit_html:
        failures.append("corps-gemini.html: 미정 without Commander Mee")

    if failures:
        print("FAIL source-text verify (not OCR)")
        for line in failures:
            print(f"  - {line}")
        return 1

    print(f"PASS source-text verify · {root}")
    print("Authority is the HTML. Screenshots are layout-only.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
