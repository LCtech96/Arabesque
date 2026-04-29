import type { Metadata } from "next";
import { restaurantName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Menù",
  description:
    "Menù Arabesque Terrasini: antipasti e primi di mare, secondi di pesce e carne, pizze, bibite, birre e carta dei vini. Pesce fresco e specialità siciliane vicino all’aeroporto di Palermo.",
  keywords: [
    "menù ristorante Terrasini",
    "pizze Terrasini",
    "pesce fresco menù",
    "ristorante mare Terrasini",
    "cena vicino aeroporto Palermo",
  ],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `Menù | ${restaurantName}`,
    description:
      "Antipasti di mare, primi, secondi, pizze e vini: scopri il menù del Ristorante Arabesque a Terrasini.",
    url: "/menu",
    locale: "it_IT",
    type: "website",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
