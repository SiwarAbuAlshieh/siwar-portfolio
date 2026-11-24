/**
 * All website text lives in this file.
 * Edit the values below to update the site — components only render this data.
 */

export type IconName =
  | "search"
  | "code"
  | "store"
  | "workflow"
  | "users"
  | "shoppingBag"
  | "appWindow"
  | "plug"
  | "layers"
  | "languages"
  | "fileSearch"
  | "database"
  | "messageSquare"
  | "listChecks"
  | "lightbulb"
  | "fileText"
  | "network"
  | "repeat"
  | "mail"
  | "shoppingCart"
  | "split"
  | "activity"
  | "target"
  | "sparkles"
  | "scale"
  | "badgeCheck"
  | "messagesSquare";

export interface Item {
  title: string;
  text: string;
  icon?: IconName;
}

export interface Link {
  label: string;
  href: string;
}

export interface SectionMeta {
  id: string;
  number?: string;
  eyebrow: string;
  title: string;
}

export interface ExperienceGroup {
  title: string;
  text: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  featured?: boolean;
  summary?: string;
  groups?: ExperienceGroup[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ToolPanel {
  tool: string;
  title: string;
  items: string[];
}

/* ------------------------------------------------------------------ */
/* Site-wide                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Siwar Abu Alshieh",
  initials: "SA",
  title: "Shopify Developer & Technical CRO Specialist",
  identity: "Software Engineer | UX Optimization | E-commerce Technology",
  location: "Irbid, Jordan",
  email: "siwarabualsheeh@gmail.com",
  linkedin: "https://www.linkedin.com/in/siwar-abu-alshieh-3730091b1",
  cvPath: "/Siwar-Abu-Alshieh-CV.pdf",
  portrait: {
    src: "/portrait-optimized.webp",
    width: 1086,
    height: 1448,
    alt: "Siwar Abu Alshieh, Shopify Developer and Technical CRO Specialist",
  },
  /**
   * TODO: After the first Vercel deploy, set this to your final URL,
   * e.g. "https://siwar-portfolio.vercel.app" (no trailing slash).
   * While empty, the site falls back to Vercel's production URL
   * (set automatically by Vercel) or http://localhost:3000.
   */
  url: "https://siwar-abu-alshieh.vercel.app",
  meta: {
    title: "Siwar Abu Alshieh — Shopify Developer & Technical CRO Specialist",
    description:
      "Software engineer combining Shopify development, conversion rate optimization, UX and e-commerce technology.",
  },
  footer: "© 2026 Siwar Abu Alshieh · Shopify Developer & Technical CRO Specialist",
};

export const nav: Link[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "My Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Siwar Abu Alshieh",
  heading: "Where technology meets business growth.",
  subtitle: site.title,
  identity: site.identity,
  paragraph:
    "I combine software engineering, Shopify development and conversion-focused thinking to create better e-commerce experiences. From identifying customer journey friction to implementing technical solutions, I bridge the gap between business objectives and engineering execution.",
  primary: { label: "Explore My Experience", href: "#experience" },
  secondary: { label: "Download My CV", href: site.cvPath },
  tertiary: { label: "Get in Touch", href: "#contact" },
};

export const highlights: Item[] = [
  {
    icon: "search",
    title: "20+ client websites audited",
    text: "End-to-end e-commerce reviews from a customer and technical perspective",
  },
  {
    icon: "code",
    title: "~3 years of software engineering",
    text: "Professional experience across e-commerce, web and cloud",
  },
  {
    icon: "store",
    title: "Shopify & Shopify Plus",
    text: "Stores, integrations and public and custom Shopify apps",
  },
  {
    icon: "workflow",
    title: "End-to-end execution",
    text: "From the business problem to tested, deployed solutions",
  },
  {
    icon: "users",
    title: "Client-facing & cross-functional",
    text: "Clients, product, AI, design, marketing and engineering teams",
  },
];

/* ------------------------------------------------------------------ */
/* 01 — About                                                         */
/* ------------------------------------------------------------------ */

export const about = {
  meta: { id: "about", number: "01", eyebrow: "About", title: "About me" } satisfies SectionMeta,
  paragraphs: [
    "I am a software engineer with a multidisciplinary background in Shopify, technical CRO, customer experience, business operations and e-commerce technology.",
    "My work goes beyond writing code. I start by understanding the business and its customers, look for the points where the buying journey breaks down, and turn those findings into clear, prioritized improvements. Then I help build them.",
    "Along the way I work closely with clients and with product, AI, design, marketing and engineering teams — explaining technical ideas in plain language and keeping business and engineering priorities connected.",
  ],
};

/* ------------------------------------------------------------------ */
/* 02 — Expertise                                                     */
/* ------------------------------------------------------------------ */

export const expertise = {
  meta: {
    id: "expertise",
    number: "02",
    eyebrow: "Expertise",
    title: "Shopify & e-commerce expertise",
  } satisfies SectionMeta,
  items: [
    {
      icon: "shoppingBag",
      title: "Shopify & Shopify Plus",
      text: "Store work, theme customization and metafields",
    },
    {
      icon: "appWindow",
      title: "Shopify app development",
      text: "Custom and public Shopify applications, including a V1 → V2 evolution and merchant-facing workflows",
    },
    {
      icon: "plug",
      title: "API & platform integrations",
      text: "Shopify APIs, CMS integrations, Salla and Zid",
    },
    {
      icon: "layers",
      title: "Catalog management",
      text: "Product synchronization, product selection, publishing and unpublishing workflows",
    },
    {
      icon: "languages",
      title: "Multilingual content",
      text: "Product translations, localization and image alt text optimization",
    },
    {
      icon: "fileSearch",
      title: "Technical SEO",
      text: "Product content quality, metadata and discoverability",
    },
    {
      icon: "database",
      title: "Large-scale catalogs",
      text: "Processing a catalog of ~189,000 products with a focus on data consistency and reliable synchronization",
    },
  ] satisfies Item[],
  note: "My engineering background helps me build e-commerce solutions that are reliable and scale.",
};

/* ------------------------------------------------------------------ */
/* 03 — CRO & UX                                                      */
/* ------------------------------------------------------------------ */

export const cro = {
  meta: {
    id: "cro",
    number: "03",
    eyebrow: "CRO & UX",
    title: "Conversion rate optimization & UX",
  } satisfies SectionMeta,
  intro:
    "I have audited more than 20 client e-commerce websites. I look at each store twice: once as a customer trying to buy, and once as an engineer checking what happens underneath — speed, tracking, SEO and code. Customer journey, funnel and session analysis, competitor research and conversion tracking validation all feed into clear, actionable recommendations.",
  reviewTitle: "What I review",
  items: [
    { title: "First impression & homepage", text: "Is the value clear in 5 seconds?" },
    { title: "Navigation", text: "Can customers find the right category fast, on mobile too?" },
    { title: "Product discovery", text: "Collections, filters, search and sorting" },
    {
      title: "Product detail page",
      text: "Benefits, images, description, variants and add-to-cart",
    },
    { title: "Pricing & promotions", text: "Are offers and discounts clear and visible?" },
    { title: "Customer trust", text: "Reviews, policies, delivery and returns information" },
    { title: "Cart & checkout", text: "Unnecessary steps and surprises" },
    { title: "Mobile experience", text: "Tap targets, layout and sticky add-to-cart" },
    {
      title: "Technical performance",
      text: "Page speed, heavy images, videos and app scripts",
    },
    { title: "SEO", text: "Titles, metadata, alt text, structure and translations" },
    { title: "Analytics & tracking", text: "Are key events tracked correctly?" },
    {
      title: "Customer retention",
      text: "Abandoned cart and follow-up emails, segmentation",
    },
  ] satisfies Item[],
};

/* ------------------------------------------------------------------ */
/* 04 — Brands                                                        */
/* ------------------------------------------------------------------ */

export const brands = {
  meta: {
    id: "brands",
    number: "04",
    eyebrow: "Brands",
    title: "Selected brands I've contributed to",
  } satisfies SectionMeta,
  items: [
    { name: "Rimmel London", industry: "Beauty & cosmetics" },
    { name: "Al Rugaib Furniture", industry: "Furniture & home" },
    { name: "Barakat Optical", industry: "Eyewear & optical" },
    { name: "Clio & Clover", industry: "E-commerce retail" },
  ],
  caption: "Selected brands I contributed to during my professional experience.",
};

/* ------------------------------------------------------------------ */
/* 05 — Client communication                                          */
/* ------------------------------------------------------------------ */

export const communication = {
  meta: {
    id: "communication",
    number: "05",
    eyebrow: "Communication",
    title: "Client communication & business coordination",
  } satisfies SectionMeta,
  items: [
    {
      icon: "messageSquare",
      title: "Client meetings & calls",
      text: "Discussing project progress, gathering feedback and clarifying requirements",
    },
    {
      icon: "listChecks",
      title: "From requirements to tasks",
      text: "Turning business needs into clear actions for product, AI and engineering teams",
    },
    {
      icon: "lightbulb",
      title: "Communicating opportunities",
      text: "Explaining findings and optimization opportunities in plain language for non-technical stakeholders",
    },
    {
      icon: "fileText",
      title: "Decision-ready reporting",
      text: "Helping define what information CEOs and clients need in reports to make decisions",
    },
    {
      icon: "network",
      title: "Cross-functional coordination",
      text: "Aligning business and engineering priorities across product, AI, design, marketing and engineering",
    },
    {
      icon: "repeat",
      title: "Follow-through",
      text: "Following up on open issues and helping resolve blockers between teams",
    },
  ] satisfies Item[],
};

/* ------------------------------------------------------------------ */
/* 06 — Project & task management                                     */
/* ------------------------------------------------------------------ */

export const taskManagement = {
  meta: {
    id: "task-management",
    number: "06",
    eyebrow: "Task management",
    title: "Project & task management",
  } satisfies SectionMeta,
  panels: [
    {
      tool: "ClickUp",
      title: "Business & e-commerce operations",
      items: [
        "Business task tracking",
        "Website audit tasks",
        "CRO recommendations",
        "Optimization priorities",
        "Business requirements",
        "Deliverable tracking",
        "Progress follow-ups",
        "Coordination between business and technical work",
      ],
    },
    {
      tool: "Shortcut",
      title: "Engineering & software development",
      items: [
        "Engineering stories",
        "Epics, sprints and backlogs",
        "Technical tasks",
        "Bug tracking",
        "Feature implementation",
        "Development progress",
        "Software delivery workflows",
      ],
    },
  ] satisfies ToolPanel[],
  flow: [
    { title: "Business requirement", tool: "ClickUp" },
    { title: "Engineering story", tool: "Shortcut" },
    { title: "Implementation" },
    { title: "Testing" },
    { title: "Progress update" },
  ] as { title: string; tool?: string }[],
  flowNote: "Structured task management connects business requirements with technical execution.",
};

/* ------------------------------------------------------------------ */
/* 07 — Marketing technology                                          */
/* ------------------------------------------------------------------ */

export const marketing = {
  meta: {
    id: "marketing",
    number: "07",
    eyebrow: "Marketing technology",
    title: "Marketing technology & automation",
  } satisfies SectionMeta,
  items: [
    {
      icon: "mail",
      title: "Klaviyo & Shopify Flow",
      text: "Connecting store events to automated customer communication",
    },
    {
      icon: "shoppingCart",
      title: "Abandoned cart & incomplete purchases",
      text: "Follow-ups that remind interested customers at the right moment",
    },
    {
      icon: "split",
      title: "Segmentation",
      text: "Behavior-based and time-based email sequences for different customer groups",
    },
    {
      icon: "activity",
      title: "Tracking & reporting",
      text: "Conversion event validation and supporting troubleshooting of Meta, TikTok and Google Ads tracking",
    },
    {
      icon: "target",
      title: "Why it matters",
      text: "Reliable integrations keep retention flows running and give the business data it can trust for decisions",
    },
  ] satisfies Item[],
};

/* ------------------------------------------------------------------ */
/* 08 — AI                                                            */
/* ------------------------------------------------------------------ */

export const ai = {
  meta: {
    id: "ai",
    number: "08",
    eyebrow: "AI optimization",
    title: "AI-powered e-commerce optimization",
  } satisfies SectionMeta,
  items: [
    {
      icon: "sparkles",
      title: "AI-powered CRO tools",
      text: "Worked with AI-based e-commerce assessment and optimization tools",
    },
    {
      icon: "scale",
      title: "Recommendation validation",
      text: "Compared AI-generated reports with manual reviews to find missing, inaccurate or unsuitable recommendations",
    },
    {
      icon: "badgeCheck",
      title: "Business relevance",
      text: "Checked each recommendation for accuracy, feasibility and real value to the customer experience",
    },
    {
      icon: "messagesSquare",
      title: "Working with AI & product teams",
      text: "Explained gaps to the AI team and helped define what the tool and its content workflows needed",
    },
  ] satisfies Item[],
};

/* ------------------------------------------------------------------ */
/* 09 — Approach                                                      */
/* ------------------------------------------------------------------ */

export const approach = {
  meta: {
    id: "approach",
    number: "09",
    eyebrow: "My approach",
    title: "My professional workflow",
  } satisfies SectionMeta,
  steps: [
    { title: "Understand the business", text: "Goals, customers and product positioning" },
    {
      title: "Gather requirements & feedback",
      text: "Client conversations and stakeholder input",
    },
    { title: "Audit the website", text: "Full customer journey and technical review" },
    { title: "Analyze customer behavior", text: "Sessions, funnels and drop-off points" },
    { title: "Identify problems & opportunities", text: "Root causes, not only symptoms" },
    { title: "Recommend & prioritize", text: "By customer impact and implementation effort" },
    {
      title: "Coordinate tasks",
      text: "Business work in ClickUp, engineering work in Shortcut",
    },
    { title: "Implement", text: "Shopify, integrations and backend services" },
    {
      title: "Test & validate",
      text: "Unit tests, code review, staging and tracking checks",
    },
    { title: "Deploy & monitor", text: "Production releases, logging and monitoring" },
    { title: "Communicate progress", text: "Clear updates for every stakeholder" },
    { title: "Continuously improve", text: "Measure, learn and iterate" },
  ] satisfies Item[],
  note: "This is my working methodology.",
  croTitle: "My approach to conversion rate optimization",
  croChain: [
    "Business objectives",
    "Data",
    "Customer journey",
    "Friction",
    "Hypothesis",
    "Prioritization",
    "Implementation",
    "Measurement",
    "Iteration",
  ],
  croText:
    "A change should not be made only because it looks attractive. It should solve a real customer problem and be judged against a clear goal — conversion rate, add-to-cart rate, checkout initiation and completion, revenue per visitor, average order value, drop-off rate, site performance, abandoned cart recovery or engagement.",
};

/* ------------------------------------------------------------------ */
/* 10 — Skills                                                        */
/* ------------------------------------------------------------------ */

export const skills = {
  meta: {
    id: "skills",
    number: "10",
    eyebrow: "Engineering",
    title: "Software engineering & technical infrastructure",
  } satisfies SectionMeta,
  groups: [
    {
      title: "Full-stack development",
      skills: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "Bootstrap",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Oracle",
        "Entity Framework Core",
        "SQLAlchemy",
        "Alembic",
        "Database migrations",
      ],
    },
    {
      title: "Architecture",
      skills: ["System design", "Event-driven services", "Reliable background processing"],
    },
    {
      title: "Quality & delivery",
      skills: [
        "Unit testing",
        "Pull requests & code reviews",
        "Staging & production testing",
        "Deployment",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud Platform",
        "Cloud Run",
        "Cloud Tasks",
        "Pub/Sub",
        "Cloud SQL",
        "Artifact Registry",
        "Terraform",
        "GitHub Actions",
        "Docker",
      ],
    },
    {
      title: "Operations",
      skills: ["Logging", "Monitoring", "Production troubleshooting"],
    },
  ] satisfies SkillGroup[],
};

