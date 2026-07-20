import type { TranslationKey } from "../i18n/utils";

export const site = {
  name: "Affordable Roofing Systems",
  legalName: "Affordable Roofing Systems Inc.",
  origin: "https://www.affordableroofingflorida.com",
  phoneDisplay: "(813) 542 8462",
  phoneHref: "tel:+18135428462",
  faxDisplay: "(813) 542 8461",
  faxHref: "tel:+18135428461",
  email: "info@affordableroofingflorida.com",
  address: {
    street: "9511 N Trask St Suite A",
    locality: "Tampa",
    region: "FL",
    postalCode: "33624",
    country: "US",
    mapHref: "https://goo.gl/maps/Yee35yrX8Pv3AJdn6",
  },
  rating: {
    value: 4.2,
    best: 5,
    worst: 1,
    reviewCount: 152,
  },
  social: {
    facebook: "https://www.facebook.com/AffordableRoofingSystems",
    instagram: "https://www.instagram.com/affordableroofingsytemsflorida/",
    x: "https://twitter.com/AffordbleRoofFL",
    linkedin: "https://www.linkedin.com/company/affordable-roofing-systems",
    youtube: "https://www.youtube.com/user/AffordableRoofingFL",
  },
  estimateHref: "/contact-us/",
} as const;

export const primaryNavigation: ReadonlyArray<{
  labelKey: TranslationKey;
  href: string;
}> = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.residential", href: "/residential-roof/" },
  { labelKey: "nav.commercial", href: "/commercial-roofing/" },
  { labelKey: "nav.services", href: "/affordable-roofing-services/" },
  { labelKey: "nav.about", href: "/about-us/" },
  { labelKey: "nav.blog", href: "/learn/" },
  { labelKey: "nav.serviceArea", href: "/local-roofing-companies/" },
  { labelKey: "nav.contact", href: "/contact-us/" },
];

export const footerNavigation: ReadonlyArray<{
  labelKey: TranslationKey;
  href: string;
}> = primaryNavigation.filter(
  ({ labelKey }) => labelKey !== "nav.home" && labelKey !== "nav.contact",
);

export const footerServices: ReadonlyArray<{
  labelKey: TranslationKey;
  href: string;
}> = [
  {
    labelKey: "footer.services.installation",
    href: "/affordable-roofing-services/roof-installation/",
  },
  {
    labelKey: "footer.services.replacement",
    href: "/affordable-roofing-services/roof-replacement/",
  },
  {
    labelKey: "footer.services.repair",
    href: "/affordable-roofing-services/roof-repair/",
  },
  {
    labelKey: "footer.services.maintenance",
    href: "/affordable-roofing-services/roof-maintenance/",
  },
  {
    labelKey: "footer.services.inspection",
    href: "/affordable-roofing-services/roof-inspection/",
  },
];

export const heroTrustItems: ReadonlyArray<{
  labelKey: TranslationKey;
  detailKey: TranslationKey;
}> = [
  {
    labelKey: "hero.trust.gaf.label",
    detailKey: "hero.trust.gaf.detail",
  },
  {
    labelKey: "hero.trust.licensed.label",
    detailKey: "hero.trust.licensed.detail",
  },
  {
    labelKey: "hero.trust.insured.label",
    detailKey: "hero.trust.insured.detail",
  },
  {
    labelKey: "hero.trust.experience.label",
    detailKey: "hero.trust.experience.detail",
  },
];
