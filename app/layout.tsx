import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import RestaurantJsonLd from "@/components/RestaurantJsonLd";
import { getSiteUrl } from "@/lib/site";
import { defaultKeywords, restaurantDescription, restaurantName } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fireflies = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-fireflies",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurantName} — Pesce fresco, pizze | Terrasini, vicino aeroporto Palermo`,
    template: `%s | ${restaurantName}`,
  },
  description: restaurantDescription,
  keywords: defaultKeywords,
  authors: [{ name: restaurantName }],
  creator: restaurantName,
  publisher: restaurantName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: restaurantName,
    title: `${restaurantName} — Cucina di mare a Terrasini`,
    description: restaurantDescription,
    images: [
      {
        url: "/profile-image.jpg",
        width: 800,
        height: 800,
        alt: `${restaurantName} — cucina di pesce e pizze`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantName} — Pesce fresco e pizze a Terrasini`,
    description: restaurantDescription,
    images: ["/profile-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "restaurant",
  icons: {
    icon: "/profile-image - Copy.jpg",
    shortcut: "/profile-image - Copy.jpg",
    apple: "/profile-image - Copy.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${fireflies.variable}`}>
        <RestaurantJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
