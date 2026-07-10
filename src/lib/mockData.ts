export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  categoryId: string;
  categoryName: string;
  subCategoryId?: string;
  subCategoryName?: string;
  stock: number;
  size: string;
  condition: string;
  brand: string;
  isFeatured: boolean;
  isTrending: boolean;
  rating: number;
  reviews: Review[];
  createdAt: string;
  gender: "Men" | "Women";
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

export const CATEGORIES: Category[] = [
  { id: "men", name: "Men", slug: "men" },
  { id: "women", name: "Women", slug: "women" },
  { id: "rare-finds", name: "Rare Finds", slug: "rare-finds" }
];

export const SUBCATEGORIES: Subcategory[] = [
  // Men's Subcategories
  { id: "sub-men-tshirts-tops", name: "T-Shirts & Tops", slug: "men-t-shirts-tops", categoryId: "men" },
  { id: "sub-men-shirts", name: "Shirts", slug: "men-shirts", categoryId: "men" },
  { id: "sub-men-summer-knits", name: "Summer Knits", slug: "men-summer-knits", categoryId: "men" },
  { id: "sub-men-jeans", name: "Jeans", slug: "men-jeans", categoryId: "men" },
  { id: "sub-men-trousers", name: "Trousers", slug: "men-trousers", categoryId: "men" },
  { id: "sub-men-shorts", name: "Shorts", slug: "men-shorts", categoryId: "men" },
  { id: "sub-men-basics", name: "Basics", slug: "men-basics", categoryId: "men" },
  { id: "sub-men-polos", name: "Polos", slug: "men-polos", categoryId: "men" },
  { id: "sub-men-jackets-coats", name: "Jackets & Coats", slug: "men-jackets-coats", categoryId: "men" },
  { id: "sub-men-hoodies-sweatshirts", name: "Hoodies & Sweatshirts", slug: "men-hoodies-sweatshirts", categoryId: "men" },
  { id: "sub-men-sweaters-cardigans", name: "Sweaters & Cardigans", slug: "men-sweaters-cardigans", categoryId: "men" },
  { id: "sub-men-blazers-suits", name: "Blazers & Suits", slug: "men-blazers-suits", categoryId: "men" },
  { id: "sub-men-sweatpants", name: "Sweatpants", slug: "men-sweatpants", categoryId: "men" },

  // Women's Subcategories
  { id: "sub-women-tops", name: "Tops", slug: "women-tops", categoryId: "women" },
  { id: "sub-women-dresses", name: "Dresses", slug: "women-dresses", categoryId: "women" },
  { id: "sub-women-shirts-blouses", name: "Shirts & Blouses", slug: "women-shirts-blouses", categoryId: "women" },
  { id: "sub-women-jeans", name: "Jeans", slug: "women-jeans", categoryId: "women" },
  { id: "sub-women-trousers", name: "Trousers", slug: "women-trousers", categoryId: "women" },
  { id: "sub-women-basics", name: "Basics", slug: "women-basics", categoryId: "women" },
  { id: "sub-women-skirts", name: "Skirts", slug: "women-skirts", categoryId: "women" },
  { id: "sub-women-shorts", name: "Shorts", slug: "women-shorts", categoryId: "women" },
  { id: "sub-women-jackets-coats", name: "Jackets & Coats", slug: "women-jackets-coats", categoryId: "women" },
  { id: "sub-women-sweaters-cardigans", name: "Sweaters & Cardigans", slug: "women-sweaters-cardigans", categoryId: "women" },
  { id: "sub-women-sweatshirts-hoodies", name: "Sweatshirts & Hoodies", slug: "women-sweatshirts-hoodies", categoryId: "women" },
  { id: "sub-women-blazers-waistcoats", name: "Blazers & Waistcoats", slug: "women-blazers-waistcoats", categoryId: "women" },
  { id: "sub-women-jumpsuits", name: "Jumpsuits", slug: "women-jumpsuits", categoryId: "women" },
  { id: "sub-women-knitwear", name: "Knitwear", slug: "women-knitwear", categoryId: "women" },

  // Rare Finds Subcategories
  { id: "sub-rare-grails", name: "Grails", slug: "rare-grails", categoryId: "rare-finds" },
  { id: "sub-rare-vintage", name: "Vintage Pieces", slug: "rare-vintage", categoryId: "rare-finds" }
];

