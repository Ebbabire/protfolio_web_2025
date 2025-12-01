import { Metadata } from "next";

// 1. Define your base URL (Replace with your actual domain)
const baseUrl = "https://www.ebbabirhanu.vercel.app";

export const meta: Metadata = {
  metadataBase: new URL(baseUrl),
  // 2. Title Template: Changes "Home" to "Home | Ebba Birhanu" automatically
  title: {
    default: "Ebba Birhanu | Front-end Developer & Team Lead",
    template: "%s | Ebba Birhanu",
  },
  // 3. Your specific description
  description:
    "Experienced in creating user-focused, high-performance websites and applications. Specializing in admin dashboard panels and leading teams to deliver functional digital solutions.",

  // 4. Keywords for SEO ranking
  keywords: [
    "Ebba Birhanu",
    "Lead Web Developer",
    "Admin Dashboard Specialist",
    "React Developer",
    "Next.js Portfolio",
    "Web Development Team Lead",
    "Ethiopia Developer",
  ],

  // 5. Author and Creator info
  authors: [{ name: "Ebba Birhanu", url: baseUrl }],
  creator: "Ebba Birhanu",

  // 6. Open Graph (How links look on Facebook/LinkedIn/Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Ebba Birhanu | Lead Web Developer",
    description:
      "Specializing in building high-performance admin dashboards and scalable web applications.",
    siteName: "Ebba Birhanu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ebba Birhanu Portfolio Preview",
      },
    ],
  },

  // 7. Twitter Card (How links look on Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Ebba Birhanu | Lead Web Developer",
    description:
      "Building user-focused, high-performance websites and admin panels.",
    images: ["/og-image.png"],
  },

  // 8. Icons (Favicon)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // 9. Robots (Ensure Google can crawl your site)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
