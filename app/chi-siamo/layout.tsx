import type { Metadata } from "next";
import { restaurantName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Chi è il Ristorante Arabesque a Terrasini: cucina di pesce fresca, tradizione siciliana sul mare, team e specialità. Ideale vicino all’aeroporto Falcone-Borsellino.",
  keywords: [
    "ristorante Arabesque Terrasini",
    "chi siamo ristorante pesce",
    "cucina siciliana Terrasini",
    "ristorante vicino aeroporto Palermo",
  ],
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    title: `Chi siamo | ${restaurantName}`,
    description:
      "Storia, passione per il mare e il territorio: il Ristorante Arabesque a Terrasini (Palermo).",
    url: "/chi-siamo",
    locale: "it_IT",
    type: "website",
  },
};

export default function ChiSiamoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
