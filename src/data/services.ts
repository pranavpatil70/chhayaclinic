export type ServiceCategory =
  | "general"
  | "cosmetic"
  | "surgical"
  | "pediatric"
  | "diagnostic"
  | "orthodontic";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  short: string;
  description: string;
  priceFrom: number; // INR
  duration: string;
  popular?: boolean;
  icon: string; // lucide icon name
};

export const CATEGORIES: { value: ServiceCategory | "all"; label: string }[] = [
  { value: "all", label: "All Treatments" },
  { value: "general", label: "General" },
  { value: "cosmetic", label: "Cosmetic" },
  { value: "orthodontic", label: "Orthodontic" },
  { value: "surgical", label: "Surgical" },
  { value: "pediatric", label: "Pediatric" },
  { value: "diagnostic", label: "Diagnostic" },
];

export const SERVICES: Service[] = [
  {
    slug: "consultation",
    name: "Dental Consultation",
    category: "diagnostic",
    short: "Comprehensive oral check-up & X-rays",
    description:
      "A thorough examination including digital X-rays, gum assessment and a personalised treatment roadmap. First visit is on the house.",
    priceFrom: 0,
    duration: "30 min",
    popular: true,
    icon: "Stethoscope",
  },
  {
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    category: "general",
    short: "Ultrasonic deep cleaning",
    description:
      "Removes plaque, tartar and surface stains using gentle ultrasonic technology. Recommended every 6 months.",
    priceFrom: 800,
    duration: "45 min",
    popular: true,
    icon: "Sparkles",
  },
  {
    slug: "tooth-filling",
    name: "Tooth-Coloured Filling",
    category: "general",
    short: "Composite, mercury-free fillings",
    description:
      "Aesthetic, BPA-free composite restorations that bond to your natural tooth and last for years.",
    priceFrom: 1200,
    duration: "30 min",
    icon: "CircleDot",
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    category: "general",
    short: "Painless single-sitting RCT",
    description:
      "Save your natural tooth with our advanced rotary endodontics. Most cases finished in a single comfortable visit.",
    priceFrom: 4500,
    duration: "60–90 min",
    popular: true,
    icon: "Activity",
  },
  {
    slug: "crown-bridge",
    name: "Crowns & Bridges",
    category: "general",
    short: "Zirconia & PFM crowns",
    description:
      "Strengthen damaged teeth or replace missing ones with custom-milled crowns and bridges in a wide choice of materials.",
    priceFrom: 5500,
    duration: "2 visits",
    icon: "Crown",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "surgical",
    short: "Premium titanium implants",
    description:
      "Replace one or many teeth with implants from leading global brands — stable, lifelike and built to last decades.",
    priceFrom: 25000,
    duration: "Multi-stage",
    popular: true,
    icon: "Anchor",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "cosmetic",
    short: "In-office laser whitening",
    description:
      "Brighten your smile by 4–8 shades in a single sitting with safe, enamel-friendly whitening gels.",
    priceFrom: 6500,
    duration: "60 min",
    popular: true,
    icon: "Sun",
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    category: "cosmetic",
    short: "Hollywood smile makeover",
    description:
      "Ultra-thin, hand-crafted porcelain shells that transform shape, colour and alignment in just two visits.",
    priceFrom: 12000,
    duration: "2 visits",
    icon: "Gem",
  },
  {
    slug: "smile-design",
    name: "Smile Designing",
    category: "cosmetic",
    short: "Digital smile preview",
    description:
      "See your future smile before we begin. Combines veneers, whitening and gum contouring tailored to your face.",
    priceFrom: 18000,
    duration: "Custom plan",
    icon: "Smile",
  },
  {
    slug: "braces",
    name: "Metal & Ceramic Braces",
    category: "orthodontic",
    short: "Traditional & tooth-coloured",
    description:
      "Reliable, affordable orthodontics for kids, teens and adults. Monthly check-ups in a friendly atmosphere.",
    priceFrom: 22000,
    duration: "12–24 months",
    icon: "Grid3x3",
  },
  {
    slug: "aligners",
    name: "Clear Aligners",
    category: "orthodontic",
    short: "Invisible, removable trays",
    description:
      "Discreet aligner therapy with global-grade clear trays. Straight teeth with no one knowing.",
    priceFrom: 60000,
    duration: "6–18 months",
    popular: true,
    icon: "Layers",
  },
  {
    slug: "wisdom-tooth",
    name: "Wisdom Tooth Removal",
    category: "surgical",
    short: "Atraumatic extraction",
    description:
      "Painless surgical removal of impacted wisdom teeth under local anaesthesia with minimal post-op discomfort.",
    priceFrom: 3500,
    duration: "30–45 min",
    icon: "Scissors",
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    category: "surgical",
    short: "Periodontal therapy",
    description:
      "From deep cleaning to flap surgery — restore healthy gums and stop bone loss in its tracks.",
    priceFrom: 2500,
    duration: "Per quadrant",
    icon: "HeartPulse",
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    category: "pediatric",
    short: "Gentle care for little smiles",
    description:
      "A play-friendly clinic, fluoride treatment, sealants and habit counselling — making dental visits something kids look forward to.",
    priceFrom: 500,
    duration: "30 min",
    popular: true,
    icon: "Baby",
  },
  {
    slug: "fluoride-sealants",
    name: "Fluoride & Sealants",
    category: "pediatric",
    short: "Cavity prevention for kids",
    description:
      "Professional fluoride application and pit-and-fissure sealants to protect young teeth for years.",
    priceFrom: 1500,
    duration: "30 min",
    icon: "Shield",
  },
  {
    slug: "dentures",
    name: "Complete & Partial Dentures",
    category: "general",
    short: "Comfortable, natural-looking",
    description:
      "Custom-fit dentures crafted for comfort, function and a confident smile.",
    priceFrom: 8000,
    duration: "3–4 visits",
    icon: "AlignJustify",
  },
  {
    slug: "digital-xray",
    name: "Digital X-Ray & OPG",
    category: "diagnostic",
    short: "Low-radiation imaging",
    description:
      "Instant, ultra-low-dose digital radiographs and panoramic OPG for accurate diagnosis.",
    priceFrom: 300,
    duration: "10 min",
    icon: "ScanLine",
  },
  {
    slug: "emergency",
    name: "Dental Emergencies",
    category: "general",
    short: "Same-day urgent care",
    description:
      "Knocked-out tooth, severe pain or swelling? We see emergency cases the same day — including Sundays.",
    priceFrom: 500,
    duration: "Same day",
    popular: true,
    icon: "Siren",
  },
];
