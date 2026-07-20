import { reference } from "astro:content";
import { z } from "astro/zod";
import {
  commonPageFields,
  ctaSchema,
  guidanceSchema,
  processStepListSchema,
  sectionBlockSchema,
  sourceStatusSchema,
} from "./shared";

export const servicePageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("service"),
    serviceName: z.string().min(3).max(100),
    serviceCategory: z.enum([
      "repair",
      "replacement",
      "installation",
      "inspection",
      "maintenance",
      "restoration",
    ]),
    audience: z.enum(["residential", "commercial", "both"]),
    customerProblems: z.array(z.string().min(10).max(240)).min(2),
    outcomes: z.array(z.string().min(10).max(240)).min(2),
    includedWork: z.array(z.string().min(10).max(240)).min(2),
    excludedWork: z.array(z.string().min(10).max(240)).default([]),
    repairVsReplace: z
      .object({
        repairWhen: z.array(z.string().min(10).max(300)).min(1),
        replaceWhen: z.array(z.string().min(10).max(300)).min(1),
      })
      .optional(),
    supportedMaterialRefs: z.array(reference("materials")).default([]),
    processSteps: processStepListSchema,
    timingGuidance: guidanceSchema.optional(),
    costGuidance: guidanceSchema.optional(),
    insuranceGuidance: z.string().min(30).max(800).optional(),
    financingPageRef: reference("pages").optional(),
    availableLocationRefs: z.array(reference("locations")).min(1),
    relatedServiceRefs: z.array(reference("services")).default([]),
    relatedPostRefs: z.array(reference("posts")).default([]),
    supplementalSections: z.array(sectionBlockSchema).default([]),
  })
  .strict();

export const materialPageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("material"),
    materialName: z.string().min(3).max(120),
    materialFamily: z.enum([
      "shingle",
      "metal",
      "tile",
      "membrane",
      "coating",
      "other",
    ]),
    roofSlopeCompatibility: z
      .array(z.enum(["flat", "low-slope", "steep-slope"]))
      .min(1),
    propertyTypes: z.array(z.enum(["residential", "commercial"])).min(1),
    climateFit: z.string().min(40).max(800),
    commonProblems: z.array(z.string().min(10).max(300)).min(2),
    variants: z
      .array(
        z.object({
          name: z.string().min(2).max(100),
          summary: z.string().min(20).max(500),
        }),
      )
      .min(1),
    advantages: z.array(z.string().min(10).max(300)).min(2),
    tradeoffs: z.array(z.string().min(10).max(300)).min(2),
    serviceRefs: z.array(reference("services")).min(1),
    maintenanceGuidance: z.array(z.string().min(10).max(300)).min(2),
    lifespanGuidance: guidanceSchema.optional(),
    costFactors: z.array(z.string().min(3).max(200)).default([]),
    codeComplianceNotes: guidanceSchema.optional(),
    comparisonRefs: z.array(reference("materials")).default([]),
    supplementalSections: z.array(sectionBlockSchema).default([]),
  })
  .strict();

export const locationPageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("location"),
    cityName: z.string().min(2).max(100),
    countyName: z.string().min(2).max(100),
    stateCode: z.string().length(2),
    serviceAreaStatus: z.enum([
      "active",
      "limited",
      "referral-only",
      "inactive",
    ]),
    serviceAreaTier: z.enum(["primary", "secondary", "tertiary"]),
    localSummary: z.string().min(120).max(1200),
    availableServiceRefs: z.array(reference("services")).min(1),
    availableMaterialRefs: z.array(reference("materials")).default([]),
    localConditions: z
      .array(
        z.object({
          title: z.string().min(2).max(100),
          description: z.string().min(20).max(500),
        }),
      )
      .min(2),
    neighborhoods: z.array(z.string().min(2).max(100)).default([]),
    localProjectRefs: z
      .array(z.string().regex(/^project-[a-z0-9-]+$/))
      .default([]),
    serviceEvidence: z.string().min(80).max(1000),
    evidenceStatus: sourceStatusSchema,
    nearbyLocationRefs: z.array(reference("locations")).default([]),
    supplementalSections: z.array(sectionBlockSchema).default([]),
  })
  .strict();

const citationSchema = z
  .object({
    label: z.string().min(2).max(160),
    url: z.url(),
    status: sourceStatusSchema,
  })
  .strict();

