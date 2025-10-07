export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  description: string;
  materials: string[];
  fitStyle: string[];
  images: string[];
  sizes: string[];
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Stylish Three Piece Suit for Boys",
    brand: "Askkart Kids",
    category: "Boys Clothing",
    price: "₹1,895",
    description: "Premium quality three-piece suit perfect for special occasions. Features a matching jacket, vest, and trousers crafted from soft, breathable fabric for all-day comfort.",
    materials: [
      "95% polyester, 5% elastane",
      "Lining: 100% polyester (soft & smooth)",
      "Machine wash (30°C)",
    ],
    fitStyle: [
      "Regular fit",
      "Button closure",
      "Available in sizes 4-12 years",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["4 year", "5 year", "6 year", "7 year", "8 year", "10 year", "12 year"],
    relatedProducts: ["2", "3"],
  },
  {
    id: "2",
    name: "Stylish 3-Piece Boys Suit Set",
    brand: "Askkart Kids",
    category: "Boys Clothing",
    price: "₹2,045",
    description: "Elegant three-piece suit set designed for your little gentleman. This sophisticated ensemble includes a tailored jacket, matching vest, and perfectly fitted trousers.",
    materials: [
      "92% cotton, 8% elastane",
      "Lining: 100% polyester",
      "Machine wash (30°C)",
    ],
    fitStyle: [
      "Slim fit",
      "Adjustable waist",
      "Premium quality fabric",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["4 year", "5 year", "6 year", "7 year", "8 year", "10 year", "12 year"],
    relatedProducts: ["1", "3"],
  },
  {
    id: "3",
    name: "Boys Stylish Waistcoat Bow Tie Party Wear Set",
    brand: "Askkart Kids",
    category: "Boys Clothing",
    price: "₹2,195",
    description: "Make your little one the star of every party with this stylish waistcoat and bow tie set. Features a sophisticated waistcoat with a matching bow tie for a complete party-ready look.",
    materials: [
      "90% polyester, 10% cotton blend",
      "Bow tie: 100% polyester",
      "Hand wash recommended",
    ],
    fitStyle: [
      "Regular fit",
      "Adjustable bow tie",
      "Perfect for parties and celebrations",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["4 year", "5 year", "6 year", "7 year", "8 year", "10 year", "12 year"],
    relatedProducts: ["1", "2"],
  },
  {
    id: "4",
    name: "Boys Casual Jacket Set",
    brand: "Askkart Kids",
    category: "Boys Clothing",
    price: "₹1,895",
    description: "Comfortable casual jacket set perfect for everyday wear. Features a trendy jacket paired with matching trousers for a coordinated, effortless look.",
    materials: [
      "88% cotton, 12% polyester",
      "Machine wash (40°C)",
      "Soft and comfortable",
    ],
    fitStyle: [
      "Relaxed fit",
      "Zippered closure",
      "Suitable for daily wear",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["4 year", "5 year", "6 year", "7 year", "8 year", "10 year", "12 year"],
    relatedProducts: ["1", "2"],
  },
  {
    id: "5",
    name: "Soft Plush Multicolor Ball for Kids",
    brand: "Askkart Toys",
    category: "Toys",
    price: "₹395",
    description: "Soft and colorful plush ball perfect for toddlers and young children. Made with safe, non-toxic materials, this lightweight ball is ideal for indoor and outdoor play.",
    materials: [
      "100% soft plush polyester",
      "Non-toxic filling",
      "Surface washable",
    ],
    fitStyle: [
      "Diameter: 15cm",
      "Lightweight and easy to grip",
      "Suitable for ages 1+",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["One Size"],
    relatedProducts: ["6", "7"],
  },
  {
    id: "6",
    name: "Classic Yellow Pooh Plush Toy",
    brand: "Askkart Toys",
    category: "Toys",
    price: "₹395",
    description: "Adorable classic yellow plush toy that brings joy and comfort to children. Soft, cuddly, and perfect for bedtime or playtime companionship.",
    materials: [
      "100% soft plush polyester",
      "Hypoallergenic filling",
      "Machine washable",
    ],
    fitStyle: [
      "Height: 30cm",
      "Super soft and huggable",
      "Safe for all ages",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["One Size"],
    relatedProducts: ["5", "8"],
  },
  {
    id: "7",
    name: "Interactive Learning Tablet for Kids",
    brand: "Askkart Toys",
    category: "Toys",
    price: "₹695",
    description: "Educational tablet designed for young learners. Features interactive games, songs, and learning activities to help develop cognitive skills while having fun.",
    materials: [
      "Durable plastic construction",
      "Battery operated (included)",
      "Wipe clean with damp cloth",
    ],
    fitStyle: [
      "Size: 20cm x 15cm",
      "Volume control",
      "Recommended for ages 3+",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["One Size"],
    relatedProducts: ["5", "6"],
  },
  {
    id: "8",
    name: "Colorful Building Blocks Set",
    brand: "Askkart Toys",
    category: "Toys",
    price: "₹595",
    description: "Vibrant building blocks set that encourages creativity and motor skill development. Includes 50+ pieces in various shapes and colors for endless building possibilities.",
    materials: [
      "BPA-free plastic",
      "Non-toxic and safe",
      "Easy to clean",
    ],
    fitStyle: [
      "50+ pieces included",
      "Compatible with standard blocks",
      "Ages 3 and up",
    ],
    images: ["/product.webp", "/product.webp", "/product.webp", "/product.webp", "/product.webp"],
    sizes: ["One Size"],
    relatedProducts: ["5", "7"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(productIds: string[]): Product[] {
  return products.filter((product) => productIds.includes(product.id));
}
