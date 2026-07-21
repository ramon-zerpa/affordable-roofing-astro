export const languages = {
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const translations = {
  en: {
    "a11y.skipToContent": "Skip to main content",
    "a11y.openMenu": "Open primary navigation",
    "a11y.quickContact": "Quick contact",
    "site.name": "Affordable Roofing Systems",
    "site.tagline": "Where Experience and Quality Matter",
    "site.phoneDisplay": "(813) 542 8462",
    "site.estimate": "Get a Free Estimate",
    "site.estimateShort": "Get an Estimate",
    "site.estimateSticky": "Free Estimate",
    "nav.label": "Primary navigation",
    "nav.home": "Home",
    "nav.residential": "Residential Roofing",
    "nav.commercial": "Commercial Roofs",
    "nav.services": "Roofing Services",
    "nav.about": "About Us",
    "nav.blog": "Blog",
    "nav.serviceArea": "Service Area",
    "nav.contact": "Contact Us",
    "hero.eyebrow": "AFFORDABLEDAVE.COM",
    "hero.title": "Roofing Contractor In The Tampa Bay Area",
    "hero.body":
      "Looking for a reliable roofing company in Tampa? Look no further than our expert team at Affordable Roofing Systems. Our professional and experienced roofers are dedicated to providing top-quality services that are tailored to your specific needs and preferences.",
    "hero.serviceArea":
      "Serving Hillsborough, Pinellas, Polk, Pasco & Hernando Counties",
    "hero.teamAlt":
      "Affordable Roofing Systems team providing roof repair, replacement and storm response",
    "hero.teamCaption": "Roof repair, replacement and storm response",
    "hero.gafAlt": "GAF President's Club award",
    "hero.trust.gaf.label": "GAF",
    "hero.trust.gaf.detail": "President's Club",
    "hero.trust.licensed.label": "Licensed",
    "hero.trust.licensed.detail": "CGC 1517188",
    "hero.trust.insured.label": "Insured",
    "hero.trust.insured.detail": "Florida coverage",
    "hero.trust.experience.label": "25+ Years",
    "hero.trust.experience.detail": "Industry experience",
    "shortcuts.eyebrow": "FAST PATHS",
    "shortcuts.title": "Start with the roofing service you need",
    "shortcuts.link": "Learn More",
    "shortcuts.replacement.title": "Roof Replacement",
    "shortcuts.replacement.body":
      "Fast path for homeowners comparing replacement options.",
    "shortcuts.repair.title": "Roof Repair",
    "shortcuts.repair.body":
      "Quick route for leaks, storm issues, and repair requests.",
    "shortcuts.shingle.title": "GAF Shingle Roofing",
    "shortcuts.shingle.body":
      "Shingle systems and manufacturer-backed residential options.",
    "shortcuts.metal.title": "Metal Roofing",
    "shortcuts.metal.body": "Standing seam and premium metal roofing paths.",
    "reviews.eyebrow": "REVIEWS + FINANCING",
    "reviews.title": "Save time and money with a Top-Rated Roofing Service",
    "reviews.body":
      "We believe these testimonials will give you a better sense of the quality of our work and help you decide if Affordable Roofing is the right choice for your roofing needs.",
    "reviews.starsLabel": "5 out of 5 stars",
    "reviews.sybil.name": "Sybil B.",
    "reviews.sybil.quote":
      "Professional and attentive service from estimate through completion.",
    "reviews.susan.name": "Susan C.",
    "reviews.susan.quote":
      "Responsive crew and efficient roofing project delivery.",
    "reviews.luis.name": "Luis R.",
    "reviews.luis.quote":
      "Clear communication and quality workmanship throughout.",
    "reviews.contactCta": "For All Your Roofing Needs, Contact Us Today",
    "financing.eyebrow": "ROOF FINANCING",
    "financing.title": "We Offer Roof Financing for Your Roofing Projects",
    "financing.body":
      "Contact a representative from Affordable Roofing today to learn more about our financing options and take the first step toward a new roof.",
    "financing.link": "Financing Options",
    "financing.imageAlt": "Roofing project financing consultation",
    "decision.eyebrow": "WHAT CAN WE HELP YOU WITH?",
    "decision.title": "Residential or commercial roofing, guided clearly",
    "decision.body":
      "Whether you need a simple repair, a complete replacement, or routine maintenance, we've got you covered. With our expertise, your roof can stay in top shape, protecting your home or business from the elements for years to come.",
    "decision.imageAlt":
      "Residential and commercial roofing projects in the Tampa Bay area",
    "decision.statValue": "25+",
    "decision.statLabel": "Years of Experience",
    "decision.residential.title": "Residential Roofing",
    "decision.residential.body":
      "Shingle, metal, tile, repair and replacement paths for homeowners.",
    "decision.residential.link": "View Residential",
    "decision.commercial.title": "Commercial Roofing",
    "decision.commercial.body":
      "TPO, metal, maintenance and property-focused roofing systems.",
    "decision.commercial.link": "View Commercial",
    "residential.eyebrow": "RESIDENTIAL ROOFING",
    "residential.title": "Residential Roofing Tampa",
    "residential.intro":
      "Safeguard your home against the unpredictable elements and enjoy peace of mind with Affordable Roofing Systems' expert roofing solutions. We are dedicated to delivering exceptional customer service and work hard to make this a stress-free experience from start to finish.",
    "residential.support":
      "Count on us for high-quality roofing that will not only enhance the appearance of your home but also provide lasting protection against harsh weather conditions.",
    "residential.imageAlt":
      "Residential roofing installation on a Tampa Bay home",
    "residential.accentAlt": "Roof repair work in progress",
    "residential.statValue": "Tampa Bay",
    "residential.statLabel":
      "Residential repair, replacement, shingle, metal and tile paths",
    "residential.benefit.protection": "Protection",
    "residential.benefit.curbAppeal": "Curb appeal",
    "residential.benefit.durability": "Durability",
    "residential.benefit.process": "Stress-free process",
    "shingles.eyebrow": "SHINGLE SYSTEMS",
    "shingles.title": "Architectural Shingle Roofing",
    "shingles.intro":
      "Shingle roofing is one of the most popular types of roofing systems used for residential buildings. You'll enjoy a beautiful, ultra-dimensional wood-shake appearance that can enhance your home's curb appeal while keeping the material path practical and familiar.",
    "shingles.imageAlt": "Architectural shingle roofing on a residential home",
    "shingles.products":
      "Grand Manor • Belmont • Presidential Shake TL • Landmark PRO • Highland Slate • Slateline • Woodland • Camelot II",
    "shingles.gaf.title": "GAF Timberline HDZ Series Shingles",
    "shingles.gaf.body":
      "Timberline HDZ Series shingles are an excellent choice for homeowners looking for durability and aesthetic appeal. GAF's layering technology and Dura Grip adhesive help support dependable performance during extreme weather conditions.",
    "shingles.certainteed.title": "CertainTeed Landmark Shingles",
    "shingles.certainteed.body":
      "CertainTeed Landmark shingles offer a dual-layered design that mimics natural wood shake, with a wide array of colors and styles, Class A fire rating, and limited lifetime warranty support.",
    "shingles.colorOptions": "Color Options",
    "materials.eyebrow": "ROOFING MATERIAL GUIDE",
    "materials.title": "Compare Premium Residential Roofing Materials",
    "materials.introFirst":
      "Explore asphalt shingles, designer shingles, standing seam metal, stone-coated steel, and concrete tile roofing options.",
    "materials.introSecond":
      "Each material path gives homeowners a clearer way to compare appearance, durability, weather performance, maintenance, and color/profile options before requesting an estimate.",
    "materials.cta": "Discuss Options",
    "materials.designer.title": "Designer Shingles",
    "materials.designer.body":
      "Slateline, Woodland and Camelot II profiles preserve premium designer shingle content while keeping color options clear follow-up actions.",
    "materials.designer.products": "Slateline • Woodland • Camelot II",
    "materials.designer.imageAlt": "Premium designer shingle roofing",
    "materials.metal.title": "Metal Roofing",
    "materials.metal.body":
      "Drexel Metals standing seam roofing supports a modern look with durability, weather performance, and lower-maintenance appeal.",
    "materials.metal.products": "Drexel Metals • 150SS Profile",
    "materials.metal.imageAlt": "Standing seam metal roofing panels",
    "commercial.eyebrow": "COMMERCIAL ROOFING",
    "commercial.title": "Commercial Roofing Tampa",
    "commercial.intro":
      "Protect your facility, reduce long-term roof issues, and keep commercial roofing decisions organized. Affordable Roofing Systems supports commercial roof paths including TPO membrane roofing, standing seam metal roofing, maintenance, repairs, and property-focused planning.",
    "commercial.proof.title": "Built for business continuity",
    "commercial.proof.body":
      "Energy costs, facility longevity, maintenance timing, and dependable protection stay visible in the commercial path.",
    "commercial.tpo.title": "TPO Membrane Roofing",
    "commercial.tpo.body":
      "Preserve TPO membrane content as a dedicated commercial system card with maintenance and energy-performance context.",
    "commercial.tpo.link": "Explore TPO",
    "commercial.metal.title": "Commercial Metal Roofs",
    "commercial.metal.body":
      "Standing seam commercial roofing gets a clear path for durability, repair, and long-term property planning.",
    "commercial.metal.link": "Explore Metal",
    "commercial.cta": "Request Commercial Help",
    "topThree.eyebrow": "CERTIFICATIONS + TRAINING",
    "topThree.title":
      "Affordable Roofing Systems: Among The Top 3% of Roofers Nationwide",
    "topThree.body":
      "Affordable Roofing Systems highlights manufacturer certifications, training, and business listing proof so homeowners can quickly understand the level of roofing experience behind each project. These logos support the trust story before visitors compare the detailed accreditation cards.",
    "topThree.presidentAlt": "GAF President's Club certification",
    "topThree.masterEliteAlt": "GAF Master Elite certification",
    "topThree.commercialAlt": "GAF Commercial Authorized certification",
    "topThree.metalAlt": "GAF Metal Certified certification",
    "experience.eyebrow": "EXPERIENCE + PROTECTION",
    "experience.title":
      "We Have Over 25 Years of Experience in The Roofing Industry",
    "experience.body":
      "Experience the warmth and care of a family business spanning three generations. Affordable Roofing Systems positions care, quality, and accountability as proof points before visitors reach the full certification grid.",
    "experience.years.value": "25+",
    "experience.years.label": "Years of Experience",
    "experience.quality.value": "100%",
    "experience.quality.label": "Quality Guaranteed",
    "experience.license.title": "Licensed in Florida",
    "experience.license.body":
      "License #CGC 1517188 remains visually prominent for contractor validation.",
    "experience.insurance.title": "Workers' Compensation + Liability Insurance",
    "experience.insurance.body":
      "The existing insurance content, including the $1 million liability policy claim, is preserved for review.",
    "experience.certificate.title": "Certificate of insurance",
    "experience.certificate.body":
      "The design keeps the certificate-of-insurance promise visible as a proof point.",
    "accreditation.eyebrow": "ACCREDITED + CERTIFIED",
    "accreditation.title":
      "We are Accredited and Certified By Major Roofing Manufacturers and Business Listings in the US",
    "accreditation.intro":
      "At Affordable Roofing, quality, training, and industry recognition matter. This section groups major manufacturer and business-listing credentials so visitors can review the proof behind the roofing systems, installation standards, and customer service promises.",
    "accreditation.sliderLabel": "Roofing accreditations and certifications",
    "accreditation.previous": "Show previous certifications",
    "accreditation.next": "Show next certifications",
    "accreditation.slideLabel": "Certification group",
    "accreditation.bbb.title": "BBB",
    "accreditation.bbb.body":
      "BBB listing gives visitors a quick reputation check, complaint history, and service confidence.",
    "accreditation.angi.title": "Angi",
    "accreditation.angi.body":
      "Angi recognition supports trust through customer reviews, service quality signals, and local pro visibility.",
    "accreditation.fiveStar.title": "Five Star Rated",
    "accreditation.fiveStar.body":
      "Five-star rating proof highlights customer feedback, completed roofing work, and overall service consistency.",
    "accreditation.installation.title": "GAF Installation Excellence",
    "accreditation.installation.body":
      "Installation Excellence reinforces precise crews, system details, and consistent GAF project execution.",
    "accreditation.consumer.title": "GAF Consumer Protection",
    "accreditation.consumer.body":
      "Consumer Protection highlights warranty guidance, product confidence, and homeowner support for GAF systems.",
    "accreditation.training.title": "GAF Training Excellence",
    "accreditation.training.body":
      "Training Excellence shows ongoing product education, crew readiness, and disciplined installation habits.",
    "accreditation.president.title": "GAF President's Club Award",
    "accreditation.president.body":
      "GAF President's Club marks top manufacturer recognition for training, workmanship, and customer care.",
    "accreditation.masterElite.title": "GAF Master Elite Award",
    "accreditation.masterElite.body":
      "GAF Master Elite status confirms factory certification, licensing, insurance, and installation standards.",
    "accreditation.masterSelect.title": "GAF Master Select",
    "accreditation.masterSelect.body":
      "GAF Master Select supports commercial roofing confidence through system training and manufacturer standards.",
    "accreditation.owensCorning.title": "Owens Corning Preferred",
    "accreditation.owensCorning.body":
      "Owens Corning recognition adds manufacturer credibility for shingle knowledge and residential roofing work.",
    "accreditation.drexel.title": "Drexel Metals",
    "accreditation.drexel.body":
      "Drexel Metals alignment supports standing seam systems, durable profiles, and modern metal roofing expertise.",
    "accreditation.certainTeed.title": "CertainTeed 5-Star",
    "accreditation.certainTeed.body":
      "CertainTeed 5-Star signals shingle expertise, warranty support, and manufacturer-backed residential systems.",
    "financingDetails.eyebrow": "ROOF FINANCING OPTIONS",
    "financingDetails.title":
      "We Offer Roof Financing for Your Roofing Projects",
    "financingDetails.body":
      "At Affordable Roofing, we understand that roofing projects can be a significant investment. Flexible financing options help customers get the roof they need without breaking the bank, with payment plans, a straightforward application process, and Hearth Financing referenced in the current site content.",
    "financingDetails.cta": "Explore Financing",
    "financingDetails.factsLabel": "Financing terms currently shown",
    "financingDetails.loanRange.value": "$1k-$100k",
    "financingDetails.loanRange.label": "Loan range",
    "financingDetails.terms.value": "2-12 years",
    "financingDetails.terms.label": "Terms",
    "financingDetails.apr.value": "4.99% APR",
    "financingDetails.apr.label": "Starting rate claim",
    "financingDetails.fico.value": "500 FICO",
    "financingDetails.fico.label": "Low score",
    "roofingServices.eyebrow": "ROOFING SERVICES",
    "roofingServices.title": "Affordable Roofing Services",
    "roofingServices.intro":
      "Affordable Roofing Services includes new roof installation, roof repairs, and storm damage restoration. Each service path can support deeper body copy for homeowners comparing installation scope, leak response, maintenance needs, and weather-related roof damage.",
    "roofingServices.link": "Read service details",
    "roofingServices.installation.title": "New Roof Installation",
    "roofingServices.installation.body":
      "New roof installation content can explain project planning, material selection, roofing system installation, ventilation considerations, timeline expectations, and the estimate process.",
    "roofingServices.installation.alt":
      "New roof installation on a residential home",
    "roofingServices.repair.title": "Roof Repairs",
    "roofingServices.repair.body":
      "Roof repair content stays visible for leaks, damaged shingles, bathroom vent issues, targeted fixes, storm concerns, and urgent homeowner service needs.",
    "roofingServices.repair.alt": "Roof repair work on asphalt shingles",
    "roofingServices.storm.title": "Storm Damage Restoration",
    "roofingServices.storm.body":
      "Storm damage restoration supports hurricane, wind, rain, and weather-related inspection needs, helping homeowners understand signs of damage and next repair steps.",
    "roofingServices.storm.alt": "Severe storm approaching a residential area",
    "faqs.eyebrow": "ROOFING FAQS",
    "faqs.title": "Questions Tampa Bay homeowners ask before a roofing project",
    "faqs.intro":
      "Roofing questions are often urgent. This accordion keeps high-intent topics easy to scan, including Florida roofing materials, metal roofs, tile roofs, inspections, permits, hurricane damage, maintenance, replacement cost, and solar panel planning.",
    "faqs.metal.question": "Can I put a metal roof on my Florida home?",
    "faqs.metal.answer":
      "Yes, metal roofs can be a great option for Florida homeowners. They are durable, energy-efficient, and can withstand high winds and heavy rain that are common during hurricane season.",
    "faqs.materials.question":
      "What are the most common roofing materials in Florida?",
    "faqs.materials.answer":
      "Asphalt shingles are the most popular roofing material in Florida due to their affordability and versatility. They come in a variety of colors and styles, making them a good choice for many different architectural styles.",
    "faqs.tile.question": "What are the benefits of a tile roof in Florida?",
    "faqs.tile.answer":
      "Tile roofs are durable, energy-efficient, low-maintenance, and available in many colors and styles. With proper installation and care, they can withstand Florida's heat, rain, and high winds and may last 50 years or more.",
    "faqs.inspection.question": "How often should I have my roof inspected?",
    "faqs.inspection.answer":
      "Schedule a professional roof inspection at least twice a year and after hurricanes, severe storms, or high winds. Regular checks can catch small issues before they become major repairs.",
    "faqs.hurricaneDamage.question": "What are signs of hurricane roof damage?",
    "faqs.hurricaneDamage.answer":
      "Look for missing or broken shingles, dented or warped metal panels, cracks in flat-roof materials, leaks or water stains, and roof debris. Because hidden damage is easy to miss, arrange a professional inspection after a hurricane.",
    "faqs.hurricaneStraps.question":
      "What are hurricane straps and do I need them?",
    "faqs.hurricaneStraps.answer":
      "Hurricane straps are metal connectors that reinforce the roof-to-wall connection against uplift from high winds. Florida projects may require approved roof-to-wall connectors, so have a licensed contractor confirm your home's existing connection and current local code requirements.",
    "faqs.permit.question": "Do I need a permit to replace my roof in Florida?",
    "faqs.permit.answer":
      "A building permit is normally required for a roof replacement in Florida. Your licensed roofing contractor should confirm the requirements with the local building department, obtain the permit, and coordinate the required inspections.",
    "faqs.replacementCost.question":
      "How much does a typical roof replacement cost?",
    "faqs.replacementCost.answer":
      "Roof replacement cost depends on roof size, material, pitch, access, and project complexity. A site inspection and written estimate are the reliable way to price the work; Affordable Roofing Systems offers free estimates.",
    "faqs.maintenance.question": "What maintenance does my roof require?",
    "faqs.maintenance.answer":
      "Keep gutters and roof surfaces clear of debris, address loose or damaged materials promptly, and schedule regular inspections, especially after severe weather. Preventive maintenance helps identify problems early and extend the roof's service life.",
    "faqs.solar.question": "Can I install a solar panel system on my roof?",
    "faqs.solar.answer":
      "Yes, if the roof's condition, slope, sunlight, and structure are suitable and the project meets local code. Have the roof evaluated before installation and coordinate qualified roofing and solar professionals so penetrations and flashing remain watertight.",
    "footer.tagline":
      "Where Experience and Quality Matter. Serving Tampa Bay residential and commercial roofing needs. Licensed CGC 1517188, GAF President's Club, 25+ Years of experience.",
    "footer.contact": "Contact",
    "footer.fax": "Fax",
    "footer.navigation": "Navigation",
    "footer.popularServices": "Popular Services",
    "footer.services.installation": "Roof Installation",
    "footer.services.replacement": "Roof Replacement",
    "footer.services.repair": "Roof Repair",
    "footer.services.maintenance": "Roof Maintenance",
    "footer.services.inspection": "Roof Inspection",
    "footer.cta": "For all your roofing needs, contact us today",
    "footer.ctaButton": "Get Estimate",
    "footer.ratingPrefix": "Rated",
    "footer.ratingOutOf": "/",
    "footer.ratingBasedOn": "based on",
    "footer.ratingReviews": "Customer Reviews",
    "footer.ratingA11y": "Customer rating",
    "footer.socialLabel": "Affordable Roofing Systems social profiles",
    "footer.copyright": "Copyright",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.designBy": "Website Design By:",
  },
} as const;