export const MOCK_PRODUCTS: Product[] = [
  // ── RARE FINDS ──────────────────────────────────────────────────
  {
    id: "prod-1",
    name: "Lunar Luxe Velvet Trench",
    description: "A statement-making floor-length trench crafted from deep midnight velvet. Oversized structured shoulders, silver crescent moon engraved buttons, and a draped open back. A once-in-a-collection Lunar Luxe signature piece.",
    price: 385,
    imageUrls: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80"
    ],
    categoryId: "rare-finds",
    categoryName: "Rare Finds",
    subCategoryId: "sub-rare-grails",
    subCategoryName: "Grails",
    stock: 1,
    size: "S, M, L, XL",
    condition: "9.5/10 (Near Mint)",
    brand: "Lunar Luxe Archive",
    isFeatured: true,
    isTrending: true,
    rating: 5.0,
    reviews: [
      { id: "rev-1", userName: "Aiden K.", rating: 5, comment: "Otherworldly quality. The velvet drape is unlike anything I've ever worn.", createdAt: "2026-05-10" }
    ],
    createdAt: "2026-04-01",
    gender: "Women"
  },
  {
    id: "prod-2",
    name: "Luxe Nova Archive Leather Jacket",
    description: "Hand-finished Italian lambskin leather moto jacket from the Lunar Luxe Nova collection. Asymmetric zip, crescent moon quilting on the sleeves, and a satin Luxe-crest lining inside.",
    price: 460,
    imageUrls: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
    ],
    categoryId: "rare-finds",
    categoryName: "Rare Finds",
    subCategoryId: "sub-rare-grails",
    subCategoryName: "Grails",
    stock: 1,
    size: "S, M, L",
    condition: "9/10 (Excellent)",
    brand: "Lunar Luxe Nova",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [
      { id: "rev-2", userName: "Marcus D.", rating: 5, comment: "The leather is butter-soft and the lining is unreal. A true collector piece.", createdAt: "2026-05-15" }
    ],
    createdAt: "2026-04-05",
    gender: "Men"
  },
  {
    id: "prod-3",
    name: "Crescent Dusk Vintage Fur Coat",
    description: "Archival 90s faux-fur statement coat in warm ivory-cream tones. Double-breasted silhouette, wide lapels, and a Lunar Luxe 'Crescent' foil stamp on the inner pocket. A rare grail-tier vintage find.",
    price: 320,
    imageUrls: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    categoryId: "rare-finds",
    categoryName: "Rare Finds",
    subCategoryId: "sub-rare-vintage",
    subCategoryName: "Vintage Pieces",
    stock: 1,
    size: "XS, S, M",
    condition: "8.5/10 (Light Vintage Wear)",
    brand: "Lunar Luxe Vintage",
    isFeatured: true,
    isTrending: false,
    rating: 4.8,
    reviews: [],
    createdAt: "2026-04-10",
    gender: "Women"
  },

  // ── MEN ─────────────────────────────────────────────────────────
  {
    id: "prod-4",
    name: "Lunar Eclipse Oversized Hoodie",
    description: "720GSM double-faced French terry hoodie in washed obsidian black. Embroidered 'LUNAR LUXE' arc text above a crescent moon graphic on the chest. Dropped shoulders, kangaroo pocket, and ribbed cuffs.",
    price: 175,
    imageUrls: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-hoodies-sweatshirts",
    subCategoryName: "Hoodies & Sweatshirts",
    stock: 4,
    size: "XS, S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [
      { id: "rev-4", userName: "Devon M.", rating: 5, comment: "Heaviest hoodie I own. The graphic is printed perfectly. Worth every penny.", createdAt: "2026-05-20" }
    ],
    createdAt: "2026-04-15",
    gender: "Men"
  },
  {
    id: "prod-5",
    name: "Luxe Moonrise Cargo Trousers",
    description: "Wide-leg technical cargo trousers in washed slate grey. Six utility pockets with matte Lunar Luxe zipper pulls, adjustable ankle drawstring, and reflective crescent moon tab detail on the left knee.",
    price: 220,
    imageUrls: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-trousers",
    subCategoryName: "Trousers",
    stock: 3,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-04-20",
    gender: "Men"
  },
  {
    id: "prod-6",
    name: "Nova Luxe Washed Graphic Tee",
    description: "Boxy 230GSM heavyweight cotton tee with a distressed 'NOVA LUXE' sun-faded screen print across the back. Raw hem, pigment-dyed in charcoal, and finished with a crescent logo on the left sleeve.",
    price: 72,
    imageUrls: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-tshirts-tops",
    subCategoryName: "T-Shirts & Tops",
    stock: 6,
    size: "XS, S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.6,
    reviews: [
      { id: "rev-6", userName: "Jake R.", rating: 5, comment: "The perfect weight tee. Drapes exactly right.", createdAt: "2026-05-28" }
    ],
    createdAt: "2026-04-22",
    gender: "Men"
  },
  {
    id: "prod-7",
    name: "Lunar Solstice Knit Cardigan",
    description: "Open-front chunky ribbed cardigan in warm sand beige. Oversized drape silhouette with crescent moon embossed coconut shell buttons and 'LUNAR LUXE' woven label at the inner collar.",
    price: 148,
    imageUrls: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-sweaters-cardigans",
    subCategoryName: "Sweaters & Cardigans",
    stock: 3,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.5,
    reviews: [],
    createdAt: "2026-04-28",
    gender: "Men"
  },
  {
    id: "prod-8",
    name: "Luxe Orbit Denim Jacket",
    description: "Reworked vintage denim trucker jacket overdyed in deep midnight indigo. Custom hand-embroidered crescent moons across the back yoke, tonal 'LUXE' lettering, and Lunar Luxe woven patch on the chest.",
    price: 195,
    imageUrls: [
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-jackets-coats",
    subCategoryName: "Jackets & Coats",
    stock: 2,
    size: "S, M, L",
    condition: "9/10 (Excellent)",
    brand: "Lunar Luxe Rework",
    isFeatured: true,
    isTrending: true,
    rating: 4.8,
    reviews: [
      { id: "rev-8", userName: "Sam W.", rating: 5, comment: "The embroidery is incredibly detailed. Absolute head-turner.", createdAt: "2026-06-01" }
    ],
    createdAt: "2026-05-05",
    gender: "Men"
  },
  {
    id: "prod-9",
    name: "Lunar Luxe Relaxed Linen Shirt",
    description: "Loose-fit resort linen shirt in natural off-white. Cuban collar, pearlescent crescent moon buttons, and a subtle 'Lunar Luxe' tonal jacquard stripe running through the fabric.",
    price: 95,
    imageUrls: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-shirts",
    subCategoryName: "Shirts",
    stock: 4,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.5,
    reviews: [],
    createdAt: "2026-05-10",
    gender: "Men"
  },

  // ── WOMEN ────────────────────────────────────────────────────────
  {
    id: "prod-10",
    name: "Luna Luxe Moon Knit Dress",
    description: "Floor-length ribbed knit dress in deep plum with a sheer crescent moon lace panel at the chest. Fitted silhouette, open back with criss-cross Lunar Luxe branding tie detail, and subtle sparkle weave.",
    price: 210,
    imageUrls: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-dresses",
    subCategoryName: "Dresses",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [
      { id: "rev-10", userName: "Priya S.", rating: 5, comment: "Stopped at a gallery opening by three people asking where it's from. Obsessed.", createdAt: "2026-06-05" }
    ],
    createdAt: "2026-05-01",
    gender: "Women"
  },
  {
    id: "prod-11",
    name: "Celestia Luxe Corset Top",
    description: "Boned satin corset in ivory white with silver crescent moon embroidery across the cups and front busk. Lace-up back, adjustable suspender loops, and a Lunar Luxe 'Celestia' woven label at the waist.",
    price: 130,
    imageUrls: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b04a9?w=600&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-tops",
    subCategoryName: "Tops",
    stock: 2,
    size: "XS, S, M",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.8,
    reviews: [
      { id: "rev-11", userName: "Mia L.", rating: 5, comment: "The embroidery is so delicate. Fits perfectly and feels premium.", createdAt: "2026-06-08" }
    ],
    createdAt: "2026-05-08",
    gender: "Women"
  },
  {
    id: "prod-12",
    name: "Lunar Tide Wide-Leg Trousers",
    description: "High-waisted wide-leg trousers in flowing pearl-white crepe. Crescent fold pleat at the front, invisible side zip, and a tone-on-tone 'LUNAR LUXE' woven waistband tape.",
    price: 155,
    imageUrls: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80",
      "https://images.unsplash.com/photo-1594938374182-a47f82ee9ba9?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-trousers",
    subCategoryName: "Trousers",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-05-12",
    gender: "Women"
  },
  {
    id: "prod-13",
    name: "Eclipse Luxe Blazer",
    description: "Oversized double-breasted blazer in noir black Italian wool-blend. Peak lapels with a crescent moon pin at the left lapel, gunmetal Lunar Luxe buttons, and fully lined in eclipse-print jacquard.",
    price: 265,
    imageUrls: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-blazers-waistcoats",
    subCategoryName: "Blazers & Waistcoats",
    stock: 2,
    size: "S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [
      { id: "rev-13", userName: "Sofia R.", rating: 5, comment: "Absolute power blazer. The lining alone is worth the price.", createdAt: "2026-06-10" }
    ],
    createdAt: "2026-05-18",
    gender: "Women"
  },
  {
    id: "prod-14",
    name: "Luna Drift Slip Dress",
    description: "Bias-cut silk-touch slip dress in dusty silver-grey. Asymmetric hemline, adjustable crescent moon clasp straps, and a subtle tone-on-tone 'LUNA LUXE' embossed monogram at the back neckline.",
    price: 118,
    imageUrls: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-dresses",
    subCategoryName: "Dresses",
    stock: 4,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-05-22",
    gender: "Women"
  },
  {
    id: "prod-15",
    name: "Luxe Phase Hooded Sweatshirt",
    description: "Oversized crop hoodie in soft lilac with a large 'LUXE PHASE' moon cycle graphic printed across the chest. Ribbed hem, printed Lunar Luxe wordmark on the hood, and contrast moon-white drawcords.",
    price: 112,
    imageUrls: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-sweatshirts-hoodies",
    subCategoryName: "Sweatshirts & Hoodies",
    stock: 5,
    size: "XS, S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.6,
    reviews: [],
    createdAt: "2026-05-25",
    gender: "Women"
  },
  {
    id: "prod-16",
    name: "Moonrise Luxe Maxi Skirt",
    description: "Flowy satin maxi skirt in deep midnight blue. Crescent moon foil-print scattered across the fabric, elastic waistband with a Lunar Luxe branding tape, and a high front slit with crescent clasp closure.",
    price: 138,
    imageUrls: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-skirts",
    subCategoryName: "Skirts",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.5,
    reviews: [],
    createdAt: "2026-06-01",
    gender: "Women"
  },
  {
    id: "prod-17",
    name: "Lunar Aura Knitwear Sweater",
    description: "Intarsia-knit chunky sweater with a large waxing-moon graphic knitted in cream against midnight navy. Boxy relaxed fit, wide ribbed hem, and 'LUNAR LUXE AURA' spelled out in tonal yarn below the graphic.",
    price: 185,
    imageUrls: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-knitwear",
    subCategoryName: "Knitwear",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 5.0,
    reviews: [
      { id: "rev-17", userName: "Lucas V.", rating: 5, comment: "The knit is so unique. Got 4 compliments the first time I wore it.", createdAt: "2026-06-12" }
    ],
    createdAt: "2026-06-05",
    gender: "Women"
  },
  {
    id: "prod-18",
    name: "Luxe Nocturne Jumpsuit",
    description: "Tailored wide-leg jumpsuit in matte black crepe with a plunging V-neck and a crescent moon cut-out at the lower back. Cinched waist with a Lunar Luxe branded matte gold belt buckle. Red-carpet archive energy.",
    price: 248,
    imageUrls: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-jumpsuits",
    subCategoryName: "Jumpsuits",
    stock: 2,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [
      { id: "rev-18", userName: "Oliver Z.", rating: 5, comment: "Wore this to a gala. Genuinely the most elegant piece I've ever owned.", createdAt: "2026-06-15" }
    ],
    createdAt: "2026-06-08",
    gender: "Women"
  },
  {
    id: "prod-19",
    name: "Lunar Solstice Summer Knit Tee",
    description: "Lightweight and breathable open-knit shirt in a soft ecru shade. Crafted from premium organic cotton for breezy summer evenings under the moon.",
    price: 115,
    imageUrls: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-summer-knits",
    subCategoryName: "Summer Knits",
    stock: 4,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.6,
    reviews: [],
    createdAt: "2026-06-09",
    gender: "Men"
  },
  {
    id: "prod-20",
    name: "Luxe Crescent Distressed Jeans",
    description: "Slim-fit vintage-washed blue denim featuring subtle hand-distressed detailing, custom branded silver rivets, and a crescent moon embroidered on the back pocket.",
    price: 185,
    imageUrls: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-jeans",
    subCategoryName: "Jeans",
    stock: 3,
    size: "M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: [],
    createdAt: "2026-06-10",
    gender: "Men"
  },
  {
    id: "prod-21",
    name: "Eclipse Luxe Cargo Shorts",
    description: "Relaxed-fit utility shorts in obsidian black cotton twill. Featuring deep cargo pockets and an adjustable waistband with custom Lunar Luxe hardware.",
    price: 95,
    imageUrls: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-shorts",
    subCategoryName: "Shorts",
    stock: 5,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.5,
    reviews: [],
    createdAt: "2026-06-11",
    gender: "Men"
  },
  {
    id: "prod-22",
    name: "Lunar Essential Organic Tee",
    description: "An everyday wardrobe staple. Super-soft supima cotton crewneck tee in lunar grey, featuring a clean minimalist silhouette.",
    price: 55,
    imageUrls: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-basics",
    subCategoryName: "Basics",
    stock: 8,
    size: "XS, S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-06-12",
    gender: "Men"
  },
  {
    id: "prod-23",
    name: "Luxe Orbit Knit Polo",
    description: "Vintage-inspired knit polo shirt with a flat collar and three crescent-engraved buttons. Rich navy hue with micro-stripe pattern.",
    price: 125,
    imageUrls: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-polos",
    subCategoryName: "Polos",
    stock: 4,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.6,
    reviews: [],
    createdAt: "2026-06-13",
    gender: "Men"
  },
  {
    id: "prod-24",
    name: "Nocturne Luxe Wool Blazer",
    description: "Sharp tailored suit blazer in charcoal grey wool. Complete with a subtle jacquard lining representing the star-studded night sky.",
    price: 295,
    imageUrls: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-blazers-suits",
    subCategoryName: "Blazers & Suits",
    stock: 2,
    size: "M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [],
    createdAt: "2026-06-14",
    gender: "Men"
  },
  {
    id: "prod-25",
    name: "Luna Eclipse Heavy Sweatpants",
    description: "Ultra-heavyweight French terry sweatpants in washed sand. Elasticated cuffs and a tonal 'Luna Luxe' embroidered logo on the thigh.",
    price: 135,
    imageUrls: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80"
    ],
    categoryId: "men",
    categoryName: "Men",
    subCategoryId: "sub-men-sweatpants",
    subCategoryName: "Sweatpants",
    stock: 3,
    size: "S, M, L, XL",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-06-15",
    gender: "Men"
  },
  {
    id: "prod-26",
    name: "Lunar Phase Silk Blouse",
    description: "Elegantly draped 100% pure silk blouse in celestial white. Features a hidden placket, elegant tie-neck, and delicate mother-of-pearl buttons.",
    price: 165,
    imageUrls: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b04a9?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-shirts-blouses",
    subCategoryName: "Shirts & Blouses",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: [],
    createdAt: "2026-06-16",
    gender: "Women"
  },
  {
    id: "prod-27",
    name: "Luxe Nova High-Waist Jeans",
    description: "Classic high-rise straight leg jeans in a midnight indigo wash. Hugs the waist perfectly and features custom crescent stitching details.",
    price: 175,
    imageUrls: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-jeans",
    subCategoryName: "Jeans",
    stock: 4,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.6,
    reviews: [],
    createdAt: "2026-06-17",
    gender: "Women"
  },
  {
    id: "prod-28",
    name: "Lunar Essential Ribbed Tank",
    description: "Super soft organic cotton-modal ribbed tank top in a rich espresso brown. Designed with a flattering scoop neck and modern minimalist fit.",
    price: 48,
    imageUrls: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-basics",
    subCategoryName: "Basics",
    stock: 6,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.7,
    reviews: [],
    createdAt: "2026-06-18",
    gender: "Women"
  },
  {
    id: "prod-29",
    name: "Eclipse Satin Tailored Shorts",
    description: "High-waisted tailored shorts in a heavy double-faced satin. Complete with structured pleats, side pockets, and an elegant matching belt.",
    price: 110,
    imageUrls: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-shorts",
    subCategoryName: "Shorts",
    stock: 5,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: false,
    rating: 4.5,
    reviews: [],
    createdAt: "2026-06-19",
    gender: "Women"
  },
  {
    id: "prod-30",
    name: "Crescent Aurora Cropped Trench",
    description: "A modern cropped silhouette trench coat in classic sand. Featuring oversized storm flaps, double-breasted closure, and a sleek satin lining.",
    price: 245,
    imageUrls: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-jackets-coats",
    subCategoryName: "Jackets & Coats",
    stock: 2,
    size: "S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: true,
    isTrending: true,
    rating: 4.9,
    reviews: [],
    createdAt: "2026-06-20",
    gender: "Women"
  },
  {
    id: "prod-31",
    name: "Lunar Eclipse Cashmere Cardigan",
    description: "Luxuriously soft 100% Mongolian cashmere knit cardigan in a delicate lavender grey. Features an open front and beautiful drape.",
    price: 220,
    imageUrls: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
    ],
    categoryId: "women",
    categoryName: "Women",
    subCategoryId: "sub-women-sweaters-cardigans",
    subCategoryName: "Sweaters & Cardigans",
    stock: 3,
    size: "XS, S, M, L",
    condition: "New",
    brand: "Lunar Luxe Custom",
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: [],
    createdAt: "2026-06-20",
    gender: "Women"
  }
];

