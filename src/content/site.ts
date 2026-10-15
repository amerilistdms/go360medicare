/**
 * Working AmeriList copy. Positioning follows the company's public Medicare
 * data sites: prospect audiences, geography, and mail, phone, or email.
 * Legal pages stay drafts until counsel approves them.
 *
 * LAUNCH: Do not add a preselected consent checkbox. Call, text, and marketing
 * authorization language has to be reviewed before it is implemented.
 */

export const company = {
  legalName: "AmeriList, Inc.",
  phoneDisplay: "1.800.457.2899",
  phoneHref: "tel:18004572899",
  email: "sales@amerilist.com",
  address: "10 Esquire Road, Suite 11B, New City, NY 10956",
  since: "2002",
} as const;

export const cta = {
  exploreOptions: "Find Prospects",
  exploreOptionsShort: "Prospects",
  exploreOptionsCompact: "Count",
  getStarted: "Request a Count",
  exploreMedicareOptions: "See Audiences",
  learnMore: "Learn More",
  exploreOptionsCard: "See This Audience",
  getMoreInformation: "Request a Count",
  learnMoreAboutUs: "About AmeriList",
  requestInformation: "Request a Count",
  viewAllFaqs: "View all frequently asked questions",
} as const;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/medicare-options", label: "Audiences" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimers", label: "Data Disclaimers" },
] as const;

export const announcement = {
  enabled: true,
  text: "Tell us the audience and the ZIP codes.",
  href: "/#request-information",
  linkLabel: "Request a complimentary count",
} as const;

export const brand = {
  description:
    "AmeriList helps insurance agents, agencies, and marketers find Medicare-age prospects and reach them by direct mail, phone, or email.",
  disclaimer:
    "AmeriList is a private data and marketing company. It is not affiliated with or endorsed by Medicare or any government agency. Prospect information is offered to businesses for their own campaigns. File availability, selects, and permitted use vary. A count is not an order and is not a promise of response rates. Marketers are responsible for the licensing and advertising rules that apply to their campaigns.",
} as const;

export const hero = {
  eyebrow: "Built for Medicare agents, agencies, and marketers",
  title: "Find Medicare Prospects in Your Market",
  titleLead: "Find Medicare Prospects",
  titleAccent: "in Your Market",
  lede: "Tell us who you want to reach and where you want to reach them. AmeriList will show the Medicare-age prospects available in that market, and how you can reach them by mail, phone, or email.",
  startLabel: "Which audience do you need?",
  paths: [
    { label: "Turning 65", status: "Turning 65" },
    { label: "Medicare Supplement", status: "Medicare Supplement" },
    { label: "Medicare Advantage", status: "Medicare Advantage" },
  ],
  trust: ["Target by ZIP code, county, or radius", "Direct mail, phone, and email", "Prospect data since 2002"],
  imageAlt: "Older woman smiling outdoors while talking with her adult daughter.",
  insetAlt: "Older woman and a younger woman looking at a phone together at home.",
  imageCaption: "Prospect data for marketers. Not affiliated with Medicare or any government agency.",
} as const;

export const benefits = {
  title: "Prospects You Can Actually Market",
  lede: "AmeriList builds audiences for businesses that market to people approaching Medicare or already eligible for it. You define the people, the geography, and the channel.",
  items: [
    {
      id: "audience",
      title: "Name the Audience",
      body: "Start with Turning 65, Medicare Supplement, Medicare Advantage, or another senior audience your campaign needs.",
    },
    {
      id: "market",
      title: "Name the Market",
      body: "Focus on the ZIP codes, counties, cities, states, or radius where you are licensed to market.",
    },
    {
      id: "channel",
      title: "Choose the Channel",
      body: "Use the audience for direct mail, phone, or email, or ask about a fuller campaign around the same data.",
    },
  ],
} as const;

