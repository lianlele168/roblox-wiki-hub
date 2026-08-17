import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://robloxwikihub.com'),
  alternates: {
    canonical: '/',
  },
  title: "Roblox Wiki Hub - Premier Roblox Game Guides, Active Codes & Tier Lists (2026)",
  description: "Your ultimate community directory for top Roblox game guides. Access daily active redeem codes, meta unit tier lists, item values, and beginner leveling guides.",
  keywords: [
    "roblox wiki hub",
    "roblox wiki",
    "roblox codes 2026",
    "roblox tier list",
    "jujutsu infinite codes",
    "anime defenders tier list",
    "fisch codes",
    "dress to impress codes",
    "blade ball codes",
    "destined rivals tier list",
    "type soul reroll codes"
  ],
  authors: [{ name: "Roblox Wiki Hub Team" }],
  openGraph: {
    title: "Roblox Wiki Hub - Premier Roblox Game Database Portal",
    description: "Daily updated active codes, meta tier lists, and gameplay guides for top Roblox games.",
    url: "https://robloxwikihub.com",
    siteName: "Roblox Wiki Hub",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Roblox Wiki Hub',
    url: 'https://robloxwikihub.com',
    description: 'Premier Roblox game database portal providing daily active codes, tier lists, and gameplay guides.',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#06080e] text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
