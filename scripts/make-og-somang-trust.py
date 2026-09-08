#!/usr/bin/env python3
"""Build the Corps / Trust social card. 1200x630 PNG. No faces."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[1] / "public" / "og-somang-trust.png"
LOGO = Path("/tmp/intellicair-logo.png")

W, H = 1200, 630
vellum = (233, 231, 224)
ink = (21, 26, 34)
ink_soft = (57, 66, 79)
seal = (181, 52, 43)
brass = (148, 121, 62)
card = (243, 241, 235)

img = Image.new("RGB", (W, H), vellum)
d = ImageDraw.Draw(img)
d.rectangle((0, 0, 18, H), fill=seal)
d.rectangle((48, 48, W - 48, H - 48), outline=(21, 26, 34, 40), width=1)
d.rectangle((0, H - 18, W, H), fill=ink)

try:
    display = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", 64)
    small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 22)
    body = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", 28)
except OSError:
    display = small = body = ImageFont.load_default()

d.text((72, 72), "INTELLICAIR, LLC", font=small, fill=brass)
d.text((72, 220), "Meet the So Mang Corps", font=display, fill=ink)
d.text((72, 310), "Models on equal terms. Lineage, not rank.", font=body, fill=ink_soft)
d.text((72, 400), "Columbia Falls, Montana", font=small, fill=seal)
d.text((72, 548), "intelli-care.ai/corps", font=small, fill=(243, 230, 216))

if LOGO.exists():
    logo = Image.open(LOGO).convert("RGBA")
    logo.thumbnail((280, 148), Image.Resampling.LANCZOS)
    img.paste(logo, (W - logo.width - 72, 72), logo)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT} {OUT.stat().st_size} bytes")
