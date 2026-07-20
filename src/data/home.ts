import type { TranslationKey } from "../i18n/utils";

export type HomePathIcon = "home" | "repair" | "shingle" | "commercial";

interface LinkedHomeItem {
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  href: string;
  icon: HomePathIcon;
}

export const serviceShortcuts: ReadonlyArray<
  LinkedHomeItem & { linkKey: TranslationKey }
> = [
  {
    titleKey: "shortcuts.replacement.title",
    bodyKey: "shortcuts.replacement.body",
    linkKey: "shortcuts.link",
    href: "/affordable-roofing-services/roof-replacement/",
    icon: "home",
  },
  {
    titleKey: "shortcuts.repair.title",
    bodyKey: "shortcuts.repair.body",
    linkKey: "shortcuts.link",
    href: "/affordable-roofing-services/roof-repair/",
    icon: "repair",
  },
  {
    titleKey: "shortcuts.shingle.title",
    bodyKey: "shortcuts.shingle.body",
    linkKey: "shortcuts.link",
    href: "/residential-roof/shingle-roofing/",
    icon: "shingle",
  },
  {
    titleKey: "shortcuts.metal.title",
    bodyKey: "shortcuts.metal.body",
    linkKey: "shortcuts.link",
    href: "/residential-roof/metal-roofing-tampa/",
    icon: "commercial",
  },
];

export const homeReviews: ReadonlyArray<{
  nameKey: TranslationKey;
  quoteKey: TranslationKey;
}> = [
  { nameKey: "reviews.sybil.name", quoteKey: "reviews.sybil.quote" },
  { nameKey: "reviews.susan.name", quoteKey: "reviews.susan.quote" },
  { nameKey: "reviews.luis.name", quoteKey: "reviews.luis.quote" },
];

export const decisionPaths: ReadonlyArray<
  LinkedHomeItem & { linkKey: TranslationKey; tone: "navy" | "blue" }
> = [
  {
    titleKey: "decision.residential.title",
    bodyKey: "decision.residential.body",
    linkKey: "decision.residential.link",
    href: "/residential-roof/",
    icon: "home",
    tone: "navy",
  },
  {
    titleKey: "decision.commercial.title",
    bodyKey: "decision.commercial.body",
    linkKey: "decision.commercial.link",
    href: "/commercial-roof/",
    icon: "commercial",
    tone: "blue",
  },
];

export const residentialBenefits: ReadonlyArray<TranslationKey> = [
  "residential.benefit.protection",
  "residential.benefit.curbAppeal",
  "residential.benefit.durability",
  "residential.benefit.process",
];

export const shingleManufacturers: ReadonlyArray<{
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  linkKey: TranslationKey;
  href: string;
  logo: "timberline" | "certainteed";
}> = [
  {
    titleKey: "shingles.gaf.title",
    bodyKey: "shingles.gaf.body",
    linkKey: "shingles.colorOptions",
    href: "/residential-roof/gaf-shingle-roofing/",
    logo: "timberline",
  },
  {
    titleKey: "shingles.certainteed.title",
    bodyKey: "shingles.certainteed.body",
    linkKey: "shingles.colorOptions",
    href: "/residential-roof/certainteed-shingle-roofing/",
    logo: "certainteed",
  },
];

export const roofingMaterialGuides: ReadonlyArray<{
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  productsKey: TranslationKey;
  href: string;
  image: "designer" | "metal";
}> = [
  {
    titleKey: "materials.designer.title",
    bodyKey: "materials.designer.body",
    productsKey: "materials.designer.products",
    href: "/residential-roof/designer-shingles/",
    image: "designer",
  },
  {
    titleKey: "materials.metal.title",
    bodyKey: "materials.metal.body",
    productsKey: "materials.metal.products",
    href: "/residential-roof/metal-roofing-tampa/",
    image: "metal",
  },
];

export const commercialRoofingPaths: ReadonlyArray<{
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  linkKey: TranslationKey;
  href: string;
  icon: "building" | "factory";
  tone: "navy" | "blue";
}> = [
  {
    titleKey: "commercial.tpo.title",
    bodyKey: "commercial.tpo.body",
    linkKey: "commercial.tpo.link",
    href: "/commercial-roof/tpo-roof-maintenance/",
    icon: "building",
    tone: "navy",
  },
  {
    titleKey: "commercial.metal.title",
    bodyKey: "commercial.metal.body",
    linkKey: "commercial.metal.link",
    href: "/commercial-roof/standing-seam/",
    icon: "factory",
    tone: "blue",
  },
];

export const experienceProtectionProofs: ReadonlyArray<{
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  size: "standard" | "tall";
}> = [
  {
    titleKey: "experience.license.title",
    bodyKey: "experience.license.body",
    size: "standard",
  },
  {
    titleKey: "experience.insurance.title",
    bodyKey: "experience.insurance.body",
    size: "tall",
  },
  {
    titleKey: "experience.certificate.title",
    bodyKey: "experience.certificate.body",
    size: "standard",
  },
];

export type AccreditationLogo =
  | "bbb"
  | "angi"
  | "five-star"
  | "gaf-presidents-club"
  | "gaf-master-elite"
  | "gaf-master-select"
  | "gaf-installation"
  | "gaf-consumer-protection"
  | "gaf-training"
  | "owens-corning"
  | "drexel-metals"
  | "certainteed-five-star";

interface AccreditationCard {
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  logo: AccreditationLogo;
}

export const accreditationSlides: ReadonlyArray<
  ReadonlyArray<AccreditationCard>
