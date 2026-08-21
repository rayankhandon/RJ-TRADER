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
  // Engine Oils
  {
    id: "shell-helix-ultra-5w40",
    name: "Shell Helix Ultra 5W-40 Synthetic Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/f426c18b-2790-40ee-8a5f-a308eff43073.png",
    description: "Fully synthetic high-performance motor oil designed for diesel and gasoline engines. Offers extreme temperature protection and maximum engine performance.",
    specs: {
      "Viscosity Grade": "SAE 5W-40",
      "API Standard": "API SN/CF",
      "ACEA Rating": "ACEA A3/B4",
      "Pack Size": "4L Can",
      "Origin": "Shell Authorized Dealer"
    },
    moq: "5 Cartons (20 Liters)",
    priceTiers: [
      { quantity: "20 - 100 L", pricePerUnit: "PKR 2,450 / L" },
      { quantity: "101 - 500 L", pricePerUnit: "PKR 2,250 / L" },
      { quantity: "500+ L", pricePerUnit: "PKR 2,100 / L" }
    ],
    inStock: true,
    grade: "Synthetic 5W-40",
    badge: "Best Seller"
  },
  {
    id: "delo-gold-ultra-15w40",
    name: "Caltex Delo Gold Ultra 15W-40 Heavy Duty Engine Oil",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/836e69f6-1cbc-4017-934d-7703d5223be4.png",
    description: "Premium heavy-duty multi-grade diesel engine oil engineered with ISOSYN technology for commercial trucks, transport fleets, and high-load engines.",
    specs: {
      "Viscosity Grade": "SAE 15W-40",
      "API Standard": "API CI-4/SL",
      "Technology": "Advanced ISOSYN",
      "Pack Size": "4 Litres Can",
      "Origin": "Caltex Factory Sealed"
    },
    moq: "10 Cartons (40 Liters)",
    priceTiers: [
      { quantity: "40 - 200 L", pricePerUnit: "PKR 1,350 / L" },
      { quantity: "201 - 1,000 L", pricePerUnit: "PKR 1,220 / L" },
      { quantity: "1,000+ L", pricePerUnit: "PKR 1,100 / L" }
    ],
    inStock: true,
    grade: "Multigrade 15W-40",
    badge: "Popular Fleet Choice"
  },
  {
    id: "hino-genuine-oil-15w40",
    name: "HINO Genuine Engine Oil 15W-40 SN/CK-4",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/959f5f5b-e48d-4297-909e-c7b38fd1c23c.png",
    description: "Official Hinopak Motors recommended multi-grade engine oil for Hino commercial trucks and buses, ensuring maximum engine lifespan and clean operation.",
    specs: {
      "Viscosity Grade": "SAE 15W-40",
      "API Standard": "API SN/CK-4",
      "Pack Size": "4L Can",
      "Distributor": "Hinopak Motors Limited",
      "Application": "Hino Trucks & Buses"
    },
    moq: "5 Cartons (20 Liters)",
    priceTiers: [
      { quantity: "20 - 100 L", pricePerUnit: "PKR 1,850 / L" },
      { quantity: "101 - 500 L", pricePerUnit: "PKR 1,700 / L" },
      { quantity: "500+ L", pricePerUnit: "PKR 1,550 / L" }
    ],
    inStock: true,
    grade: "HINO OEM Spec",
    badge: "Genuine HINO"
  },
  {
    id: "hino-gold-premium-15w40",
    name: "HINO Gold Premium Engine Oil 15W-40 (HP01115024)",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/d3aa832a-a353-49ce-bc12-113b613b33d6.png",
    description: "High-tier multi-grade heavy duty diesel engine oil distributed by Hinopak Motors Limited for long-haul highway transport and heavy machinery.",
    specs: {
      "Viscosity Grade": "SAE 15W-40",
      "API Standard": "API CI-4",
      "Part Number": "HP01115024",
      "Pack Size": "4L Gold Can",
      "Distributor": "Hinopak Motors Limited"
    },
    moq: "5 Cartons (20 Liters)",
    priceTiers: [
      { quantity: "20 - 100 L", pricePerUnit: "PKR 1,950 / L" },
      { quantity: "101 - 500 L", pricePerUnit: "PKR 1,800 / L" },
      { quantity: "500+ L", pricePerUnit: "PKR 1,650 / L" }
    ],
    inStock: true,
    grade: "Gold Premium",
    badge: "HINO Gold"
  },
  {
    id: "delo-208l-steel-drum",
    name: "Caltex Delo Heavy Duty Engine Oil 208L Steel Drum",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/1132971d-403b-4952-847a-28d0018fefb8.png",
    description: "Bulk industrial 208-Liter sealed blue steel drum filled with Caltex Delo engine oil for commercial fleet workshops and oil dispensing setups.",
    specs: {
      "Volume": "208 Liters (55 US Gallons)",
      "Container": "Heavy Sealed Blue Steel Drum",
      "Application": "Fleet Workshops & Oil Dispensers",
      "Gross Weight": "approx. 195 kg",
      "Brand": "Caltex Delo"
    },
    moq: "1 Drum (208 Liters)",
    priceTiers: [
      { quantity: "1 - 3 Drums", pricePerUnit: "PKR 240,000 / Drum" },
      { quantity: "4 - 10 Drums", pricePerUnit: "PKR 228,000 / Drum" },
      { quantity: "11+ Drums", pricePerUnit: "PKR 215,000 / Drum" }
    ],
    inStock: true,
    grade: "208L Bulk Drum",
    badge: "Bulk Steel Drum"
  },
  {
    id: "hino-genuine-red-drum-208l",
    name: "HINO Genuine Engine Oil 208L Red Steel Drum (HPM 1115208)",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/5be35820-46b0-42dd-980d-ce55d085c903.png",
    description: "Official Hinopak Motors multi-grade 208-Liter red steel drum for fleet maintenance facilities, logistics hubs, and heavy transport depots.",
    specs: {
      "Volume": "208 Liters",
      "Part Number": "HPM 1115208",
      "Container": "Factory Sealed Red Steel Drum",
      "Distributor": "Hinopak Motors Limited",
      "Origin": "Official Hino Wholesale"
    },
    moq: "1 Drum (208 Liters)",
    priceTiers: [
      { quantity: "1 - 3 Drums", pricePerUnit: "PKR 260,000 / Drum" },
      { quantity: "4 - 10 Drums", pricePerUnit: "PKR 248,000 / Drum" },
      { quantity: "11+ Drums", pricePerUnit: "PKR 235,000 / Drum" }
    ],
    inStock: true,
    grade: "208L Red Drum",
    badge: "HINO Bulk Drum"
  },
  {
    id: "hino-dh2-10w30-blue-drum",
    name: "HINO Genuine Engine Oil DH-2 10W-30 208L Steel Drum",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/539b3800-2918-44ce-bf39-12877931acfd.png",
    description: "JASO DH-2 specified 10W-30 low-ash engine oil in a 208L blue drum, designed specifically for modern Hino DPF emission system equipped engines.",
    specs: {
      "Volume": "208 Liters",
      "Grade": "SAE 10W-30 JASO DH-2",
      "Container": "Factory Sealed Blue Steel Drum",
      "Compatibility": "Hino DPF Equipped Diesel Engines",
      "Origin": "Hino Genuine Lubricants"
    },
    moq: "1 Drum (208 Liters)",
    priceTiers: [
      { quantity: "1 - 3 Drums", pricePerUnit: "PKR 275,000 / Drum" },
      { quantity: "4 - 10 Drums", pricePerUnit: "PKR 260,000 / Drum" },
      { quantity: "11+ Drums", pricePerUnit: "PKR 245,000 / Drum" }
    ],
    inStock: true,
    grade: "JASO DH-2 10W-30",
    badge: "Low Ash DPF"
  },
  {
    id: "jinyedu-fukun-15w40-pail",
    name: "Jinyedu Lubricant Fukun Engine Oil LE-400 15W-40 Pail",
    category: "engine-oil",
    categoryName: "Engine Oils",
    image: "/images/products/4b6d84aa-b283-4b61-b59a-1dc5b10e8c24.png",
    description: "High-performance heavy-duty engine oil pail formulated for excavators, dump trucks, construction machinery, and diesel fleet engines.",
    specs: {
      "Grade": "SAE 15W-40 API CH-4",
      "Model": "FUKUN LE-400",
      "Container": "Heavy Duty Yellow Bucket Pail",
      "Application": "Earthmoving Equipment & Heavy Diesel"
    },
    moq: "2 Pails",
    priceTiers: [
      { quantity: "2 - 10 Pails", pricePerUnit: "PKR 18,500 / Pail" },
      { quantity: "11 - 30 Pails", pricePerUnit: "PKR 17,200 / Pail" },
      { quantity: "30+ Pails", pricePerUnit: "PKR 16,000 / Pail" }
    ],
    inStock: true,
    grade: "Heavy Duty Pail",
    badge: "Construction Grade"
  },

  // Oil Filters
  {
    id: "hino-genuine-oil-filter-15613",
    name: "HINO Genuine Parts Oil Filter (15613-E0110)",
    category: "oil-filter",
    categoryName: "Oil Filters",
    image: "/images/products/075c26ac-1595-4509-8441-271a068028ef.png",
    description: "Original HINO heavy-duty commercial truck spin-on oil filter offering maximum filtration efficiency and engine wear protection.",
    specs: {
      "Part Number": "15613-E0110",
      "Filter Type": "Spin-On Lube Filter",
      "Application": "Hino 500 / 700 Series Heavy Duty Trucks",
      "Origin": "HINO Genuine Parts USA/Japan"
    },
    moq: "10 Pieces",
    priceTiers: [
      { quantity: "10 - 50 Pcs", pricePerUnit: "PKR 2,450 / Pc" },
      { quantity: "51 - 200 Pcs", pricePerUnit: "PKR 2,200 / Pc" },
      { quantity: "200+ Pcs", pricePerUnit: "PKR 1,980 / Pc" }
    ],
    inStock: true,
    grade: "HINO OEM",
    badge: "Genuine HINO"
  },
  {
    id: "max-plus-oil-filter-mpo1780",
    name: "Max Plus Heavy Duty Lube Filter (MPO-1780 / 15607-1780)",
    category: "oil-filter",
    categoryName: "Oil Filters",
    image: "/images/products/99ede561-e39b-4276-88f2-5e1b31451fff.png",
    description: "High-capacity spin-on lube filter element interchangeable with Baldwin B404 and Fleetguard LF3541 for commercial diesel engines.",
    specs: {
      "Part Number": "MPO-1780 / 15607-1780",
      "Cross Reference": "Fleetguard LF3541 / Baldwin B404",
      "Filter Type": "Heavy Duty Lube Filter",
      "Brand": "Max Plus Genuine"
    },
    moq: "12 Pieces",
    priceTiers: [
      { quantity: "12 - 50 Pcs", pricePerUnit: "PKR 1,850 / Pc" },
      { quantity: "51 - 200 Pcs", pricePerUnit: "PKR 1,650 / Pc" },
      { quantity: "200+ Pcs", pricePerUnit: "PKR 1,450 / Pc" }
    ],
    inStock: true,
    grade: "Heavy Duty Lube",
    badge: "High Efficiency"
  },

  // Fuel Filters
  {
    id: "hino-eco-fuel-filter-23401",
    name: "HINO ECO PARTS Fuel Filter (23401-1730HP)",
    category: "fuel-filter",
    categoryName: "Fuel Filters",
    image: "/images/products/42bf2800-77fa-4305-b44c-18095e88ce6b.png",
    description: "Official Hinopak Motors recommended fuel filter cartridge element providing precision fuel cleaning and injector protection for Hino diesel trucks.",
    specs: {
      "Part Number": "23401-1730HP",
      "Series": "HINO ECO PARTS",
      "Distributor": "Hinopak Motors Limited",
      "Application": "Hino Diesel Commercial Fleets"
    },
    moq: "10 Cartons",
    priceTiers: [
      { quantity: "10 - 50 Pcs", pricePerUnit: "PKR 1,650 / Pc" },
      { quantity: "51 - 200 Pcs", pricePerUnit: "PKR 1,480 / Pc" },
      { quantity: "200+ Pcs", pricePerUnit: "PKR 1,320 / Pc" }
    ],
    inStock: true,
    grade: "Eco Parts",
    badge: "HINO Recommended"
  },
  {
    id: "guard-fuel-filter-gd215",
    name: "Guard Fuel Filter GD/-215 (23401-11030)",
    category: "fuel-filter",
    categoryName: "Fuel Filters",
    image: "/images/products/5485d929-049c-46b5-8759-dfed39792435.png",
    description: "Guard Filters original spin-on fuel filter canister designed to trap dirt, rust, and water contaminants before reaching diesel fuel pumps.",
    specs: {
      "Model": "GD/-215",
      "OEM Part No": "23401-11030",
      "Filter Type": "Spin-On Fuel Filter",
      "Brand": "Guard Filters Original"
    },
    moq: "20 Pieces",
    priceTiers: [
      { quantity: "20 - 100 Pcs", pricePerUnit: "PKR 1,150 / Pc" },
      { quantity: "101 - 500 Pcs", pricePerUnit: "PKR 1,020 / Pc" },
      { quantity: "500+ Pcs", pricePerUnit: "PKR 900 / Pc" }
    ],
    inStock: true,
    grade: "Guard Original",
    badge: "Popular Fuel Filter"
  },
  {
    id: "hino-guard-fuel-filter-s1560",
    name: "HINO Fuel Filter S1560-724 (Guard Filters)",
    category: "fuel-filter",
    categoryName: "Fuel Filters",
    image: "/images/products/aa16e521-7f9c-4f33-8af4-af6e0c307c48.png",
    description: "Interchangeable heavy-duty fuel filter (23304-EV360 / FC-1501) engineered for Hino Motors Ltd. Tokyo Japan diesel engines.",
    specs: {
      "Model": "S1560-724",
      "Interchangeable": "23304-EV360 / FC-1501",
      "Manufacturer": "Hino Motors Ltd / Guard Filters",
      "Application": "Hino Heavy Commercial Duty"
    },
    moq: "10 Pieces",
    priceTiers: [
      { quantity: "10 - 50 Pcs", pricePerUnit: "PKR 1,950 / Pc" },
      { quantity: "51 - 200 Pcs", pricePerUnit: "PKR 1,750 / Pc" },
      { quantity: "200+ Pcs", pricePerUnit: "PKR 1,580 / Pc" }
    ],
    inStock: true,
    grade: "Hino Heavy Duty",
    badge: "Tokyo Japan Spec"
  },

  // Air Filters
  {
    id: "toyota-denso-air-filter-17801",
    name: "TOYOTA DENSO Genuine Air Filter (17801-0L040)",
    category: "air-filter",
    categoryName: "Air Filters",
    image: "/images/products/ece06dc6-ebb3-4662-86cb-886b2724e1e6.png",
    description: "Genuine Toyota Denso panel air filter made in Thailand for Toyota Hilux, Fortuner, and HiAce engines, preventing dust ingestion.",
    specs: {
      "Part Number": "17801-0L040",
      "Brand": "Toyota Genuine Parts / Denso",
      "Origin": "Made in Thailand",
      "Compatibility": "Hilux Vigo/Revo, Fortuner, HiAce"
    },
    moq: "10 Pieces",
    priceTiers: [
      { quantity: "10 - 50 Pcs", pricePerUnit: "PKR 2,800 / Pc" },
      { quantity: "51 - 200 Pcs", pricePerUnit: "PKR 2,500 / Pc" },
      { quantity: "200+ Pcs", pricePerUnit: "PKR 2,250 / Pc" }
    ],
    inStock: true,
    grade: "Toyota Denso OEM",
    badge: "Genuine Toyota"
  },
  {
    id: "high-performance-cone-air-filter",
    name: "High Performance Red Cone Air Filter",
    category: "air-filter",
    categoryName: "Air Filters",
    image: "/images/products/0ca29c3f-c6f4-4ace-80e9-76e077948c9d.png",
    description: "Universal high-flow washable performance cone air filter with stainless steel clamp, enhancing air intake efficiency and engine responsiveness.",
    specs: {
      "Type": "Universal High-Flow Cone Filter",
      "Media": "Pleated Synthetic Cotton Webbing",
      "Clamp": "Stainless Steel Hose Clamp Included",
      "Washable": "Yes, Reusable"
    },
    moq: "5 Pieces",
    priceTiers: [
      { quantity: "5 - 20 Pcs", pricePerUnit: "PKR 3,200 / Pc" },
      { quantity: "21 - 80 Pcs", pricePerUnit: "PKR 2,850 / Pc" },
      { quantity: "80+ Pcs", pricePerUnit: "PKR 2,500 / Pc" }
    ],
    inStock: true,
    grade: "High Flow",
    badge: "Performance Filter"
  },
  {
    id: "heavy-duty-cylindrical-air-filter",
    name: "Heavy Duty Cylindrical Truck Air Filter Cartridge",
    category: "air-filter",
    categoryName: "Air Filters",
    image: "/images/products/fc46174a-1584-4496-9a2e-4eb7daf27d3f.png",
    description: "Industrial cylindrical mesh-reinforced main engine air filter for heavy trucks, construction machinery, and generators.",
    specs: {
      "Filter Style": "Cylindrical Inner/Outer Mesh",
      "Application": "Trucks, Heavy Equipment & Industrial",
      "Filtration": "99.8% Dust Hold Capacity"
    },
    moq: "5 Pieces",
    priceTiers: [
      { quantity: "5 - 20 Pcs", pricePerUnit: "PKR 4,500 / Pc" },
      { quantity: "21 - 50 Pcs", pricePerUnit: "PKR 4,000 / Pc" },
      { quantity: "50+ Pcs", pricePerUnit: "PKR 3,600 / Pc" }
    ],
    inStock: true,
    grade: "Industrial Grade",
    badge: "Heavy Fleet Air Filter"
  },

  // Coolants
  {
    id: "guard-radiator-coolant-4l",
    name: "Guard Long Life Antifreeze Radiator Coolant 4L",
    category: "coolant",
    categoryName: "Coolants",
    image: "/images/products/c3eca7fc-9bbd-41cc-bf6f-5f2cc1616802.png",
    description: "Ready to use long-life anti-rust and anti-freeze radiator coolant fluid providing all-weather protection against overheating and corrosion.",
    specs: {
      "Pack Size": "4 Litres Jug",
      "Protection": "Anti-Rust & Anti-Freeze",
      "Formula": "Ready To Use Pre-mixed",
      "Brand": "Guard Filters Original"
    },
    moq: "6 Jugs (1 Box)",
    priceTiers: [
      { quantity: "6 - 30 Jugs", pricePerUnit: "PKR 1,450 / Jug" },
      { quantity: "31 - 100 Jugs", pricePerUnit: "PKR 1,300 / Jug" },
      { quantity: "100+ Jugs", pricePerUnit: "PKR 1,180 / Jug" }
    ],
    inStock: true,
    grade: "Guard Long Life",
    badge: "Ready To Use"
  },
  {
    id: "mannol-g13-coolant-antifreeze",
    name: "Mannol G13+ Antifreeze Coolant (AS210)",
    category: "coolant",
    categoryName: "Coolants",
    image: "/images/products/358fb99c-4c1d-458f-845c-c8a5e6d64e4d.png",
    description: "European standard G13+ high performance ready-to-use antifreeze coolant formulation for modern aluminum and alloy engine cooling systems.",
    specs: {
      "Standard": "G13+ High Performance",
      "Model": "AS210",
      "Properties": "Anti-Corrosion & Anti-Scaling",
      "Pack Size": "4L Can",
      "Origin": "Mannol European Quality"
    },
    moq: "4 Canisters",
    priceTiers: [
      { quantity: "4 - 20 Cans", pricePerUnit: "PKR 2,900 / Can" },
      { quantity: "21 - 80 Cans", pricePerUnit: "PKR 2,650 / Can" },
      { quantity: "80+ Cans", pricePerUnit: "PKR 2,400 / Can" }
    ],
    inStock: true,
    grade: "G13+ Formula",
    badge: "European Spec"
  },
  {
    id: "hino-llc-ex-plus-coolant-4l",
    name: "HINO LLC-EX PLUS Extra Long Life Coolant (HPC1116004)",
    category: "coolant",
    categoryName: "Coolants",
    image: "/images/products/43e97f95-82df-48f3-94cf-a302cbf988de.png",
    description: "Official Hinopak Motors pre-mixed extra long life radiator coolant fluid specifically formulated for Hino heavy vehicle radiators.",
    specs: {
      "Part Number": "HPC1116004",
      "Pack Size": "Net 4 Litres",
      "Distributor": "Hinopak Motors Limited",
      "Type": "Pre-Mixed Extra Long Life Coolant"
    },
    moq: "6 Jugs",
    priceTiers: [
      { quantity: "6 - 30 Jugs", pricePerUnit: "PKR 2,200 / Jug" },
      { quantity: "31 - 100 Jugs", pricePerUnit: "PKR 2,000 / Jug" },
      { quantity: "100+ Jugs", pricePerUnit: "PKR 1,820 / Jug" }
    ],
    inStock: true,
    grade: "HINO Genuine",
    badge: "Extra Long Life"
  },

  // Grease & Lubricants
  {
    id: "oleum-gel-express-75000-grease",
    name: "Oleum Lubricants Gel Express 75000 Lithium Grease 15Kg Pail",
    category: "grease",
    categoryName: "Grease & Lubricants",
    image: "/images/products/d13efbbf-0eef-4b9c-a85e-c327e1d524ad.png",
    description: "Long life multi-utility extreme pressure (EP) lithium grease pail engineered for wheel bearings, chassis, tractors, and heavy construction fleets.",
    specs: {
      "Grade": "Extreme Pressure EP Lithium Grease",
      "Pack Size": "15 Kg Heavy Duty Pail",
      "Model": "GEL EXPRESS 75000",
      "Application": "Trucks, Tractors & Excavators",
      "Brand": "Oleum Lubricants"
    },
    moq: "2 Pails (30 kg)",
    priceTiers: [
      { quantity: "2 - 10 Pails", pricePerUnit: "PKR 14,500 / Pail" },
      { quantity: "11 - 30 Pails", pricePerUnit: "PKR 13,200 / Pail" },
      { quantity: "30+ Pails", pricePerUnit: "PKR 12,000 / Pail" }
    ],
    inStock: true,
    grade: "15Kg EP Pail",
    badge: "Heavy Duty EP Grease"
  },

  // Drain Plug Washers & Seals
  {
    id: "tridon-copper-drain-plug-seal-tsw010",
    name: "Tridon Copper Drain Plug Seals M12 (Part No. TSW010)",
    category: "drain-plug-washer",
    categoryName: "Drain Plug Washers",
    image: "/images/products/f97159b1-3932-4637-9420-59c6ebce8bb8.png",
    description: "Premium solid copper oil pan drain plug crush washers (M12 fitment) preventing oil leaks during oil change services.",
    specs: {
      "Part Number": "TSW010",
      "Material": "100% Annealed Copper",
      "Fitment": "M12 Thread Drain Plugs",
      "Pack Size": "Blister Pack of 2 Seals",
      "Brand": "Tridon Original"
    },
    moq: "50 Packs",
    priceTiers: [
      { quantity: "50 - 200 Packs", pricePerUnit: "PKR 220 / Pack" },
      { quantity: "201 - 500 Packs", pricePerUnit: "PKR 190 / Pack" },
      { quantity: "500+ Packs", pricePerUnit: "PKR 160 / Pack" }
    ],
    inStock: true,
    grade: "M12 Copper",
    badge: "Copper Seal"
  },
  {
    id: "copper-drain-plug-washer-single",
    name: "Heavy Duty Bulk Copper Drain Plug Crush Washer",
    category: "drain-plug-washer",
    categoryName: "Drain Plug Washers",
    image: "/images/products/ba473d63-9387-4538-9d42-9915b53e6a5b.png",
    description: "High-grade copper washer seal for oil drain plugs, diesel injector seats, and hydraulic fitting sealing across commercial fleets.",
    specs: {
      "Material": "Solid Compressed Copper",
      "Application": "Oil Pan Plugs & Fuel Injector Seats",
      "Resistivity": "High Pressure & High Heat Sealed"
    },
    moq: "100 Pieces",
    priceTiers: [
      { quantity: "100 - 500 Pcs", pricePerUnit: "PKR 65 / Pc" },
      { quantity: "501 - 2000 Pcs", pricePerUnit: "PKR 50 / Pc" },
      { quantity: "2000+ Pcs", pricePerUnit: "PKR 40 / Pc" }
    ],
    inStock: true,
    grade: "Solid Copper",
    badge: "Bulk Washer"
  },
  {
    id: "aluminum-drain-plug-crush-washer",
    name: "Commercial Aluminum Oil Pan Drain Plug Crush Washer",
    category: "drain-plug-washer",
    categoryName: "Drain Plug Washers",
    image: "/images/products/25ea4938-ca1f-4336-8bb8-f999a1bf0478.png",
    description: "Precision-engineered aluminum crush ring gasket for Asian and European engine oil drain plugs.",
    specs: {
      "Material": "Soft Annealed Aluminum Alloy",
      "Function": "Deformable Leak-Proof Oil Seal",
      "Reusability": "Single Service Replacement"
    },
    moq: "100 Pieces",
    priceTiers: [
      { quantity: "100 - 500 Pcs", pricePerUnit: "PKR 45 / Pc" },
      { quantity: "501 - 2000 Pcs", pricePerUnit: "PKR 35 / Pc" },
      { quantity: "2000+ Pcs", pricePerUnit: "PKR 25 / Pc" }
    ],
    inStock: true,
    grade: "Aluminum Alloy",
    badge: "Aluminum Seal"
  },

  // O-Rings
  {
    id: "universal-rubber-o-ring-seal",
    name: "Universal High Temperature Nitrile Rubber O-Ring Gasket",
    category: "oil-filter-o-ring",
    categoryName: "Oil Filter O-Rings",
    image: "/images/products/3844e890-2b53-4f1e-a347-e666897ed25d.png",
    description: "Heat and oil-resistant NBR rubber O-ring seal for oil filter housings, oil cooler lines, and hydraulic fittings.",
    specs: {
      "Material": "NBR Nitrile Rubber",
      "Temperature Range": "-30°C to +120°C",
      "Application": "Oil Filter Cap & Housing Seals"
    },
    moq: "100 Pieces",
    priceTiers: [
      { quantity: "100 - 500 Pcs", pricePerUnit: "PKR 35 / Pc" },
      { quantity: "501 - 2000 Pcs", pricePerUnit: "PKR 25 / Pc" },
      { quantity: "2000+ Pcs", pricePerUnit: "PKR 18 / Pc" }
    ],
    inStock: true,
    grade: "NBR Rubber",
    badge: "Universal O-Ring"
  },
  {
    id: "yamaha-genuine-o-ring-5ype635700",
    name: "Yamaha Genuine Parts O-Ring (5YP-E6357-00)",
    category: "oil-filter-o-ring",
    categoryName: "Oil Filter O-Rings",
    image: "/images/products/09f72aba-29e3-4121-bcbf-9245bfc8aa9e.png",
    description: "Factory original Yamaha sealed O-ring gasket (5YP-E6357-00) made in Japan for engine filter covers and oil passage sealing.",
    specs: {
      "Part Number": "5YP-E6357-00",
      "Brand": "Yamaha Motor Co., Ltd. Genuine Parts",
      "Origin": "Made in Japan",
      "Packaging": "Original Sealed Polybag"
    },
    moq: "50 Polybags",
    priceTiers: [
      { quantity: "50 - 200 Pcs", pricePerUnit: "PKR 180 / Pc" },
      { quantity: "201 - 500 Pcs", pricePerUnit: "PKR 155 / Pc" },
      { quantity: "500+ Pcs", pricePerUnit: "PKR 135 / Pc" }
    ],
    inStock: true,
    grade: "Yamaha OEM",
    badge: "Made in Japan"
  },
  {
    id: "honda-genuine-fuel-pump-o-ring-17572",
    name: "Honda Genuine Parts Fuel Pump O-Ring (17572-GGL-J00)",
    category: "fuel-filter-o-ring",
    categoryName: "Fuel Filter O-Rings",
    image: "/images/products/f297099c-6247-41df-9581-9a888bd5ae1b.png",
    description: "Original Honda Motor Co., Ltd. fuel pump mounting O-ring seal (17572-GGL-J00) ensuring vapor-tight fuel tank seal.",
    specs: {
      "Part Number": "17572-GGL-J00",
      "Brand": "Honda Genuine Parts",
      "Origin": "Made in Japan",
      "Application": "Honda Fuel Pump Housing Assembly"
    },
    moq: "25 Polybags",
    priceTiers: [
      { quantity: "25 - 100 Pcs", pricePerUnit: "PKR 320 / Pc" },
      { quantity: "101 - 300 Pcs", pricePerUnit: "PKR 280 / Pc" },
      { quantity: "300+ Pcs", pricePerUnit: "PKR 245 / Pc" }
    ],
    inStock: true,
    grade: "Honda OEM",
    badge: "Honda Genuine"
  }
];
