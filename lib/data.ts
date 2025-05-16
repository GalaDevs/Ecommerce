export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    longDescription:
      "Experience premium sound quality with our wireless headphones featuring advanced noise cancellation technology. Perfect for music lovers and professionals alike.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.5,
    reviewCount: 128,
    category: "Electronics",
    tags: ["headphones", "wireless", "audio"],
    isNew: true,
    isFeatured: true,
    colors: [
      { name: "Black", hex: "#000000", selected: true },
      { name: "White", hex: "#ffffff", selected: false },
      { name: "Blue", hex: "#0000ff", selected: false },
    ],
    sizes: null,
    reviews: [
      {
        author: "John D.",
        date: "May 10, 2025",
        rating: 5,
        content:
          "These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly.",
      },
      {
        author: "Sarah M.",
        date: "April 28, 2025",
        rating: 4,
        content: "Great headphones overall. Battery life is impressive, but they're a bit heavy for long sessions.",
      },
    ],
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    description: "Comfortable office chair with lumbar support",
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1505843490701-5be5d1b31f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1505843490701-5be5d1b31f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1589364222378-4dc6c2c6dcc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.7,
    reviewCount: 95,
    category: "Furniture",
    tags: ["chair", "office", "ergonomic"],
    isFeatured: true,
    colors: [
      { name: "Black", hex: "#000000", selected: true },
      { name: "Gray", hex: "#808080", selected: false },
    ],
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.3,
    reviewCount: 210,
    category: "Electronics",
    tags: ["watch", "fitness", "smart"],
    isNew: true,
    colors: [
      { name: "Black", hex: "#000000", selected: true },
      { name: "Silver", hex: "#c0c0c0", selected: false },
      { name: "Rose Gold", hex: "#b76e79", selected: false },
    ],
  },
  {
    id: 4,
    name: "Premium Cotton T-Shirt",
    description: "Soft and comfortable 100% cotton t-shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.5,
    reviewCount: 320,
    category: "Clothing",
    tags: ["t-shirt", "cotton", "casual"],
    colors: [
      { name: "White", hex: "#ffffff", selected: true },
      { name: "Black", hex: "#000000", selected: false },
      { name: "Navy", hex: "#000080", selected: false },
      { name: "Gray", hex: "#808080", selected: false },
    ],
    sizes: [
      { name: "S", inStock: true, selected: false },
      { name: "M", inStock: true, selected: true },
      { name: "L", inStock: true, selected: false },
      { name: "XL", inStock: true, selected: false },
      { name: "XXL", inStock: false, selected: false },
    ],
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    description: "High-resolution camera for professional photography",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.8,
    reviewCount: 75,
    category: "Electronics",
    tags: ["camera", "photography", "professional"],
    isFeatured: true,
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly insulated water bottle",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.6,
    reviewCount: 180,
    category: "Kitchen",
    tags: ["bottle", "eco-friendly", "insulated"],
    colors: [
      { name: "Silver", hex: "#c0c0c0", selected: true },
      { name: "Black", hex: "#000000", selected: false },
      { name: "Blue", hex: "#0000ff", selected: false },
      { name: "Red", hex: "#ff0000", selected: false },
    ],
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    description: "Precision gaming mouse with customizable buttons",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.4,
    reviewCount: 150,
    category: "Electronics",
    tags: ["mouse", "gaming", "wireless"],
    isNew: true,
  },
  {
    id: 8,
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1517254797898-04edd251bfb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.7,
    reviewCount: 220,
    category: "Accessories",
    tags: ["wallet", "leather", "accessories"],
    colors: [
      { name: "Brown", hex: "#8b4513", selected: true },
      { name: "Black", hex: "#000000", selected: false },
    ],
  },
]

export const featuredProducts = products.filter((product) => product.isFeatured)

export const relatedProducts = products.slice(0, 4)

export const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Clothing",
    slug: "clothing",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Beauty",
    slug: "beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Books",
    slug: "books",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 7,
    name: "Toys & Games",
    slug: "toys-games",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 8,
    name: "Automotive",
    slug: "automotive",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]

export const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    quantity: 1,
    variant: "Black",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    quantity: 2,
    variant: "White / Medium",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    quantity: 1,
    variant: "Silver / 20oz",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]
