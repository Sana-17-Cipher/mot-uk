import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { siteUrl, socialLinks } from "@/data/site";
import "@/styles/reference.css";
import "@/styles/adjustments.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Moms on Teaching UK | One-to-One Online Tuition",
  description: "Personalised one-to-one online tuition for students across the UK with Moms on Teaching.",
  icons: { icon: "/images/mot-logo.png" },
};
const organisation = { "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Moms on Teaching", url: siteUrl, logo: `${siteUrl}/images/mot-logo.png`, email: "info@momsonteaching.com", telephone: "+917012092344", areaServed: "United Kingdom", sameAs: socialLinks };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="en-GB"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar /><div id="main-content" className="site-content">{children}</div><Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organisation).replace(/</g, "\\u003c")}} />
    <Analytics />
  </body></html>;
}
