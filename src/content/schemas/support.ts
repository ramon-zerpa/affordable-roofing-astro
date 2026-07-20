import { z } from "astro/zod";
import { contentStatusSchema, sourceStatusSchema } from "./shared";

export const mediaSchema = z
  .object({
    assetId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    status: z.enum(["pending", "approved", "archived"]),
    kind: z.enum(["photo", "product-photo", "illustration", "logo", "icon"]),
    src: z.string().min(1).optional(),
    alt: z.string().min(5).max(240),
    sourceType: z.enum(["legacy", "needed", "manufacturer", "original"]),
    rightsStatus: z.enum(["needs-review", "approved", "restricted"]),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
  })
  .strict();

export const authorSchema = z
  .object({
    authorId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    name: z.string().min(3).max(120),
    role: z.string().min(2).max(120),
    bio: z.string().min(40).max(600),
    status: contentStatusSchema,
  })
  .strict();

export const formSchema = z
  .object({
    formId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    intent: z.enum(["contact", "estimate", "callback"]),
    status: z.enum(["draft", "approved", "archived"]),
    fields: z
      .array(
        z.object({
          name: z.string().regex(/^[a-z][A-Za-z0-9]*$/),
          label: z.string().min(2).max(100),
          type: z.enum(["text", "email", "tel", "textarea", "select"]),
          required: z.boolean(),
          autocomplete: z.string().min(2).max(80),
          maxLength: z.number().int().positive().max(5000),
        }),
      )
      .min(2),
    consent: z.string().min(40).max(1000),
    successMessage: z.string().min(20).max(500),
    errorMessage: z.string().min(20).max(500),
    spamProtection: z
      .array(z.enum(["honeypot", "rate-limit", "turnstile"]))
      .min(2),
    destination: z.string().min(3).max(200),
    retentionPolicy: z.string().min(10).max(300),
  })
  .strict();

export const claimSchema = z
  .object({
    claimId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    statement: z.string().min(20).max(500),
    category: z.enum([
      "license",
      "certification",
      "financing",
      "warranty",
      "guarantee",
      "insurance",
      "experience",
      "rating",
      "code",
    ]),
    verificationStatus: z.enum(["pending", "verified", "expired", "rejected"]),
    sourceUrl: z.url().optional(),
    verifiedAt: z.coerce.date().optional(),
    reviewAgainAt: z.coerce.date().optional(),
  })
  .strict();

export const faqSchema = z
  .object({
    faqId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    question: z.string().min(10).max(200),
    answer: z.string().min(40).max(1500),
    topics: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).min(1),
    status: z.enum(["draft", "review", "approved", "needs-reverification"]),
    lastReviewedAt: z.coerce.date(),
  })
  .strict();

export const testimonialSchema = z
  .object({
    testimonialId: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    quote: z.string().min(40).max(1200),
    personDisplayName: z.string().min(2).max(100),
    source: z.string().min(3).max(200),
    status: z.enum(["needs-verification", "approved", "rejected"]),
    serviceKey: z
      .string()
      .regex(/^[a-z]+(?:\.[a-z0-9-]+)+$/)
      .optional(),
  })
  .strict();

export const guidanceStatusSchema = sourceStatusSchema;
