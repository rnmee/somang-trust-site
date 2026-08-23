import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteHeader } from "@/components/site-header";
import { cleaners, finishes, monitors, pests, type Gear } from "@/data/equipment";
import { papers } from "@/data/papers";
import { isoClass8, operatingTargets } from "@/data/standards";

function PriorityBadge({ priority }: { priority: Gear["priority"] }) {
  const label =
    priority === "buy"
      ? "Buy"
      : priority === "keep"
        ? "Keep"
        : priority === "skip"
          ? "Skip"
          : "Optional";
  const variant =
    priority === "skip"
      ? "destructive"
      : priority === "keep"
        ? "secondary"
        : priority === "optional"
          ? "outline"
          : "default";
  return <Badge variant={variant}>{label}</Badge>;
}

function GearList({ items }: { items: Gear[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={item.role}>
          <CardHeader className="gap-2">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <CardTitle className="text-base">{item.pick}</CardTitle>
              <PriorityBadge priority={item.priority} />
            </div>
            <CardDescription>{item.role}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p className="text-foreground/90">{item.why}</p>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-foreground">{item.est}</span>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Source
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-10 sm:px-6 sm:py-14">
        <section id="answer" className="scroll-mt-24 space-y-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Direct answer
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Dust does not throttle a GPU. Heat does. Dust only helps heat win.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The “sterile, dust-free room” advice is overstated. ASHRAE TC 9.9
            wants a data hall at ISO 14644-1 Class 8 — a controlled room, not an
            operating theater. There is no published particle-count threshold
            that instantaneously clock-gates a GB300. Clocks drop when die
            temperature or power limits are hit. Dirt raises thermal resistance
            so that limit arrives sooner.
          </p>
          <Card className="border-primary/30 bg-card">
            <CardHeader>
              <CardTitle className="text-base">한국어로 한 줄</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                먼지는 GPU를 직접 throttle하지 않습니다. Throttle은 칩 온도와
                전력 한계입니다. 먼지는 히트싱크와 필터를 막아 냉각을 나쁘게
                해서, 그 한계에 더 빨리 닿게 합니다.
              </p>
              <p>
                서버룸은 “무균실”이 아닙니다. 목표는 ISO Class 8, 상대습도
                약 30–50%(60% 미만), 그리고 창고보다 방이 살짝 양압인
                상태입니다.                 지금 기계는 NVL72가 아니라 Exxact GB300 타워(약
                1.6 kW)입니다. 12k 히트펌프는 이 열을 감당할 수 있습니다.
                6-20R 두 구멍은 240 V로 확인됐습니다. 새 벽은 지금 필수가
                아닙니다. 타워를 열기 전에 콘크리트 패치를 에폭시하고,
                페인트 후 환기·청소하면 됩니다.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="cooling" className="scroll-mt-24 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Your machine: Exxact Valence VWS-158270643
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is not an NVL72 rack. Quote 171597-1 is an NVIDIA DGX
              Station–class tower: Grace 72-core + B300 (GB300, 1400 W chip
              TDP), 496 GB LPDDR5X + 252 GB HBM3e, plus one RTX PRO 6000
              Blackwell Max-Q (300 W) for display. NVIDIA rates the whole
              station at <strong className="text-foreground">1,600 W total
              system power</strong>. The 1400 W chip and the 300 W card cannot
              both sit at nameplate at once — the 1600 W PSU is the budget.
              Heat into the 8×8 room is about 1.6–1.8 kW, plus a 32&quot; 4K
              monitor.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-semibold">1.6 kW</CardTitle>
                <CardDescription>
                  This tower, wall heat at full load
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-semibold">3.5 kW</CardTitle>
                <CardDescription>
                  12k BTU heat pump, theoretical
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-semibold">240 V</CardTitle>
                <CardDescription>
                  Both 6-20R outlets, measured. Slots 10/12 right, 14/16 left
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cooling: the 12k unit can hold this box</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  12,000 BTU/h ÷ 3,412 = 3.5 kW. Against ~1.7 kW of IT heat in
                  64 ft² you have roughly 2× headroom on paper, even after a
                  leaky former storage envelope. This is no longer the first
                  throttle.
                </p>
                <p>
                  Still place it like a small data hall: tower intake clear,
                  exhaust not blowing into the heat-pump return, inlet air
                  18–22 °C, RH 30–50%. DGX Station–class boxes often use
                  internal liquid loops, but that heat still leaves the chassis
                  as hot air. Dust on the radiator or filters is how clocks
                  sag later.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Power: 240 V is confirmed. Buy the right cord</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Both 6-20R receptacles measure 240 V. Door card 10/12 =
                  right hole, 14/16 = left hole. Maxivolt MV-100C stays on the
                  panel. Remaining hardware gap: Exxact shipped a C19 →
                  5-15P. Order a C19 → 6-20P. No adapter.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>This room, from the photo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The server closet already has a door. That is the warehouse
                  door. Close it. Add a sweep. SW 7065 Argos in premium
                  low-VOC eggshell (Emerald or Duration) plus primer is enough
                  for these drywall walls. Save epoxy for the bare concrete
                  floor, not the walls.
                </p>
                <p>
                  HEPA-vac the powder at the baseboards before anyone opens a
                  can. Paint walls, then epoxy the slab. Air the room 48–72
                  hours after the last coat before the crate opens.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Buy now for dust (this room)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Tonight only: door sweep (Kalispell Home Depot), Camfil City
                  M, TSI AeroTrak 9306-V2 handheld if you buy a counter now,
                  C19→6-20P cord, HEPA vacuum. Do not buy the 6310/6510,
                  Vaisala, Setra, ceiling FFU, or PestWest tonight.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="standards" className="scroll-mt-24 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Viable vs non-viable, and which number matters
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              ISO 14644-1 only counts non-viable particles — dead dust, fibers,
              concrete fines, skin flakes, smoke. It cannot classify mold or
              bacteria. Viable (living) particles are a separate lab method
              (ISO 14698 / EN 17141) and are not an ASHRAE GPU metric. Your
              former hot-tub slab and warehouse cardboard are a viable-particle
              story. Your GPU clocks are a heat-and-dry-dust story.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Non-viable — ISO Class 8 limits</CardTitle>
                <CardDescription>
                  Particles per cubic meter. This is the ASHRAE data-center
                  cleanliness target, not ISO 5 sterile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Max count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isoClass8.map((row) => (
                      <TableRow key={row.size}>
                        <TableCell className="font-mono">{row.size}</TableCell>
                        <TableCell className="text-right font-mono">
                          {row.limit}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How dust actually hurts silicon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-foreground">Thermal path.</span> A thin
                  fouling layer can cut heat-transfer efficiency on the order of
                  20–30% in heat-exchanger studies. ASHRAE has also cited a
                  2–5% cooling-energy penalty from minor dust. On a GB300, that
                  is lost thermal margin, then throttle.
                </p>
                <p>
                  <span className="text-foreground">Hygroscopic path.</span>{" "}
                  Comizzoli (1993) and Singh / Shah (IBM + UTA) show settled
                  salt-bearing dust becomes an ionic film above its
                  deliquescent RH. Leakage current rises exponentially with RH.
                  ASHRAE’s practical cap: keep room RH under 60% so leakage
                  stays sub-µA. That is a short / corrosion failure, not a
                  clean clock-gate.
                </p>
                <p>
                  <span className="text-foreground">Fan path.</span> Stafford
                  et al. (2021) show axial-fan jets slam PM2.5/PM10 onto
                  boards. A clogged filter changes the fan operating point and
                  the dirt pattern.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Operating targets for this room</CardTitle>
              <CardDescription>
                “Does it throttle?” means: will this metric, by itself, make
                the GPU drop clocks.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Throttle?</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {operatingTargets.map((row) => (
                    <TableRow key={row.metric}>
                      <TableCell className="font-medium">{row.metric}</TableCell>
                      <TableCell className="max-w-sm text-muted-foreground">
                        {row.target}
                      </TableCell>
                      <TableCell className="max-w-xs text-muted-foreground">
                        {row.throttle}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section id="warehouse" className="scroll-mt-24 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Server room vs warehouse: the real correlation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              There is not a paper titled “Columbia Falls hot-tub shed vs
              GB300 clocks.” There is a well-measured physics chain. Shehabi
              (LBNL, 2008–2009) treated the data hall and the outdoor/adjacent
              air as two boxes connected by leaks, doors, and filters. Indoor
              concentration is set by: outdoor or adjacent source strength ×
              how much air crosses the boundary × filter efficiency −
              deposition inside the room.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What the warehouse injects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>Concrete fines from the new pour (non-viable, coarse).</p>
                <p>Cardboard, wood, and storage dust (fibers + organics).</p>
                <p>
                  Residual moisture / possible mold from the old hot-tub slab
                  (viable).
                </p>
                <p>Occasional insects (they ride air currents toward warmth).</p>
                <p>
                  Wildfire smoke in late summer (PM2.5 + gases) — PurpleAir is
                  actually the right sensor for that outdoor/indoor spike.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How to break the coupling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Keep the server room at +5 to +12 Pa versus the warehouse so
                  every leak blows out.
                </p>
                <p>
                  Filter all make-up air at MERV 13 minimum, HEPA H13/H14
                  preferred in a room this small.
                </p>
                <p>
                  Seal the door, add a sweep, a sticky mat, and no cardboard
                  staging inside.
                </p>
                <p>
                  Epoxy the slab and paint the walls so the room itself stops
                  shedding.
                </p>
                <p>
                  Shehabi’s result: MERV 14 can hold indoor particles at or
                  below a “sealed + cheap filter” room even when the dirty
                  side is pulling air. Pressure + HEPA is the 8×8 version of
                  that finding.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="papers" className="scroll-mt-24 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Papers and primary sources
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These are the documents behind the claims above. Vendor blog
              posts about “dust killing AI” were ignored unless they pointed
              back to ASHRAE, LBNL, IBM, or a journal. Open the PDF or DOI
              from here.
            </p>
          </div>
          <div className="grid gap-4">
            {papers.map((paper) => (
              <Card key={paper.id}>
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {paper.year}
                    </Badge>
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-base leading-snug">
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {paper.title}
                    </a>
                  </CardTitle>
                  <CardDescription>
                    {paper.authors}
                    <span className="mx-2">·</span>
                    {paper.venue}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {paper.why}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gear" className="scroll-mt-24 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              What to buy for this site
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              PurpleAir Flex stays. It is the public wildfire / PM2.5 display.
              For cleanliness, throttling, warehouse coupling, and bugs you
              need lab instruments and a pressure cascade, not a second
              consumer sensor.
            </p>
          </div>
          <Tabs defaultValue="measure">
            <TabsList className="flex h-auto flex-wrap gap-1">
              <TabsTrigger value="measure">Measure</TabsTrigger>
              <TabsTrigger value="clean">Remove dust</TabsTrigger>
              <TabsTrigger value="bugs">Insects</TabsTrigger>
              <TabsTrigger value="finish">Paint &amp; floor</TabsTrigger>
            </TabsList>
            <TabsContent value="measure" className="mt-4">
              <GearList items={monitors} />
            </TabsContent>
            <TabsContent value="clean" className="mt-4">
              <GearList items={cleaners} />
            </TabsContent>
            <TabsContent value="bugs" className="mt-4">
              <GearList items={pests} />
            </TabsContent>
            <TabsContent value="finish" className="mt-4">
              <GearList items={finishes} />
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        <section className="space-y-4 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Order of work before the crate opens
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>
              Confirmed machine and 240 V 6-20R (10/12 right, 14/16 left).
              Order a C19 → 6-20P cord. Do not build new walls before paint.
              Epoxy the hot-tub patch, paint, vent, HEPA-clean, then unbox.
            </li>
            <li>
              Grind and epoxy the slab. Paint walls with SW Pre-Cat or
              catalyzed epoxy. Ventilate until odor is gone.
            </li>
            <li>
              Seal door, conduits, and old tub penetrations. Install door
              sweep, sticky mat, and a glue-board UV trap on the warehouse
              side only.
            </li>
            <li>
              Install H14 FFU (or City M) so the room runs positive to the
              warehouse. Put a Setra DP sensor across that doorway.
            </li>
            <li>
              Place Vaisala T/RH at the future rack inlet. Place the TSI
              particle counter at the same point. Keep PurpleAir for PM2.5 /
              smoke on the website.
            </li>
            <li>
              Do not unbox until ISO Class 8 holds with the door closed, RH is
              30–50%, and inlet air is inside 18–27 °C with cooling headroom
              for the actual watts.
            </li>
          </ol>
          <p className="text-xs text-muted-foreground">
            Prepared for Mee, intellicAIr, LLC, Columbia Falls, Montana. This
            is an engineering brief, not a building permit, electrical design,
            or NVIDIA install guide. Have a licensed electrician sign off
            power and a mechanical contractor sign off cooling before the
            server is energized.
          </p>
        </section>
      </main>
    </>
  );
}
