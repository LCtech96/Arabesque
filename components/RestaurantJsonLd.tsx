import { getSiteUrl } from "@/lib/site";
import {
  addressStructured,
  geoCoordinates,
  restaurantDescription,
  restaurantName,
} from "@/lib/seo";

/**
 * Schema.org Restaurant per risultati arricchiti (Google).
 * Telefono solo se impostato in env (evita numeri fittizi in produzione).
 */
export default function RestaurantJsonLd() {
  const url = getSiteUrl();
  const phone = process.env.NEXT_PUBLIC_RESTAURANT_PHONE?.trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${url}/#restaurant`,
    name: restaurantName,
    description: restaurantDescription,
    url,
    image: `${url}/profile-image.jpg`,
    address: addressStructured,
    geo: geoCoordinates,
    servesCuisine: ["Pesce", "Cucina siciliana", "Pizza"],
    priceRange: "€€",
    ...(phone ? { telephone: phone } : {}),
    sameAs: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim()
      ? [process.env.NEXT_PUBLIC_FACEBOOK_URL.trim()]
      : undefined,
    hasMenu: `${url}/menu`,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: geoCoordinates,
      geoRadius: 15000,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
