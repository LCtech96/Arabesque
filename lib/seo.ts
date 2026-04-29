/** Testi e dati strutturati per SEO (Google, rich results). */

export const restaurantName = "Ristorante Arabesque";

export const restaurantDescription =
  "Ristorante di pesce a Terrasini: pesce fresco ogni giorno, cucina siciliana sul mare, pizze e menù vicino all'aeroporto di Palermo Falcone-Borsellino. Prenota per pranzo o cena.";

export const defaultKeywords: string[] = [
  "ristorante pesce Terrasini",
  "ristorante vicino aeroporto Palermo",
  "ristorante Falcone Borsellino",
  "pesce fresco Terrasini",
  "cucina di mare Sicilia",
  "ristorante pizze Terrasini",
  "dove mangiare a Terrasini",
  "ristorante sul mare Palermo",
  "antipasti di mare",
  "primi di pesce",
  "carta dei vini",
  "Terrasini ristorante",
  "Arabesque Terrasini",
];

export const addressStructured = {
  "@type": "PostalAddress" as const,
  streetAddress: "Via Vincenzo Madonia, 104",
  addressLocality: "Terrasini",
  addressRegion: "PA",
  postalCode: "90049",
  addressCountry: "IT",
};

export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 38.1472,
  longitude: 12.9815,
};
