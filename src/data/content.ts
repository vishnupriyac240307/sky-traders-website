import { Product, TradingStep, WhyChooseItem } from '../types';

export const BRAND = {
  name: "SKY Traders",
  brandIdentity: "SKY Coconuts",
  businessType: "Wholesale Coconut Trading & Export Enquiries",
  locationTitle: "SKY Traders",
  locationCity: "Udumalpet, Tamil Nadu, India",
  location: "Udumalpet, Tamil Nadu, India",
  googleMapsUrl: "https://maps.app.goo.gl/JBPsmvo38A4Dknq97?g_st=aw",
  phone: "6380849351",
  phoneDisplay: "+91 63808 49351",
  phoneTel: "tel:+916380849351",
  whatsappNumber: "916380849351",
  email: "skytraderstn@gmail.com",
  emailMailto: "mailto:skytraderstn@gmail.com",
  instagramHandle: "@sky_coconuts_",
  instagramUrl: "https://www.instagram.com/sky_coconuts_/",
  mapEmbedUrl: "https://maps.google.com/maps?q=10.626783,77.344606&hl=en&z=16&output=embed",
  mapDirectionsUrl: "https://maps.app.goo.gl/JBPsmvo38A4Dknq97?g_st=aw",
};

export const createWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsAppUrl = (productName: string) => {
  const message = `Hello SKY Traders, I would like to enquire about ${productName}. Please share the current price, availability, and minimum order quantity.`;
  return createWhatsAppUrl(message);
};

export const PRODUCTS: Product[] = [
  {
    id: "fully-husked",
    name: "Fully Husked Coconut",
    tagline: "Clean, peeled mature coconuts for high-volume commercial supply",
    description: "Fully husked coconuts suitable for wholesale trading and bulk supply.",
    image: "/assets/images/fully_husked.jpg",
    specs: [
      { label: "Grade", value: "Wholesale Commercial Grade" },
      { label: "Husk State", value: "100% Fully Husked" },
      { label: "Source", value: "Udumalpet, Tamil Nadu" },
      { label: "Packing", value: "PP Bags / Gunny Sacks" },
    ],
    packaging: "25 / 50 Pieces per bag or customized bulk packaging",
    availability: "Available Year-Round",
  },
  {
    id: "semi-husked",
    name: "Semi-Husked Coconut",
    tagline: "Natural fiber protection ideal for transit and export handling",
    description: "Semi-husked coconuts prepared for convenient handling and commercial distribution.",
    image: "/assets/images/semi_husked.jpg",
    specs: [
      { label: "Grade", value: "Export & Domestic Wholesale" },
      { label: "Husk State", value: "Semi-Husked (Eye tuft retained)" },
      { label: "Source", value: "Udumalpet, Tamil Nadu" },
      { label: "Transit Life", value: "Extended freshness for long distance" },
    ],
    packaging: "Mesh Bags / Jute Bags / Carton packing on demand",
    availability: "Fresh Daily Harvest",
  },
  {
    id: "coconut-shell",
    name: "Coconut Shell",
    tagline: "Dense, natural hard shells for industrial & carbon applications",
    description: "Coconut shells available for bulk commercial requirements and related applications.",
    image: "/assets/images/coconut_shells_bulk.jpg",
    specs: [
      { label: "Material", value: "Hard Mature Coconut Shells" },
      { label: "Condition", value: "Cleaned & Dried Halves" },
      { label: "Key Use", value: "Activated carbon, charcoal, crafts & fuel" },
      { label: "Supply Form", value: "Bulk loose or bagged" },
    ],
    packaging: "Bulk Truckloads / Tonne Bags",
    availability: "Continuous Commercial Supply",
  },
  {
    id: "copra",
    name: "Copra",
    tagline: "Sun-dried and well-cured copra for wholesale oil extraction and milling",
    description: "Copra supplied for wholesale trading and commercial requirements.",
    image: "/assets/images/copra_wholesale.jpg",
    specs: [
      { label: "Category", value: "Milling & Edible Grade" },
      { label: "Processing", value: "Naturally Sun-Dried & Cured" },
      { label: "Oil Potential", value: "High oil content yield" },
      { label: "Moisture", value: "Optimal low moisture standard" },
    ],
    packaging: "Jute bags / Jute bales / High-strength PP bags",
    availability: "Bulk Lots Ready for Dispatch",
  },
];

