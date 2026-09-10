import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const subWikis = [
  'https://robloxwikihub.com/sitemap-hub.xml',
  'https://animedice.robloxwikihub.com/sitemap.xml',
  'https://laststop.robloxwikihub.com/sitemap.xml',
  'https://primeheroes.robloxwikihub.com/sitemap.xml',
  'https://wormcapitalist.robloxwikihub.com/sitemap.xml',
  'https://littletroubles.robloxwikihub.com/sitemap.xml',
  'https://winaworldchampionship.robloxwikihub.com/sitemap.xml',
  'https://deadrails.robloxwikihub.com/sitemap.xml',
  'https://repo.robloxwikihub.com/sitemap.xml',
  'https://stealabrainrot.robloxwikihub.com/sitemap.xml',
  'https://99nights.robloxwikihub.com/sitemap.xml',
  'https://animeorigins.robloxwikihub.com/sitemap.xml',
  'https://pressure.robloxwikihub.com/sitemap.xml',
  'https://jujutsushenanigans.robloxwikihub.com/sitemap.xml',
  'https://fisch.robloxwikihub.com/sitemap.xml',
  'https://solsrng.robloxwikihub.com/sitemap.xml',
  'https://dti.robloxwikihub.com/sitemap.xml',
  'https://bladeball.robloxwikihub.com/sitemap.xml',
  'https://typesoul.robloxwikihub.com/sitemap.xml',
  'https://jujutsuinfinite.robloxwikihub.com/sitemap.xml',
  'https://rivals.robloxwikihub.com/sitemap.xml',
  'https://animevanguards.robloxwikihub.com/sitemap.xml',
  'https://animedefenders.robloxwikihub.com/sitemap.xml',
  'https://rellseas.robloxwikihub.com/sitemap.xml',
  'https://destinedrivals.robloxwikihub.com/sitemap.xml',
];

export async function GET() {
  const currentDate = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${subWikis
  .map(
    (loc) => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
