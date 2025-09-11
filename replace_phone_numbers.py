#!/usr/bin/env python3
"""
Replace phone number placeholders across the project.

Default replacements (always on):
  "+90 X XXX XX XX"  -> "0 (536) 929 86 06"
  "+90XXXXXXXX"      -> "0 (536) 929 86 06"

Optional (--also-links):
  tel:+90........    -> tel:+905369298606
  https://wa.me/90.. -> https://wa.me/905369298606
  PHONE_TEL          -> "+905369298606"
  PHONE_DISPLAY      -> "0 (536) 929 86 06"
"""

import argparse
import os
import re
from pathlib import Path

DEFAULT_DISPLAY = "0 (536) 929 86 06"
DEFAULT_E164 = "+905369298606"

SKIP_DIRS = {
    ".git", ".next", "node_modules", ".vercel", "dist", "build", "out", ".turbo"
}

# Reasonable text file extensions you likely have in your repo
TEXT_EXTS = {
    ".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".mdx",
    ".css", ".scss", ".sass", ".less",
    ".html", ".yml", ".yaml", ".env", ".txt",
}

def replace_basic(text: str, display: str) -> tuple[str, int]:
    """Always-on replacements for the two placeholders."""
    replacements = [
        (re.escape("+90 X XXX XX XX"), display),
        (re.escape("+90XXXXXXXX"), display),
    ]
    count = 0
    for pattern, repl in replacements:
        text, n = re.subn(pattern, repl, text)
        count += n
    return text, count

def replace_links_and_consts(text: str, display: str, e164: str) -> tuple[str, int]:
    """Optional replacements for tel/whatsapp links and common constants."""
    count = 0

    # tel:+90...  -> tel:+905369298606  (case-insensitive)
    tel_pattern = re.compile(r'(?i)tel:\+?90[\d\-\s\(\)]{6,20}')
    text, n = tel_pattern.subn(f"tel:{e164}", text)
    count += n

    # https://wa.me/90........ -> https://wa.me/905369298606
    wa_pattern = re.compile(r'https?://wa\.me/90\d{5,15}')
    text, n = wa_pattern.subn(f"https://wa.me/{e164.lstrip('+')}", text)
    count += n

    # PHONE_TEL = "..."; common consts
    phone_tel_patterns = [
        re.compile(r'(PHONE_TEL\s*=\s*")[^"]*(")'),
        re.compile(r'(PHONE_TEL\s*:\s*")[^"]*(")'),
        re.compile(r'("phoneTel"\s*:\s*")[^"]*(")'),
    ]
    for pat in phone_tel_patterns:
        def _sub(m):
            nonlocal count
            count += 1
            return f'{m.group(1)}{e164}{m.group(2)}'
        text = pat.sub(_sub, text)

    # PHONE_DISPLAY = "..."; common consts
    phone_disp_patterns = [
        re.compile(r'(PHONE_DISPLAY\s*=\s*")[^"]*(")'),
        re.compile(r'(PHONE_DISPLAY\s*:\s*")[^"]*(")'),
        re.compile(r'("phoneDisplay"\s*:\s*")[^"]*(")'),
    ]
    for pat in phone_disp_patterns:
        def _sub(m):
            nonlocal count
            count += 1
            return f'{m.group(1)}{display}{m.group(2)}'
        text = pat.sub(_sub, text)

    # WHATSAPP_URL = "https://wa.me/90XXXX..." (in case you store it directly)
    wa_const_patterns = [
        re.compile(r'(WHATSAPP_URL\s*=\s*")[^"]*(")'),
        re.compile(r'(WHATSAPP_URL\s*:\s*")[^"]*(")'),
    ]
    for pat in wa_const_patterns:
        def _sub(m):
            nonlocal count
            count += 1
            return f'{m.group(1)}https://wa.me/{e164.lstrip("+")}{m.group(2)}'
        text = pat.sub(_sub, text)

    return text, count

def should_touch(path: Path) -> bool:
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    if path.is_dir():
        return False
    if path.suffix.lower() in TEXT_EXTS:
        return True
    # Allow extensionless files that look like text (e.g. .env.local without ext)
    return path.suffix == ""

def main():
    ap = argparse.ArgumentParser(description="Replace phone placeholders across the project.")
    ap.add_argument("--root", default=".", help="Project root (default: current dir)")
    ap.add_argument("--display", default=DEFAULT_DISPLAY, help="Display format phone (e.g. '0 (536) 929 86 06')")
    ap.add_argument("--e164", default=DEFAULT_E164, help="E.164 format (e.g. '+905369298606')")
    ap.add_argument("--also-links", action="store_true", help="Also fix tel:/wa.me/ PHONE_TEL/PHONE_DISPLAY constants")
    ap.add_argument("--write", action="store_true", help="Write changes in-place (otherwise dry-run)")
    ap.add_argument("--backup", action="store_true", help="Create .bak files for modified files")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    changed_files = 0
    total_repls = 0

    for dirpath, dirnames, filenames in os.walk(root):
        # prune skip dirs early
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]

        for fn in filenames:
            path = Path(dirpath) / fn
            if not should_touch(path):
                continue

            try:
                text = path.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue

            original = text
            # Always do basic replacements
            text, c1 = replace_basic(text, args.display)
            # Optionally do link/const replacements
            c2 = 0
            if args.also_links:
                text, c2 = replace_links_and_consts(text, args.display, args.e164)

            if (c1 + c2) > 0 and text != original:
                changed_files += 1
                total_repls += (c1 + c2)
                if args.write:
                    if args.backup:
                        try:
                            Path(str(path) + ".bak").write_text(original, encoding="utf-8", errors="ignore")
                        except Exception:
                            pass
                    path.write_text(text, encoding="utf-8")
                else:
                    rel = path.relative_to(root)
                    print(f"[dry-run] {rel} -> {c1 + c2} replacement(s)")

    action = "WROTE" if args.write else "DRY-RUN"
    print(f"{action}: {changed_files} file(s) changed, {total_repls} total replacement(s).")

if __name__ == "__main__":
    main()