/* ------------------------------------------------------------------ */
/* 11 — Experience                                                    */
/* ------------------------------------------------------------------ */

export const experience = {
  meta: {
    id: "experience",
    number: "11",
    eyebrow: "Experience",
    title: "Professional experience",
  } satisfies SectionMeta,
  entries: [
    {
      role: "Software Engineer",
      company: "qeen",
      period: "May 2024 – August 2026",
      featured: true,
      groups: [
        {
          title: "Shopify & e-commerce",
          text: "Custom and public Shopify apps (V1 → V2), Shopify API integrations, theme customization, metafields, product sync, translations, localization, CMS publishing, Salla and Zid, ~189,000-product catalog",
        },
        {
          title: "Technical CRO & UX",
          text: "Audited 20+ client websites; journey, funnel and session analysis; competitor benchmarking; prioritized recommendations",
        },
        {
          title: "Marketing technology",
          text: "Shopify + Klaviyo automation, Shopify Flow, segmentation, tracking validation, Meta/TikTok/Google Ads tracking troubleshooting support",
        },
        {
          title: "AI optimization",
          text: "Validated AI-generated CRO recommendations with AI and product teams",
        },
        {
          title: "Client communication & coordination",
          text: "Client calls, progress updates, requirements, ClickUp and Shortcut",
        },
        {
          title: "Software engineering & cloud",
          text: "Event-driven services on GCP, Terraform, GitHub Actions, migrations, testing, deployment, monitoring",
        },
      ],
    },
    {
      role: "Full-Stack Developer & Data Analyst",
      company: "Harmony Technology Solutions",
      period: "July 2023 – February 2024",
      summary:
        "Built web applications in a development team; supported data analysis and visualization.",
    },
    {
      role: "Web Developer",
      company: "Devoyard",
      period: "January 2023 – April 2023",
      summary: "Developed web features, including security-related integrations.",
    },
    {
      role: ".NET Trainee",
      company: "Nextwo",
      period: "September 2022 – December 2022",
      summary: "Structured training program; built web applications.",
    },
  ] satisfies ExperienceEntry[],
};

