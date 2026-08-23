import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const allUrls = [
    // Main Hub
    { url: 'https://robloxwikihub.com', priority: 1.0, changeFrequency: 'daily' },

    // 99 Nights in the Forest Wiki (NEW)
    { url: 'https://99nights.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://99nights.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://99nights.robloxwikihub.com/calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://99nights.robloxwikihub.com/class-tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://99nights.robloxwikihub.com/entity-guide', priority: 0.8, changeFrequency: 'weekly' },

    // Anime Origins Wiki (NEW)
    { url: 'https://animeorigins.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://animeorigins.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://animeorigins.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Pressure Wiki (NEW)
    { url: 'https://pressure.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://pressure.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://pressure.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Jujutsu Shenanigans Wiki (NEW)
    { url: 'https://jujutsushenanigans.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://jujutsushenanigans.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://jujutsushenanigans.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Fisch Wiki
    { url: 'https://fisch.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://fisch.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://fisch.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://fisch.robloxwikihub.com/locations', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://fisch.robloxwikihub.com/enchantments-totems', priority: 0.8, changeFrequency: 'weekly' },

    // Sol's RNG Wiki
    { url: 'https://solsrng.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://solsrng.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://solsrng.robloxwikihub.com/aura-simulator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://solsrng.robloxwikihub.com/crafting-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://solsrng.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://solsrng.robloxwikihub.com/biomes', priority: 0.8, changeFrequency: 'weekly' },

    // Dress To Impress (DTI) Wiki
    { url: 'https://dti.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://dti.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://dti.robloxwikihub.com/themes', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://dti.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Blade Ball Wiki
    { url: 'https://bladeball.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://bladeball.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://bladeball.robloxwikihub.com/abilities', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://bladeball.robloxwikihub.com/spin-simulator', priority: 0.8, changeFrequency: 'weekly' },

    // Type Soul Wiki
    { url: 'https://typesoul.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://typesoul.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://typesoul.robloxwikihub.com/clan-tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://typesoul.robloxwikihub.com/value-list', priority: 0.8, changeFrequency: 'weekly' },

    // Jujutsu Infinite Wiki
    { url: 'https://jujutsuinfinite.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://jujutsuinfinite.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://jujutsuinfinite.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Rivals Wiki
    { url: 'https://rivals.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://rivals.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://rivals.robloxwikihub.com/crosshair-generator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://rivals.robloxwikihub.com/weapons', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://rivals.robloxwikihub.com/tier-list', priority: 0.8, changeFrequency: 'weekly' },

    // Anime Vanguards Wiki
    { url: 'https://animevanguards.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://animevanguards.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },

    // Anime Defenders Wiki
    { url: 'https://animedefenders.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://animedefenders.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },

    // RELL Seas Wiki
    { url: 'https://rellseas.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://rellseas.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },

    // Destined Rivals Wiki
    { url: 'https://destinedrivals.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://destinedrivals.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
  ];

  return allUrls.map((item) => ({
    url: item.url,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency as any,
    priority: item.priority,
  }));
}
