// Product data for Cutting Edge cutting boards
// This structure is ready to migrate to Sanity CMS

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  woodType: string;
  dimensions: string;
  image: string;
  featured: boolean;
  price?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'maple-stripe-classic',
    name: 'Maple Stripe Classic',
    description: 'A stunning end-grain cutting board featuring alternating maple and walnut stripes. The contrasting light and dark woods create a timeless pattern that\'s both functional and beautiful.',
    woodType: 'Maple & Walnut',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/588628923_17851574961596713_5545846370722321705_n.jpg',
    featured: true
  },
  {
    id: '2',
    slug: 'golden-oak-heritage',
    name: 'Golden Oak Heritage',
    description: 'Crafted from reclaimed oak with a rich golden hue. The natural grain patterns tell the story of the wood\'s previous life, now repurposed into a functional work of art.',
    woodType: 'Reclaimed Oak',
    dimensions: '18" x 14" x 1.5"',
    image: '/images/588807890_17851574985596713_6162083901985891365_n.jpg',
    featured: true
  },
  {
    id: '3',
    slug: 'butcher-block-natural',
    name: 'Butcher Block Natural',
    description: 'A professional-grade end-grain butcher block made from premium maple. The natural light color brightens any kitchen while providing a durable cutting surface.',
    woodType: 'Hard Maple',
    dimensions: '14" x 10" x 2"',
    image: '/images/588968650_17851574949596713_1562662601729981713_n.jpg',
    featured: false
  },
  {
    id: '4',
    slug: 'zebra-wood-artisan',
    name: 'Zebra Wood Artisan',
    description: 'An eye-catching piece featuring exotic zebra wood patterns. Each board is unique, showcasing the distinctive striped grain that gives zebra wood its name.',
    woodType: 'Zebra Wood & Maple',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/588982171_17851574994596713_7345153583418851726_n.jpg',
    featured: true
  },
  {
    id: '5',
    slug: 'cherry-walnut-duo',
    name: 'Cherry Walnut Duo',
    description: 'A beautiful combination of cherry and walnut woods. The warm reddish tones of cherry complement the deep browns of walnut for an elegant finished piece.',
    woodType: 'Cherry & Walnut',
    dimensions: '15" x 11" x 1.5"',
    image: '/images/589262188_17851574976596713_6221589937517614795_n.jpg',
    featured: false
  },
  {
    id: '6',
    slug: 'rustic-ash-farmhouse',
    name: 'Rustic Ash Farmhouse',
    description: 'Made from reclaimed ash wood with beautiful open grain. The light color and rustic character make this perfect for farmhouse-style kitchens.',
    woodType: 'Reclaimed Ash',
    dimensions: '18" x 12" x 1.5"',
    image: '/images/589413951_17851575003596713_3655773830848218999_n.jpg',
    featured: false
  },
  {
    id: '7',
    slug: 'tiger-maple-premium',
    name: 'Tiger Maple Premium',
    description: 'Featuring stunning figured tiger maple with its distinctive curly grain pattern. The natural iridescence of the wood creates a three-dimensional effect.',
    woodType: 'Figured Tiger Maple',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/589502003_17851575012596713_5656202791065524344_n.jpg',
    featured: true
  },
  {
    id: '8',
    slug: 'hickory-stripe-bold',
    name: 'Hickory Stripe Bold',
    description: 'Bold stripes of hickory and walnut create a dramatic visual impact. Hickory\'s superior hardness makes this board particularly durable.',
    woodType: 'Hickory & Walnut',
    dimensions: '17" x 13" x 1.5"',
    image: '/images/590413520_17853098370596713_3674393280182759766_n.jpg',
    featured: false
  },
  {
    id: '9',
    slug: 'padauk-accent-exotic',
    name: 'Padauk Accent Exotic',
    description: 'Features vibrant padauk wood accents with its distinctive orange-red color. Over time, the color deepens to a rich burgundy.',
    woodType: 'Padauk & Maple',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/590414989_17853098391596713_4568476711205218738_n.jpg',
    featured: false
  },
  {
    id: '10',
    slug: 'walnut-end-grain-chef',
    name: 'Walnut End Grain Chef',
    description: 'A professional chef\'s choice, this end-grain walnut board is knife-friendly and self-healing. The rich chocolate brown color darkens with use.',
    woodType: 'Black Walnut',
    dimensions: '18" x 14" x 2"',
    image: '/images/590417581_17853098358596713_1473408818609704216_n.jpg',
    featured: true
  },
  {
    id: '11',
    slug: 'spalted-maple-unique',
    name: 'Spalted Maple Unique',
    description: 'One-of-a-kind spalted maple with distinctive dark lines created by natural fungal growth. Each board has completely unique patterns.',
    woodType: 'Spalted Maple',
    dimensions: '15" x 11" x 1.5"',
    image: '/images/590417656_17853098325596713_373813147607971589_n.jpg',
    featured: false
  },
  {
    id: '12',
    slug: 'purple-heart-statement',
    name: 'Purple Heart Statement',
    description: 'A true statement piece featuring purple heart wood. The natural purple color intensifies over time when exposed to light.',
    woodType: 'Purple Heart & Maple',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/590421795_17853098403596713_421008423179701245_n.jpg',
    featured: false
  },
  {
    id: '13',
    slug: 'beech-minimalist',
    name: 'Beech Minimalist',
    description: 'Clean and simple European beech board with fine, even grain. Perfect for those who appreciate understated elegance.',
    woodType: 'European Beech',
    dimensions: '14" x 10" x 1.25"',
    image: '/images/590421799_17853098379596713_2503909432848297211_n.jpg',
    featured: false
  },
  {
    id: '14',
    slug: 'olive-wood-mediterranean',
    name: 'Olive Wood Mediterranean',
    description: 'Rare olive wood with swirling grain patterns. Each piece tells the story of centuries-old olive trees from Mediterranean regions.',
    woodType: 'Olive Wood',
    dimensions: '16" x 12" x 1.5"',
    image: '/images/601066041_17853409035596713_49030156913428367_n.jpg',
    featured: true
  },
  {
    id: '15',
    slug: 'maple-walnut-endgrain',
    name: 'Maple Walnut Endgrain',
    description: 'Classic maple and walnut end-grain construction. The checkerboard pattern showcases traditional woodworking craftsmanship.',
    woodType: 'Maple & Walnut',
    dimensions: '18" x 14" x 2"',
    image: '/images/601591607_17853409026596713_7876667387170427216_n.jpg',
    featured: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
