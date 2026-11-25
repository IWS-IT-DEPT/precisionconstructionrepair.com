// Content for the SEO landing pages: one per core service (/services/[slug])
// and one per service area (/service-areas/[area]).
//
// Only state facts Precision Construction Repair stands behind on the rest of
// the site (services, 24/7 emergency response, R Stamp, OSHA training,
// direct-hire crews, service area). Place names describe the region served;
// they are not claims about specific clients.

export const SITE_URL = "https://precisionconstructionrepair.com";
export const PHONE_DISPLAY = "(251) 395-7447";
export const PHONE_HREF = "tel:12513957447";

export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  body: string[];
  items?: { title: string; text: string }[];
};

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** One-line summary used on cards and related links */
  summary: string;
  image: "welding" | "machining";
  imageAlt: string;
  sections: ContentSection[];
  faqs: Faq[];
};

export type ServiceArea = LandingPage & {
  city: string;
  stateName: string;
  /** Short name for links, e.g. "Jackson, AL" */
  shortName: string;
};

const QUOTE_FAQ: Faq = {
  q: "How do I request a quote?",
  a: `Use the quote form on this site or call ${PHONE_DISPLAY}. Tell us about the equipment or structure, the facility location, and your timeline, and the request goes straight to our quoting team. Office hours are Monday to Friday, 7:00 AM to 3:30 PM.`,
};

const EMERGENCY_FAQ: Faq = {
  q: "Do you respond to emergencies?",
  a: `Yes. We provide 24/7 emergency response for critical equipment and structural failures. Call ${PHONE_DISPLAY} and tell us what failed and where.`,
};

const CREWS_FAQ: Faq = {
  q: "Do you use subcontractors?",
  a: "No. We self-perform our work with direct-hire, skilled tradespeople, so quality and accountability don't get lost between subcontractors.",
};