export const postPageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("post"),
    headline: z.string().min(10).max(140),
    dek: z.string().min(40).max(300),
    authorRef: reference("authors"),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    reviewedAt: z.coerce.date(),
    reviewerRef: reference("authors").optional(),
    category: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    tags: z
      .array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/))
      .max(8)
      .default([]),
    heroMedia: reference("media"),
    body: z.string().min(500),
    citations: z.array(citationSchema).default([]),
    relatedServiceRefs: z.array(reference("services")).default([]),
    relatedMaterialRefs: z.array(reference("materials")).default([]),
    relatedLocationRefs: z.array(reference("locations")).default([]),
    relatedPostRefs: z.array(reference("posts")).default([]),
    articleCta: ctaSchema,
  })
  .strict();

const financingSchema = z
  .object({
    programs: z
      .array(
        z.object({
          name: z.string().min(2).max(100),
          applicationUrl: z.url(),
          status: sourceStatusSchema,
        }),
      )
      .min(1),
    eligibilitySummary: z.string().min(30).max(600),
    disclosures: z.array(z.string().min(20).max(500)).min(1),
  })
  .strict();

export const generalPageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("page"),
    pageSubtype: z.enum([
      "about",
      "financing",
      "credentials",
      "warranties",
      "resource",
      "standard",
      "legal",
    ]),
    pagePurpose: z.string().min(40).max(500),
    intro: z.string().min(60).max(1000),
    sections: z.array(sectionBlockSchema).min(1),
    primaryCta: ctaSchema,
    financing: financingSchema.optional(),
  })
  .strict()
  .superRefine((page, context) => {
    if (page.pageSubtype === "financing" && !page.financing) {
      context.addIssue({
        code: "custom",
        path: ["financing"],
        message: "Financing pages require a financing data object.",
      });
    }
  });

export const campaignPageSchema = z
  .object({
    ...commonPageFields,
    contentType: z.literal("campaign"),
    campaignId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    campaignName: z.string().min(5).max(160),
    campaignStatus: z.enum([
      "draft",
      "scheduled",
      "active",
      "paused",
      "expired",
      "archived",
    ]),
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    trafficSources: z
      .array(
        z.enum([
          "paid-search",
          "social",
          "email",
          "offline",
          "partner",
          "organic",
        ]),
      )
      .min(1),
    audience: z.string().min(30).max(500),
    offer: z.string().min(30).max(500),
    offerTerms: z.string().min(30).max(1000).optional(),
    productName: z.string().min(2).max(160).optional(),
    serviceRef: reference("services").nullable().optional(),
    materialRef: reference("materials").nullable().optional(),
    locationRefs: z.array(reference("locations")).default([]),
    layoutVariant: z.enum(["minimal", "campaign-brand"]),
    navigationMode: z.enum(["none", "minimal", "full"]),
    footerMode: z.enum(["legal-only", "compact", "full"]),
    formRef: reference("forms"),
    thankYouRouteKey: z.string().regex(/^[a-z]+(?:\.[a-z0-9-]+)+$/),
    trackingPlan: z.object({
      primaryEvent: z.string().regex(/^[a-z0-9_]+$/),
      secondaryEvents: z.array(z.string().regex(/^[a-z0-9_]+$/)).default([]),
      allowedParameters: z.array(z.string().regex(/^[a-z0-9_]+$/)).max(20),
    }),
    experiment: z
      .object({
        id: z.string().min(2).max(100),
        variant: z.string().min(1).max(80),
        successMetric: z.string().min(2).max(100),
      })
      .optional(),
    expirationAction: z.enum([
      "review-and-redirect",
      "archive",
      "convert-to-evergreen",
    ]),
    sections: z.array(sectionBlockSchema).min(2),
  })
  .strict()
  .superRefine((campaign, context) => {
    const hasPaidTraffic = campaign.trafficSources.some((source) =>
      ["paid-search", "social", "email"].includes(source),
    );

    if (hasPaidTraffic && campaign.seo.robots === "index,follow") {
      context.addIssue({
        code: "custom",
        path: ["seo", "robots"],
        message: "Paid or temporary campaign pages default to noindex,follow.",
      });
    }

    if (campaign.campaignStatus === "scheduled" && !campaign.startsAt) {
      context.addIssue({
        code: "custom",
        path: ["startsAt"],
        message: "Scheduled campaigns require a start date.",
      });
    }
  });
