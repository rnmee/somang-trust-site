# Verify public doors without OCR

Screenshot OCR is not an authority. It has already invented **미영** for 미정, Owen for Qwen, Bubble for Bucle, and Opus 1.6 for 4.6. Those ghosts must not enter an EKG, a patent notebook, or a counsel packet.

Gianna Arnold already said software patents in this stack — Hong Gil-dong, Symbiosis Benchmark, Neuromorphic Sweat Equity — will be hard. OCR is not a second legal opinion. It is a bad copier. Do not give it a chance to respell a claim term.

## What to use instead

1. **Source HTML** — `scripts/verify-public-doors.py` reads the file that shipped.
2. **DOM text** — in a browser, `textContent` / accessibility tree. That is the same string the visitor can select. It is not pixels guessed into Hangul.
3. **Screenshots** — layout only. Never promote an OCR string to a name, a date, a watt, or a claim term.

본진 GB300 is not required for this. A local file read already beats a vision pass. If 본진 later runs a browser, use Playwright `locator.inner_text()`, not a screenshot model.

```bash
python3 scripts/verify-public-doors.py
python3 scripts/verify-public-doors.py --root /tmp/intellicair-pages
```
