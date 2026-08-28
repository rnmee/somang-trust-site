import { Badge } from "@/components/ui/badge";

const links = [
  { href: "#answer", label: "Answer" },
  { href: "#cooling", label: "Cooling" },
  { href: "#standards", label: "Numbers" },
  { href: "#warehouse", label: "Warehouse" },
  { href: "#papers", label: "Papers" },
  { href: "#gear", label: "Buy list" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-xs font-semibold tracking-tight text-primary-foreground">
            iA
          </div>
          <div>
            <p className="text-sm font-medium leading-none">intellicAIr, LLC</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Columbia Falls HQ · Exxact GB300 tower brief
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-1 py-0.5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/corps"
            className="rounded-sm px-1 py-0.5 hover:text-foreground"
          >
            Corps
          </a>
          <a
            href="/research"
            className="rounded-sm px-1 py-0.5 hover:text-foreground"
          >
            Research
          </a>
          <a
            href="/somang-trust.html"
            className="rounded-sm px-1 py-0.5 hover:text-foreground"
          >
            Trust demo
          </a>
          <Badge variant="secondary" className="font-mono text-[10px]">
            24 Aug 2026
          </Badge>
        </nav>
      </div>
    </header>
  );
}
