export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  description: string;
  specs: { [key: string]: string };
  moq: string;
  priceTiers: { quantity: string; pricePerUnit: string }[];
  inStock: boolean;
  grade?: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "engine-oil-5w30",
    name: "RJ UltraSynth 5W-30 Premium Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/rj-traders-hero.jpg",
    description: "Fully synthetic high-performance engine oil designed for modern passenger cars and light commercial vehicles. Offers extreme temperature protection and maximum fuel efficiency.",
    specs: {
      "Viscosity Grade": "SAE 5W-30",
      "API Standard": "API SP / SN Plus",
      "ACEA Rating": "ACEA C3 / A3/B4",
      "Pack Sizes": "1L, 4L, 5L, 20L, 208L",
      "Origin": "Formulated in Pakistan"
    },
    moq: "50 Liters (or 10 Cartons)",
    priceTiers: [
      { quantity: "50 - 200 L", pricePerUnit: "PKR 1,450 / L" },
      { quantity: "201 - 1,000 L", pricePerUnit: "PKR 1,350 / L" },
      { quantity: "1,000+ L (Bulk Drum)", pricePerUnit: "PKR 1,220 / L" }
    ],
    inStock: true,
    grade: "Synthetic 5W-30",
    badge: "Best Seller"
  },
  {
    id: "engine-oil-20w50",
    name: "RJ HeavyDuty 20W-50 Fleet Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/rj-traders-hero.jpg",
    description: "Heavy-duty multi-grade diesel and gasoline engine oil engineered for commercial trucks, transport fleets, and high-load industrial vehicles.",
    specs: {
      "Viscosity Grade": "SAE 20W-50",
      "API Standard": "API CI-4 / SL",
      "Application": "Diesel Fleets & Heavy Duty Vehicles",
      "Pack Sizes": "4L, 10L, 20L, 208L Steel Drum",
      "Origin": "Manufactured in Pakistan"
    },
    moq: "100 Liters (or 208L Drum)",
    priceTiers: [
      { quantity: "100 - 500 L", pricePerUnit: "PKR 980 / L" },
      { quantity: "501 - 2,000 L", pricePerUnit: "PKR 890 / L" },
      { quantity: "2,000+ L (Bulk Fleet)", pricePerUnit: "PKR 820 / L" }
    ],
    inStock: true,
    grade: "Mineral 20W-50",
    badge: "Popular Fleet Choice"
  },
  {
    id: "drum-208l-synthetic",
    name: "RJ 208L Industrial Steel Drum - Synthetic 10W-40",
    category: "drums",
    categoryName: "Engine Oil Drums (208L)",
    image: "/images/rj-traders-hero.jpg",
    description: "Heavy industrial 208-Liter sealed steel drum filled with RJ Synthetic 10W-40. Built for factory machinery, transport hubs, and workshop supply.",
    specs: {
      "Volume": "208 Liters (55 US Gallons)",
      "Container": "Heavy Duty Sealed Steel Drum",
      "Viscosity": "SAE 10W-40",
      "Gross Weight": "approx. 195 kg",
      "Certification": "ISO 9001 Quality Assured"
    },
    moq: "2 Drums (416 Liters)",
    priceTiers: [
      { quantity: "2 - 5 Drums", pricePerUnit: "PKR 210,000 / Drum" },
      { quantity: "6 - 15 Drums", pricePerUnit: "PKR 198,000 / Drum" },
      { quantity: "16+ Drums (Full Truckload)", pricePerUnit: "PKR 185,000 / Drum" }
    ],
    inStock: true,
    grade: "208L Steel Drum",
    badge: "Wholesale Bulk"
  },
  {
    id: "hydraulic-oil-46",
    name: "RJ HydroMax AW-46 Anti-Wear Hydraulic Fluid",
    category: "industrial-oils",
    categoryName: "Hydraulic & Gear Oils",
    image: "/images/rj-traders-hero.jpg",
    description: "Premium anti-wear hydraulic oil specially formulated for industrial hydraulic machinery, excavators, injection molding machines, and heavy cranes.",
    specs: {
      "ISO VG Grade": "ISO VG 46",
      "Type": "Anti-Wear (AW) Hydraulic Fluid",
      "Thermal Stability": "High Oxidation Resistance",
      "Pack Sizes": "20L Jerrycan, 208L Steel Drum",
      "Origin": "Pakistan Wholesale Supply"
    },
    moq: "4 Jerrycans (80 Liters)",
    priceTiers: [
      { quantity: "80 - 400 L", pricePerUnit: "PKR 850 / L" },
      { quantity: "401 - 1,200 L", pricePerUnit: "PKR 780 / L" },
      { quantity: "1,200+ L", pricePerUnit: "PKR 710 / L" }
    ],
    inStock: true,
    grade: "ISO VG 46",
    badge: "Industrial Grade"
  },
  {
    id: "gear-oil-80w90",
    name: "RJ GearShield EP 80W-90 Extreme Pressure Fluid",
    category: "industrial-oils",
    categoryName: "Hydraulic & Gear Oils",
    image: "/images/rj-traders-hero.jpg",
    description: "High performance extreme-pressure gear lubricant for manual transmissions, differentials, gearboxes, and industrial reduction gear units.",
    specs: {
      "Viscosity Grade": "SAE 80W-90",
      "API Standard": "API GL-5 / GL-4",
      "Features": "Extreme Pressure & Anti-Foam Additives",
      "Pack Sizes": "4L, 20L, 208L Drum",
      "Origin": "Formulated in Pakistan"
    },
    moq: "40 Liters",
    priceTiers: [
      { quantity: "40 - 200 L", pricePerUnit: "PKR 920 / L" },
      { quantity: "201 - 800 L", pricePerUnit: "PKR 840 / L" },
      { quantity: "800+ L", pricePerUnit: "PKR 760 / L" }
    ],
    inStock: true,
    grade: "EP 80W-90"
  },
  {
    id: "industrial-grease-ep2",
    name: "RJ Lithium EP-2 Heavy Industrial Grease",
    category: "lubricants",
    categoryName: "Industrial Lubricants",
    image: "/images/rj-traders-hero.jpg",
    description: "Multipurpose extreme pressure lithium grease suitable for heavy ball bearings, chassis points, conveyor belts, and high-load industrial joints.",
    specs: {
      "NLGI Grade": "NLGI 2",
      "Thickener Type": "Lithium Soap Base",
      "Dropping Point": "190°C+",
      "Pack Sizes": "1 kg Pail, 15 kg Bucket, 180 kg Drum",
      "Origin": "RJ Traders Wholesale"
    },
    moq: "3 Buckets (45 kg)",
    priceTiers: [
      { quantity: "45 - 150 kg", pricePerUnit: "PKR 880 / kg" },
      { quantity: "151 - 500 kg", pricePerUnit: "PKR 810 / kg" },
      { quantity: "500+ kg", pricePerUnit: "PKR 740 / kg" }
    ],
    inStock: true,
    grade: "NLGI 2 EP Grease",
    badge: "Heavy Duty"
  },
  {
    id: "atf-dexron-iii",
    name: "RJ AutoTrans ATF Dexron III Automatic Fluid",
    category: "automotive",
    categoryName: "Automotive Fluids",
    image: "/images/rj-traders-hero.jpg",
    description: "Premium automatic transmission fluid and power steering fluid formulated for smooth gear shifting and thermal protection in vehicles.",
    specs: {
      "Specification": "Dexron III / Mercon",
      "Color": "Red",
      "Application": "Automatic Gearboxes & Power Steering",
      "Pack Sizes": "1L, 4L, 20L",
      "Origin": "Formulated in Pakistan"
    },
    moq: "36 Liters",
    priceTiers: [
      { quantity: "36 - 180 L", pricePerUnit: "PKR 1,150 / L" },
      { quantity: "181 - 600 L", pricePerUnit: "PKR 1,050 / L" },
      { quantity: "600+ L", pricePerUnit: "PKR 960 / L" }
    ],
    inStock: true,
    grade: "Dexron III"
  },
  {
    id: "radiator-coolant-green",
    name: "RJ LongLife Concentrated Radiator Coolant 50/50",
    category: "automotive",
    categoryName: "Automotive Fluids",
    image: "/images/rj-traders-hero.jpg",
    description: "Ethylene glycol based anti-freeze and anti-boil radiator coolant for heavy truck radiators, generators, and passenger cars.",
    specs: {
      "Type": "Concentrated OAT Coolant",
      "Boiling Point": "125°C",
      "Freezing Point": "-35°C",
      "Pack Sizes": "1L, 4L, 20L Jerrycan",
      "Origin": "Manufactured in Pakistan"
    },
    moq: "5 Cartons (60 Liters)",
    priceTiers: [
      { quantity: "60 - 300 L", pricePerUnit: "PKR 650 / L" },
      { quantity: "301 - 1,000 L", pricePerUnit: "PKR 580 / L" },
      { quantity: "1,000+ L", pricePerUnit: "PKR 520 / L" }
    ],
    inStock: true,
    grade: "Anti-Freeze Coolant"
  }
];
