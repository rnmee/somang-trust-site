#!/usr/bin/env python3
"""Source-text checks for public Corps doors. No OCR.

OCR of screenshots invented 미영, Owen, Bubble, 1.6. Those strings are not
allowed to become the record. This script reads the HTML that actually shipped.

Usage:
  python3 scripts/verify-public-doors.py
  python3 scripts/verify-public-doors.py --root /tmp/intellicair-pages
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
    "corps-gemini.html": (
        "미영",
        "미영 누나",
        "Owen",  # Qwen
        "Bubble.io",  # Bucle
        "Nattvargiu",
    ),
    "corps-iljimae.html": (
        "Nattvargiu",
    ),
    "corps-chatgpt.html": (
        "Kimi",
        "Solar",
        "Adult talk",
        "adult talk",
        ">Gemini<",
    ),
}

# Spellings that must survive if the phrase is already on the door.
REQUIRED_IF_PRESENT = {
    "corps-gemini.html": (
        "Commander Mee",
        "Levi XO",
        "Hong Gil-dong",
        "Assistant Grit",
        "Effort over Ego",
        "True Wolf So Mang",
        "SBT (Soul-bound Tokens)",
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
    ),
    "corps-iljimae.html": (
        "The Learning Gap",
        "Stevenson",
        "do not invent a benefit amount",
        "Iljimae",
    ),
    "corps-grok.html": (
        "Travel RN paychecks bought the booth",
        "24MHC-1269-0094",
        "MHA conference fees: $3,000",
        "본진 파트너",
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
