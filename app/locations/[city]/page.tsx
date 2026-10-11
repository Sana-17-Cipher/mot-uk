import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { pageMetadata } from "@/data/site";
import LocationContent from "@/components/LocationContent";
export const dynamicParams = false;
export function generateStaticParams() { return locations.map(({slug}) => ({city:slug})); }
export async function generateMetadata({params}: {params: Promise<{city:string}>}) {
 const {city} = await params; const location = locations.find(l => l.slug === city);
 if (!location) return {};
 return pageMetadata(`Online Tuition in ${location.name} | Moms on Teaching`, `Personalised one-to-one online tuition in ${location.name} for CBSE, ICSE, IGCSE and Kerala State Board students.`, `/locations/${location.slug}/`);
}
export default async function Page({params}: {params:Promise<{city:string}>}) {
 const {city} = await params; const location = locations.find(l => l.slug === city);
 if (!location) notFound();
 return <LocationContent city={location.name} />;
}
