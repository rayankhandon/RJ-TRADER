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
    name: "Shell Helix Ultra 5W-30 Synthetic Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/engine-oil-5w30.png",
    description: "Fully synthetic high-performance engine oil designed for modern passenger cars and commercial vehicles. Offers extreme temperature protection and maximum fuel efficiency.",
    specs: {
      "Viscosity Grade": "SAE 5W-30",
      "API Standard": "API SP / SN Plus",
      "ACEA Rating": "ACEA C3 / A3/B4",
      "Pack Sizes": "1L, 4L, 5L, 208L Drum",
      "Origin": "Genuine Authorized Dealer Sourcing"
    },
    moq: "5 Cartons (20 Liters)",
    priceTiers: [
      { quantity: "20 - 100 L", pricePerUnit: "PKR 2,450 / L" },
      { quantity: "101 - 500 L", pricePerUnit: "PKR 2,250 / L" },
      { quantity: "500+ L (Bulk Drum)", pricePerUnit: "PKR 2,100 / L" }
    ],
    inStock: true,
    grade: "Synthetic 5W-30",
    badge: "Best Seller"
  },
  {
    id: "engine-oil-20w50",
    name: "Chevron Delo 400 20W-50 Fleet Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/engine-oil-20w50.png",
    description: "Heavy-duty multi-grade diesel and gasoline engine oil engineered for commercial trucks, transport fleets, and high-load industrial machinery.",
    specs: {
      "Viscosity Grade": "SAE 20W-50",
      "API Standard": "API CI-4 / SL",
      "Application": "Diesel Fleets & Heavy Duty Vehicles",
      "Pack Sizes": "4L, 10L, 20L, 208L Steel Drum",
      "Origin": "Original Factory Sealed"
    },
    moq: "10 Cartons (40 Liters)",
    priceTiers: [
      { quantity: "40 - 200 L", pricePerUnit: "PKR 1,350 / L" },
      { quantity: "201 - 1,000 L", pricePerUnit: "PKR 1,220 / L" },
      { quantity: "1,000+ L (Bulk Fleet)", pricePerUnit: "PKR 1,100 / L" }
    ],
    inStock: true,
    grade: "Mineral 20W-50",
    badge: "Popular Fleet Choice"
  },
  {
    id: "drum-208l-mobil1",
    name: "Mobil 1 ESP 5W-30 Engine Oil 208L Steel Drum",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/drum-208l-synthetic.png",
    description: "Heavy industrial 208-Liter sealed steel drum filled with Mobil 1 ESP 5W-30. Engineered for workshop oil dispensers, fleets, and auto service hubs.",
    specs: {
      "Volume": "208 Liters (55 US Gallons)",
      "Container": "Heavy Duty Sealed Steel Drum",
      "Viscosity": "SAE 5W-30 Synthetic",
      "Gross Weight": "approx. 195 kg",
      "Certification": "Genuine Factory Sealed Warranty"
    },
    moq: "1 Drum (208 Liters)",
    priceTiers: [
      { quantity: "1 - 3 Drums", pricePerUnit: "PKR 380,000 / Drum" },
      { quantity: "4 - 10 Drums", pricePerUnit: "PKR 360,000 / Drum" },
      { quantity: "11+ Drums (Truckload)", pricePerUnit: "PKR 345,000 / Drum" }
    ],
    inStock: true,
    grade: "208L Steel Drum",
    badge: "Wholesale Bulk Drum"
  },
  {
    id: "oil-filter-mann-w712",
    name: "Mann-Filter W712 High Efficiency Oil Filter",
    category: "oil-filters",
    categoryName: "Oil Filters",
    image: "/images/products/industrial-grease-ep2.png",
    description: "OEM quality spin-on oil filter offering maximum dirt holding capacity and engine wear protection for European and Asian vehicle engines.",
    specs: {
      "Filter Type": "Spin-On Oil Filter",
      "Filtration Efficiency": "99.2% at 20 Microns",
      "Bypass Valve": "Integrated 1.0 Bar Valve",
      "Compatibility": "Toyota, Honda, Suzuki, VW",
      "Origin": "Mann-Filter Original"
    },
    moq: "20 Pieces (1 Carton)",
    priceTiers: [
      { quantity: "20 - 100 Pcs", pricePerUnit: "PKR 950 / Pc" },
      { quantity: "101 - 500 Pcs", pricePerUnit: "PKR 850 / Pc" },
      { quantity: "500+ Pcs", pricePerUnit: "PKR 750 / Pc" }
    ],
    inStock: true,
    grade: "OEM Grade Filter",
    badge: "Top Seller Filter"
  },
  {
    id: "brake-pad-ceramic-front",
    name: "Akebono Heavy-Duty Ceramic Front Brake Pads",
    category: "brake-parts",
    categoryName: "Brake Pads & Discs",
    image: "/images/products/gear-oil-80w90.png",
    description: "Ultra-quiet ceramic brake pads providing superior stopping power, zero dust accumulation, and extended rotor life for commercial & passenger cars.",
    specs: {
      "Material": "Premium Ceramic Compound",
      "Position": "Front Axle Set",
      "Noise Shim": "Dual-Layer Anti-Squeal Shim",
      "Certification": "ECE R90 Certified",
      "Origin": "Genuine Authorized Sourcing"
    },
    moq: "10 Sets",
    priceTiers: [
      { quantity: "10 - 50 Sets", pricePerUnit: "PKR 4,500 / Set" },
      { quantity: "51 - 200 Sets", pricePerUnit: "PKR 3,950 / Set" },
      { quantity: "200+ Sets", pricePerUnit: "PKR 3,500 / Set" }
    ],
    inStock: true,
    grade: "Ceramic Grade",
    badge: "High Performance"
  },
  {
    id: "brake-disc-vented-pair",
    name: "Brembo Vented Front Brake Discs (Pair)",
    category: "brake-parts",
    categoryName: "Brake Pads & Discs",
    image: "/images/products/hydraulic-oil-46.png",
    description: "High-carbon vented front brake rotors engineered for maximum heat dissipation, smooth braking response, and resistance to warping under heavy loads.",
    specs: {
      "Rotor Type": "Vented High-Carbon Rotor",
      "Surface Finish": "UV Coated Anti-Corrosion",
      "Diameter": "275 mm / 295 mm",
      "Pair Weight": "approx. 14.5 kg",
      "Brand": "Brembo Genuine"
    },
    moq: "5 Pairs",
    priceTiers: [
      { quantity: "5 - 20 Pairs", pricePerUnit: "PKR 12,500 / Pair" },
      { quantity: "21 - 80 Pairs", pricePerUnit: "PKR 11,200 / Pair" },
      { quantity: "80+ Pairs", pricePerUnit: "PKR 9,900 / Pair" }
    ],
    inStock: true,
    grade: "High Carbon"
  },
  {
    id: "suspension-shock-absorber",
    name: "KYB Excel-G Heavy Duty Shock Absorber Set",
    category: "suspension",
    categoryName: "Suspension Parts",
    image: "/images/products/radiator-coolant-green.png",
    description: "Twin-tube gas shock absorbers designed to restore original vehicle handling, damp road vibrations, and enhance safety for commercial fleets.",
    specs: {
      "Design": "Twin-Tube Nitrogen Gas Pressurized",
      "Piston Diameter": "30 mm Hardened Chrome Rod",
      "Application": "Front & Rear Axles available",
      "Origin": "KYB Japan / OEM Approved"
    },
    moq: "4 Sets (8 Shocks)",
    priceTiers: [
      { quantity: "4 - 15 Sets", pricePerUnit: "PKR 16,800 / Set" },
      { quantity: "16 - 50 Sets", pricePerUnit: "PKR 14,900 / Set" },
      { quantity: "50+ Sets", pricePerUnit: "PKR 13,500 / Set" }
    ],
    inStock: true,
    grade: "Heavy Duty Gas"
  },
  {
    id: "timing-belt-gates-kit",
    name: "Gates PowerGrip Timing Belt & Tensioner Kit",
    category: "belts-hoses",
    categoryName: "Belts & Hoses",
    image: "/images/products/atf-dexron-iii.png",
    description: "Complete timing belt replacement kit including high-tensile HSN timing belt, tensioner pulley, and idler bearings for engine overhaul maintenance.",
    specs: {
      "Belt Material": "HSN Rubber with Fiberglass Cord",
      "Kit Components": "Belt, Tensioner, Idler Pulley",
      "Service Life": "100,000 km Mileage Rating",
      "Brand": "Gates Official"
    },
    moq: "10 Kits",
    priceTiers: [
      { quantity: "10 - 40 Kits", pricePerUnit: "PKR 5,800 / Kit" },
      { quantity: "41 - 150 Kits", pricePerUnit: "PKR 5,100 / Kit" },
      { quantity: "150+ Kits", pricePerUnit: "PKR 4,400 / Kit" }
    ],
    inStock: true,
    grade: "OE Replacement"
  }
];
