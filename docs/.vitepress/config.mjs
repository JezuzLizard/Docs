import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OpenAssetTools",
  description: "Documentation for and around OpenAssetTools",
  head: [["link", { rel: "icon", href: "/logo_64_64.png" }]],
  themeConfig: {
    logo: "/logo_64_64.png",
    outline: {
      level: "deep",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/what-is-oat",
        activeMatch: "\\/guide(?:\\/|$)",
      },
      {
        text: "Reference",
        link: "/reference/zone-file",
        activeMatch: "\\/reference(?:\\/|$)",
      },
      {
        text: "Game Assets",
        link: "/asset/overview",
        activeMatch: "\\/asset(?:\\/|$)",
      },
    ],

    footer: {
      message:
        "All trademarks are owned by their respective owners. This project is neither endorsed by, nor affiliated with Activision, Treyarch, Infinity Ward or any of their descendants.",
    },

    sidebar: {
      "/guide": [
        {
          text: "Guides",
          items: [
            { text: "What is OAT?", link: "/guide/what-is-oat" },
            { text: "Getting started", link: "/guide/getting-started" },
            { text: "Using the tools", link: "/guide/using-the-tools" },
          ],
        },
        {
          text: "OAT Concepts",
          items: [
            { text: "Folder structure", link: "/guide/folder-structure" },
            { text: "OAT components", link: "/guide/components" },
          ],
        },
      ],
      "/reference": [
        {
          text: "OAT Reference",
          items: [
            { text: "Zone Files", link: "/reference/zone-file" },
            {
              text: "The IPak file format",
              link: "/reference/ipak-file-format",
            },
            {
              text: "Preprocessor features",
              link: "/reference/preprocessor-features",
            },
          ],
        },
      ],
      "/asset": [
        {
          text: "Game Assets",
          items: [
            { 
              text: "Overview",
              collapsed: true,
              link: "/asset/overview",
              items: [
                { 
                  text: "Asset Types", 
                  collapsed: true,
                  link: "/asset/types",
                  items: [
                    {
                      text: "Menus",
                      collapsed: true,
                      link: "/asset/types/menu/",
                      items: [
                        {
                        text: "LUI",
                        collapsed: true,
                        link: "/asset/types/menu/lui/",
                        items: [
                          { text: "Structure", link: "/asset/types/menu/lui/structure" },
                          {
                            text: "Menu Properties",
                            link: "/asset/types/menu/lui/menu-properties",
                          },
                          { text: "Event Handlers", link: "/asset/types/menu/lui/event-handlers" },
                        ],
                        },
                        {
                          text: "Quake",
                          collapsed: true,
                          link: "/asset/types/menu/quake/",
                          items: [
                            { text: "Structure", link: "/asset/types/menu/quake/structure" },
                            { text: "Preprocessor", link: "/asset/types/menu/quake/preprocessor" },
                            {
                              text: "Menu Properties",
                              link: "/asset/types/menu/quake/menu-properties",
                            },
                            {
                              text: "Item Properties",
                              link: "/asset/types/menu/quake/item-properties",
                            },
                            { text: "Expressions", link: "/asset/types/menu/quake/expressions" },
                            { text: "Event Handlers", link: "/asset/types/menu/quake/event-handlers" },
                          ],
                        },
                      ],
                    },
                    {
                      text: "Maps",
                      collapsed: true,
                      link: "/asset/types/map/",
                      items: [
                        { text: "Clipmap" },
                        { text: "Comworld" },
                        {
                          text: "Gameworld",
                        },
                        {
                          text: "Mapents",
                        },
                        { text: "Gfxworld",  },
                        { text: "Lightdef",  },
                        { text: "UImap",  },
                        { text: "Addonmapents",  },
                      ],
                    },
                    {
                      text: "Models",
                      collapsed: true,
                      link: "/asset/types/model/",
                      items: [
                        { text: "Collision Maps",  },
                      ],
                    },
                    {
                      text: "Physics Presets",
                      collapsed: true,
                      link: "/asset/types/phys-preset/",
                      items: [
                      ],
                    },
                    {
                      text: "Physics Constraints",
                      collapsed: true,
                      link: "/asset/types/phys-constraint/",
                      items: [
                      ],
                    },
                    {
                      text: "Destructibles",
                      collapsed: true,
                      link: "/asset/types/destructible/",
                      items: [
                      ],
                    },
                    {
                      text: "Anims",
                      collapsed: true,
                      link: "/asset/types/anim/",
                      items: [
                      ],
                    },
                    {
                      text: "Materials",
                      collapsed: true,
                      link: "/asset/types/material/",
                      items: [
                      ],
                    },
                    {
                      text: "Technique Sets",
                      collapsed: true,
                      link: "/asset/types/techset/",
                      items: [
                      ],
                    },
                    {
                      text: "Images",
                      collapsed: true,
                      link: "/asset/types/image/",
                      items: [
                      ],
                    },
                    {
                      text: "Sounds",
                      collapsed: true,
                      link: "/asset/types/sound/",
                      items: [
                        { text: "Streamed Sounds" },
                        { text: "Loaded Sounds" },
                        { text: "Sound Patches" },
                        { text: "Sound Driver Globals" },
                      ],
                    },
                    {
                      text: "Fonts",
                      collapsed: true,
                      link: "/asset/types/font/",
                      items: [
                        { text: "Font Icons" },
                        { text: "Text Fonts" },
                      ],
                    },
                    {
                      text: "Localizations",
                      collapsed: true,
                      link: "/asset/types/locale/",
                      items: [
                        { text: "Supported Languages" },
                      ],
                    },
                    {
                      text: "Weapons",
                      collapsed: true,
                      link: "/asset/types/weapon/",
                      items: [
                        { text: "Attachment Systems" },
                        { text: "Weapon Definitions" },
                        { text: "Weapon Camo Systems" },
                      ],
                    },
                    {
                      text: "FX",
                      collapsed: true,
                      link: "/asset/types/fx/",
                      items: [
                        { text: "Impact FX" },
                        { text: "Standard FX" },
                      ],
                    },
                    {
                      text: "Rawfiles",
                      collapsed: true,
                      link: "/asset/types/rawfile/",
                      items: [
                        { text: "LUI Scripts" },
                        { text: "Configs" },
                        { text: "GSC Scripts" },
                        { text: "Graphs" },
                        { text: "Animstatedefs" },
                        { text: "Animtrees" },
                        { text: "Menu Expressions" },
                        { text: "Penetration Tables" },
                        { text: "Location Damage Tables" },
                        { text: "Gametype Definitions" },
                        { text: "Player Anim Scripts" },
                        { text: "Player Anim Types" },
                        { text: "Radiant Script Keys" },
                        { text: "Rumbles" },
                        { text: "Shaders" },
                        { text: "Shocks" },
                        { text: "Suns" },
                        { text: "Atari 2600 Games" },
                        { text: "Visions" },
                        { text: "Zone Ending Files" },
                        { text: "Arenas" },
                      ],
                    },
                    {
                      text: "Stringtables",
                      collapsed: true,
                      link: "/asset/types/stringtable/",
                      items: [
                      ],
                    },
                    {
                      text: "Leaderboards",
                      collapsed: true,
                      link: "/asset/types/leaderboard/",
                      items: [
                      ],
                    },
                    {
                      text: "DDL",
                      collapsed: true,
                      link: "/asset/types/ddl/",
                      items: [
                      ],
                    },
                    {
                      text: "Glasses",
                      collapsed: true,
                      link: "/asset/types/glass/",
                      items: [
                      ],
                    },
                    {
                      text: "Emblem Sets",
                      collapsed: true,
                      link: "/asset/types/emblem-set/",
                      items: [
                      ],
                    },
                    {
                      text: "Script Parse Trees",
                      collapsed: true,
                      link: "/asset/types/script/",
                      items: [
                      ],
                    },
                    {
                      text: "Vehicles",
                      collapsed: true,
                      link: "/asset/types/vehicle/",
                      items: [
                      ],
                    },
                    {
                      text: "Tracers",
                      collapsed: true,
                      link: "/asset/types/tracer/",
                      items: [
                      ],
                    },
                    {
                      text: "Skinned Vertices",
                      collapsed: true,
                      link: "/asset/types/skinned-verts/",
                      items: [
                      ],
                    },
                    {
                      text: "QDB",
                      collapsed: true,
                      link: "/asset/types/qdb/",
                      items: [
                      ],
                    },
                    {
                      text: "Slugs",
                      collapsed: true,
                      link: "/asset/types/slug/",
                      items: [
                      ],
                    },
                    {
                      text: "Footsteps",
                      collapsed: true,
                      link: "/asset/types/footstep/",
                      items: [
                        { text: "Footstep Sound Tables" },
                        { text: "Footstep FX Tables" },
                      ],
                    },
                    {
                      text: "ZBarriers",
                      collapsed: true,
                      link: "/asset/types/zbarrier/",
                      items: [
                      ],
                    },
                    {
                      text: "Model Pieces",
                      collapsed: true,
                      link: "/asset/types/model-pieces/",
                      items: [
                      ],
                    },
                  ],
                },
                { 
                  text: "Asset Formats", 
                  collapsed: true,
                  link: "/asset/formats",
                  items: [
                  {
                    text: "Animations",
                    collapsed: true,
                    link: "/asset/formats/anim/",
                    items: [
                      { text: "Cod Binary" },
                      { text: "Cod Source" },
                      { text: "Cod SEAnim" },
                    ],
                  },
                  {
                    text: "Config String Parse",
                    collapsed: true,
                    link: "/asset/formats/csp/",
                    items: [
                      { text: "Attachment Unique" },
                      { text: "Attachment" },
                      { text: "Bullet Penetration Table" },
                      { text: "Destructible" },
                      { text: "Generic CSP" },
                      { text: "Location Damage Table" },
                      { text: "Physics Constraint" },
                      { text: "Physics Preset" },
                      { text: "Rumble" },
                      { text: "Tracer" },
                      { text: "Vehicle" },
                      { text: "Weapon" },
                      { text: "ZBarrier" },
                    ],
                  },
                  {
                    text: "CSV",
                    collapsed: true,
                    link: "/asset/formats/csv/",
                    items: [
                      { 
                        text: "Sound",
                        collapsed: true,
                        link: "/asset/formats/csv/sound/",
                        items: [
                          { 
                            text: "Globals",
                            collapsed: true,
                            link: "/asset/formats/csv/sound/globals/",
                            items: [
                              { text: "Build Pack" },
                              { text: "Context" },
                              { text: "Curves" },
                              { text: "Effects" },
                              { text: "Freeverb" },
                              { text: "Futz" },
                              { text: "Generic Globals" },
                              { text: "Group" },
                              { text: "Master" },
                              { text: "Metadata" },
                              { text: "Pan" },
                              { text: "Patch" },
                              { text: "Radverb" },
                              { text: "Reverb" },
                              { text: "Snapshot Groups" },
                              { text: "Snapshot" },
                              { text: "Zone Build" },
                              { text: "Zone Snapshot" },
                              { text: "Zone Sound" },
                              { text: "Zone Verb" },
                              { text: "Zones" },
                            ],
                           },
                          { text: "Sound Aliases" },
                          { text: "Sound Driver Globals" },
                          { text: "Sound Patch" },
                        ],
                       },
                      { 
                        text: "Zone Source",
                        collapsed: true,
                        link: "/asset/formats/csv/zone-source/",
                        items: [
                          { 
                            text: "Asset Info",
                            collapsed: true,
                            link: "/asset/formats/csv/zone-source/assetinfo/",
                            items: [
                              { text: "Mod Depenencies" },
                              { text: "Mod" },
                            ],
                           },
                          {
                             text: "Asset List",
                             collapsed: true,
                             link: "/asset/formats/csv/zone-source/assetlist/",
                             items: [
                               { text: "Ignore Files" },
                               { text: "Mod" },
                             ],
                           },
                          { text: "Zone" },
                        ],
                       },
                      { text: "Attachment Table" },
                      { text: "Attributes Table" },
                      { text: "Clan Tag Features" },
                      { text: "Country Table" },
                      { text: "Faction Table" },
                      { text: "Footstep FX Table" },
                      { text: "Footstep Sound Table" },
                      { text: "Gametypes Table" },
                      { text: "Generic CSV" },
                      { text: "Glass" },
                      { text: "Glasses" },
                      { text: "Impact FX" },
                      { text: "Leaderboard" },
                      { text: "Maps Table" },
                      { text: "Rank Table" },
                      { text: "Reflections" },
                      { text: "Stats Table" },
                      { text: "Texture List" },
                      { text: "VS Mode Class Table" },
                      { text: "Weapon Options" },
                    ],
                  },
                  {
                    text: "GDT",
                    collapsed: true,
                    link: "/asset/formats/gdt/",
                    items: [
                        { 
                          text: "Material",
                          collapsed: true,
                          link: "/asset/formats/gdt/material",
                          items: [
                            { text: "Mod Depenencies" },
                            { text: "Mod" },
                          ],
                          },
                        {
                            text: "Weapon",
                            collapsed: true,
                            link: "/asset/formats/csv/zone-source/assetlist/",
                            items: [
                              { text: "Ignore Files" },
                              { text: "Mod" },
                            ],
                          },
                        { text: "Zone" },
                      { text: "Attachment Table" },
                      { text: "Attributes Table" },
                      { text: "Clan Tag Features" },
                      { text: "Country Table" },
                      { text: "Faction Table" },
                      { text: "Footstep FX Table" },
                      { text: "Footstep Sound Table" },
                      { text: "Gametypes Table" },
                      { text: "Generic CSV" },
                      { text: "Glass" },
                      { text: "Glasses" },
                      { text: "Impact FX" },
                      { text: "Leaderboard" },
                      { text: "Maps Table" },
                      { text: "Rank Table" },
                      { text: "Reflections" },
                      { text: "Stats Table" },
                      { text: "Texture List" },
                      { text: "VS Mode Class Table" },
                      { text: "Weapon Options" },
                    ],
                  },
                ],
                 },
              ],
            },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/OpenAssetTools/Docs/edit/main/docs/:path",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Laupetin/OpenAssetTools" },
    ],
  },
});