export const HIGHLIGHTS = [
  {
    id: "wholesale",
    title: "Wholesale Coconut Trading",
    subtitle: "Bulk Supply Specialist",
    description: "Specialized in direct wholesale volumes tailored for distributors, millers, and commercial traders.",
    icon: "PackageCheck",
  },
  {
    id: "sourcing",
    title: "Quality-Focused Sourcing",
    subtitle: "Udumalpet Coconut Belt",
    description: "Directly sourced from the fertile agricultural belt of Udumalpet, Tamil Nadu, known for rich mature coconuts.",
    icon: "ShieldCheck",
  },
  {
    id: "india-wide",
    title: "India-Wide Supply",
    subtitle: "Domestic Distribution",
    description: "Seamless logistics coordination delivering bulk coconut consignments to markets across all Indian states.",
    icon: "Truck",
  },
  {
    id: "export",
    title: "Export Enquiries Welcome",
    subtitle: "Global Trade Ready",
    description: "Equipped to handle international buyer requirements with compliant packaging and transparent communication.",
    icon: "Globe2",
  },
];

export const TRADING_STEPS: TradingStep[] = [
  {
    step: "01",
    title: "Enquiry",
    description: "Customers contact SKY Traders with their product requirements.",
    iconName: "MessageSquareText",
  },
  {
    step: "02",
    title: "Product Selection",
    description: "Discuss product type, quantity, and specifications.",
    iconName: "Boxes",
  },
  {
    step: "03",
    title: "Price Confirmation",
    description: "Confirm current market pricing and availability.",
    iconName: "CheckCircle2",
  },
  {
    step: "04",
    title: "Order Coordination",
    description: "Coordinate order details and delivery arrangements.",
    iconName: "Truck",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Multiple Coconut Product Categories",
    description: "One reliable source for Fully Husked, Semi-Husked coconuts, Copra, and Coconut Shells.",
    iconName: "Layers",
  },
  {
    title: "Wholesale-Focused Business",
    description: "Our operations are built specifically to service high-volume commercial traders and institutional buyers.",
    iconName: "Briefcase",
  },
  {
    title: "Direct Enquiry and Communication",
    description: "Speak directly with business decision-makers with zero middlemen markups and prompt WhatsApp response.",
    iconName: "MessageCircle",
  },
  {
    title: "Market-Based Pricing",
    description: "Honest, competitive pricing updated in real time according to current agricultural commodity market rates.",
    iconName: "TrendingUp",
  },
  {
    title: "Domestic and Export Enquiries",
    description: "Catering to domestic distributors across India as well as overseas import consignments.",
    iconName: "Anchor",
  },
  {
    title: "Business-Focused Customer Service",
    description: "Dedicated coordination from initial specification review until safe arrival at your destination.",
    iconName: "Handshake",
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "/assets/images/farm_udumelpet.jpg",
    caption: "Morning harvest across our coconut groves in Udumalpet, Tamil Nadu.",
    tag: "Plantation",
  },
  {
    id: 2,
    image: "/assets/images/fully_husked.jpg",
    caption: "Bulk batch of premium fully husked coconuts graded for wholesale dispatch.",
    tag: "Fully Husked",
  },
  {
    id: 3,
    image: "/assets/images/semi_husked.jpg",
    caption: "Carefully sorted semi-husked coconuts packed for safe inter-state transit.",
    tag: "Semi-Husked",
  },
  {
    id: 4,
    image: "/assets/images/copra_wholesale.jpg",
    caption: "Natural sun-cured copra halves ready for milling and commercial supply.",
    tag: "Copra",
  },
];
