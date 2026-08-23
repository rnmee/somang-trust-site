export const isoClass8 = [
  { size: "≥ 0.5 µm", limit: "3,520,000 / m³" },
  { size: "≥ 1.0 µm", limit: "832,000 / m³" },
  { size: "≥ 5.0 µm", limit: "29,300 / m³" },
];

export const operatingTargets = [
  {
    metric: "Non-viable particles",
    target: "ISO 14644-1 Class 8 at the rack inlet",
    throttle: "No. High counts predict faster heat-sink fouling, not an instant clock drop.",
  },
  {
    metric: "Inlet air temperature",
    target: "18–27 °C (ASHRAE recommended). Watch the GPU’s own limit, usually ~83–90 °C die.",
    throttle: "Yes. This is the number that throttles. Immediately.",
  },
  {
    metric: "Relative humidity",
    target: "30–50% practical band. Stay under 60% (deliquescence). Stay above ~20–25% (ESD) in a Montana winter.",
    throttle: "Indirect. Above ~60% RH, settled dust can become conductive. Very dry air raises ESD risk, not clocks.",
  },
  {
    metric: "Room pressure vs warehouse",
    target: "+0.02 to +0.05 in. w.c. (about 5–12 Pa)",
    throttle: "No. This is how warehouse dust and insects are kept out.",
  },
  {
    metric: "Gaseous corrosion",
    target: "ISA 71.04 G1: Cu <300 Å/month, Ag <200 Å/month",
    throttle: "No. This is a reliability / warranty number, not a clock number.",
  },
  {
    metric: "Viable particles (CFU)",
    target: "No ASHRAE GPU limit. Optional quarterly <500 CFU/m³ as a hygiene check.",
    throttle: "No. Mold is a people and building issue. It does not clock-gate a GB300.",
  },
  {
    metric: "PM2.5 mass (PurpleAir)",
    target: "Keep indoor PM2.5 near outdoor-clean baseline; spike only during door openings.",
    throttle: "No. Useful smoke alarm. Not an ISO class.",
  },
];
