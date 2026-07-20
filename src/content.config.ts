import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import {
  campaignPageSchema,
  generalPageSchema,
  locationPageSchema,
  materialPageSchema,
  postPageSchema,
  servicePageSchema,
} from "./content/schemas/page-types";
import {
  authorSchema,
  claimSchema,
  faqSchema,
  formSchema,
  mediaSchema,
  testimonialSchema,
} from "./content/schemas/support";

const media = defineCollection({
  loader: file("src/data/media.json"),
  schema: mediaSchema,
});

const authors = defineCollection({
  loader: file("src/data/authors.json"),
  schema: authorSchema,
});

const forms = defineCollection({
  loader: file("src/data/forms.json"),
  schema: formSchema,
});

const claims = defineCollection({
  loader: file("src/data/claims.json"),
  schema: claimSchema,
});

const faqs = defineCollection({
  loader: file("src/data/faqs.json"),
  schema: faqSchema,
});

const testimonials = defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: testimonialSchema,
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: servicePageSchema,
});

const materials = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/materials" }),
  schema: materialPageSchema,
});

const locations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/locations" }),
  schema: locationPageSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/posts" }),
  schema: postPageSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/pages" }),
  schema: generalPageSchema,
});

const campaigns = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/campaigns" }),
  schema: campaignPageSchema,
});

export const collections = {
  media,
  authors,
  forms,
  claims,
  faqs,
  testimonials,
  services,
  materials,
  locations,
  posts,
  pages,
  campaigns,
};
