export interface Category {
  id: string;
  name: string;
  count?: string;
  iconName?: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export const CATEGORIES: Category[] = [
  { id: "engine-oil", name: "Engine Oils", count: "45+ Products" },
  { id: "drums", name: "Engine Oil Drums (208L)", count: "18+ Varieties" },
  { id: "lubricants", name: "Industrial Lubricants", count: "30+ Items" },
  { id: "industrial-oils", name: "Hydraulic & Gear Oils", count: "25+ Products" },
  { id: "automotive", name: "Automotive Fluids", count: "20+ Items" },
  { id: "packaging", name: "Industrial Drums & Packaging", count: "12+ Services" },
  { id: "logistics", name: "Bulk Freight & Transport", count: "Nationwide" },
  { id: "other", name: "Other Wholesale Products", count: "50+ Items" },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/", active: true },
  {
    label: "WHOLESALE PRODUCTS",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { label: "Engine Oils", href: "/products?category=engine-oil", description: "Multi-grade & synthetic engine oils" },
      { label: "Engine Oil Drums", href: "/products?category=drums", description: "208L bulk steel drums" },
      { label: "Industrial Lubricants", href: "/products?category=lubricants", description: "Greases & heavy industrial lubricants" },
      { label: "Hydraulic & Gear Oils", href: "/products?category=industrial-oils", description: "High-pressure hydraulic fluids" },
      { label: "Automotive Fluids", href: "/products?category=automotive", description: "Brake fluids, coolants & ATF" },
      { label: "All Products", href: "/products", description: "Explore full B2B wholesale catalog" },
    ],
  },
  { label: "PACKAGING SERVICES", href: "/packaging" },
  { label: "DELIVERY", href: "/delivery" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export const CONTACT_INFO = {
  phoneDisplay: "+92 321 1234567",
  phoneRaw: "+923211234567",
  email: "info@rjtraders.pk",
  location: "Lahore, Pakistan",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
};