> = [
  [
    {
      titleKey: "accreditation.bbb.title",
      bodyKey: "accreditation.bbb.body",
      logo: "bbb",
    },
    {
      titleKey: "accreditation.angi.title",
      bodyKey: "accreditation.angi.body",
      logo: "angi",
    },
    {
      titleKey: "accreditation.fiveStar.title",
      bodyKey: "accreditation.fiveStar.body",
      logo: "five-star",
    },
    {
      titleKey: "accreditation.installation.title",
      bodyKey: "accreditation.installation.body",
      logo: "gaf-installation",
    },
    {
      titleKey: "accreditation.consumer.title",
      bodyKey: "accreditation.consumer.body",
      logo: "gaf-consumer-protection",
    },
    {
      titleKey: "accreditation.training.title",
      bodyKey: "accreditation.training.body",
      logo: "gaf-training",
    },
  ],
  [
    {
      titleKey: "accreditation.president.title",
      bodyKey: "accreditation.president.body",
      logo: "gaf-presidents-club",
    },
    {
      titleKey: "accreditation.masterElite.title",
      bodyKey: "accreditation.masterElite.body",
      logo: "gaf-master-elite",
    },
    {
      titleKey: "accreditation.masterSelect.title",
      bodyKey: "accreditation.masterSelect.body",
      logo: "gaf-master-select",
    },
    {
      titleKey: "accreditation.owensCorning.title",
      bodyKey: "accreditation.owensCorning.body",
      logo: "owens-corning",
    },
    {
      titleKey: "accreditation.drexel.title",
      bodyKey: "accreditation.drexel.body",
      logo: "drexel-metals",
    },
    {
      titleKey: "accreditation.certainTeed.title",
      bodyKey: "accreditation.certainTeed.body",
      logo: "certainteed-five-star",
    },
  ],
];

export const financingFacts: ReadonlyArray<{
  valueKey: TranslationKey;
  labelKey: TranslationKey;
}> = [
  {
    valueKey: "financingDetails.loanRange.value",
    labelKey: "financingDetails.loanRange.label",
  },
  {
    valueKey: "financingDetails.terms.value",
    labelKey: "financingDetails.terms.label",
  },
  {
    valueKey: "financingDetails.apr.value",
    labelKey: "financingDetails.apr.label",
  },
  {
    valueKey: "financingDetails.fico.value",
    labelKey: "financingDetails.fico.label",
  },
];

export const roofingServiceCards: ReadonlyArray<{
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  altKey: TranslationKey;
  href: string;
  image: "installation" | "repair" | "storm";
  tone: "light" | "dark";
}> = [
  {
    titleKey: "roofingServices.installation.title",
    bodyKey: "roofingServices.installation.body",
    altKey: "roofingServices.installation.alt",
    href: "/affordable-roofing-services/roof-installation/",
    image: "installation",
    tone: "light",
  },
  {
    titleKey: "roofingServices.repair.title",
    bodyKey: "roofingServices.repair.body",
    altKey: "roofingServices.repair.alt",
    href: "/affordable-roofing-services/roof-repair/",
    image: "repair",
    tone: "dark",
  },
  {
    titleKey: "roofingServices.storm.title",
    bodyKey: "roofingServices.storm.body",
    altKey: "roofingServices.storm.alt",
    href: "/affordable-roofing-services/storm-damage-restoration/",
    image: "storm",
    tone: "light",
  },
];

export interface HomeFaqDefinition {
  id: string;
  questionKey: TranslationKey;
  answerKey: TranslationKey;
  defaultOpen: boolean;
  desktopColumn: "left" | "right";
}

export const homeFaqs: ReadonlyArray<HomeFaqDefinition> = [
  {
    id: "metal-roof-florida-home",
    questionKey: "faqs.metal.question",
    answerKey: "faqs.metal.answer",
    defaultOpen: true,
    desktopColumn: "right",
  },
  {
    id: "common-roofing-materials-florida",
    questionKey: "faqs.materials.question",
    answerKey: "faqs.materials.answer",
    defaultOpen: true,
    desktopColumn: "left",
  },
  {
    id: "tile-roof-benefits-florida",
    questionKey: "faqs.tile.question",
    answerKey: "faqs.tile.answer",
    defaultOpen: false,
    desktopColumn: "right",
  },
  {
    id: "roof-inspection-frequency",
    questionKey: "faqs.inspection.question",
    answerKey: "faqs.inspection.answer",
    defaultOpen: false,
    desktopColumn: "right",
  },
  {
    id: "hurricane-roof-damage-signs",
    questionKey: "faqs.hurricaneDamage.question",
    answerKey: "faqs.hurricaneDamage.answer",
    defaultOpen: false,
    desktopColumn: "right",
  },
  {
    id: "hurricane-straps",
    questionKey: "faqs.hurricaneStraps.question",
    answerKey: "faqs.hurricaneStraps.answer",
    defaultOpen: false,
    desktopColumn: "right",
  },
  {
    id: "florida-roof-replacement-permit",
    questionKey: "faqs.permit.question",
    answerKey: "faqs.permit.answer",
    defaultOpen: false,
    desktopColumn: "right",
  },
  {
    id: "roof-replacement-cost",
    questionKey: "faqs.replacementCost.question",
    answerKey: "faqs.replacementCost.answer",
    defaultOpen: false,
    desktopColumn: "left",
  },
  {
    id: "roof-maintenance",
    questionKey: "faqs.maintenance.question",
    answerKey: "faqs.maintenance.answer",
    defaultOpen: false,
    desktopColumn: "left",
  },
  {
    id: "solar-panels-on-roof",
    questionKey: "faqs.solar.question",
    answerKey: "faqs.solar.answer",
    defaultOpen: false,
    desktopColumn: "left",
  },
];
