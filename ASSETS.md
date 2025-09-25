# Assets Guide

Place your images in `assets/` at the project root.

Recommended files:
- `assets/profile.jpg` — your profile photo (square or portrait). Suggested size: 800×800+.
- `assets/focus-vuln.jpg` — image for Vulnerability Assessments.
- `assets/focus-ctf.jpg` — image for CTF Write-ups.
- `assets/focus-ir.jpg` — image for Incident Response.
- `assets/focus-embedded.jpg` — image for Embedded Systems Security.

Tips:
- Use JPG for photos, PNG/WebP for graphics.
- Keep file names lowercase with hyphens.
- Aim for < 300 KB per image for fast loads. Use `cwebp` or `imagemagick` to compress.

Linux quick convert to WebP (keeps a JPG fallback if needed):
```bash
mkdir -p assets
cwebp -q 80 profile.jpg -o assets/profile.webp
```

