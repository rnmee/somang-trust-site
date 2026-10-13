#!/usr/bin/env python3
"""Probe local Next + Pages.dev only. Never the custom domain.

intelli-care.ai runs a Cloudflare managed challenge (cf-mitigated: challenge).
This pod is a datacenter IP. Curl cannot pass the JS challenge.
The founder's home browser is fine. Do not treat 403 as the site being down.
Do not open the Cloudflare dashboard for this.
"""

from __future__ import annotations

import argparse
import sys
import urllib.error
import urllib.parse
import urllib.request

FORBIDDEN_HOSTS = ("intelli-care.ai",)
LOCAL = "http://127.0.0.1:43147"
PAGES = "https://intellicair.pages.dev"
UA = "SoMangDoorProbe/1.0 (+local-and-pages-dev-only)"

DEFAULT_PATHS = (
    "/corps-chatgpt.html",
    "/corps-grok.html",
    "/corps-iljimae.html",
    "/corps-qwen.html",
    "/corps-fable.html",
    "/index.html",
)


def host_of(url: str) -> str:
    return urllib.parse.urlparse(url).hostname or ""


def fetch(url: str, timeout: float) -> tuple[int, str, str]:
    host = host_of(url)
    if any(host == blocked or host.endswith("." + blocked) for blocked in FORBIDDEN_HOSTS):
        raise SystemExit(f"REFUSE {url} — custom domain is human-only from this pod")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as res:
            body = res.read().decode("utf-8", errors="replace")
            return res.getcode() or 0, res.geturl(), body
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        return e.code, e.geturl() or url, body


def main() -> int:
    parser = argparse.ArgumentParser(description="Probe local + pages.dev. Never intelli-care.ai.")
    parser.add_argument("--path", action="append", dest="paths", help="Path to probe (repeatable)")
    parser.add_argument("--needle", action="append", dest="needles", help="String that must appear")
    parser.add_argument("--skip-pages", action="store_true", help="Local only")
    parser.add_argument("--timeout", type=float, default=12)
    args = parser.parse_args()

    paths = tuple(args.paths) if args.paths else DEFAULT_PATHS
    origins = [LOCAL] if args.skip_pages else [LOCAL, PAGES]
    needles = tuple(args.needles or ())
    failures: list[str] = []

    for origin in origins:
        for path in paths:
            url = origin.rstrip("/") + path
            try:
                code, final, body = fetch(url, args.timeout)
            except SystemExit:
                raise
            except Exception as e:
                failures.append(f"{url}: {e}")
                continue
            if code != 200:
                failures.append(f"{url}: HTTP {code} (final {final})")
                continue
            if "Just a moment..." in body and "cf-mitigated" in body.lower():
                failures.append(f"{url}: challenge page (wrong host?)")
                continue
            for needle in needles:
                if needle not in body:
                    failures.append(f"{url}: missing {needle!r}")
            print(f"OK {code} {url} → {final} ({len(body)} bytes)")

    if failures:
        print("FAIL served probe")
        for line in failures:
            print(f"  - {line}")
        return 1
    print("PASS served probe · local" + ("" if args.skip_pages else " + pages.dev"))
    print("Custom domain not probed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
