const BLOCKED = /name|ssn|address|phone|email|case[_-]?no|dob|birth/i;

export function shadowLog(event: string, counts?: Record<string, number>): void {
  if (BLOCKED.test(event)) return;
  const safe: Record<string, number> = {};
  if (counts) {
    for (const [key, value] of Object.entries(counts)) {
      if (BLOCKED.test(key)) continue;
      if (typeof value === "number" && Number.isFinite(value)) safe[key] = value;
    }
  }
  if (process.env.NODE_ENV === "development") {
    console.info(event, safe);
  }
}