export const coverage = {
  id: "audiences",
  title: "Audiences Marketers Ask For",
  lede: "These are prospect audiences for your campaigns. They are not plan recommendations, and the records available depend on the geography and the selects you need.",
  cards: [
    {
      id: "turning-65",
      kicker: "Age-in",
      title: "Turning 65",
      body: "Reach consumers approaching Medicare eligibility. Select by geography and, where available, by month and year of birth.",
      cta: cta.learnMore,
      href: "/medicare-options#turning-65",
    },
    {
      id: "medicare-supplement",
      kicker: "Medigap",
      title: "Medicare Supplement",
      body: "Build an audience for Medicare Supplement marketing in the counties and ZIP codes you want to work.",
      cta: cta.exploreOptionsCard,
      href: "/medicare-options#medicare-supplement",
    },
    {
      id: "medicare-advantage",
      kicker: "Part C",
      title: "Medicare Advantage",
      body: "Find Medicare-eligible prospects for Medicare Advantage campaigns, targeted by the market you choose.",
      cta: cta.learnMore,
      href: "/medicare-options#medicare-advantage",
    },
  ],
  medigap: {
    title: "Need more than a list?",
    body: "AmeriList can also help with direct mail, printing and mailing, email, phone and email append, and the creative for the campaign.",
    cta: "Talk about a campaign",
    href: "/contact",
  },
} as const;

export const enrollment = {
  id: "how-it-works",
  title: "Tell Us the Market. See the Count.",
  lede: "A market count shows how many prospects match the audience and geography you describe. You can review that count before you decide whether to order data.",
  cards: [
    {
      id: "audience",
      title: "Who you want to reach",
      label: "Who",
      body: "Turning 65, Medicare Supplement, Medicare Advantage, Medicare recipients, or another audience we have available.",
    },
    {
      id: "geography",
      title: "Where you want to reach them",
      label: "Where",
      body: "ZIP codes, a county, a city, a state, or a radius around the markets you work.",
    },
    {
      id: "channel",
      title: "How you plan to market",
      label: "How",
      body: "Direct mail, phone, email, or a combination. The contact fields available depend on the file and the permitted use.",
    },
  ],
  note: "A count does not obligate you to buy a list, and it is not a forecast of how many people will respond.",
} as const;

export const howItWorks = {
  title: "From Audience to Campaign",
  steps: [
    {
      number: "01",
      title: "Tell Us the Audience",
      body: "Share who you want to reach, where they live, and how you plan to contact them.",
    },
    {
      number: "02",
      title: "Review the Count",
      body: "We research the prospects available in that market and the selects you can use.",
    },
    {
      number: "03",
      title: "Order Data or a Campaign",
      body: "Take the list, or ask AmeriList to help with mail, phone, email, or the creative around it.",
    },
  ],
  note: "Requesting a count does not purchase a file, reserve records, or promise a response rate.",
} as const;

export const interestOptions = [
  "Turning 65",
  "Medicare Supplement",
  "Medicare Advantage",
  "Medicare recipients",
  "Other senior audiences",
  "I'm not sure yet",
] as const;

export const leadForm = {
  id: "request-information",
  title: "Request a Market Count",
  lede: "Tell us the audience and the market. We will follow up with what is available. Asking does not purchase a list.",
  points: [
    "Turning 65, Medicare Supplement, Medicare Advantage, and other senior audiences.",
    "Counts by ZIP code, county, city, state, or radius.",
    "Data for direct mail, phone, and email, where that use is available.",
  ],
  privacyNotice:
    "By submitting, you ask AmeriList for a market count or a follow-up about prospect data. This does not purchase a list or start a campaign. AmeriList is a private company and is not affiliated with Medicare or any government agency. Read the [Privacy Policy](/privacy) and [data disclaimers](/disclaimers).",
  placeholderBody: "You can review this form. A request is not sent until it is connected.",
  notSentTitle: "Not submitted",
  notSentBody: "Your request was not sent. This form is not connected yet.",
  successTitle: "Request submitted",
  successBody: "We received your count request. This does not purchase a list, reserve a file, or promise a response rate.",
  errorTitle: "Not submitted",
  errorBody: "We could not send your request. Please try again. Nothing was confirmed as received.",
  submit: cta.requestInformation,
  submitting: "Sending request",
} as const;

export const aboutPreview = {
  title: "Data and Marketing for the Medicare Market",
  paragraphs: [
    "AmeriList has helped businesses identify and reach targeted prospects since 2002. Agents, agencies, and insurance marketers use that data to build direct mail, phone, and email campaigns.",
    "You define the audience and the geography. We help show which Medicare-age prospects are available there, and what it would take to reach them.",
  ],
  imageAlt: "Older man and a younger man looking out a bright window together at home.",
} as const;

