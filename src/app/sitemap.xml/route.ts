import { MetadataRoute } from 'next/server'

export async function GET(): Promise<Response> {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://aparaturcoach.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      {/* Add more URLs for your site content */}
    </urlset>`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
