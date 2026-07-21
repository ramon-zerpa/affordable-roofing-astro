export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export function createFaqPageSchema(items: ReadonlyArray<FaqSchemaItem>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  } as const;
}

export interface RoofingContractorSchemaInput {
  name: string;
  legalName: string;
  origin: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  rating: {
    value: number;
    best: number;
    worst: number;
    reviewCount: number;
  };
  social: Record<string, string>;
}

export function createRoofingContractorSchema(
  business: RoofingContractorSchemaInput,
) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${business.origin}/#roofing-contractor`,
    name: business.legalName,
    alternateName: business.name,
    url: business.origin,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      bestRating: business.rating.best,
      worstRating: business.rating.worst,
      reviewCount: business.rating.reviewCount,
    },
    sameAs: Object.values(business.social),
  } as const;
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  providerId: string;
  areaServed: string;
}

export function createServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.path,
    serviceType: service.name,
    provider: {
      "@id": service.providerId,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: service.areaServed,
    },
  } as const;
}
