import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  campaignPageSchema,
  generalPageSchema,
  locationPageSchema,
  materialPageSchema,
  postPageSchema,
  servicePageSchema,
} from "../src/content/schemas/page-types";

const fixtureFiles = [
  ["../src/content/services/svc-roof-repair.json", servicePageSchema],
  ["../src/content/materials/mat-flat-roofing.json", materialPageSchema],
  ["../src/content/locations/loc-lutz.json", locationPageSchema],
  ["../src/content/posts/post-skylight-leak-repair.json", postPageSchema],
  ["../src/content/pages/page-financing.json", generalPageSchema],
  ["../src/content/campaigns/cmp-timbersteel-0726.json", campaignPageSchema],
] as const;

function readJson(relativePath: string): unknown {
  const absolutePath = fileURLToPath(new URL(relativePath, import.meta.url));
  return JSON.parse(readFileSync(absolutePath, "utf8"));
}

function containsForbiddenKey(value: unknown, forbiddenKey: string): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => containsForbiddenKey(item, forbiddenKey));
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return (
      Object.hasOwn(record, forbiddenKey) ||
      Object.values(record).some((item) =>
        containsForbiddenKey(item, forbiddenKey),
      )
    );
  }

  return false;
}

describe("pilot content models", () => {
  it.each(fixtureFiles)("validates %s", (relativePath, schema) => {
    expect(() => schema.parse(readJson(relativePath))).not.toThrow();
  });

  it("contains exactly one pilot fixture for each core page type", () => {
    const contentTypes = fixtureFiles.map(([relativePath]) => {
      const fixture = readJson(relativePath) as { contentType: string };
      return fixture.contentType;
    });

    expect(contentTypes.sort()).toEqual(
      ["campaign", "location", "material", "page", "post", "service"].sort(),
    );
  });

  it("uses stable unique content IDs and route keys", () => {
    const fixtures = fixtureFiles.map(([relativePath]) =>
      readJson(relativePath),
    ) as Array<{ contentId: string; routeKey: string }>;

    expect(new Set(fixtures.map(({ contentId }) => contentId)).size).toBe(6);
    expect(new Set(fixtures.map(({ routeKey }) => routeKey)).size).toBe(6);
  });

  it("does not allow raw HTML escape hatches in pilot content", () => {
    for (const [relativePath] of fixtureFiles) {
      expect(containsForbiddenKey(readJson(relativePath), "rawHtml")).toBe(
        false,
      );
    }
  });

  it("rejects a raw HTML escape hatch at schema level", () => {
    const service = readJson(
      "../src/content/services/svc-roof-repair.json",
    ) as Record<string, unknown>;

    expect(() =>
      servicePageSchema.parse({ ...service, rawHtml: "<p>unsafe</p>" }),
    ).toThrow();
  });

  it("keeps the paid campaign out of the index by default", () => {
    const campaign = readJson(
      "../src/content/campaigns/cmp-timbersteel-0726.json",
    ) as { seo: { robots: string } };

    expect(campaign.seo.robots).toBe("noindex,follow");
  });

  it("rejects index,follow on a paid campaign fixture", () => {
    const campaign = readJson(
      "../src/content/campaigns/cmp-timbersteel-0726.json",
    ) as Record<string, unknown> & { seo: Record<string, unknown> };

    expect(() =>
      campaignPageSchema.parse({
        ...campaign,
        seo: { ...campaign.seo, robots: "index,follow" },
      }),
    ).toThrow();
  });
});
