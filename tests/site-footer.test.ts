import { describe, expect, it } from "vitest";
import { footerNavigation, footerServices, site } from "../src/data/site";
import { translations } from "../src/i18n/ui";
import { createRoofingContractorSchema } from "../src/lib/structured-data";

describe("site footer", () => {
  it("keeps footer navigation and service links in centralized data", () => {
    expect(footerNavigation).toHaveLength(6);
    expect(footerServices).toHaveLength(5);

    for (const item of [...footerNavigation, ...footerServices]) {
      expect(item.href).toMatch(/^\/.+\/$/);
      expect(translations.en[item.labelKey]).toBeTruthy();
    }
  });

  it("builds RoofingContractor JSON-LD from the visible business rating", () => {
    const schema = createRoofingContractorSchema(site);

    expect(schema["@type"]).toBe("RoofingContractor");
    expect(schema["@type"]).not.toBe("Product");
    expect(schema.name).toBe(site.legalName);
    expect(schema.aggregateRating).toEqual({
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      bestRating: site.rating.best,
      worstRating: site.rating.worst,
      reviewCount: site.rating.reviewCount,
    });
    expect(schema.sameAs).toEqual(Object.values(site.social));
  });
});
