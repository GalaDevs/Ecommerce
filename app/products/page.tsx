"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Filter, Grid, List, Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products, categories } from "@/lib/data"
import { motion } from "@/lib/motion"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [sortOption, setSortOption] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Filter by price range
    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(query))),
      )
    }

    // Sort products
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => (a.isNew ? -1 : 1))
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      // featured is default, no sorting needed
    }

    setFilteredProducts(result)
  }, [selectedCategory, priceRange, sortOption, searchQuery])

  // Update active filters
  useEffect(() => {
    const filters = []
    if (selectedCategory) {
      filters.push(selectedCategory)
    }
    if (priceRange[0] > 0 || priceRange[1] < 1500) {
      filters.push(`$${priceRange[0]} - $${priceRange[1]}`)
    }
    setActiveFilters(filters)
  }, [selectedCategory, priceRange])

  const clearFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 1500])
    setSearchQuery("")
    setSortOption("featured")
  }

  const removeFilter = (filter: string) => {
    if (filter.includes("$")) {
      setPriceRange([0, 1500])
    } else {
      setSelectedCategory(null)
    }
  }

  return (
    <div className="bg-background">
      {/* Hero section */}
      <div className="relative h-[200px] md:h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
          alt="Shop Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-lg max-w-xl text-center">
            Discover our curated collection of high-quality products for every need
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground">Shop</span>
        </div>
      </div>

      {/* Search and filter bar */}
      <div className="border-y bg-muted/30">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:min-w-[300px] lg:min-w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-9 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2 hidden md:inline">Sort by:</span>
                <select
                  className="bg-background border rounded-md px-2 py-1 text-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="hidden md:flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" size="sm" className="md:hidden" onClick={() => setIsFilterOpen(true)}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                  {filter}
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => removeFilter(filter)}>
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={clearFilters}>
                Clear all
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters - Desktop */}
          <div className="hidden lg:block w-1/4 max-w-xs">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Categories
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-1">
                  <button
                    className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${
                        selectedCategory === category.name
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Price Range
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1500]}
                    max={1500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="rounded-md border px-2 py-1 text-sm">${priceRange[0]}</div>
                    <div className="rounded-md border px-2 py-1 text-sm">${priceRange[1]}</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Rating
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-1">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
                      <label htmlFor={`rating-${rating}`} className="text-sm flex items-center cursor-pointer">
                        <div className="flex mr-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className={`h-3 w-3 ${
                                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                        & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Availability
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="in-stock" className="mr-2" />
                    <label htmlFor="in-stock" className="text-sm cursor-pointer">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="out-of-stock" className="mr-2" />
                    <label htmlFor="out-of-stock" className="text-sm cursor-pointer">
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <Button className="w-full" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile filters */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your product search with our filters</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-1">
                    <button
                      className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${
                        selectedCategory === null
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => {
                        setSelectedCategory(null)
                        setIsFilterOpen(false)
                      }}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.name)
                          setIsFilterOpen(false)
                        }}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 1500]}
                      max={1500}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex items-center justify-between">
                      <div className="rounded-md border px-2 py-1 text-sm">${priceRange[0]}</div>
                      <div className="rounded-md border px-2 py-1 text-sm">${priceRange[1]}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-sm font-medium">{filteredProducts.length} Products</span>
              </div>
              <Tabs defaultValue="all" className="hidden md:block">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="sale">On Sale</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-6 mb-4">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-medium mb-2">No products found</h2>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group relative rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Product badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                              New
                            </span>
                          )}
                          {product.discount && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800 dark:text-green-100">
                              {product.discount}% OFF
                            </span>
                          )}
                        </div>

                        {/* Quick actions */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 flex gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <Button className="flex-1" size="sm">
                            Quick View
                          </Button>
                          <Button variant="secondary" size="sm">
                            Add to Cart
                          </Button>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{product.category}</span>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              ))}
                          </div>
                        </div>
                        <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="font-medium">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group relative rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-1/4 aspect-square md:aspect-auto">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {/* Product badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                              New
                            </span>
                          )}
                          {product.discount && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800 dark:text-green-100">
                              {product.discount}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-4 md:p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs text-muted-foreground">{product.category}</span>
                              <div className="flex">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                                      }`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                              </div>
                              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                            </div>
                            <Link href={`/products/${product.id}`}>
                              <h3 className="text-lg font-medium hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="mt-2 text-muted-foreground">{product.description}</p>
                            {product.tags && (
                              <div className="mt-2 flex flex-wrap gap-1">
                                {product.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className="text-right">
                              <div className="flex items-baseline gap-2">
                                <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${product.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                              {product.discount && (
                                <span className="text-sm text-green-600 dark:text-green-400">
                                  Save ${(product.originalPrice! - product.price).toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm">
                                Quick View
                              </Button>
                              <Button size="sm">Add to Cart</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-10">
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="default" size="icon">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured categories */}
      <div className="bg-muted/30 py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category) => (
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
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <div className="rounded-2xl bg-primary/10 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
              <p className="text-muted-foreground mb-0 md:mb-0">Get the latest updates, deals and exclusive offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="md:min-w-[300px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
