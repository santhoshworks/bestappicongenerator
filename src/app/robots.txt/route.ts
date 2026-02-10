export async function GET() {
  const robotsTxt = `# Robots.txt for Best App Icon Generator
# https://bestappicongenerator.com

# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://bestappicongenerator.com/sitemap.xml

# Crawl-delay for polite crawling (optional)
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
