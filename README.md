# MC Server — Minecraft Mod Guide

Static player guide for the community server targeting **Minecraft Java 1.20.1 / Forge 47.4.28**.

## Enable GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. The included workflow deploys the site on pushes to `main`.
4. Expected URL after a successful deployment: https://hunterbloxham5-star.github.io/MC-server/.

## Compatibility notes
- `catalog.json` contains searchable mods, resource packs, and shaders.
- CurseForge links are official project-search pages, not pinned direct file downloads. Choose exact Minecraft 1.20.1 + Forge files and satisfy dependencies.
- This catalog is reconstructed from the modpack discussion and is not a verified file-by-file lockfile. Confirm every project version before distributing it as a required list.
- The original ImmediatelyFast build tagged for Minecraft 1.20.4 and unresolved WaterMedia / WaterFrames group are held back.
- The server resource pack should download automatically; this website does not host mod JARs or the server pack.

## Local preview
Run `python -m http.server 8000` in this folder, then visit http://localhost:8000/.
