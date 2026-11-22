# MC Server — Player Guide

Player setup guide for the community Minecraft Java server.

## Required versions

- Minecraft Java Edition **1.20.1**
- **Minecraft Forge 47.4.28**
- Java 17

Use the Forge profile, not Fabric or NeoForge.

## Complete client pack

The complete client package contains the client mods and dependencies, resource packs, optional shaders, and setup notes for this server.

- Package: `Minecraft-Client-1.20.1-Forge-47.4.28.zip`
- Target: Minecraft 1.20.1 / Forge 47.4.28
- Contents: **59 mod/dependency JARs**, 14 resource packs, and 2 optional shader packs.
- Required dependencies include Patchouli 1.20.1-85-FORGE and Caelus 3.2.0+1.20.1.
- Package size: **278,826,892 bytes** (approximately 265.8 MiB).
- SHA-256: `39c74bbbb4b36348e7dbf03626cd7a1930778e1044cc0839f2c57634d10e9a6f`
- Install: download and extract the ZIP, then copy the included `mods`, `resourcepacks`, and `shaderpacks` folders into your Minecraft game directory (usually `%appdata%\\.minecraft`). Allow Windows to merge folders if prompted.
- Keep this pack in a separate Minecraft installation/profile if you use other modpacks.

**[Download the complete client pack](https://github.com/hunterbloxham5-star/MC-server/releases/download/client-pack-1.20.1-forge-47.4.28/Minecraft-Client-1.20.1-Forge-47.4.28.zip)**

The release is updated in place when a revised client package is published. If the download is temporarily unavailable, check the [client-pack release page](https://github.com/hunterbloxham5-star/MC-server/releases/tag/client-pack-1.20.1-forge-47.4.28).

### Fresh Mobs for Epic Fight

Fresh Mobs for Epic Fight **1.0.0** is included in this client pack. It provides compatibility between Epic Fight's mob rendering and resource packs such as Fresh Animations.

- Minecraft: 1.20.1
- Required dependency: Epic Fight **20.14 or newer**
- Client installation location: included in the ZIP at `mods/freshmobs_ef-1.20.1-1.0.0.jar`; copy the complete `mods` folder into your Minecraft game directory.
- Download source: [Fresh Mobs for Epic Fight on CurseForge](https://www.curseforge.com/minecraft/mc-mods/fresh-mobs-for-epic-fight)
- This mod is also installed on the server; players should install the included client copy.


### Fusion connected textures and visual resource packs

The revised package adds **Fusion 1.3.16 for Forge 1.20.1** and six resource packs. Fusion is a required dependency for the Fusion resource packs.

- **Fusion Connected Textures 1.3.16** — client mod; included in the ZIP at `mods/`. [CurseForge file](https://www.curseforge.com/minecraft/mc-mods/fusion-connected-textures/files/9070201).
- **Fusion Block Transitions** — resource pack; included at `resourcepacks/`. [CurseForge](https://www.curseforge.com/minecraft/texture-packs/fusion-block-transitions).
- **Fusion Connected Glass** — resource pack; included at `resourcepacks/`. [CurseForge](https://www.curseforge.com/minecraft/texture-packs/fusion-connected-glass).
- **Fusion Connected Blocks** — resource pack; included at `resourcepacks/`. [CurseForge](https://www.curseforge.com/minecraft/texture-packs/fusion-connected-blocks).
- **Fusion Emissive Ores** — resource pack; included at `resourcepacks/`. [CurseForge](https://www.curseforge.com/minecraft/texture-packs/fusion-emissive-ores).
- **Fusion 3D Items** — resource pack; included at `resourcepacks/`. [CurseForge](https://www.curseforge.com/minecraft/texture-packs/fusion-3d-items).
- **Clear Glass Pack 1.20 to 1.20.1** — resource pack; included at `resourcepacks/`. [CurseForge file](https://www.curseforge.com/minecraft/texture-packs/clear-glass-pack/files/4582171).

Copy the complete `mods` and `resourcepacks` folders from the ZIP into the game directory. Enable the resource packs you want in Minecraft's Resource Packs menu. These are client-side additions only: do not copy Fusion into the server's mods folder, and no server restart is required for these additions.

## Server mods and features

The following gameplay and world-feature mods are installed on the server. Several also have client-side components, and the matching client files are already included in the complete ZIP. **Do not download these separately or add duplicate copies.**

- Artifacts
- Curios API
- ExpandAbility
- Architectury API
- Balm
- Waystones
- Blueprint
- Oreganized
- Galosphere
- Terramity
- Traveler's Backpack
- Vein Mining

Install the complete client pack described above. It supplies the client-side files needed by the modded server; no separate server-mod downloads are required.

### Fresh Animations resource packs

The pack includes Fresh Animations v1.10.4 and seven compatible add-ons.

Choose **one** of these setups in Minecraft's Resource Packs menu:

- **Individual add-ons:** Fresh Animations, Details, Emissive, Creepers, Classic Horses, Objects, and Spiders.
- **Combined add-ons:** Fresh Animations plus All Extensions.

Do not enable All Extensions at the same time as the individual add-ons, because their content overlaps. Place the add-on pack(s) above Fresh Animations in the resource-pack priority list. Entity Model Features (EMF) and Entity Texture Features (ETF) are included and should remain enabled.

## Joining the server

1. Install Minecraft Java Edition.
2. Install Minecraft 1.20.1 with Forge 47.4.28 (client installation).
3. Download and install the complete client pack above.
4. Launch the Forge 1.20.1 profile.
5. Join the server and accept the required server resource-pack prompt.

The server automatically sends its required combined resource pack when you connect. Make sure **Server Resource Packs** is set to Enabled or Prompt in the server entry's settings.

## Optional shaders

The package includes optional shader packs and the shader support mods. Shaders are not required to join. If enabling a shader causes a crash or rendering issue, turn shaders off and launch again; the game can be played without them.

## Troubleshooting

- **Missing mods / incompatible modded server:** confirm Minecraft 1.20.1 and Forge 47.4.28, and make sure you installed the complete client pack rather than mixing files from other modpacks. The client pack includes Patchouli and Caelus, which are required by the server's mod set.
- **Game crashes on launch:** temporarily move shader packs out of the shaderpacks folder and disable shaders. If it still crashes, share the newest file from `.minecraft\\crash-reports` or `.minecraft\\logs\\latest.log`.
- **Fresh Animations or entity visuals do not work:** confirm the included client visual-support mods are present and the server resource pack is enabled.
- **Resource pack does not download:** in the launcher server list, edit the server and set Server Resource Packs to Enabled or Prompt, then reconnect.

## Project site

GitHub Pages: https://hunterbloxham5-star.github.io/MC-server/

This is an unofficial community guide and is not affiliated with Mojang or Microsoft.
