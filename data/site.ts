import type { Metadata } from "next";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://moms-on-teaching-uk-nextjs.harivenu.chatgpt.site").replace(/\/$/, "");
export const analyticsId = "G-YKYVH5SZ2G";
export const socialLinks = [
  "https://www.facebook.com/people/Moms-On-Teaching/61580403700528",
  "https://www.instagram.com/moms.on.teaching",
  "https://www.linkedin.com/in/moms-on-teaching-tutions-mot",
  "https://www.reddit.com/user/MoT-Thrissur/",
  "https://www.youtube.com/@MomsonteachingTutions",
];
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, siteName: "Moms on Teaching UK", locale: "en_GB", type: "website", images: [{ url: "/images/hero2.png", alt: "One-to-one online learning with Moms on Teaching" }] } };
}
