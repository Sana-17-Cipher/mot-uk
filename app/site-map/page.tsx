import { locations } from "@/data/locations";
import { pageMetadata } from "@/data/site";
export const metadata = pageMetadata("Site Map | Moms on Teaching UK", "Explore Moms on Teaching pages and UK locations.", "/site-map/");
export default function Page() {
  const pages = [{name:"Home",href:"/"}, ...["About","Services","Locations","FAQ","Pricing","Contact"].map(name=>({name,href:`/${name.toLowerCase()}/`})), ...locations.map(l=>({name:l.name,href:`/locations/${l.slug}/`}))];
  return <main className="simple-page"><h1>Site Map</h1><ul className="site-map-links">{pages.map(p=><li key={p.href}><a href={p.href}>{p.name}</a></li>)}</ul></main>;
}
