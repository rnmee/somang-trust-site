# Server-room air brief — intellicAIr, LLC

Internal research brief for the Columbia Falls, Montana headquarters: the 8×8 server room, the adjacent warehouse, dust (viable vs non-viable), and whether any of that throttles a GB300-class server.

## What this is

A single-page reference you can open, share with a contractor, or keep next to the PurpleAir display. It is not a building permit, an electrical design, or an NVIDIA install guide.

**The finding, in one line:** dust does not throttle a GPU. Heat does. Dust only helps heat win. ASHRAE wants ISO 14644-1 Class 8, not a sterile operating room.

**The machine on site:** Exxact Valence VWS-158270643 (NVIDIA DGX Station–class GB300 tower), 1600 W system power — not an NVL72 rack. The 12k BTU heat pump can hold ~1.7 kW of IT heat. The included C19-to-NEMA 5-15P cable cannot; this box needs a dedicated 20 A circuit.

## Run locally

```bash
npm install
npm run dev
```

The app listens on [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
npm start
```

## What is on the page

1. Direct answer and a short Korean summary
2. Why 12,000 BTU (~3.5 kW) is the number most likely to throttle you first
3. Viable vs non-viable particles, ISO Class 8 limits, and which metrics actually move GPU clocks
4. How warehouse dust couples into the server room (Shehabi / LBNL indoor–outdoor model)
5. Primary papers with links (ASHRAE TC 9.9, LBNL, IBM/Singh, ASME, ISO, ISA)
6. Buy list: lab particle counter, Vaisala T/RH, room-to-warehouse pressure, H14 FFU / Camfil, insect glue-board, Sherwin-Williams coatings

A PurpleAir Flex (indoor) was ordered 22 August 2026 and is on manufacturer backorder. It is not an outdoor wildfire station and not an ISO 14644 instrument.

## Before the crate opens

1. Confirm the exact GB300 model and nameplate kW (a full NVL72 rack is ~140 kW and liquid-cooled).
2. Epoxy the new slab and paint walls with Sherwin-Williams Pro Industrial Pre-Catalyzed Waterbased Epoxy (or the two-part catalyzed epoxy).
3. Seal the door and old hot-tub penetrations. Keep the room positive to the warehouse.
4. Do not unbox until Class 8 holds, RH is about 30–50%, and cooling has headroom for the real watts.

## Publish the research note to intelli-care.ai (Cloudflare)

**Homepage stays https://intelli-care.ai.** This note is a second page, not a replacement.

The file your OpenAI website agent should deploy is `public/tn-2026-01.html` (self-contained, no build).

1. Keep the existing company homepage at `/`.
2. Publish this file at **https://intelli-care.ai/research**.
3. Add a header and footer menu item on the main site: **Research → /research**. Do not make people type `tn-2026-01`.
4. 301-redirect `/tn-2026-01` and `/tn-2026-01.html` to `/research`. The document number stays on the page.
5. Do not rewrite the facts or the color name **Argos** (SW 7065).

Local preview of that same file:

- Short path: [http://127.0.0.1:43147/research](http://127.0.0.1:43147/research)
- File path: [http://127.0.0.1:43147/tn-2026-01.html](http://127.0.0.1:43147/tn-2026-01.html)

Prepared for Mee / intellicAIr, LLC.