export const aboutPage = {
  eyebrow: "About us",
  title: "About AmeriList",
  lede: "A data and direct marketing company for businesses that need to reach a specific audience, including people approaching or eligible for Medicare.",
  paragraphs: aboutPreview.paragraphs,
  imageAlt: "Older man at home with two younger family members, looking at a tablet together.",
  helpsTitle: "What you can do here",
  helps: [
    "Describe a Turning 65, Medicare Supplement, Medicare Advantage, or other senior audience.",
    "Ask for a count by ZIP code, county, city, state, or radius.",
    "Talk with AmeriList about the list itself, or about mail, phone, email, and campaign support.",
  ],
  limitsTitle: "What this website is not",
  limits: [
    "It is not Medicare.gov, the Centers for Medicare & Medicaid Services, or another government agency.",
    "It does not enroll consumers in a plan, and it does not quote benefits or premiums.",
    "A count request is not an order. Your business is responsible for the licensing and marketing rules that apply to the campaign.",
  ],
} as const;

export const finalCta = {
  title: "Ready to See Your Market?",
  lede: "Send the audience and the ZIP codes. AmeriList will follow up with the prospects available there.",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

export const faqs: FaqItem[] = [
  {
    id: "what-we-sell",
    question: "What does AmeriList provide?",
    answer:
      "AmeriList provides prospect data and marketing support for businesses. For the Medicare market, that includes audiences such as people turning 65, Medicare Supplement prospects, Medicare Advantage prospects, and other senior segments, plus help reaching them by mail, phone, or email.",
  },
  {
    id: "list-vs-lead",
    question: "What is the difference between a prospect list and a lead?",
    answer:
      "A prospect list is compiled information about people who match criteria you choose, such as age and geography. You use it to start your own outreach. A lead is someone who has asked to hear about a product. This website is for prospect data and the marketing around it.",
  },
  {
    id: "geography",
    question: "Can I target by ZIP code?",
    answer:
      "Yes. Counts can be built by ZIP code, county, city, state, or a radius, so the audience can follow the markets where you are licensed to work.",
  },
  {
    id: "turning-65",
    question: "Can I reach people turning 65?",
    answer:
      "Yes. Turning 65 audiences can be selected by geography and, where that select is available on the file, by month and year of birth. Ask for the current selects before you order.",
  },
  {
    id: "channels",
    question: "Can I get mail, phone, and email?",
    answer:
      "Direct mail, phone, and email data may be available depending on the audience and the way you are allowed to use it. Not every record includes every contact field. We will tell you what is available for the count you request.",
  },
  {
    id: "government",
    question: "Is AmeriList part of Medicare or the federal government?",
    answer:
      "No. AmeriList is a private company. It is not affiliated with or endorsed by Medicare, the Centers for Medicare & Medicaid Services, or any government agency.",
    links: [{ label: "Read the data disclaimers", href: "/disclaimers" }],
  },
  {
    id: "cost-to-request",
    question: "Does it cost anything to request a count?",
    answer:
      "Requesting a count on this website does not purchase a list. If you later order data or a campaign, that order has its own pricing, which we confirm before you buy.",
  },
  {
    id: "updates",
    question: "How current is the data?",
    answer:
      "Prospect files are updated on a regular cycle. The cycle depends on the file. We will confirm the current update timing for the audience you want before you order.",
  },
];

export const homeFaqs = faqs.slice(0, 6);

export const optionsPage = {
  eyebrow: "Audiences",
  title: "Medicare prospect audiences",
  lede: "Use these pages to see the kinds of audiences AmeriList can count for a campaign. Availability depends on the market and the selects on that file.",
  sections: [
    {
      id: "turning-65",
      kicker: "Age-in",
      title: "Turning 65",
      interest: "Turning 65",
      paragraphs: [
        "Turning 65 prospects are consumers approaching the age when many people first look at Medicare. Agents and agencies use this audience to start conversations before the birthday, in the ZIP codes they actually serve.",
        "Where the file supports it, the audience can be narrowed by month and year of birth as well as by geography. Confirm the selects on the current file before you build a drop or a call list.",
      ],
      points: [
        "Useful for agents building a pipeline before the 65th birthday.",
        "Geography can follow ZIP code, county, city, state, or radius.",
        "Month and year of birth may be available as a select. Ask before you order.",
      ],
    },
    {
      id: "medicare-supplement",
      kicker: "Medigap",
      title: "Medicare Supplement",
      interest: "Medicare Supplement",
      paragraphs: [
        "Medicare Supplement audiences are for marketers offering Medigap products to people who fit that campaign. The list identifies prospects in the geography you choose. It does not tell you which policy to sell or whether a person will qualify.",
        "Use the count to see how many records match the market, then decide whether mail, phone, or email fits the way you are licensed to sell.",
      ],
      points: [
        "Built for Medicare Supplement marketing, not for a consumer shopping guide.",
        "The count follows the counties and ZIP codes you name.",
        "Your agency remains responsible for product and licensing rules.",
      ],
    },
    {
      id: "medicare-advantage",
      kicker: "Part C",
      title: "Medicare Advantage",
      interest: "Medicare Advantage",
      paragraphs: [
        "Medicare Advantage audiences help plans, agencies, and field marketers find Medicare-eligible prospects in a defined market. Targeting is based on geography and the demographic selects available on the file.",
        "A record in this audience is a prospect for your campaign. It is not an enrollment, a plan match, or a statement of benefits.",
      ],
      points: [
        "Focus the file on the service area you want to market.",
        "Contact fields depend on whether you need mail, phone, or email.",
        "Campaign rules for Medicare Advantage advertising still belong to the marketer.",
      ],
    },
    {
      id: "other-audiences",
      kicker: "More selects",
      title: "Other senior audiences",
      interest: "Other senior audiences",
      paragraphs: [
        "Beyond Turning 65, Medicare Supplement, and Medicare Advantage, AmeriList can look at other senior and Medicare-related segments that fit a campaign. Tell us the product and the market and we will say whether that audience is available.",
        "If the list is only part of what you need, the same conversation can cover printing and mailing, email, phone and email append, and creative.",
      ],
      points: [
        "Start with the product you market and the geography you cover.",
        "We will tell you if that audience is something we can count.",
        "Campaign production can sit on top of the same data.",
      ],
    },
  ],
} as const;

export const contactPage = {
  eyebrow: "Contact",
  title: "Request a market count",
  lede: "Tell us the audience, the geography, and how you want to market. We will follow up with what is available. No list purchase is required to ask.",
  asideTitle: "What happens next",
  aside: [
    "We use your note to research a count. It does not place an order.",
    "Have the ZIP codes, county, or state ready, and the audience you have in mind.",
    "If you would rather talk it through, call or email AmeriList directly.",
  ],
} as const;

export const faqPage = {
  eyebrow: "FAQs",
  title: "Frequently asked questions",
  lede: "Straight answers about AmeriList prospect data. Confirm the selects, the update cycle, and the permitted use for the file you are considering.",
} as const;

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export const privacyPage = {
  eyebrow: "Draft for legal review",
  title: "Privacy Policy",
  lede: "This is draft language for internal review. It is not a final privacy policy.",
  updated: "Status: draft, pending legal and compliance review.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${company.legalName} is a private data and marketing company. This website is not Medicare, the Centers for Medicare & Medicaid Services, or another government agency.`,
        `Published contact details: ${company.address}. ${company.email}. ${company.phoneDisplay}. Counsel should confirm these details and any privacy contact before this policy is final.`,
      ],
    },
    {
      heading: "Information this form asks for",
      paragraphs: [
        "The count request asks for your name, company, email address, the market you want counted, and the audience you have in mind. Phone number is optional.",
      ],
      list: [
        "This form does not ask for a consumer's Social Security number.",
        "This form does not ask for a Medicare Beneficiary Identifier.",
        "This form does not ask for a consumer's medical history.",
      ],
    },
    {
      heading: "How a request would be used",
      paragraphs: [
        "If delivery is later approved, the details you submit would be used to respond to a request for a market count or for information about AmeriList data and marketing services. Describe any vendors, sharing, or sale of business-inquiry data in this section before launch.",
        "This draft website is not configured to transmit form submissions. Until an approved endpoint is connected, information entered in the form is not delivered anywhere.",
      ],
    },
    {
      heading: "Calls, texts, and marketing",
      paragraphs: [
        "This draft does not ask you to consent to marketing calls or texts, and submitting the form is not treated as that consent. Any required authorization has to be written and approved before it is added. Do not preselect a consent checkbox.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This version of the website does not use third-party advertising or analytics cookies. If analytics, advertising pixels, or chat tools are added later, disclose them here before launch.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "Add the process for access, correction, and deletion requests, plus any state privacy rights that apply, before this policy is published as final.",
      ],
    },
  ] satisfies LegalSection[],
};

