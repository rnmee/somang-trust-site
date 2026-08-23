export type Gear = {
  role: string;
  pick: string;
  why: string;
  est: string;
  href: string;
  priority: "buy" | "keep" | "skip" | "optional";
};

export const monitors: Gear[] = [
  {
    role: "ISO particle classification (the real dust number)",
    pick: "TSI AeroTrak+ 6310 or 6510 remote particle counter with integrated pump",
    why: "ISO 21501-4 calibrated optical particle counter. Reports particles/m³ at 0.3 / 0.5 / 1.0 / 5.0 µm — the units ISO 14644 and ASHRAE actually use. Has a pump so you do not need a house vacuum. Ethernet/Modbus so it can sit on your site display next to PurpleAir. This is the instrument a certification contractor would bring.",
    est: "$8,000–$16,000 + annual ISO 17025 calibration",
    href: "https://tsi.com/products/cleanroom-particle-counters/remote-particle-counters/aerotrak-plus-remote-particle-counter-with-integrated-pump-6000-series",
    priority: "buy",
  },
  {
    role: "Handheld survey / contractor check",
    pick: "TSI AeroTrak 9306-V2 or Lighthouse Handheld 3016 IAQ",
    why: "Walk the warehouse door, the heat-pump return, and the rack inlet. A remote counter tells you the room average; a handheld finds the leak. Same ISO 21501-4 class of instrument.",
    est: "$4,500–$9,000",
    href: "https://tsi.com/products/cleanroom-particle-counters/",
    priority: "buy",
  },
  {
    role: "Temperature + humidity (the number that actually throttles)",
    pick: "Vaisala HMP9 or HMM170 + Insight PC software, or two Vaisala GMW90s",
    why: "GPU clocks follow die temperature, and die temperature follows inlet air and humidity-driven fouling. Cheap thermo-hygrometers drift 3–5% RH. Vaisala HUMICAP is what labs and ASHRAE field studies use. Put one at the rack inlet, one at the heat-pump return.",
    est: "$800–$2,200",
    href: "https://www.vaisala.com/en/products/instruments-sensors-and-other-devices/instruments-industrial-measurements/hmp9",
    priority: "buy",
  },
  {
    role: "Room vs warehouse pressure",
    pick: "Setra Model 264 or 265 differential pressure transducer, 0–0.25 in. w.c.",
    why: "This is the adjacent-room instrument. You want the server room +0.02 to +0.05 in. w.c. above the warehouse. If this number goes to zero or negative, warehouse dust (and bugs) walk in under the door. PurpleAir cannot see this.",
    est: "$350–$700",
    href: "https://www.setra.com/product/pressure/model-264",
    priority: "buy",
  },
  {
    role: "Already purchased — keep it for wildfire / PM2.5",
    pick: "PurpleAir Flex",
    why: "Good public PM2.5 mass estimate (Plantower PMS). Useful for Montana wildfire season and for a live website widget. It is not an ISO 14644 instrument, cannot count 0.5 µm particles to Class 8, cannot see viable organisms, and cannot see corrosive gases. Do not use it as the warranty or cleanliness record.",
    est: "Already on order",
    href: "https://www2.purpleair.com/products/purpleair-flex",
    priority: "keep",
  },
  {
    role: "Corrosive gases (ISA 71.04 G1)",
    pick: "Purafil OnGuard Smart, or 30-day copper/silver corrosion coupons analyzed by Purafil / ISA lab",
    why: "Dust you can see. Sulfur and chlorine you cannot. G1 is Cu <300 Å/month and Ag <200 Å/month. One coupon campaign after the epoxy cure and again during wildfire season is enough for a room this small.",
    est: "$400 coupons / $3,000–$6,000 OnGuard",
    href: "https://www.purafil.com/products/monitors/onguard/",
    priority: "optional",
  },
  {
    role: "Viable particles (mold / bacteria) — quarterly only",
    pick: "SAS Super 180 microbial air sampler + local lab plates (TSA + MEA)",
    why: "Your old hot-tub slab and warehouse storage are a mold risk, not a GPU-clock risk. ISO 14698 / EN 17141 sampler. Run 1 m³ at the warehouse, the doorway, and the rack inlet after epoxy cure. You do not need continuous viable monitoring in a server room.",
    est: "$3,500–$5,500 + ~$80/sample lab fees",
    href: "https://biosci-intl.com/products/sas_100_180.htm",
    priority: "optional",
  },
];

