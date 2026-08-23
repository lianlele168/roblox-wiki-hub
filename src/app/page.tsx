'use client';

import React, { useState } from 'react';
import { Search, Flame, ShieldCheck, Trophy, Sparkles, Anchor, Zap, ExternalLink, Gamepad2, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface GameWiki {
  id: string;
  name: string;
  subdomain: string;
  url: string;
  category: string;
  icon: string;
  color: string;
  badge: string;
  description: string;
  tags: string[];
  isLive?: boolean;
}

const WIKIS: GameWiki[] = [
  {
    id: 'dead-rails',
    name: 'Dead Rails Wiki',
    subdomain: 'deadrails.robloxwikihub.com',
    url: 'https://deadrails.robloxwikihub.com',
    category: 'Post-Apocalyptic Train Survival',
    icon: '🚂',
    color: 'from-amber-600 via-orange-600 to-[#070a0f]',
    badge: '🔥 NEW Fuel Calc, Tier List & Codes',
    description: 'Interactive Fuel Consumption Calculator, Weapons DPS Tier List, Train Cowcatcher Upgrades & 2026 Redeem Codes.',
    tags: ['Fuel Calculator', 'Weapons Tier', 'Train Plating', 'Zombie Bestiary', 'Station Map', 'Active Codes'],
    isLive: true,
  },
  {
    id: 'repo-wiki',
    name: 'R.E.P.O. Wiki',
    subdomain: 'repo.robloxwikihub.com',
    url: 'https://repo.robloxwikihub.com',
    category: 'PC Extraction Co-Op Horror',
    icon: '☣️',
    color: 'from-amber-600 via-yellow-600 to-slate-900',
    badge: '🔥 NEW Scrap Calculator & Quota Formula',
    description: 'Scrap Impact Durability Calculator, Level Quota Target Formula, Gear Upgrade ROI, Monster Sound Aggro Guide & PC Console Commands.',
    tags: ['Scrap Calculator', 'Quota Formula', 'Gear ROI', 'Monster Aggro', 'Item Values', 'Console Commands'],
    isLive: true,
  },
  {
    id: 'steal-a-brainrot',
    name: 'Steal a Brainrot Wiki',
    subdomain: 'stealabrainrot.robloxwikihub.com',
    url: 'https://stealabrainrot.robloxwikihub.com',
    category: 'Meme Stealing / Tycoon / RNG',
    icon: '🗿',
    color: 'from-purple-600 via-pink-600 to-cyan-500',
    badge: '🔥 NEW Summon Sim, Trade Calc & Codes',
    description: 'Interactive Steal Calculator, Crate Summon Simulator, Trade Fairness Checker, Meme Character Tier List & 2026 Codes.',
    tags: ['Steal Calculator', 'Summon Simulator', 'Trade Checker', 'Meme Tier List', 'Active Codes', 'Vault ROI']
  },
  {
    id: '99-nights',
    name: '99 Nights in the Forest Wiki',
    subdomain: '99nights.robloxwikihub.com',
    url: 'https://99nights.robloxwikihub.com',
    category: 'Survival Horror / Open World',
    icon: '🌲',
    color: 'from-emerald-600 to-teal-800',
    badge: '🔥 NEW Wiki & Calculator',
    description: 'Interactive Survival Calculator, Class Tier List, Immortal Entity Tactics, Diamond Mining Tips, Flame Maintenance Guide & 2026 Codes.',
    tags: ['Survival Calculator', 'Class Tier List', 'Active Codes', 'Entity Guide', 'Diamonds & Flame']
  },
  {
    id: 'fish-it',
    name: 'Fish It! Wiki (Fisch)',
    subdomain: 'fishit.robloxwikihub.com',
    url: 'https://fishit.robloxwikihub.com',
    category: 'Fishing Simulation',
    icon: '🎣',
    color: 'from-sky-500 to-cyan-600',
    badge: '🔥 New',
    description: 'Active redeem codes, Rod Tier List, Catch & Profit Calculator, 100+ Fish Index, Weather Totems, Boats Speed, Altar Enchants, Quests & Aquarium.',
    tags: ['Active Codes', 'Rod Tier List', 'Profit Calculator', 'Weather Totems', 'Boats Speed', 'Quests & NPCs']
  },
  {
    id: 'grow-a-garden',
    name: 'Grow a Garden Wiki',
    subdomain: 'growagarden.robloxwikihub.com',
    url: 'https://growagarden.robloxwikihub.com',
    category: 'Farming Simulation',
    icon: '🌱',
    color: 'from-green-500 to-emerald-600',
    badge: '🔥 New',
    description: 'Active redeem codes, Crop Tier List, Mutation Calculator, Trading Values, Ascension Rebirth, Soil & Fertilizers, Weather Events, and Pets Defense.',
    tags: ['Active Codes', 'Crop Tier List', 'Mutation Calc', 'Trading Values', 'Ascension Guide', 'Soil & Fertilizer']
  },
  {
    id: 'anime-origins',
    name: 'Anime Origins Wiki',
    subdomain: 'animeorigins.robloxwikihub.com',
    url: 'https://animeorigins.robloxwikihub.com',
    category: 'Anime Tower Defense',
    icon: '⚡',
    color: 'from-amber-500 to-orange-600',
    badge: '🔥 New',
    description: 'Unit Tier List, active redeem codes, Trait Reroll Simulator, and full Evolution Recipe guide for Anime Origins.',
    tags: ['Active Codes', 'Unit Tier List', 'Trait Simulator', 'Evolution Guide']
  },
  {
    id: 'pressure',
    name: 'Pressure Wiki',
    subdomain: 'pressure.robloxwikihub.com',
    url: 'https://pressure.robloxwikihub.com',
    category: 'Horror Survival',
    icon: '👻',
    color: 'from-red-700 to-rose-800',
    badge: '🔥 New',
    description: 'Complete entity survival guide, Kroner codes, room-by-room tactics, badge unlocks, and item database for Pressure.',
    tags: ['Active Codes', 'Monster Guide', 'Badge Guide', 'Survival Tips']
  },
  {
    id: 'jujutsu-shenanigans',
    name: 'Jujutsu Shenanigans Wiki',
    subdomain: 'jujutsushenanigans.robloxwikihub.com',
    url: 'https://jujutsushenanigans.robloxwikihub.com',
    category: 'Anime PvP Fighter',
    icon: '🥷',
    color: 'from-purple-600 to-indigo-700',
    badge: '🔥 New',
    description: 'PvP Tier List, character Combo Builder, Awakening unlock guide, and active redeem codes for Jujutsu Shenanigans.',
    tags: ['Active Codes', 'PvP Tier List', 'Combo Builder', 'Awakening Guide']
  },
  {
    id: 'jujutsu-infinite',
    name: 'Jujutsu Infinite Wiki',
    subdomain: 'jujutsuinfinite.robloxwikihub.com',
    url: 'https://jujutsuinfinite.robloxwikihub.com',
    category: 'Action / Anime',
    icon: '⚡',
    color: 'from-purple-600 to-indigo-600',
    badge: 'Update 1 Live',
    description: 'Get working Demon Fingers, Clan Spins, and Yen codes. Comprehensive Innate Technique & Domain Expansion tier list.',
    tags: ['Active Codes', 'Technique Tier List', 'Domain Expansion', 'Leveling Guide']
  },
  {
    id: 'anime-defenders',
    name: 'Anime Defenders Wiki',
    subdomain: 'animedefenders.robloxwikihub.com',
    url: 'https://animedefenders.robloxwikihub.com',
    category: 'Tower Defense',
    icon: '🛡️',
    color: 'from-amber-500 to-yellow-600',
    badge: 'Secret Unit Tier',
    description: 'Active gem codes, Secret unit DPS tier list, Almighty trait reroll guide, and evolution recipes.',
    tags: ['Gems & Wish Codes', 'Secret Unit DPS', 'Trait Rerolls', 'Evolution Recipes']
  },
  {
    id: 'fisch',
    name: 'Fisch Wiki',
    subdomain: 'fisch.robloxwikihub.com',
    url: 'https://fisch.robloxwikihub.com',
    category: 'RPG / Fishing',
    icon: '🎣',
    color: 'from-cyan-500 to-blue-600',
    badge: 'Desolate Deep Map',
    description: 'Fishing rod stats tier list, Desolate Deep coordinates, weather totem guides, and fish market value list.',
    tags: ['Rod Tier List', 'Desolate Deep Coords', 'Weather Totems', 'Fish Value List']
  },
  {
    id: 'dti',
    name: 'Dress To Impress Wiki',
    subdomain: 'dti.robloxwikihub.com',
    url: 'https://dti.robloxwikihub.com',
    category: 'Fashion / Runway',
    icon: '👑',
    color: 'from-pink-500 to-rose-600',
    badge: 'Runway Combo Guide',
    description: 'Verified clothes redeem codes, 5-minute theme outfit recipes, clothing layering hacks, and 5-star runway tips.',
    tags: ['Free Clothes Codes', 'Theme Combos', 'Layering Hacks', 'Pose Tier List']
  },
  {
    id: 'blade-ball',
    name: 'Blade Ball Wiki',
    subdomain: 'bladeball.robloxwikihub.com',
    url: 'https://bladeball.robloxwikihub.com',
    category: 'Action / PVP',
    icon: '⚔️',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Ability Tier List',
    description: 'Free wheel spins codes, Infinity & Dragon ability tier list, sword value rankings, and deflect timing guide.',
    tags: ['Wheel Spin Codes', 'Ability Tier List', 'Sword Values', 'Parry Mechanics']
  },
  {
    id: 'destined-rivals',
    name: 'Destined Rivals Wiki',
    subdomain: 'destinedrivals.robloxwikihub.com',
    url: 'https://destinedrivals.robloxwikihub.com',
    category: 'Card Battler',
    icon: '🗡️',
    color: 'from-emerald-500 to-teal-600',
    badge: 'Booster Packs',
    description: 'Gems & secret booster codes, card rarity rankings, team synergy builders, and pack opening simulator.',
    tags: ['Gems Codes', 'Card Tier List', 'Pack Simulator', 'Deck Builder']
  },
  {
    id: 'type-soul',
    name: 'Type Soul Wiki',
    subdomain: 'typesoul.robloxwikihub.com',
    url: 'https://typesoul.robloxwikihub.com',
    category: 'Anime RPG',
    icon: '🔮',
    color: 'from-purple-700 to-crimson-600',
    badge: 'Bankai Quests',
    description: 'Reroll codes, Weapon & Shikai tier list, Clan rarity buffs, Bankai unlock walkthroughs, and trade values.',
    tags: ['Reroll Codes', 'Shikai & Bankai', 'Clan Buffs', 'Trade Value List']
  },
  {
    id: 'rell-seas',
    name: 'RELL SEAS Wiki',
    subdomain: 'rellseas.robloxwikihub.com',
    url: 'https://rellseas.robloxwikihub.com',
    category: 'Anime RPG / Open World',
    icon: '🌊',
    color: 'from-blue-600 to-amber-500',
    badge: 'Gacha & Map Tools',
    description: 'Active codes, Fruit Gacha Simulator, Level 1-1000 Stat Build Planner, Z-F skill movesets, and First Sea interactive map.',
    tags: ['Active Codes', 'Gacha Simulator', 'Build Planner', 'Sea Map']
  },
  {
    id: 'rivals',
    name: 'Rivals Wiki',
    subdomain: 'rivals.robloxwikihub.com',
    url: 'https://rivals.robloxwikihub.com',
    category: 'Fast-Paced FPS / Shooter',
    icon: '🎯',
    color: 'from-red-600 to-rose-600',
    badge: 'Crosshair & TTK Tools',
    description: 'Interactive Crosshair Code Generator, Weapon TTK Calculator, 2026 Meta Tier List, Map Callouts, and active codes.',
    tags: ['Crosshair Generator', 'Weapon TTK', 'Meta Tier List', 'Active Codes']
  },
  {
    id: 'anime-vanguards',
    name: 'Anime Vanguards Wiki',
    subdomain: 'animevanguards.robloxwikihub.com',
    url: 'https://animevanguards.robloxwikihub.com',
    category: 'Anime Tower Defense',
    icon: '🛡️',
    color: 'from-purple-600 to-pink-600',
    badge: 'DPS & Trait Tools',
    description: 'Interactive Unit DPS Calculator, Trait Reroll Simulator, 2026 Meta Tier List, Evolution Crafting Recipes, and active codes.',
    tags: ['DPS Calculator', 'Trait Simulator', 'Meta Tier List', 'Evolution Recipes']
  },
  {
    id: 'sols-rng',
    name: "Sol's RNG Wiki",
    subdomain: 'solsrng.robloxwikihub.com',
    url: 'https://solsrng.robloxwikihub.com',
    category: 'RNG Aura & Crafting',
    icon: '✨',
    color: 'from-amber-500 to-purple-600',
    badge: 'Aura Roll & Crafting Tools',
    description: 'Interactive Aura Roll Simulator, Potion & Gauntlet Crafting Calculator, 2026 Meta Tier List, Biome Multipliers, and active codes.',
    tags: ['Aura Simulator', 'Crafting Calculator', 'Meta Tier List', 'Biome Guide']
  }
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWikis = WIKIS.filter(wiki => 
    wiki.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wiki.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wiki.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#06080e]/90 backdrop-blur-md border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#06080e] rounded-[10px] flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-2">
                ROBLOX WIKI <span className="text-xs px-2 py-0.5 bg-indigo-950 text-indigo-300 rounded-md border border-indigo-700/50">HUB</span>
              </span>
              <p className="text-[10px] text-slate-400">Official Game Guide Directory</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#wikis" className="hover:text-indigo-400 transition-colors">Wiki Directory</a>
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Roblox Game Wiki Portal</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Your Premier Hub for <br className="hidden sm:inline" />
          <span className="gradient-title">Roblox Codes & Meta Guides</span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Verified redeem codes, meta unit tier lists, item values, and fast leveling guides for the most popular Roblox games.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by game name (e.g., Fisch, DTI, Anime Defenders)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-indigo-900/60 rounded-2xl py-4 pl-12 pr-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm shadow-xl transition-all"
            />
          </div>
        </div>
      </section>

      {/* Game Wiki Cards Grid */}
      <section id="wikis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <span>Game Wikis</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Select a game below to access its dedicated wiki database</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWikis.map((wiki) => (
            <div
              key={wiki.id}
              className="group bg-slate-900/80 border border-indigo-950 hover:border-indigo-600/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-950/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{wiki.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                        {wiki.name}
                      </h3>
                      <span className="text-[11px] text-slate-500">{wiki.category}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                    {wiki.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {wiki.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {wiki.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {wiki.isLive !== false ? (
                <a
                  href={wiki.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-indigo-600/20"
                >
                  <span>Visit {wiki.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-amber-400 text-xs font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-90">
                  <span>⚡ Code Local Ready (Deploy Pending)</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">Why Roblox Gamers Trust Our Wikis</h2>
          <p className="text-xs text-slate-400">Built by passionate Roblox players to deliver clean, ad-friendly, and accurate gameplay guides.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 border border-indigo-800/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">Daily Code Verification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our team tests codes across official Roblox Discord servers and game updates every day to guarantee 100% active, non-expired rewards.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 flex items-center justify-center text-amber-400 border border-amber-800/50">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">Data-Driven Tier Lists</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We rank units, rods, weapons, and abilities based on DPS calculations, meta viability, and high-level endgame performance.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/50">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">Lightning Fast & Clean</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero clutter, zero popups. Ultra-responsive layout optimized for fast access on mobile phones while playing Roblox.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#040509] border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base">ROBLOX WIKI HUB</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Roblox Wiki Hub is an independent community directory providing accurate redeem codes, tier lists, and gameplay guides for popular Roblox games.
            </p>
            <p className="text-[11px] text-slate-500">
              Disclaimer: Roblox Wiki Hub is not affiliated with or endorsed by Roblox Corporation or any game developers. All game names and trademarks belong to their respective owners.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">Featured Game Wikis</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://jujutsuinfinite.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Jujutsu Infinite Wiki</a></li>
              <li><a href="https://animedefenders.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Anime Defenders Wiki</a></li>
              <li><a href="https://fisch.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Fisch Wiki</a></li>
              <li><a href="https://dti.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Dress to Impress Wiki</a></li>
              <li><a href="https://bladeball.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Blade Ball Wiki</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">More Databases</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://solsrng.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 font-bold text-amber-400 transition-colors">Sol's RNG Wiki ✨</a></li>
              <li><a href="https://animevanguards.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Anime Vanguards Wiki 🛡️</a></li>
              <li><a href="https://rivals.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Rivals Wiki 🎯</a></li>
              <li><a href="https://rellseas.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">RELL SEAS Wiki 🌊</a></li>
              <li><a href="https://destinedrivals.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Destined Rivals Wiki</a></li>
              <li><a href="https://typesoul.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Type Soul Wiki</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Roblox Wiki Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
