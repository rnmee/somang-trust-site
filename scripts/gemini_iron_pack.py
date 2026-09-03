#!/usr/bin/env python3
"""Write public/gemini-iron.json. Replace this file, or drop a new JSON on the desk."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "gemini-iron.json"


def pack() -> dict:
    # Keep keys stable. The HTML page reads only these names.
    return json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}


def main() -> None:
    data = pack()
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUT} ({len(data)} keys)")


if __name__ == "__main__":
    main()