export const termsPage = {
  eyebrow: "Draft for legal review",
  title: "Terms of Use",
  lede: "This is draft language for internal review. It is not a final terms of use agreement.",
  updated: "Status: draft, pending legal and compliance review.",
  sections: [
    {
      heading: "Using this website",
      paragraphs: [
        `${company.legalName} publishes information about prospect data and marketing services for businesses. You can read that information and, when the form is enabled, request a market count.`,
        `The site is operated by ${company.legalName}, ${company.address}. Counsel should confirm the contracting entity before launch.`,
      ],
    },
    {
      heading: "Not an offer of insurance",
      paragraphs: [
        "Nothing on this website is an offer to sell insurance, a quote, or a description of plan benefits. AmeriList sells data and marketing services to businesses. It does not enroll consumers in Medicare or in a plan.",
      ],
    },
    {
      heading: "No government affiliation",
      paragraphs: [
        "AmeriList is not affiliated with or endorsed by Medicare, the Centers for Medicare & Medicaid Services, or any other government agency. Official Medicare logos and government seals are not used.",
      ],
    },
    {
      heading: "Counts and orders",
      paragraphs: [
        "A count request is not an order, a reservation of records, or a promise of response rates, deliverability, or sales. Pricing, selects, license terms, and permitted use are confirmed before an order.",
      ],
    },
    {
      heading: "Your campaigns",
      paragraphs: [
        "You are responsible for using any data in line with the license you receive and with the advertising, telemarketing, privacy, and insurance-licensing rules that apply to your business. AmeriList does not provide legal advice about those rules.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: [
        "Do not misuse the site, attempt to break it, or submit someone else's information without authority to do so. We may decline a request that looks incomplete, automated, or unrelated to a business inquiry.",
      ],
    },
    {
      heading: "Draft legal terms still to be added",
      paragraphs: [
        "Counsel should add warranty disclaimers, limitation of liability, governing law, data-license terms, and any other required terms before launch. Do not treat this page as those terms.",
      ],
    },
  ] satisfies LegalSection[],
};

