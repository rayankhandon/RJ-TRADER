export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  fallbackImage: string;
  tags: string[];
  summary: string;
  content: {
    heading: string;
    paragraphs: string[];
    highlightQuote?: string;
    image?: string;
    imageCaption?: string;
    bulletPoints?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "choose-engine-oil-grade",
    slug: "synthetic-vs-mineral-engine-oil-fleet-guide",
    title: "How to Choose the Right Engine Oil Grade for Your Heavy-Duty Truck",
    subtitle: "How choosing the right lubricant grade extends heavy diesel engine lifespan and reduces long-haul fleet downtime.",
    category: "OIL CARE TIPS",
    readTime: "6 Min Read",
    date: "August 10, 2026",
    author: {
      name: "Raja Mohammad Javed",
      role: "CEO & Lubricants Specialist",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    },
    featuredImage: "/images/blog/card1-hino-oil.png",
    fallbackImage: "/images/blog/card1-hino-oil.png",
    tags: ["Engine Oil", "Fleet Maintenance", "5W-30", "HINO Oil", "Mobil 1"],
    summary:
      "Using the correct engine oil grade protects your truck's engine from wear and keeps it running efficiently in Pakistan's demanding conditions. Here's how to pick the right one for your fleet.",
    content: [
      {
        heading: "The Thermal Stress Challenge in Commercial Transport",
        paragraphs: [
          "Commercial trucks operating across Punjab and southern Pakistan face severe thermal degradation due to high ambient temperatures and heavy payload demands. Mineral oils begin to break down oxidatively at 120°C, leading to varnish deposits, piston ring sticking, and oil sludge accumulation.",
          "Synthetic engine oils—such as HINO Genuine Engine Oil, Shell Rimula R6, and Mobil 1 Synthetic—are formulated with VHVI Group III and Group IV PAO base stocks. These molecularly uniform lubricants resist thermal breakdown up to 180°C, preserving critical oil film thickness under extreme engine loads.",
        ],
        highlightQuote:
          "Switching heavy commercial fleets from conventional mineral oil to synthetic blends reduces engine wear by over 40% while extending oil drain intervals up to 30,000 kilometers.",
      },
      {
        heading: "Viscosity Index & Cold Start Protection",
        paragraphs: [
          "Over 75% of engine wear occurs during the initial cold start sequence before full oil pressure is established. A 5W-30 synthetic lubricant flows four times faster to overhead camshafts and turbocharger bearings than a standard 20W-50 mineral oil.",
          "For long-distance logistics fleets, rapid oil circulation minimizes metal-to-metal contact, preventing premature turbocharger shaft scoring and cylinder wall scuffing.",
        ],
        image: "/images/blog/card1-hino-oil.png",
        imageCaption: "Mechanic pouring genuine engine oil into a heavy-duty truck engine at RJ Traders workshop",
        bulletPoints: [
          "30,000 KM extended oil drain capability under severe service conditions",
          "Enhanced fuel efficiency up to 2.8% via friction modifier technology",
          "Maximum soot dispersancy preventing oil thickening in EGR-equipped diesels",
          "100% compatibility with DPF (Diesel Particulate Filter) exhaust systems",
        ],
      },
    ],
  },
  {
    id: "truck-brake-pads-discs",
    slug: "heavy-duty-truck-brake-pads-rotors-safety-guide",
    title: "Signs Your Truck's Brake Pads and Discs Need Immediate Replacement",
    subtitle: "Maximizing stopping power and heat dissipation for 50-ton heavy trailer rigs operating on steep grades.",
    category: "SAFETY & MAINTENANCE",
    readTime: "7 Min Read",
    date: "August 04, 2026",
    author: {
      name: "Farhan Saeed",
      role: "Chief Quality Inspector",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    },
    featuredImage: "/images/blog/card2-brake-maintenance.png",
    fallbackImage: "/images/blog/card2-brake-maintenance.png",
    tags: ["Brake Pads", "Brembo", "Truck Safety", "Spare Parts"],
    summary:
      "High-carbon vented rotors and ceramic-metallic brake friction formulations prevent brake fade at temperatures exceeding 650°C. Learn how OEM brake components ensure driver safety.",
    content: [
      {
        heading: "Combating Thermal Brake Fade on Heavy Commercial Freight",
        paragraphs: [
          "When a fully loaded 50-ton truck descends steep highway passes, brake rotor surface temperatures can rapidly exceed 650°C. Inferior low-grade brake pads glaze over at high temperatures, resulting in dangerous pedal fade and increased stopping distances.",
          "High-carbon vented brake discs—such as those manufactured by Brembo and Akebono—feature inner directional cooling vanes that dissipate heat 35% faster than standard solid cast iron discs.",
        ],
        highlightQuote:
          "Investing in high-carbon vented rotors and premium ceramic-metallic friction pads reduces thermal fatigue cracking and prevents catastrophic brake failure.",
      },
      {
        heading: "Signs of Brake System Wear in Freight Rigs",
        paragraphs: [
          "Regular inspection of brake pad thickness, caliper slide pin lubrication, and rotor surface scoring prevents costly emergency breakdown delays. Pads worn below 4mm friction material should be replaced immediately with complete axle sets.",
        ],
        image: "/images/blog/card2-brake-maintenance.png",
        imageCaption: "Mechanic inspecting and servicing truck brake pads and disc rotor assembly.",
        bulletPoints: [
          "High-carbon metallurgy resists thermal distortion and rotor warping",
          "Chamfered friction slots reduce brake squeal and vibration dust",
          "Includes multi-layer steel anti-squeal shims for quiet operation",
          "Factory tested to exceed ECE R90 safety standards",
        ],
      },
    ],
  },
  {
    id: "genuine-vs-aftermarket-parts",
    slug: "genuine-vs-aftermarket-spare-parts-guide",
    title: "Genuine vs Aftermarket Spare Parts: What Fleet Owners Need to Know",
    subtitle: "Evaluating total cost of ownership, component longevity, and warranty risks in fleet maintenance.",
    category: "SPARE PARTS GUIDE",
    readTime: "5 Min Read",
    date: "July 28, 2026",
    author: {
      name: "Usman Javed",
      role: "Head of B2B Logistics",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    },
    featuredImage: "/images/blog/card3-parts-installation.png",
    fallbackImage: "/images/blog/card3-parts-installation.png",
    tags: ["Spare Parts", "OEM vs Aftermarket", "Fleet ROI", "Bearings"],
    summary:
      "Counterfeit and sub-standard aftermarket components cause unexpected roadside breakdowns and expensive secondary engine damage. Discover how genuine OEM parts save costs long-term.",
    content: [
      {
        heading: "The Real Cost of Sub-Standard Spare Parts",
        paragraphs: [
          "While aftermarket non-genuine replacement parts may feature lower upfront price tags, their failure rate is 3.5 times higher than genuine OEM parts under commercial heavy transport conditions.",
          "A failed wheel bearing or lower control arm bushing mid-transit results in severe cargo delays, towing fees, and potential vehicle damage far exceeding initial component savings.",
        ],
        highlightQuote:
          "Genuine OEM spare parts manufactured from tested alloy steels guarantee exact dimensional tolerances, preventing catastrophic mechanical failures on long transport routes.",
      },
      {
        heading: "How RJ Traders Verifies Part Authenticity",
        paragraphs: [
          "Every batch of spare parts distributed by RJ Traders is inspected at our central receiving facility and backed by batch QR verification and manufacturer warranty guarantees.",
        ],
        image: "/images/blog/card3-parts-installation.png",
        imageCaption: "Workshop technician installing heavy-duty wheel hub bearing spare part on commercial truck.",
        bulletPoints: [
          "100% genuine OEM components sourced directly from certified factories",
          "Precision heat-treated steel alloys for maximum wear resistance",
          "Full manufacturer warranty coverage on all spare part shipments",
          "Dedicated technical support for part number compatibility verification",
        ],
      },
    ],
  },
  {
    id: "engine-oil-filter-change-interval",
    slug: "how-often-change-engine-oil-and-filters",
    title: "How Often Should You Change Heavy-Duty Engine Oil & Oil Filters?",
    subtitle: "The critical role of heavy-duty synthetic media filters in trapping 10-micron silica dust and metal wear debris.",
    category: "MAINTENANCE GUIDE",
    readTime: "5 Min Read",
    date: "July 18, 2026",
    author: {
      name: "Raja Mohammad Javed",
      role: "CEO & Lubricants Specialist",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    },
    featuredImage: "/images/blog/card1-hino-oil.png",
    fallbackImage: "/images/blog/card1-hino-oil.png",
    tags: ["Oil Filters", "Air Filters", "Fleetguard", "Mann Filter"],
    summary:
      "A single gram of airborne dust entering an engine intake can destroy cylinder honing lines in under 100 operating hours. High-efficiency synthetic filters protect your investment.",
    content: [
      {
        heading: "The Threat of Dust Abrasion in Heavy Transport Engines",
        paragraphs: [
          "Trucks operating on dusty transport routes ingest massive volumes of air every minute. Standard paper filters clog rapidly and deform under high suction, allowing microscopic silica dust particles (10 to 20 microns) to enter combustion chambers.",
          "Once inside, silica dust acts like sandpaper on piston rings, cylinder liners, and valve guides. Premium filters from Mann, Fleetguard, and K&N utilize multi-layer synthetic media that captures 99.4% of dust particles while maintaining unrestricted airflow.",
        ],
        image: "/images/blog/card1-hino-oil.png",
        imageCaption: "Technician inspecting commercial engine filtration assembly.",
        bulletPoints: [
          "Synthetic pleated media provides 3x higher dust holding capacity",
          "Silicone anti-drainback valves prevent dry engine starts",
          "Heavy-gauge steel canister withstands high oil pressure surges",
          "Factory batch sealed to guarantee zero counterfeit risk",
        ],
      },
    ],
  },
];
