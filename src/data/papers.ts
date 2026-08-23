export type Paper = {
  id: string;
  year: number;
  title: string;
  authors: string;
  venue: string;
  why: string;
  href: string;
  tags: string[];
};

export const papers: Paper[] = [
  {
    id: "ashrae-2011",
    year: 2011,
    title: "Gaseous and Particulate Contamination Guidelines for Data Centers",
    authors: "ASHRAE Technical Committee 9.9 (IT manufacturer members)",
    venue: "ASHRAE TC 9.9 white paper",
    why: "This is the industry rulebook. It sets ISO 14644-1 Class 8 as the data-center cleanliness target, MERV 8 recirculation / MERV 11–13 incoming air, dust deliquescent RH above 60%, and ISA 71.04 G1 corrosion limits. It is also the paper that tells you a server room does not need to be sterile.",
    href: "https://www.ashrae.org/File%20Library/Technical%20Resources/Publication%20Errata%20and%20Updates/2011-Gaseous-and-Particulate-Guidelines.pdf",
    tags: ["standard", "particles", "corrosion"],
  },
  {
    id: "ashrae-2009",
    year: 2009,
    title: "Particulate and Gaseous Contamination Guidelines for Data Centers",
    authors: "ASHRAE TC 9.9",
    venue: "ASHRAE TC 9.9 white paper",
    why: "Earlier version of the same guidance. Useful because it states the Class 8 + filtration recipe in plain language and points to ANSI/ISA-71.04 for gas-phase corrosion.",
    href: "https://www.ashrae.org/file%20library/technical%20resources/publication%20errata%20and%20updates/2009-gaseous-and-particulate-guidelines.pdf",
    tags: ["standard", "particles"],
  },
  {
    id: "shehabi-2008",
    year: 2008,
    title: "Particle concentrations in data centers",
    authors: "Arman Shehabi, Srirupa Ganguly, Lara I. Gundel, Arpad Horvath, Thomas E. McKone, M. M. Lunden, William W. Nazaroff, et al.",
    venue: "Atmospheric Environment 42 (2008) 5978–5990",
    why: "The best field paper on what dust actually looks like inside real data halls. Week-long size-resolved counts at eight Northern California sites. Indoor concentrations rose when outdoor air was used, but stayed below industry limits. Sulfate (hygroscopic) particles are flagged as the chemically dangerous fraction, not total dust mass.",
    href: "https://doi.org/10.1016/j.atmosenv.2008.03.049",
    tags: ["field study", "I/O ratio", "particles"],
  },
  {
    id: "shehabi-2009",
    year: 2009,
    title:
      "Can combining economizers with improved filtration save energy and protect equipment in data centers?",
    authors: "Arman Shehabi, Srirupa Ganguly, Lara I. Gundel, et al.",
    venue: "Building and Environment (2009)",
    why: "Measures indoor/outdoor particle ratios while swapping MERV 7 vs MERV 14 filters. Key result: MERV 14 with outdoor air can match or beat the particle load of a sealed hall with cheap filters. This is the paper that justifies spending on filtration instead of chasing a sterile room.",
    href: "https://doi.org/10.1016/j.buildenv.2009.08.009",
    tags: ["filtration", "I/O ratio", "energy"],
  },
  {
    id: "shehabi-lbl",
    year: 2009,
    title:
      "Impact of Data Center Air Filtration on Indoor Particle Concentrations (PG&E / LBNL)",
    authors: "Lawrence Berkeley National Laboratory / Shehabi et al.",
    venue: "LBNL / PG&E technical report",
    why: "Same campaign as the journal papers, with more operational detail and the Indoor Proportion of Outdoor Particles (IPOP) metric. Directly useful when you argue that the warehouse next door is a source term, not a mystery.",
    href: "https://datacenters.lbl.gov/sites/default/files/PG%26E%20Impact%20of%20Air%20Filtration_2009.pdf",
    tags: ["field study", "filtration"],
  },
  {
    id: "shehabi-thesis",
    year: 2009,
    title: "Energy Demands and Efficiency Strategies in Data Center Buildings",
    authors: "Arman Shehabi",
    venue: "UC Berkeley dissertation / LBNL-3551E",
    why: "Full treatment of data-center IAQ: eight sites, material-balance modeling of filtration vs deposition vs ventilation, and why ammonium sulfate/nitrate are the particles that become conductive after they settle.",
    href: "https://doi.org/10.2172/982905",
    tags: ["review", "particles", "hygroscopic"],
  },
  {
    id: "comizzoli-1993",
    year: 1993,
    title:
      "Corrosion of electronic materials and devices by submicron atmospheric particles",
    authors: "R. B. Comizzoli, J. P. Franey, et al. (Bell Labs / AT&T)",
    venue: "Cited throughout ASHRAE TC 9.9; original Bell Labs work",
    why: "The classic result ASHRAE still quotes: leakage current across settled fine dust on PCBs rises exponentially with relative humidity. Keeping room RH under about 60% keeps that leakage in the sub-µA range. This is why humidity is a harder number than particle count.",
    href: "https://www.ashrae.org/File%20Library/Technical%20Resources/Publication%20Errata%20and%20Updates/2011-Gaseous-and-Particulate-Guidelines.pdf",
    tags: ["hygroscopic", "RH", "failure"],
  },
  {
    id: "singh-ipc",
    year: 2018,
    title:
      "Characterization, Prevention and Removal of Particulate Matter on Printed Circuit Boards",
    authors: "Prabjit Singh, Levente Klein, Sarmenio Saliba, Christopher Muller",
    venue: "IPC APEX / IBM + Purafil",
    why: "Explains the actual electronics failure mode: dust is usually harmless while dry. Above its deliquescent relative humidity (DRH) it becomes an ionic film and shorts fine PCB features. Includes a practical DRH test on comb coupons and cleaning methods. Failures were seen even in rooms that already met ISA G1 for gases.",
    href: "https://www.circuitinsight.com/pdf/characterization_prevention_removal_particulate_matter_ipc.pdf",
    tags: ["hygroscopic", "failure", "IBM"],
  },
  {
    id: "shah-2019",
    year: 2019,
    title:
      "Development of a Technique to Measure Deliquescent Relative Humidity of Particulate Contaminants",
    authors: "Jimil M. Shah, Roshan Anand, Satyam Saini, Dereje Agonafer, Prabjit Singh, et al.",
    venue: "ASME InterPACK 2019 / later J. Electronic Packaging 2020",
    why: "Turns Singh’s DRH idea into a lab method (leakage current vs RH on an interdigitated coupon). Validated on MgCl2, NH4NO3, NaCl, then applied to dust from a real Dallas industrial data hall. This is how you would set a site-specific RH cap for Columbia Falls if you ever sample the warehouse dust.",
    href: "https://doi.org/10.1115/1.4047469",
    tags: ["hygroscopic", "method", "RH"],
  },
  {
    id: "agonafer-2017",
    year: 2017,
    title:
      "Qualitative Study of Cumulative Corrosion Damage of IT Equipment in a Data Center Utilizing Air-Side Economizer",
    authors: "Jimil Shah, Sadegh Khalili, H. Awe, Dereje Agonafer, Prabjit Singh, et al.",
    venue: "Journal of Electronic Packaging 139(2)",
    why: "Four-year Dallas pod study at ISA G2 outdoor air. Shows corrosion accumulating on hardware when humidity and gases are uncontrolled. Useful contrast: your 8×8 room should never ingest warehouse or outdoor air unfiltered.",
    href: "https://www.literature.mestek.com/dms/MestexMissionCritical/Qualitative%20Study%20of%20Cumulative%20Corrosion%20Damage.pdf",
    tags: ["corrosion", "field study"],
  },
  {
    id: "stafford-2021",
    year: 2021,
    title:
      "Cooling in poor air quality environments — Impact of fan operation on particle deposition",
    authors: "J. Stafford, C. Walsh, V. Egan",
    venue: "arXiv:2102.12807",
    why: "The mechanism paper for GPU fouling. Server fans create turbulent jets that slam PM2.5/PM10 onto boards and heat-exchange surfaces. Deposition velocity changes by an order of magnitude depending on fan operating point (clogged filter = different fan curve = different dirt pattern). Dust does not “throttle a GPU.” It changes the thermal resistance the GPU then throttles against.",
    href: "https://arxiv.org/abs/2102.12807",
    tags: ["deposition", "fans", "thermal"],
  },
  {
    id: "ashrae-edge-2020",
    year: 2020,
    title: "Edge Computing: Considerations for Reliable Operation",
    authors: "ASHRAE TC 9.9",
    venue: "ASHRAE technical bulletin, September 2020",
    why: "Written for small rooms like yours, not hyperscale halls. States plainly that dust and lint clog inlet filters and foul heat sinks, which raises fan power, cuts cooling efficiency, and can throttle processors. Repeats MERV 11/13 in, MERV 8 recirculated, and <300 Å/month Cu / <200 Å/month Ag.",
    href: "https://www.ashrae.org/file%20library/technical%20resources/bookstore/tb_edgecomputing_sep2020.pdf",
    tags: ["edge", "thermal", "standard"],
  },
  {
    id: "iso-14644",
    year: 2015,
    title:
      "ISO 14644-1:2015 Cleanrooms — Classification of air cleanliness by particle concentration",
    authors: "ISO/TC 209",
    venue: "International standard",
    why: "Defines ISO Class 1–9 using non-viable particle counts only (0.1–5 µm). It does not classify viable/microbial particles, temperature, humidity, or gases. Class 8 is the ASHRAE data-center target: 3,520,000 particles ≥0.5 µm per m³.",
    href: "https://www.iso.org/standard/53394.html",
    tags: ["standard", "non-viable"],
  },
  {
    id: "iso-14698",
    year: 2003,
    title:
      "ISO 14698 / EN ISO 17141 — Biocontamination control in cleanrooms",
    authors: "ISO / CEN",
    venue: "International standard (17141 superseded 14698 in the EU)",
    why: "This is the viable-particle (bacteria, mold, spores) standard the pharma labs use. Data centers are not required to meet it. Use it only if you want a quarterly mold/bacteria check of the old hot-tub / warehouse side, not as a GPU health metric.",
    href: "https://www.pmeasuring.com/application_note/a-review-of-en-iso-17141-iso-14698-and-particle-measuring-systems-microbial-instrumentation-conformance/",
    tags: ["standard", "viable"],
  },
  {
    id: "isa-7104",
    year: 2013,
    title:
      "ANSI/ISA-71.04-2013 Environmental Conditions for Process Measurement and Control Systems: Airborne Contaminants",
    authors: "International Society of Automation",
    venue: "Standard",
    why: "G1 “mild” is the warranty-safe gas environment: copper corrosion <300 Å/month, silver <200 Å/month in the ASHRAE adaptation. Gases (H2S, SO2, NOx, chlorine, ozone) kill boards faster than ordinary house dust. Relevant if the warehouse ever held chemicals, or during wildfire smoke season in northwest Montana.",
    href: "https://www.isa.org/products/ansi-isa-71-04-2013-environmental-conditions-for-p",
    tags: ["standard", "corrosion", "gases"],
  },
];