export const MOCK_ORDERS = [
  {
    id: "ord-88392",
    date: "2026-05-20",
    total: 385,
    status: "PAID",
    address: {
      street: "303 Eclipse Avenue, Suite A",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      country: "United States"
    },
    coupon: null,
    items: [
      { productId: "prod-1", name: "Lunar Luxe Velvet Trench", quantity: 1, price: 385, size: "M", imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" }
    ],
    customerName: "Lila Moon",
    email: "lila@lunarluxe.com"
  },
  {
    id: "ord-77491",
    date: "2026-05-22",
    total: 175,
    status: "DELIVERED",
    address: {
      street: "303 Eclipse Avenue, Suite A",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      country: "United States"
    },
    coupon: null,
    items: [
      { productId: "prod-4", name: "Lunar Eclipse Oversized Hoodie", quantity: 1, price: 175, size: "L", imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80" }
    ],
    customerName: "Lila Moon",
    email: "lila@lunarluxe.com"
  }
];

export const MOCK_COUPONS = [
  { code: "LUNAR15", discount: 15 },
  { code: "LUXE20", discount: 20 },
  { code: "ECLIPSE10", discount: 10 }
];

export const MOCK_ADDRESS = {
  street: "303 Eclipse Avenue, Suite A",
  city: "Seattle",
  state: "WA",
  zip: "98101",
  country: "United States"
};
