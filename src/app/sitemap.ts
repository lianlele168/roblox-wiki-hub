import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const allUrls = [
    // Main Hub
    { url: 'https://robloxwikihub.com', priority: 1.0, changeFrequency: 'daily' },

    // Win A World Championship Wiki (NEW)
    { url: 'https://winaworldchampionship.robloxwikihub.com', priority: 0.95, changeFrequency: 'daily' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/tier-list', priority: 0.85, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/best-team', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/beginner-guide', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/packs-guide', priority: 0.75, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/reroll-guide', priority: 0.75, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/formations', priority: 0.75, changeFrequency: 'weekly' },
    { url: 'https://winaworldchampionship.robloxwikihub.com/updates', priority: 0.75, changeFrequency: 'daily' },

    // Dead Rails Wiki (NEW)
    { url: 'https://deadrails.robloxwikihub.com', priority: 0.95, changeFrequency: 'daily' },
    { url: 'https://deadrails.robloxwikihub.com/fuel-calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://deadrails.robloxwikihub.com/cargo-trade-calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://deadrails.robloxwikihub.com/night-survival-simulator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://deadrails.robloxwikihub.com/weapons-tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://deadrails.robloxwikihub.com/class-roles', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://deadrails.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://deadrails.robloxwikihub.com/train-upgrades', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://deadrails.robloxwikihub.com/zombies-guide', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://deadrails.robloxwikihub.com/routes-map', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://deadrails.robloxwikihub.com/beginner-guide', priority: 0.8, changeFrequency: 'weekly' },

    // R.E.P.O. Wiki (NEW)
    { url: 'https://repo.robloxwikihub.com', priority: 0.95, changeFrequency: 'daily' },
    { url: 'https://repo.robloxwikihub.com/scrap-calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://repo.robloxwikihub.com/quota-calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://repo.robloxwikihub.com/gear-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://repo.robloxwikihub.com/monsters-guide', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://repo.robloxwikihub.com/item-database', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://repo.robloxwikihub.com/console-commands', priority: 0.8, changeFrequency: 'weekly' },

    // Steal a Brainrot Wiki (NEW)
    { url: 'https://stealabrainrot.robloxwikihub.com', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://stealabrainrot.robloxwikihub.com/codes', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://stealabrainrot.robloxwikihub.com/calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://stealabrainrot.robloxwikihub.com/summon-simulator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://stealabrainrot.robloxwikihub.com/trade-calculator', priority: 0.9, changeFrequency: 'daily' },
    { url: 'https://stealabrainrot.robloxwikihub.com/raid-profit-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://stealabrainrot.robloxwikihub.com/fusion-guide', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://stealabrainrot.robloxwikihub.com/boss-schedule', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://stealabrainrot.robloxwikihub.com/character-tier-list', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'https://stealabrainrot.robloxwikihub.com/steal-guide', priority: 0.8, changeFrequency: 'weekly' },

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
