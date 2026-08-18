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
  { id: "engine-oil", name: "Engine Oil", count: "120+ Grades" },
  { id: "oil-filter", name: "Oil Filter", count: "95+ Items" },
  { id: "fuel-filter", name: "Fuel Filter", count: "80+ Items" },
  { id: "air-filter", name: "Air Filter", count: "85+ Items" },
  { id: "coolant", name: "Coolant", count: "40+ Items" },
  { id: "drain-plug-washer", name: "Drain Plug Washer", count: "60+ Items" },
  { id: "oil-filter-o-ring", name: "Oil Filter O-Ring", count: "50+ Items" },
  { id: "fuel-filter-o-ring", name: "Fuel Filter O-Ring", count: "45+ Items" },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ENGINE OIL",
    href: "/products?category=engine-oil",
    hasDropdown: true,
    dropdownItems: [
      { label: "Fully Synthetic Oils", href: "/products?category=engine-oil&type=synthetic", description: "5W-30, 5W-40 premium synthetic oils" },
      { label: "Semi-Synthetic Oils", href: "/products?category=engine-oil&type=semi-synthetic", description: "10W-40 multi-grade engine oils" },
      { label: "Heavy Duty Diesel Oils", href: "/products?category=engine-oil&type=diesel", description: "15W-40 & 20W-50 fleet diesel oils" },
      { label: "208L Bulk Steel Drums", href: "/products?category=engine-oil&type=drums", description: "Wholesale factory sealed drums" },
      { label: "All Engine Oils", href: "/products?category=engine-oil", description: "Browse complete lubricant catalog" },
    ],
  },
  {
    label: "SPARE PARTS & FILTERS",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { label: "Oil Filter", href: "/products?category=oil-filter", description: "High-efficiency engine oil filters" },
      { label: "Fuel Filter", href: "/products?category=fuel-filter", description: "Heavy-duty fuel filter cartridges" },
      { label: "Air Filter", href: "/products?category=air-filter", description: "Engine air filtration systems" },
      { label: "Coolant", href: "/products?category=coolant", description: "Radiator coolant & anti-freeze jugs" },
      { label: "Washers & O-Rings", href: "/products?category=drain-plug-washer", description: "Drain plug crush washers & seal O-rings" },
      { label: "All Product Categories", href: "/products", description: "Explore complete spare parts catalog" },
    ],
  },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export const CONTACT_INFO = {
  phoneDisplay: "+92 321 1234567",
  phoneRaw: "+923211234567",
  email: "info@rjtraders.pk",
  location: "Sadiqabad, Punjab, Pakistan",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
};
