import { Metadata } from "next";

// 1. Define your base URL
export const baseUrl = "https://ebbabirhanu.com";

export const meta: Metadata = {
  metadataBase: new URL(baseUrl),
  // Canonical URL: tells search engines ebbabirhanu.com is the main address
  alternates: {
    canonical: "/",
  },
  // 2. Title Template: Changes "Home" to "Home | Ebba Birhanu" automatically
  title: {
    default: "Ebba Birhanu | Senior Frontend Engineer",
    template: "%s | Ebba Birhanu",
  },
  // 3. Your specific description
  description:
    "Senior frontend engineer and CTO building React and Next.js products end to end: booking and payment flows, operations dashboards and clinical tools.",

  // 4. Keywords for SEO ranking
  keywords: [
    "Ebba Birhanu",
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "CTO",
    "Remote Frontend Engineer",
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
    title: "Ebba Birhanu | Senior Frontend Engineer",
    description:
      "React and Next.js products from first commit to production: booking and payment flows, operations dashboards and clinical tools.",
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
    title: "Ebba Birhanu | Senior Frontend Engineer",
    description:
      "React and Next.js products from first commit to production: booking and payment flows, operations dashboards and clinical tools.",
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
