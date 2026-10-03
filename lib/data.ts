export type Category = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  note: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  calories: number;
  popular?: boolean;
  accent?: string;
};

const img = (url: string) => url;

export const categories: Category[] = [
  { id: "mithai", name: "Mithai", icon: "✦", accent: "#b04a5a", note: "Classic house sweets" },
  { id: "barfi", name: "Barfi", icon: "◇", accent: "#6d7f68", note: "Milk & nut based" },
  { id: "ladoo", name: "Ladoo", icon: "●", accent: "#c9823c", note: "Hand-rolled daily" },
  { id: "halwa", name: "Halwa", icon: "◒", accent: "#9b5264", note: "Slow cooked" },
  { id: "festive", name: "Festive", icon: "✧", accent: "#a65b78", note: "Made to gift" },
  { id: "boxes", name: "Gift Boxes", icon: "▣", accent: "#7a5b70", note: "Curated collections" },
];

export const products: Product[] = [
  {
    id: "gulab-jamun",
    slug: "gulab-jamun",
    name: "Gulab Jamun",
    category: "mithai",
    price: 1500,
    oldPrice: 1650,
    rating: 4.9,
    reviews: 284,
    description: "Soft khoya dumplings soaked in warm rose-cardamom chashni, finished with pistachio.",
    ingredients: ["Khoya", "Milk", "Cardamom", "Rose", "Sugar syrup", "Pistachio"],
    image: img("https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg?width=1200"),
    badge: "HOUSE FAVOURITE",
    calories: 310,
    popular: true,
    accent: "#9a5d45",
  },
  {
    id: "kaju-katli",
    slug: "kaju-katli",
    name: "Kaju Katli",
    category: "barfi",
    price: 4200,
    rating: 4.9,
    reviews: 191,
    description: "Fine cashew fudge cut into elegant diamonds and finished with a delicate silver leaf.",
    ingredients: ["Cashew", "Sugar", "Ghee", "Silver leaf", "Cardamom"],
    image: img("https://i.pinimg.com/736x/94/22/29/9422290c442e8323245746b30eaf1564.jpg?v=1753339198&width=1600"),
    badge: "PREMIUM",
    calories: 470,
    popular: true,
    accent: "#9a825c",
  },
  {
    id: "motichoor-ladoo",
    slug: "motichoor-ladoo",
    name: "Motichoor Ladoo",
    category: "ladoo",
    price: 1500,
    rating: 4.8,
    reviews: 168,
    description: "Tiny boondi pearls folded with saffron, cardamom and ghee into soft golden ladoos.",
    ingredients: ["Gram flour", "Ghee", "Sugar", "Saffron", "Cardamom", "Pistachio"],
    image: img("https://i.pinimg.com/736x/c2/0e/d5/c20ed5077582d06806417237237b7058.jpg?width=1200"),
    badge: "FRESH DAILY",
    calories: 390,
    popular: true,
    accent: "#d59b36",
  },
  {
    id: "jalebi",
    slug: "jalebi",
    name: "Saffron Jalebi",
    category: "mithai",
    price: 850,
    rating: 4.8,
    reviews: 142,
    description: "Crisp, golden spirals cooked fresh and dipped in fragrant saffron sugar syrup.",
    ingredients: ["Flour", "Yogurt", "Saffron", "Sugar syrup", "Pistachio"],
    image: img("https://upload.wikimedia.org/wikipedia/commons/5/5c/Indian_Sweets_-_Jalebi.jpg"),
    badge: "MADE TO ORDER",
    calories: 330,
    popular: true,
    accent: "#d37d26",
  },
  {
    id: "rasmalai",
    slug: "rasmalai",
    name: "Kesar Rasmalai",
    category: "mithai",
    price: 1350,
    rating: 4.9,
    reviews: 126,
    description: "Delicate chenna discs in chilled saffron milk with cardamom, almond and pistachio.",
    ingredients: ["Milk", "Chenna", "Saffron", "Cardamom", "Almond", "Pistachio"],
    image: img("https://sendgiftstopakistan.ca/cdn/shop/files/1-dozen-12-pcs-ka-creamy-aromatic-aur-elegant-dessert-yeh-rasmalai-ka-selection-reputable-vendors-ki-taraf-se-curated-kiya-gaya-hai-jo-apni-quality-aur-consistency-ke-liye-jaane-jaat.png?v=1763944317&width=1600"),
    badge: "CHILLED",
    calories: 280,
    popular: true,
    accent: "#b9a66b",
  },
  {
    id: "silver-barfi",
    slug: "silver-barfi",
    name: "Pistachio Barfi",
    category: "barfi",
    price: 2200,
    rating: 4.8,
    reviews: 97,
    description: "Creamy milk barfi layered with pistachio and finished with edible silver leaf.",
    ingredients: ["Milk solids", "Pistachio", "Sugar", "Ghee", "Silver leaf"],
    image: img("https://www.paramparamithai.com/cdn/shop/files/DSC08891.png?v=1747919690&width=1600"),
    badge: "GIFTING PICK",
    calories: 430,
    popular: true,
    accent: "#82906f",
  },
  {
    id: "sohan-halwa",
    slug: "sohan-halwa",
    name: "Sohan Halwa",
    category: "halwa",
    price: 1900,
    rating: 4.7,
    reviews: 83,
    description: "Dense, glossy wheat halwa slow-cooked with ghee, saffron and roasted nuts.",
    ingredients: ["Wheat starch", "Ghee", "Sugar", "Saffron", "Almond", "Pistachio"],
    image: img("https://i.pinimg.com/736x/a7/50/bb/a750bb1e7558ff66a1a9248758fb6f80.jpg?width=1200"),
    badge: "TRADITIONAL",
    calories: 450,
    accent: "#8f5e43",
  },
  {
    id: "besan-ladoo",
    slug: "besan-ladoo",
    name: "Besan Ladoo",
    category: "ladoo",
    price: 1450,
    rating: 4.8,
    reviews: 104,
    description: "Nutty gram-flour ladoos patiently roasted in desi ghee with cardamom and pistachio.",
    ingredients: ["Gram flour", "Desi ghee", "Sugar", "Cardamom", "Pistachio"],
    image: img("https://i.pinimg.com/736x/30/bb/ae/30bbaeb0d325c0b34a81697c4f80fded.jpg?width=1200"),
    badge: "CLASSIC",
    calories: 410,
    accent: "#c28b3c",
  },
  {
    id: "assorted-box",
    slug: "signature-assorted-box",
    name: "Signature Assorted Box",
    category: "boxes",
    price: 3500,
    oldPrice: 3900,
    rating: 5.0,
    reviews: 76,
    description: "A curated box of our most-loved mithai, arranged for gifting, hosting and celebrations.",
    ingredients: ["Kaju katli", "Barfi", "Ladoo", "Gulab jamun", "Seasonal mithai"],
    image: img("https://www.paramparamithai.com/cdn/shop/files/DSC08891.png?v=1747919690&width=1600"),
    badge: "SIGNATURE BOX",
    calories: 420,
    popular: true,
    accent: "#765d48",
  },
  {
    id: "gajar-halwa",
    slug: "gajar-halwa",
    name: "Gajar Halwa",
    category: "halwa",
    price: 1700,
    rating: 4.8,
    reviews: 89,
    description: "Slow-cooked winter carrots with milk, khoya, cardamom, ghee and toasted nuts.",
    ingredients: ["Carrot", "Milk", "Khoya", "Ghee", "Cardamom", "Almond"],
    image: img("https://i.pinimg.com/736x/84/9d/28/849d28ce9242a9b1f76afce137482e7b.jpg"),
    badge: "SEASONAL",
    calories: 360,
    accent: "#c87538",
  },
  {
    id: "rasgulla",
    slug: "rasgulla",
    name: "Classic Rasgulla",
    category: "mithai",
    price: 1200,
    rating: 4.7,
    reviews: 61,
    description: "Light, springy chenna balls served in a clean, delicately scented sugar syrup.",
    ingredients: ["Milk", "Chenna", "Sugar", "Cardamom"],
    image: img("https://i.pinimg.com/736x/31/fb/61/31fb61d23d041061c567d304d80b36b2.jpg"),
    badge: "LIGHT & SOFT",
    calories: 250,
    accent: "#c5b58d",
  },
];

export const offers = [
  { code: "NIRAALA10", title: "10% OFF", sub: "On orders above Rs. 2,000", label: "WELCOME DROP" },
  { code: "GIFT15", title: "GIFT READY", sub: "Free premium message card with gift boxes", label: "GIFTING" },
  { code: "FAMILYBOX", title: "FAMILY BOX", sub: "Curated assortment for your next dawat", label: "HOUSE SPECIAL" },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
