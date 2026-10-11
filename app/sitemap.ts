import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { siteUrl } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["/", "/about/", "/services/", "/pricing/", "/faq/", "/contact/", "/locations/", "/site-map/", ...locations.map(l=>`/locations/${l.slug}/`)].map(path=>({url:`${siteUrl}${path}`}));
}
