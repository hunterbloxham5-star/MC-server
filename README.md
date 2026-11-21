# MC Server — Minecraft Mod Guide

Player guide for the community server targeting **Minecraft Java 1.20.1 / Forge 47.4.28**.

## Player setup

1. Install Minecraft Java Edition using the official launcher.
2. Install **Minecraft 1.20.1 — Forge 47.4.28** and choose **Install client**.
3. Add the compatible shared mods listed in the site catalog when the server mod audit confirms the required set.
4. Install the two required client-side visual support mods below.
5. Launch the Forge 1.20.1 profile, join the server, and accept the required resource-pack prompt.

### Required client-side visual support

These mods are required for the combined pack's Fresh Animations models and textures. They belong in the player's client `%appdata%\\.minecraft\\mods` folder; they are not server-side requirements.

| Mod | Tested version | Purpose |
| --- | --- | --- |
| Entity Model Features (EMF) | 3.3.10 for Forge 1.20.1 | Custom entity models |
| Entity Texture Features (ETF) | 7.2.6 for Forge 1.20.1 | Custom entity textures and Fresh Animations support |

Forge alone does not provide the custom entity model support Fresh Animations needs. The player guide separates these required visual dependencies from optional client enhancements.

## Required combined server resource pack

The production server is configured to require and automatically send the combined resource pack when players connect.

- File: `Combined-Resource-Pack-1.20.1-CANDIDATE.zip`
- Minecraft: 1.20.1
- Size: 2,890,033 bytes
- SHA-1: `4565c38384cdf0e499968b4cab1abb01d0161000`
- Includes Fresh Animations Base + Details, Enhanced Boss Bars, Recolourful Containers GUI + HUD, and Bushy Pink Petals, Wildflowers & Leaf Litter assets.
- Fresh Animations requires EMF and ETF on each player's client.
- [Download the combined resource pack (ZIP)](https://github.com/hunterbloxham5-star/MC-server/releases/download/resource-pack-1.20.1-v1/Combined-Resource-Pack-1.20.1-CANDIDATE.zip).
- [View the GitHub Release](https://github.com/hunterbloxham5-star/MC-server/releases/tag/resource-pack-1.20.1-v1).
- The production server also sends the required pack automatically when players join.

## Compatibility and catalog notes

- `catalog.json` contains searchable mods, resource packs, and shaders.
- Entries marked server + client are candidates, not a verified file-by-file lockfile. Confirm the production server's installed mods and each project's Forge 1.20.1 file before treating them as mandatory.
- Client-only enhancements should not be copied to the dedicated server unless the mod documentation explicitly requires it.
- The original ImmediatelyFast build tagged for Minecraft 1.20.4 and the unresolved WaterMedia / WaterFrames group are held back.
- Do not use Fabric, NeoForge, or files for another Minecraft version.

## Enable GitHub Pages

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. The included workflow deploys the site on pushes to `main`.
4. Expected URL after a successful deployment: https://hunterbloxham5-star.github.io/MC-server/.

## Local preview

Run `python -m http.server 8000` in this folder, then visit http://localhost:8000/.
