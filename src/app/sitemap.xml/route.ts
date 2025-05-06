import { MetadataRoute } from 'next/server'

// Function to get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function GET(): Promise<Response> {
  const lastModified = getCurrentDate(); // Use current date for last modification

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://aparaturcoach.com</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://aparaturcoach.com/informasi</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      {/* Add more URLs for your site content (e.g., /tryout, /kontak, /tentang) */}
      {/* Example:
      <url>
        <loc>https://aparaturcoach.com/tryout</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      */}
    </urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
