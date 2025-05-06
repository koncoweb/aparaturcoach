import { MetadataRoute } from 'next/server'

// Function to get current date in ISO 8601 format (YYYY-MM-DD)
const getCurrentDateISO = () => {
  return new Date().toISOString().split('T')[0];
}

export async function GET(): Promise<Response> {
  const lastModified = getCurrentDateISO(); // Use current date in ISO format

  const baseUrl = 'https://aparaturcoach.com'; // Define your base URL

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/informasi</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
       <url>
        <loc>${baseUrl}/tryout</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
       <url>
        <loc>${baseUrl}/tentang</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
       <url>
        <loc>${baseUrl}/kontak</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
      {/* Add more URLs for specific tryout packages if they have static pages */}
    </urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