export const servicePages: LandingPage[] = [
  {
    slug: "on-site-machining",
    metaTitle: "On-Site & Precision Machining | Mobile, AL & Gulf Coast",
    metaDescription:
      "In-house and on-site field machining for steel, chemical, and heavy manufacturing plants: custom parts, replacement components, and equipment rebuilds to exact tolerances across the Gulf Coast.",
    eyebrow: "On-Site & Precision Machining",
    h1: "On-site and precision machining for industrial plants",
    intro:
      "When a part fails or a component wears out of tolerance, waiting on an OEM can cost days of production. Precision Construction Repair machines custom parts, replacement components, and equipment rebuilds in our shop and on-site at your facility, serving steel, chemical, and heavy manufacturing plants across the Gulf Coast.",
    summary: "Shop and field machining of custom parts, replacement components, and rebuilds to exact tolerances.",
    image: "machining",
    imageAlt: "Machinist performing precision machining work",
    sections: [
      {
        heading: "Machining in the shop and in the field",
        body: [
          "Some work is best done on a machine in our shop; some has to be done where the equipment sits. We handle both, so you get the right approach for the part, the tolerance, and your downtime window.",
        ],
        items: [
          { title: "Custom and replacement parts", text: "One-off and short-run parts machined to drawing, sample, or reverse-engineered dimensions when the original is worn, broken, or obsolete." },
          { title: "On-site field machining", text: "Machining performed at your facility when removing equipment isn't practical, keeping disassembly and downtime to a minimum." },
          { title: "Equipment rebuilds", text: "Rebuilding worn components back to tolerance as part of a repair, overhaul, or planned maintenance program." },
          { title: "Emergency machining", text: "With 24/7 emergency response, we can mobilize quickly when a failed part is holding up production." },
        ],
      },
      {
        heading: "Machining that fits into the whole repair",
        body: [
          "Machining is rarely the only step. Because the same company also handles welding, fabrication, and millwright work, a repair can go from teardown to machined part to reinstallation and alignment without handoffs between vendors.",
        ],
      },
    ],
    faqs: [
      { q: "Do you machine parts on-site or only in a shop?", a: "Both. We machine custom parts and replacement components in-house and perform machining on-site when the equipment can't easily be removed." },
      { q: "Can you make a part without an original drawing?", a: "Often, yes. Tell us what you have, whether that's a worn sample, partial drawings, or measurements, and we'll discuss what's needed to machine a replacement to tolerance." },
      EMERGENCY_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "industrial-maintenance",
    metaTitle: "Industrial Maintenance Contractor | Mobile, AL & US-43 Corridor",
    metaDescription:
      "Routine and planned industrial maintenance for production equipment, mechanical systems, and plant infrastructure at steel and chemical plants across the Gulf Coast and the US-43 corridor.",
    eyebrow: "Industrial Maintenance",
    h1: "Industrial maintenance for steel and chemical plants",
    intro:
      "Precision Construction Repair provides routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure. We work directly with plant managers and maintenance teams to keep steel and chemical operations running across the Gulf Coast, with most of our current work along the US-43 industrial corridor between Mobile and Jackson, AL.",
    summary: "Routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure.",
    image: "welding",
    imageAlt: "Industrial maintenance crew working at a plant",
    sections: [
      {
        heading: "Maintenance support built around your plant",
        body: [
          "Every facility is different. We tailor maintenance plans to your equipment, timelines, and budget, and pair skilled trades with clear scopes, schedules, and documentation on every job.",
        ],
        items: [
          { title: "Planned maintenance", text: "Scheduled work on production equipment and mechanical systems to prevent failures before they stop the line." },
          { title: "Plant infrastructure", text: "Maintenance and repair of platforms, structural steel, and the facility infrastructure around your equipment." },
          { title: "Shutdowns and turnarounds", text: "Dedicated crews for planned shutdowns, so maintenance work gets done inside the outage window." },
          { title: "One crew, many trades", text: "Machining, welding, fabrication, and millwright work from one company, so maintenance jobs don't stall waiting on another vendor." },
        ],
      },
      {
        heading: "Safety on every job",
        body: [
          "Industrial and chemical plant environments don't leave room for error. Crews receive a site-specific safety orientation before stepping on-site, follow PPE and lockout/tagout protocols, complete pre-task hazard assessments, and are trained to OSHA general industry standards, including confined space entry where it applies.",
        ],
      },
    ],
    faqs: [
      { q: "What industries do you maintain equipment for?", a: "Our experience is concentrated in steel manufacturing, chemical processing, and other heavy manufacturing and industrial plants." },
      CREWS_FAQ,
      EMERGENCY_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "welding-fabrication",
    metaTitle: "Industrial Welding & Fabrication | Mobile, AL & Gulf Coast",
    metaDescription:
      "Structural, process piping, and equipment welding plus custom metal fabrication for steel and chemical plants. National Board R Stamp certified. Serving Mobile, AL and the Gulf Coast.",
    eyebrow: "Welding & Fabrication",
    h1: "Industrial welding and fabrication",
    intro:
      "Precision Construction Repair performs structural, process piping, and equipment welding along with custom metal fabrication built to withstand demanding industrial environments. We are National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels.",
    summary: "Structural, process piping, and equipment welding plus custom fabrication; R Stamp certified.",
    image: "welding",
    imageAlt: "Welder repairing steel framework at a job site",
    sections: [
      {
        heading: "What we weld and fabricate",
        body: [
          "From a cracked structural member to a fabricated replacement assembly, our welders and fabricators work on the steel that keeps your plant running.",
        ],
        items: [
          { title: "Structural welding", text: "Welding repairs and reinforcement for structural steel, platforms, and supports." },
          { title: "Process piping", text: "Welding for process piping systems in industrial and chemical plant environments." },
          { title: "Equipment welding", text: "Repair welding on production equipment and components, often paired with machining to bring parts back to tolerance." },
          { title: "Custom fabrication", text: "Custom metal fabrication of replacement parts, assemblies, and plant structures." },
        ],
      },
      {
        heading: "Boiler and pressure vessel repairs",
        body: [
          "Our National Board \"R\" Stamp certification covers metallic repairs and alterations to boilers and pressure vessels. See our boiler and pressure vessel repair page for details.",
        ],
      },
    ],
    faqs: [
      { q: "Are you certified for boiler and pressure vessel repairs?", a: "Yes. Precision Construction Repair is National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels." },
      { q: "Do you fabricate replacement parts as well as repair them?", a: "Yes. We do custom metal fabrication alongside welding repair, and can machine parts in-house when a repair needs it." },
      CREWS_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "boiler-pressure-vessel-repair",
    metaTitle: "R Stamp Boiler & Pressure Vessel Repair | Alabama & Gulf Coast",
    metaDescription:
      "National Board R Stamp certified metallic repairs and alterations to boilers and pressure vessels for industrial plants in Mobile, AL, the US-43 corridor, and across the Gulf Coast.",
    eyebrow: "Boiler & Pressure Vessel Repair",
    h1: "R Stamp boiler and pressure vessel repair",
    intro:
      "Precision Construction Repair is National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels. We bring that certification, along with our welding, machining, and fabrication capabilities, to industrial plants across the Gulf Coast.",
    summary: "National Board R Stamp certified metallic repairs and alterations to boilers and pressure vessels.",
    image: "welding",
    imageAlt: "Welder performing a metal repair at an industrial site",
    sections: [
      {
        heading: "What the R Stamp means for your repair",
        body: [
          "The National Board of Boiler and Pressure Vessel Inspectors issues the \"R\" certificate to organizations qualified to perform repairs and alterations to pressure-retaining items. Repairs and alterations to boilers and pressure vessels generally need to be performed by an R Stamp holder.",
          "Because we hold the R Stamp and self-perform our welding, machining, and fabrication, the repair stays with one accountable crew from start to finish.",
        ],
        items: [
          { title: "Metallic repairs", text: "Weld repairs to boilers and pressure vessels performed under our R Stamp certification." },
          { title: "Alterations", text: "Metallic alterations to boilers and pressure vessels under our R Stamp certification." },
          { title: "Supporting work", text: "Machining, fabrication, and structural work around the vessel, from the same company." },
          { title: "Documented and inspected", text: "Clear scope and documentation on every job, with work verified and inspected before we call it done." },
        ],
      },
    ],
    faqs: [
      { q: "What is a National Board R Stamp?", a: "It is a certificate of authorization from the National Board of Boiler and Pressure Vessel Inspectors for organizations that perform repairs and alterations to pressure-retaining items such as boilers and pressure vessels." },
      { q: "Is Precision Construction Repair R Stamp certified?", a: "Yes. We are National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels." },
      EMERGENCY_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "millwright-equipment-repair",
    metaTitle: "Millwright Services & Industrial Equipment Repair | Mobile, AL",
    metaDescription:
      "Installation, alignment, and repair of industrial machinery, conveyors, and process equipment by experienced millwrights, serving plants in Mobile, AL and along the US-43 corridor.",
    eyebrow: "Millwright & Equipment Repair",
    h1: "Millwright services and industrial equipment repair",
    intro:
      "Our experienced millwrights install, align, and repair industrial machinery, conveyors, and process equipment. Combined with in-house machining and welding, that means equipment repairs move from diagnosis to reinstallation without waiting on another contractor.",
    summary: "Installation, alignment, and repair of industrial machinery, conveyors, and process equipment.",
    image: "machining",
    imageAlt: "Precision machining work on an industrial equipment component",
    sections: [
      {
        heading: "Millwright and repair services",
        body: [
          "We work directly with plant maintenance teams to get equipment back in service and keep it there.",
        ],
        items: [
          { title: "Installation", text: "Setting and installing industrial machinery and process equipment." },
          { title: "Alignment", text: "Aligning machinery and drive components so equipment runs as designed." },
          { title: "Conveyors", text: "Repair and maintenance of conveyors and material handling equipment." },
          { title: "Equipment repair", text: "Teardown, repair, and rebuild of process equipment, with parts machined or fabricated in-house when needed." },
        ],
      },
    ],
    faqs: [
      { q: "Can you machine or fabricate parts as part of an equipment repair?", a: "Yes. We machine custom parts and replacement components in-house and on-site, and handle welding and fabrication, so repairs don't stall waiting on outside vendors." },
      CREWS_FAQ,
      EMERGENCY_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "structural-steel-repair",
    metaTitle: "Structural Steel Repair for Industrial Plants | Gulf Coast",
    metaDescription:
      "Repair and reinforcement of structural steel, platforms, and plant infrastructure for steel and chemical plants in Mobile, AL, the US-43 corridor, and across the Gulf Coast.",
    eyebrow: "Structural & Steel Repair",
    h1: "Structural steel repair for industrial plants",
    intro:
      "Precision Construction Repair repairs and reinforces structural steel, platforms, and plant infrastructure to restore integrity and extend service life, for steel, chemical, and heavy manufacturing plants across the Gulf Coast.",
    summary: "Repair and reinforcement of structural steel, platforms, and plant infrastructure.",
    image: "welding",
    imageAlt: "Welder repairing steel framework at a job site",
    sections: [
      {
        heading: "Structural repair services",
        body: [
          "Plant structures take a beating from heat, chemicals, vibration, and weather. We repair and reinforce them so your people and equipment stay safe.",
        ],
        items: [
          { title: "Structural steel", text: "Repair and reinforcement of beams, columns, and supports." },
          { title: "Platforms and access", text: "Repair of platforms and the plant infrastructure around your equipment." },
          { title: "Fabricated replacements", text: "Custom-fabricated replacement members and assemblies when repair isn't enough." },
          { title: "Planned or emergency", text: "Scheduled structural work during shutdowns, or 24/7 emergency response when something fails." },
        ],
      },
    ],
    faqs: [
      CREWS_FAQ,
      EMERGENCY_FAQ,
      { q: "How do you handle safety on structural jobs?", a: "Crews receive a site-specific safety orientation, follow PPE and lockout/tagout protocols, complete pre-task hazard assessments, and are trained to OSHA general industry standards, including confined space entry where it applies." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "emergency-turnaround-support",
    metaTitle: "24/7 Emergency Repair & Shutdown/Turnaround Crews | Gulf Coast",
    metaDescription:
      "24/7 emergency response for critical industrial equipment failures and dedicated crews for planned shutdowns and turnarounds at steel and chemical plants across the Gulf Coast.",
    eyebrow: "Emergency & Turnaround Support",
    h1: "24/7 emergency repair and turnaround support",
    intro:
      "When critical equipment fails, every hour of downtime costs money. Precision Construction Repair provides 24/7 emergency response for critical failures and dedicated crews for planned shutdowns and turnarounds, minimizing costly downtime for steel and chemical plants across the Gulf Coast.",
    summary: "24/7 emergency response and dedicated crews for planned shutdowns and turnarounds.",
    image: "welding",
    imageAlt: "Welder working on an urgent repair at an industrial site",
    sections: [
      {
        heading: "Emergency response",
        body: [
          `Call ${PHONE_DISPLAY} any time for a critical failure. Because we self-perform machining, welding, fabrication, and millwright work, one crew can diagnose, repair, and reinstall without waiting on other vendors.`,
        ],
      },
      {
        heading: "Shutdowns and turnarounds",
        body: [
          "Planned outages only work if the work fits the window. We provide dedicated crews with clear scopes, schedules, and documentation so your shutdown or turnaround finishes on time.",
        ],
        items: [
          { title: "Dedicated crews", text: "Direct-hire tradespeople assigned to your outage, not subcontracted labor." },
          { title: "Multiple trades", text: "Machining, welding, fabrication, millwright, and structural work from one company." },
          { title: "Safety first", text: "Site-specific orientation, lockout/tagout, pre-task hazard assessments, and OSHA-trained crews." },
          { title: "Clear scope and schedule", text: "Defined scope, schedule, and documentation on every job." },
        ],
      },
    ],
    faqs: [
      EMERGENCY_FAQ,
      { q: "Do you support planned shutdowns and turnarounds?", a: "Yes. We provide dedicated crews for planned shutdowns and turnarounds, with clear scopes and schedules to keep the outage on track." },
      CREWS_FAQ,
      QUOTE_FAQ,
    ],
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "jackson-al",
    city: "Jackson",
    stateName: "Alabama",
    shortName: "Jackson, AL",
    metaTitle: "Industrial Contractor in Jackson, AL | Maintenance, Machining & Welding",
    metaDescription:
      "Industrial contractor serving Jackson, AL and Clarke County along the US-43 corridor: industrial maintenance, machining, welding, millwright work, and 24/7 emergency repair for steel and chemical plants.",
    eyebrow: "Jackson, Alabama",
    h1: "Industrial contractor serving Jackson, AL",
    intro:
      "Jackson anchors the north end of the US-43 industrial corridor, and it's where much of our current work happens. Precision Construction Repair provides industrial maintenance, machining, welding and fabrication, millwright work, and 24/7 emergency response to plants in and around Jackson and Clarke County.",
    summary: "The north end of the US-43 corridor, where much of our current work is concentrated.",
    image: "welding",
    imageAlt: "Industrial welding work at a plant job site",
    sections: [
      {
        heading: "Services for Jackson-area plants",
        body: [
          "Most of our current work is concentrated along US-43 between Mobile and Jackson. Plants in the Jackson area get the same crews and capabilities we bring to every job.",
        ],
        items: [
          { title: "Industrial maintenance", text: "Routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure." },
          { title: "Machining", text: "In-house and on-site machining of custom parts, replacement components, and rebuilds." },
          { title: "Welding & fabrication", text: "Structural, process piping, and equipment welding, plus R Stamp boiler and pressure vessel repairs." },
          { title: "Emergency & turnarounds", text: "24/7 emergency response and dedicated crews for shutdowns and turnarounds." },
        ],
      },
      {
        heading: "Why plants along US-43 work with us",
        body: [
          "We're an industrial service company rooted in the Mobile area with deep experience in steel and chemical manufacturing. We self-perform our work with direct-hire tradespeople, follow strict safety protocols on every job, and keep communication clear from first call to final walkthrough.",
        ],
      },
    ],
    faqs: [
      { q: "Do you work in Jackson, AL?", a: "Yes. Jackson is part of our core service area, and much of our current work is along the US-43 industrial corridor between Mobile and Jackson." },
      EMERGENCY_FAQ,
      CREWS_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "mobile-al",
    city: "Mobile",
    stateName: "Alabama",
    shortName: "Mobile, AL",
    metaTitle: "Industrial Maintenance, Machining & Welding in Mobile, AL",
    metaDescription:
      "Mobile-area industrial contractor providing maintenance, machining, welding, millwright work, and 24/7 emergency repair to plants in Mobile, Saraland, Chickasaw, Creola, Calvert, and Bayou La Batre.",
    eyebrow: "Mobile, Alabama",
    h1: "Industrial maintenance, machining and welding in Mobile, AL",
    intro:
      "Precision Construction Repair is based in the Mobile area, with our office in Eight Mile. We serve steel, chemical, and heavy manufacturing plants across Mobile and the surrounding communities, from Bayou La Batre to Saraland, Chickasaw, Creola, and Calvert.",
    summary: "Home base: Mobile, Saraland, Chickasaw, Creola, Calvert, and Bayou La Batre.",
    image: "machining",
    imageAlt: "Machinist performing precision machining work in the Mobile area",
    sections: [
      {
        heading: "Services for Mobile-area plants",
        body: [
          "Being local means we can get to your facility quickly, whether it's planned work or a 24/7 emergency callout.",
        ],
        items: [
          { title: "Industrial maintenance", text: "Routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure." },
          { title: "Machining", text: "In-house and on-site machining of custom parts, replacement components, and rebuilds." },
          { title: "Welding & fabrication", text: "Structural, process piping, and equipment welding, plus R Stamp boiler and pressure vessel repairs." },
          { title: "Millwright & structural", text: "Machinery installation, alignment, and repair, plus structural steel and platform repair." },
        ],
      },
      {
        heading: "Communities we serve around Mobile",
        body: [
          "Mobile, Saraland, Chickasaw, Creola, Calvert, and Bayou La Batre, and north along the US-43 corridor to Jackson.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Precision Construction Repair located?", a: "Our office is in Eight Mile, AL, in the Mobile area. Office hours are Monday to Friday, 7:00 AM to 3:30 PM, with 24/7 emergency response." },
      EMERGENCY_FAQ,
      CREWS_FAQ,
      QUOTE_FAQ,
    ],
  },
  {
    slug: "pascagoula-ms",
    city: "Pascagoula",
    stateName: "Mississippi",
    shortName: "Pascagoula, MS",
    metaTitle: "Industrial Contractor Serving Pascagoula, MS | Machining & Welding",
    metaDescription:
      "Industrial maintenance, machining, welding and fabrication, and 24/7 emergency repair for plants in Pascagoula and the Mississippi Gulf Coast, from a Mobile-area contractor.",
    eyebrow: "Pascagoula, Mississippi",
    h1: "Industrial contractor serving Pascagoula, MS",
    intro:
      "Pascagoula is part of our Gulf Coast service area. From our base in the Mobile area, Precision Construction Repair brings industrial maintenance, machining, welding and fabrication, and 24/7 emergency response to plants on the Mississippi Gulf Coast.",
    summary: "Mississippi Gulf Coast plants, served from our Mobile-area base.",
    image: "welding",
    imageAlt: "Welder performing structural repair at an industrial site",
    sections: [
      {
        heading: "Services for Pascagoula-area plants",
        body: [
          "We bring the same crews, safety protocols, and capabilities to Mississippi Gulf Coast facilities that we bring to every job.",
        ],
        items: [
          { title: "Industrial maintenance", text: "Routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure." },
          { title: "Machining", text: "In-house and on-site machining of custom parts, replacement components, and rebuilds." },
          { title: "Welding & fabrication", text: "Structural, process piping, and equipment welding, plus R Stamp boiler and pressure vessel repairs." },
          { title: "Emergency & turnarounds", text: "24/7 emergency response and dedicated crews for shutdowns and turnarounds." },
        ],
      },
    ],
    faqs: [
      { q: "Do you work in Mississippi?", a: "Yes. Pascagoula is part of our Gulf Coast service area, served from our base in the Mobile area." },
      EMERGENCY_FAQ,
      CREWS_FAQ,
      QUOTE_FAQ,
    ],
  },
];
