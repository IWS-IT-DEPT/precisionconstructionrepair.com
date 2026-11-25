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
  /** Slugs of neighboring service areas, shown as related links */
  nearby: string[];
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

// Each service-area page is written around what is actually different about
// that place (local industry, geography, which services matter most there) so
// the pages don't read as near-duplicates. Only QUOTE_FAQ is shared.

export const serviceAreas: ServiceArea[] = [
  {
    slug: "jackson-al",
    city: "Jackson",
    stateName: "Alabama",
    shortName: "Jackson, AL",
    nearby: ["calvert-al", "axis-al", "mobile-al"],
    metaTitle: "Industrial Contractor in Jackson, AL | Maintenance, Machining & Welding",
    metaDescription:
      "Industrial contractor for plants in Jackson, AL and Clarke County: planned maintenance, millwright and conveyor work, on-site machining, and 24/7 emergency repair at the north end of the US-43 corridor.",
    eyebrow: "Jackson, Alabama",
    h1: "Industrial contractor serving Jackson, AL",
    intro:
      "Jackson sits on the Tombigbee River in Clarke County, at the north end of the US-43 industrial corridor that runs up from Mobile. Much of our current work happens along this corridor, and Jackson-area plants get the full range of our crews: maintenance, millwright, machining, welding, and around-the-clock emergency response.",
    summary: "The north end of the US-43 corridor, where much of our current work is concentrated.",
    image: "welding",
    imageAlt: "Industrial welding work at a plant job site",
    sections: [
      {
        heading: "Industry at the top of the corridor",
        body: [
          "Clarke County is timber country, and the Jackson area's industry reflects that, along with the chemical and heavy manufacturing found down the river toward McIntosh. Plants this far up the corridor can't afford to wait on a contractor driving in from somewhere else when a line goes down.",
          "That's why we treat Jackson as core territory rather than an edge of our map: planned work gets scheduled like any other job, and emergency calls get the same 24/7 response.",
        ],
      },
      {
        heading: "What Jackson-area plants call us for",
        body: [],
        items: [
          { title: "Planned maintenance programs", text: "Recurring maintenance on production equipment and mechanical systems so problems are caught before they become outages." },
          { title: "Conveyors and material handling", text: "Our millwrights install, align, and repair conveyors and the machinery that moves material through the plant." },
          { title: "On-site machining", text: "When a worn component can't easily be pulled and shipped out, we machine it where it sits or rebuild it in our shop." },
          { title: "Overnight and weekend breakdowns", text: "Round-the-clock emergency response for critical failures, with welding, machining, and millwright skills on the same crew." },
        ],
      },
    ],
    faqs: [
      { q: "Do you really cover Jackson, or just the Mobile area?", a: "Jackson is core territory. Much of our current work is along the US-43 corridor between Mobile and Jackson, so plants at the north end of the corridor are a regular part of our schedule." },
      { q: "Can you work on conveyors and material handling equipment?", a: "Yes. Our millwrights install, align, and repair conveyors, industrial machinery, and process equipment, and we can machine or fabricate replacement parts in-house." },
      { q: "What happens if a Jackson-area plant has a failure at night?", a: `Call ${PHONE_DISPLAY}. We provide 24/7 emergency response for critical equipment and structural failures.` },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "mobile-al",
    city: "Mobile",
    stateName: "Alabama",
    shortName: "Mobile, AL",
    nearby: ["chickasaw-al", "saraland-al", "bayou-la-batre-al", "pascagoula-ms"],
    metaTitle: "Industrial Maintenance, Machining & Welding in Mobile, AL",
    metaDescription:
      "Mobile-based industrial contractor with an office in Eight Mile: machining, welding and fabrication, millwright work, structural repair, and 24/7 emergency response for plants across Mobile County.",
    eyebrow: "Mobile, Alabama",
    h1: "Industrial maintenance, machining and welding in Mobile, AL",
    intro:
      "Mobile is home. Our office is in Eight Mile, on the city's northwest side, and every corridor job starts here. For plants and industrial facilities in Mobile itself, that means the shortest possible trip from our shop to your gate.",
    summary: "Home base: our office is in Eight Mile, serving plants across Mobile County.",
    image: "machining",
    imageAlt: "Machinist performing precision machining work in the Mobile area",
    sections: [
      {
        heading: "Rooted in Mobile, working up and down the coast",
        body: [
          "The Port of Mobile and the industry around it make this one of the Gulf Coast's busiest manufacturing regions. We started here, our tradespeople live here, and from Eight Mile we head north up US-43 toward Jackson, south toward Bayou La Batre, and west into Mississippi.",
          "Office hours are Monday through Friday, 7:00 AM to 3:30 PM. Outside those hours, emergency calls still get answered.",
        ],
      },
      {
        heading: "Our full range, close to home",
        body: [],
        items: [
          { title: "Shop machining", text: "Custom parts, replacement components, and rebuilds machined to tolerance in-house, then delivered or installed by our crew." },
          { title: "Welding and fabrication", text: "Structural, process piping, and equipment welding plus custom fabrication, including R Stamp boiler and pressure vessel repairs." },
          { title: "Millwright work", text: "Installation, alignment, and repair of machinery and process equipment." },
          { title: "Structural repair", text: "Repair and reinforcement of structural steel, platforms, and plant infrastructure." },
        ],
      },
    ],
    faqs: [
      { q: "Where is your office?", a: "Our office is in Eight Mile, AL, in the Mobile area. Office hours are Monday to Friday, 7:00 AM to 3:30 PM, with 24/7 emergency response outside those hours." },
      { q: "Which communities around Mobile do you serve?", a: "Mobile, Chickasaw, Saraland, Creola, Axis, Calvert, and Bayou La Batre, north along US-43 to Jackson, and west to Pascagoula, MS." },
      { q: "Do you self-perform the work?", a: "Yes. We use our own direct-hire tradespeople rather than subcontracted labor, so quality and accountability stay with one company." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "axis-al",
    city: "Axis",
    stateName: "Alabama",
    shortName: "Axis, AL",
    nearby: ["creola-al", "calvert-al", "saraland-al", "jackson-al"],
    metaTitle: "Industrial Contractor in Axis, AL | Plant Maintenance, Machining & Welding",
    metaDescription:
      "Plant maintenance, process piping and pressure vessel welding, confined space work, and shutdown crews for the industrial manufacturing sites in Axis, AL on the US-43 corridor.",
    eyebrow: "Axis, Alabama",
    h1: "Industrial contractor serving Axis, AL",
    intro:
      "Axis, in north Mobile County just past Creola on US-43, is home to a concentration of industrial manufacturing sites. It sits in the middle of the stretch between Mobile and Jackson where most of our current work happens, which makes Axis-area plants some of our closest neighbors on the corridor.",
    summary: "A concentration of industrial manufacturing sites on US-43 in north Mobile County.",
    image: "welding",
    imageAlt: "Welder working on industrial plant steel",
    sections: [
      {
        heading: "Process plants need process-plant discipline",
        body: [
          "Manufacturing sites like the ones in Axis run pressurized systems, process piping, vessels, and tanks, and the work around them happens under permits, lockouts, and confined space rules. Contractors who treat that as paperwork don't last long on a plant site.",
          "Our crews get a site-specific safety orientation before they start, follow lockout/tagout on every job, complete pre-task hazard assessments, and are trained to OSHA general industry standards, including confined space entry.",
        ],
      },
      {
        heading: "Work we bring to Axis-area sites",
        body: [],
        items: [
          { title: "Process piping welding", text: "Welding on process piping systems built for demanding industrial environments." },
          { title: "Boilers and pressure vessels", text: "Metallic repairs and alterations under our National Board \"R\" Stamp certification." },
          { title: "Confined space work", text: "Repairs inside tanks, vessels, and enclosed equipment by crews trained in OSHA confined space entry." },
          { title: "Shutdown and turnaround crews", text: "Dedicated crews with clear scopes and schedules so outage work finishes inside the window." },
        ],
      },
    ],
    faqs: [
      { q: "Are your crews trained for confined space entry?", a: "Yes. Crews are trained to OSHA general industry standards, including OSHA confined space entry, and follow confined space protocols on every applicable job." },
      { q: "Can you repair pressure vessels at an Axis-area plant?", a: "Yes. We are National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels." },
      { q: "Do you staff planned shutdowns?", a: "Yes. We provide dedicated, direct-hire crews for planned shutdowns and turnarounds, with defined scopes, schedules, and documentation." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "calvert-al",
    city: "Calvert",
    stateName: "Alabama",
    shortName: "Calvert, AL",
    nearby: ["axis-al", "jackson-al", "creola-al"],
    metaTitle: "Steel Plant Maintenance & Repair in Calvert, AL | Machining & Welding",
    metaDescription:
      "Structural steel repair, heavy-component machining, millwright alignment, and 24/7 breakdown response for steel manufacturing in Calvert, AL, where Mobile and Washington counties meet.",
    eyebrow: "Calvert, Alabama",
    h1: "Steel plant maintenance and repair in Calvert, AL",
    intro:
      "Calvert, on US-43 where Mobile and Washington counties meet, is one of the region's centers of steel manufacturing. Steel is one of the two industries we know best, so for Calvert-area plants we bring the work that heavy, high-temperature production wears out fastest.",
    summary: "A steel manufacturing center where Mobile and Washington counties meet.",
    image: "machining",
    imageAlt: "Machinist working on a heavy industrial component",
    sections: [
      {
        heading: "Steel production is hard on everything",
        body: [
          "Heat, heavy loads, vibration, and around-the-clock operation take a toll on rolls, drives, bearings, and the structures that hold it all up. In a steel plant, a failed component isn't a nuisance. It's lost tons.",
          "We focus on getting worn and damaged equipment back to tolerance quickly, and on keeping platforms and structural steel sound for the people working around it.",
        ],
      },
      {
        heading: "What we do for Calvert-area plants",
        body: [],
        items: [
          { title: "Heavy-component machining", text: "Rebuilding and machining worn components back to tolerance, in our shop or on-site when pulling the part isn't practical." },
          { title: "Structural steel and platforms", text: "Repair and reinforcement of structural members, platforms, and plant infrastructure to restore integrity." },
          { title: "Alignment and drive work", text: "Millwright installation, alignment, and repair of machinery and drive components." },
          { title: "Breakdown response", text: "24/7 emergency response when a critical failure stops production." },
        ],
      },
    ],
    faqs: [
      { q: "Do you have steel industry experience?", a: "Yes. Steel and chemical manufacturing are the industries we have the deepest experience in." },
      { q: "Can you machine parts without removing them from the line?", a: "Often, yes. We perform on-site machining when equipment can't easily be removed, and machine parts in-house when it can." },
      { q: "How fast can you respond to a breakdown in Calvert?", a: `Calvert is on the US-43 corridor where most of our current work is concentrated. For critical failures, call ${PHONE_DISPLAY} any time.` },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "creola-al",
    city: "Creola",
    stateName: "Alabama",
    shortName: "Creola, AL",
    nearby: ["axis-al", "saraland-al", "calvert-al"],
    metaTitle: "Industrial Contractor in Creola, AL | Repair Crews on the US-43 Corridor",
    metaDescription:
      "Creola, AL industrial repair and maintenance: millwright, welding, and machining crews for facilities in north Mobile County, between Saraland and the Axis industrial sites on US-43.",
    eyebrow: "Creola, Alabama",
    h1: "Industrial repair crews for Creola, AL",
    intro:
      "Creola is a small city in north Mobile County, on US-43 between Saraland and Axis, with the Mobile-Tensaw Delta to the east. It sits at the hinge of the corridor, where the Mobile suburbs give way to the industrial sites that run north toward Calvert and Jackson.",
    summary: "North Mobile County on US-43, between Saraland and the Axis industrial sites.",
    image: "welding",
    imageAlt: "Welder repairing steel framework at a job site",
    sections: [
      {
        heading: "Right in the middle of the corridor",
        body: [
          "Because Creola sits between our Mobile-area base and the heavier industry to the north, facilities here fall squarely within the stretch of US-43 where most of our current work is concentrated.",
          "Smaller facilities often don't need a full turnaround crew. They need someone who will show up for a single repair, do it right, and document it. We take those jobs as seriously as the big ones.",
        ],
      },
      {
        heading: "Common jobs for Creola-area facilities",
        body: [],
        items: [
          { title: "Single repairs, done once", text: "One-off welding, machining, or millwright repairs with a clear scope and the work verified and inspected before we leave." },
          { title: "Equipment repair", text: "Teardown, repair, and reinstallation of machinery and process equipment." },
          { title: "Fabricated replacements", text: "Custom-fabricated parts, brackets, guards, and assemblies when the original can't be repaired." },
          { title: "Maintenance support", text: "Planned maintenance help for facilities that don't keep a full maintenance crew on staff." },
        ],
      },
    ],
    faqs: [
      { q: "Will you take a small, one-time repair in Creola?", a: "Yes. We scope, schedule, and document single repairs the same way we handle larger jobs." },
      { q: "Do you fabricate replacement parts?", a: "Yes. We do custom metal fabrication and in-house machining for parts that can't be repaired or bought quickly." },
      { q: "Who will actually do the work?", a: "Our own direct-hire tradespeople. We don't send subcontracted labor." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "saraland-al",
    city: "Saraland",
    stateName: "Alabama",
    shortName: "Saraland, AL",
    nearby: ["chickasaw-al", "creola-al", "mobile-al", "axis-al"],
    metaTitle: "Machining, Fabrication & Maintenance in Saraland, AL",
    metaDescription:
      "Saraland, AL machining, custom fabrication, and planned maintenance for plants and facilities just north of Mobile, with easy access from I-65 and US-43.",
    eyebrow: "Saraland, Alabama",
    h1: "Machining, fabrication and maintenance in Saraland, AL",
    intro:
      "Saraland is the first city north of Mobile on US-43, with I-65 running through town. That access makes it one of the quickest places for our crews to reach, which is why Saraland-area facilities lean on us for the jobs where speed matters most: machined parts, fabricated replacements, and maintenance that can't slip.",
    summary: "First city north of Mobile on US-43, with I-65 access.",
    image: "machining",
    imageAlt: "Machinist performing precision machining work",
    sections: [
      {
        heading: "When the part is the problem",
        body: [
          "A lot of downtime comes down to one part: obsolete, back-ordered, or worn past saving. Our shop can machine a replacement to drawing, to a worn sample, or to measurements taken on-site, and fabricate brackets, guards, and assemblies around it.",
          "For Saraland facilities, that shop is a short drive away, so a part machined today can be installed today.",
        ],
      },
      {
        heading: "Services Saraland facilities use most",
        body: [],
        items: [
          { title: "Replacement parts", text: "One-off and short-run parts machined to tolerance when the original is worn, broken, or unavailable." },
          { title: "Custom fabrication", text: "Fabricated assemblies, supports, and plant structures built for industrial use." },
          { title: "Planned maintenance", text: "Scheduled maintenance on production equipment and mechanical systems." },
          { title: "Millwright installs", text: "Setting, aligning, and installing new or rebuilt machinery." },
        ],
      },
    ],
    faqs: [
      { q: "Can you make a part from a worn sample?", a: "Often, yes. Bring us the sample, any partial drawings, or measurements, and we'll discuss what's needed to machine a replacement to tolerance." },
      { q: "Do you install equipment as well as repair it?", a: "Yes. Our millwrights install, align, and repair industrial machinery and process equipment." },
      { q: "Is Saraland in your service area?", a: "Yes. Saraland is part of our core Mobile-area service area at the south end of the US-43 corridor." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "chickasaw-al",
    city: "Chickasaw",
    stateName: "Alabama",
    shortName: "Chickasaw, AL",
    nearby: ["saraland-al", "mobile-al", "creola-al"],
    metaTitle: "Industrial Welding & Structural Repair in Chickasaw, AL",
    metaDescription:
      "Welding, structural steel repair, and fabrication for industrial and waterfront facilities in Chickasaw, AL, on Chickasaw Creek just north of Mobile.",
    eyebrow: "Chickasaw, Alabama",
    h1: "Industrial welding and structural repair in Chickasaw, AL",
    intro:
      "Chickasaw grew up as a shipbuilding town on Chickasaw Creek, just north of Mobile, and industrial waterfront still lines that edge of the city. Facilities here deal with steel that's exposed to water, salt air, and decades of use, which puts welding and structural repair at the top of the list.",
    summary: "A historic shipbuilding town on Chickasaw Creek, just north of Mobile.",
    image: "welding",
    imageAlt: "Welder working on industrial steel",
    sections: [
      {
        heading: "Steel that's been working a long time",
        body: [
          "Older industrial sites and waterfront structures carry corrosion, fatigue cracks, and years of patch repairs. Fixing them properly starts with understanding what's actually holding the load.",
          "Our welders and fabricators repair and reinforce structural steel, platforms, and supports, and fabricate replacement members when a repair alone won't restore the structure's integrity.",
        ],
      },
      {
        heading: "Our work around Chickasaw",
        body: [],
        items: [
          { title: "Structural repair and reinforcement", text: "Restoring beams, columns, platforms, and supports to extend their service life." },
          { title: "Structural welding", text: "Welding repairs on structural steel built for demanding industrial conditions." },
          { title: "Replacement fabrication", text: "Fabricated members and assemblies for sections that are beyond repair." },
          { title: "Inspection-ready work", text: "Clear scope and documentation, with work verified and inspected before we call it done." },
        ],
      },
    ],
    faqs: [
      { q: "Do you repair corroded structural steel?", a: "Yes. We repair and reinforce structural steel, platforms, and plant infrastructure, and fabricate replacement members where repair isn't enough." },
      { q: "Do you document repairs?", a: "Yes. Every job gets a clear scope, schedule, and documentation, and the work is verified and inspected before we call it done." },
      { q: "Is Chickasaw in your service area?", a: "Yes. Chickasaw is part of our core Mobile-area service area." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "bayou-la-batre-al",
    city: "Bayou La Batre",
    stateName: "Alabama",
    shortName: "Bayou La Batre, AL",
    nearby: ["mobile-al", "pascagoula-ms"],
    metaTitle: "Industrial Welding, Machining & Repair in Bayou La Batre, AL",
    metaDescription:
      "Welding, fabrication, machining, and R Stamp boiler and pressure vessel repair for shipyards, processing plants, and waterfront industry in Bayou La Batre, AL on the Mississippi Sound.",
    eyebrow: "Bayou La Batre, Alabama",
    h1: "Industrial welding, machining and repair in Bayou La Batre, AL",
    intro:
      "Bayou La Batre, on the Mississippi Sound at the southern tip of Mobile County, is known for shipbuilding and seafood processing. Its working waterfront runs on welded steel, machined parts, and processing equipment, all in one of the harshest coastal environments on the Gulf.",
    summary: "South Mobile County's shipbuilding and seafood processing waterfront.",
    image: "welding",
    imageAlt: "Welder performing structural welding work",
    sections: [
      {
        heading: "Built for the waterfront",
        body: [
          "Salt air and constant moisture shorten the life of steel structures and equipment. Shipyards and processing plants also depend on boilers, pressure vessels, and machinery that can't be down for long during busy seasons.",
          "We bring welding and fabrication, machining, and R Stamp pressure equipment repairs to Bayou La Batre facilities from our base in the Mobile area.",
        ],
      },
      {
        heading: "Services for Bayou La Batre facilities",
        body: [],
        items: [
          { title: "Welding and fabrication", text: "Structural and equipment welding and custom metal fabrication for shipyards and waterfront facilities." },
          { title: "Boiler and pressure vessel repair", text: "Metallic repairs and alterations to boilers and pressure vessels under our National Board \"R\" Stamp." },
          { title: "Machined parts", text: "Replacement shafts, components, and custom parts machined in-house to tolerance." },
          { title: "Processing equipment repair", text: "Repair and maintenance of production equipment and mechanical systems in processing plants." },
        ],
      },
    ],
    faqs: [
      { q: "Can you repair boilers at a processing plant?", a: "Yes. We are National Board \"R\" Stamp certified for metallic repairs and alterations to boilers and pressure vessels." },
      { q: "Do you do custom fabrication for shipyards and waterfront facilities?", a: "Yes. We do structural and equipment welding and custom metal fabrication built to withstand demanding industrial environments." },
      { q: "Is Bayou La Batre in your service area?", a: "Yes. Bayou La Batre is part of our Mobile County service area, served from our office in the Mobile area." },
      QUOTE_FAQ,
    ],
  },
  {
    slug: "pascagoula-ms",
    city: "Pascagoula",
    stateName: "Mississippi",
    shortName: "Pascagoula, MS",
    nearby: ["bayou-la-batre-al", "mobile-al"],
    metaTitle: "Industrial Contractor Serving Pascagoula, MS | Turnarounds & Welding",
    metaDescription:
      "Shutdown and turnaround crews, process piping welding, and R Stamp pressure vessel repairs for refining, shipbuilding, and industrial plants in Pascagoula, MS.",
    eyebrow: "Pascagoula, Mississippi",
    h1: "Industrial contractor serving Pascagoula, MS",
    intro:
      "Pascagoula, in Jackson County on the Mississippi Gulf Coast, is one of the region's major centers of shipbuilding and refining. It's the western edge of our service area, and we bring the skills those plants lean on most, from turnaround crews to pressure vessel repairs, from our base in the Mobile area.",
    summary: "Shipbuilding and refining on the Mississippi Gulf Coast, served from our Mobile-area base.",
    image: "welding",
    imageAlt: "Welder performing structural repair at an industrial site",
    sections: [
      {
        heading: "Turnarounds and pressure equipment",
        body: [
          "Large process plants plan their maintenance around outages, and every day of a turnaround counts. Crews have to arrive with clear scopes, follow strict safety protocols, and finish inside the window.",
          "We provide dedicated, direct-hire crews for planned shutdowns and turnarounds, and our National Board \"R\" Stamp covers metallic repairs and alterations to boilers and pressure vessels.",
        ],
      },
      {
        heading: "What we bring to Pascagoula-area plants",
        body: [],
        items: [
          { title: "Turnaround crews", text: "Dedicated crews with defined scopes, schedules, and documentation for planned outages." },
          { title: "Process piping welding", text: "Welding on process piping systems in industrial plant environments." },
          { title: "R Stamp repairs", text: "Metallic repairs and alterations to boilers and pressure vessels." },
          { title: "Emergency response", text: "24/7 response for critical equipment and structural failures." },
        ],
      },
    ],
    faqs: [
      { q: "Do you work in Mississippi?", a: "Yes. Pascagoula is part of our Gulf Coast service area, served from our base in the Mobile area." },
      { q: "Can you staff a turnaround?", a: "Yes. We provide dedicated crews for planned shutdowns and turnarounds, with clear scopes and schedules to keep the outage on track." },
      { q: "What safety training do your crews have?", a: "Crews receive a site-specific safety orientation, follow PPE and lockout/tagout protocols, complete pre-task hazard assessments, and are trained to OSHA general industry standards, including confined space entry." },
      QUOTE_FAQ,
    ],
  },
];