/* ------------------------------------------------------------------ */
/* 12 — Education & strengths                                         */
/* ------------------------------------------------------------------ */

export const education = {
  meta: {
    id: "education",
    number: "12",
    eyebrow: "Education & strengths",
    title: "Education & personal strengths",
  } satisfies SectionMeta,
  items: [
    { title: "B.Sc. Computer Science", text: "Yarmouk University, 2018 – 2022" },
    {
      title: "Strategic & analytical thinking",
      text: "Breaking problems down, weighing alternatives and paying attention to detail",
    },
    {
      title: "Independent learning & technical communication",
      text: "Learning new tools quickly and explaining them clearly",
    },
    {
      title: "First Place — Jordanian Universities Chess Championship (2022)",
      text: "Chess sharpened my pattern recognition and decision-making",
    },
  ] satisfies Item[],
};

/* ------------------------------------------------------------------ */
/* 13 — Contact                                                       */
/* ------------------------------------------------------------------ */

export const contact = {
  meta: { id: "contact", number: "13", eyebrow: "Contact", title: "Get in touch" } satisfies SectionMeta,
  text: "Looking for someone who can find what holds an online store back and build the fix? I would be happy to talk.",
  emailButton: "Email me",
  cvButton: "Download My CV",
};

/* ------------------------------------------------------------------ */
/* Interface labels (screen-reader text, menu, language switch)       */
/* ------------------------------------------------------------------ */

export const ui = {
  skipToContent: "Skip to content",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mainNav: "Main",
  mobileNav: "Mobile",
  newTab: "(opens in a new tab)",
  atAGlance: "At a glance",
  step: "Step",
  croSequence: "Conversion optimization sequence",
  flowLabel: "From business requirement to progress update",
  /** Link to the other language version. */
  language: { label: "العربية", href: "/ar", hrefLang: "ar", title: "النسخة العربية" },
};

/* ------------------------------------------------------------------ */
/* Everything above, as one object (English version)                  */
/* ------------------------------------------------------------------ */

export const en = {
  locale: "en" as Locale,
  dir: "ltr" as "ltr" | "rtl",
  site,
  nav,
  hero,
  highlights,
  about,
  expertise,
  cro,
  brands,
  communication,
  taskManagement,
  marketing,
  ai,
  approach,
  skills,
  experience,
  education,
  contact,
  ui,
};

export type Locale = "en" | "ar";
export type SiteContent = typeof en;