export const cleaners: Gear[] = [
  {
    role: "Continuous dust removal in the 8×8 (best long-term)",
    pick: "2×4 ft fan-filter unit (FFU) with factory-scan-tested H14 HEPA, ceiling-mounted, exhausting into the room",
    why: "This is how a real cleanroom makes ISO 8 in a closet: filtered air in, positive pressure out through door gaps. One 2×4 H14 FFU at ~500–700 CFM gives an 8×8×8 room roughly 60–80 air changes per hour. Brands: Terra Universal, Cleanroom World, Abatement / ACH. Duct the heat pump so it does not fight the FFU.",
    est: "$2,500–$6,000 installed",
    href: "https://www.terrauniversal.com/fan-filter-units/",
    priority: "buy",
  },
  {
    role: "Portable scrubber you can move between warehouse and room",
    pick: "Camfil City M (individually scan-tested H14 + molecular/carbon) or IQAir CleanZone 5000 if you want hospital-grade airflow",
    why: "H14 is 99.995% at MPPS. Carbon stage also eats wildfire VOC and some corrosive gases. City M is quiet enough to leave on 24/7 in 64 ft². Run it in the warehouse for a week after construction, then park it in the server room as a second stage under the FFU.",
    est: "$1,800–$4,500 (City M) / $8,000–$12,000 (CleanZone)",
    href: "https://www.camfil.com/en/products/air-cleaners-,-a-,-air-purifiers/city-air-purifiers/city/city-m-_-27783",
    priority: "buy",
  },
  {
    role: "Construction / concrete-dust blast after epoxy grind",
    pick: "Abatement Technologies PREDATOR or HEPA-CARE portable negative-air machine, then flip the room to positive",
    why: "Fresh concrete and epoxy grind put out a huge non-viable load. A true negative-air HEPA machine is what restoration contractors use. Do not open the GB300 box until particle counts fall and stay at Class 8.",
    est: "$2,000–$4,500 or rent",
    href: "https://www.abatement.com/",
    priority: "buy",
  },
  {
    role: "Surface dust (the stuff already sitting on floors and racks)",
    pick: "Nilfisk or Pullman-Holt critical-filter HEPA vacuum, plus microfiber, no dry sweeping",
    why: "Household vacuums exhaust fine dust. HEPA vacuums are required in ISO-classified spaces. Vacuum the warehouse side of the door weekly. Never blow the room out with compressed air near an open server.",
    est: "$600–$1,400",
    href: "https://www.nilfisk.com/",
    priority: "buy",
  },
];

export const pests: Gear[] = [
  {
    role: "Flying insects — warehouse / vestibule only",
    pick: "PestWest Chameleon or Insect-O-Cutor / Pelsis glue-board UV trap (shatterproof UV-A lamps)",
    why: "Glue boards catch the insect whole. Electric zappers explode insects into fragments that become extra dust and can short boards. Mount the trap in the warehouse or a vestibule, never above the rack. Check the board weekly — it is also a monitor.",
    est: "$250–$600",
    href: "https://pestwest.com/",
    priority: "buy",
  },
  {
    role: "Exclusion (this beats any gadget)",
    pick: "Pemko or Zero door sweep + silicone firestop on every conduit + sticky mat at the threshold",
    why: "Bugs follow air, light, and food. A positively pressured, sealed, dry room with no cardboard and no crumbs is hostile habitat. Seal the old hot-tub penetrations. Keep warehouse lights dimmer than the trap, not the server room.",
    est: "$80–$300",
    href: "https://www.pemkomfg.com/",
    priority: "buy",
  },
  {
    role: "Do not buy",
    pick: "Ultrasonic repellers, essential-oil diffusers, foggers, diatomaceous earth, bug zappers inside the room",
    why: "Ultrasonics are not evidence-based. Oils and foggers are VOCs that wreck ISA 71.04 corrosion numbers and can void hardware warranties. Diatomaceous earth is silica dust — the opposite of a clean room.",
    est: "Skip",
    href: "https://fox-pest.com/commercial/blog/data-center-pest-control-what-facility-managers-need-to-know/",
    priority: "skip",
  },
];

export const finishes: Gear[] = [
  {
    role: "Walls — the Sherwin-Williams product you were probably quoted",
    pick: "Sherwin-Williams Pro Industrial Pre-Catalyzed Waterbased Epoxy, Eg-Shel (K45 series)",
    why: "This is the one-part “best commercial epoxy paint” SW stores push when someone says server room / hospital / cleanable. Low odor, scrubbable, does not shed like flat latex. SW’s own Data Center Facility Guide also lists Pro Industrial Waterbased Catalyzed Epoxy (two-part, harder) and Pro Industrial Acrylic for server halls.",
    est: "Store quote, usually $80–$120/gal",
    href: "https://industrial.sherwin-williams.com/content/dam/pcg/sherwin-williams/protective-marine/na/us/en-us/pdfs/marketing-uploads/Data-Center-Facility-Guide-SW.pdf",
    priority: "buy",
  },
  {
    role: "Floor — seal the concrete so it stops dusting",
    pick: "Two-part 100% solids epoxy (Sherwin-Williams Resuflor / ArmorSeal, or any industrial floor epoxy) over shot-blasted or diamond-ground slab",
    why: "Bare concrete is a particle generator forever. You already poured. Grind, vacuum with HEPA, then epoxy. Light gray so dust shows. No flake broadcast if you want fewer crevices. Cure fully and ventilate before the server is unboxed — epoxy VOC is a short-term ISA 71.04 event.",
    est: "$3–$8 / ft² materials, more installed",
    href: "https://industrial.sherwin-williams.com/home/protective-marine/us/en/resin-flooring.html",
    priority: "buy",
  },
];
