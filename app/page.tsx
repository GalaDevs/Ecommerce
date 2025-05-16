import { ArrowRight, ShoppingBag, Truck, CreditCard, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { featuredProducts, categories } from "@/lib/data"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel />
        <div className="absolute inset-0 flex items-center justify-center flex-col p-4 bg-black/30 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-up">Shop the Latest Trends</h1>
          <p className="text-lg md:text-xl text-center mb-8 max-w-2xl animate-fade-up animation-delay-200">
            Discover quality products at unbeatable prices with our curated collections
          </p>
          <div className="flex gap-4 animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/products">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
            >
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="text-muted-foreground">Browse our wide selection of categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-medium text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <p className="text-muted-foreground">Our handpicked selection of products just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background shadow-sm">
              <Truck className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background shadow-sm">
              <CreditCard className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure payment</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background shadow-sm">
              <RotateCcw className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30 day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background shadow-sm">
              <ShoppingBag className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container px-4 md:px-6">
        <div className="rounded-2xl bg-primary/10 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-muted-foreground mb-0 md:mb-0">Get the latest updates, deals and exclusive offers</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-full">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