export const disclaimersPage = {
  eyebrow: "Draft for legal review",
  title: "Important data disclaimers",
  lede: "Read this before you rely on a count or order data from this website. This page is draft copy for compliance review.",
  updated: "Status: draft, pending legal and compliance review.",
  sections: [
    {
      heading: "Private company",
      paragraphs: [brand.disclaimer],
    },
    {
      heading: "Prospects, not enrollments",
      paragraphs: [
        "An AmeriList audience is a marketing file. A name on that file is not an application, a plan enrollment, or proof that a person wants to be contacted about a particular product.",
        "This website does not describe plan benefits, premiums, or savings, and it does not promise that a campaign will produce clients.",
      ],
    },
    {
      heading: "Your market and your license",
      paragraphs: [
        "Choose geography that matches where you are allowed to market. AmeriList can count ZIP codes, counties, cities, states, or a radius. It does not decide whether your business may solicit there.",
      ],
    },
    {
      heading: "Counts and file quality",
      paragraphs: [
        "A count is an estimate of records that match the criteria discussed. It can change when the file is updated or when selects are added. Records can be undeliverable. Ask about the update cycle, replacements, and permitted use before you order.",
      ],
    },
    {
      heading: "Mail, phone, and email",
      paragraphs: [
        "Not every audience includes postal, phone, and email fields. Phone use may require Do Not Call processing and other limits. Email use depends on the source of the address and the rules for that channel. Those limits should be part of the order, not an assumption.",
      ],
    },
  ] satisfies LegalSection[],
};
