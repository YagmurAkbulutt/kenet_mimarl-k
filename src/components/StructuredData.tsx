const siteUrl = "https://www.kenetmimarlik.com";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Kenet Mimarlık",
        alternateName: "KENET",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        description:
          "Kenet Mimarlık; Bandırma ve çevresinde mimari tasarım, ruhsat projesi, iç mimarlık ve uygulama hizmetleri sunan bir tasarım stüdyosudur.",
        telephone: ["+905362063063", "+905432638520"],
        email: "info@kenetmimarlik.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sunullah, Kemal Özal Cd. No:75",
          addressLocality: "Bandırma",
          addressRegion: "Balıkesir",
          postalCode: "10200",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.3441345,
          longitude: 27.9751743,
        },
        areaServed: [
          { "@type": "City", name: "Bandırma" },
          { "@type": "AdministrativeArea", name: "Balıkesir" },
        ],
        sameAs: [
          "https://www.instagram.com/kenetmimarlik/",
          "https://www.google.com/maps/place/KENET+M%C4%B0MARLIK/",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Kenet Mimarlık Hizmetleri",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ruhsat Projesi" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "İç Mimarlık" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mimari Tasarım" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tasarım ve Uygulama" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Kenet Mimarlık",
        publisher: { "@id": `${siteUrl}/#business` },
        inLanguage: ["tr-TR", "en-US"],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
