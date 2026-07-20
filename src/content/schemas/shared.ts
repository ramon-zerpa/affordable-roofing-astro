import { reference } from "astro:content";
import { z } from "astro/zod";

export const contentStatusSchema = z.enum([
  "draft",
  "review",
  "approved",
  "published",
  "needs-reverification",
  "archived",
]);

export const sourceStatusSchema = z.enum([
  "verified",
  "needs-reverification",
  "source-only",
]);

export const ctaSchema = z
  .object({
    label: z.string().min(2).max(80),
    kind: z.enum(["route", "phone", "external", "form"]),
    target: z.string().min(1),
  })
  .strict();

export const seoSchema = z
  .object({
    title: z.string().min(15).max(75),
    description: z.string().min(70).max(180),
    canonicalOverride: z.url().optional(),
    robots: z.enum(["index,follow", "noindex,follow", "noindex,nofollow"]),
    ogImage: reference("media"),
    schemaTypes: z
      .array(
        z.enum([
          "WebPage",
          "Service",
          "Article",
          "BreadcrumbList",
          "FAQPage",
          "Organization",
          "LocalBusiness",
        ]),
      )
      .min(1),
  })
  .strict();

export const heroSchema = z
  .object({
    eyebrow: z.string().max(80).optional(),
    heading: z.string().min(10).max(120),
    summary: z.string().min(40).max(300),
    media: reference("media"),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema.optional(),
  })
  .strict();

const featureItemSchema = z
  .object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
  })
  .strict();

const processStepSchema = z
  .object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(500),
  })
  .strict();

export const sectionBlockSchema = z.discriminatedUnion("type", [
  z
    .object({
      type: z.literal("richText"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      body: z.string().min(20),
    })
    .strict(),
  z
    .object({
      type: z.literal("featureList"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      items: z.array(featureItemSchema).min(2).max(12),
    })
    .strict(),
  z
    .object({
      type: z.literal("comparison"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      columns: z.array(z.string().min(1).max(80)).min(2).max(4),
      rows: z
        .array(
          z
            .object({
              label: z.string().min(1).max(100),
              values: z.array(z.string().min(1).max(300)).min(2).max(4),
            })
            .strict(),
        )
        .min(1),
    })
    .strict(),
  z
    .object({
      type: z.literal("process"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      steps: z.array(processStepSchema).min(2).max(10),
    })
    .strict(),
  z
    .object({
      type: z.literal("disclosure"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      body: z.string().min(20),
    })
    .strict(),
  z
    .object({
      type: z.literal("ctaBand"),
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      heading: z.string().min(2).max(120),
      summary: z.string().min(20).max(300),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema.optional(),
    })
    .strict(),
]);

export const commonPageFields = {
  contentId: z.string().regex(/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/),
  routeKey: z.string().regex(/^[a-z]+(?:\.[a-z0-9-]+)+$/),
  legacyUrls: z.array(z.url()).min(1),
  status: contentStatusSchema,
  locale: z.literal("en"),
  title: z.string().min(5).max(120),
  owner: z.string().min(3).max(80),
  lastReviewedAt: z.coerce.date(),
  reviewAgainAt: z.coerce.date().optional(),
  seo: seoSchema,
  hero: heroSchema,
  faqRefs: z.array(reference("faqs")).default([]),
  testimonialRefs: z.array(reference("testimonials")).default([]),
  claimRefs: z.array(reference("claims")).default([]),
};

export const guidanceSchema = z
  .object({
    summary: z.string().min(20).max(500),
    sourceStatus: sourceStatusSchema,
  })
  .strict();

export const processStepListSchema = z
  .array(
    z
      .object({
        title: z.string().min(2).max(100),
        description: z.string().min(10).max(500),
      })
      .strict(),
  )
  .min(2)
  .max(10);
