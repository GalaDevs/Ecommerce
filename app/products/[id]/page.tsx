"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products, relatedProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { useToast } from "@/hooks/use-toast"
import { motion } from "@/lib/motion"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  // Find the product by ID
  const product = products.find((p) => p.id.toString() === params.id) || products[0]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    setIsAddingToCart(true)

    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(false)
      toast({
        title: "Added to cart",
        description: `${product.name} (${quantity}) has been added to your cart.`,
      })
    }, 600)
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/products" className="hover:text-foreground">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={selectedImage}
              className="h-full w-full"
            >
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="flex gap-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                  selectedImage === index ? "ring-2 ring-primary" : "ring-1 ring-muted"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            {product.discount && (
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {/* Color Options */}
          {product.colors && (
            <div className="space-y-2">
              <span className="font-medium">Color:</span>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`h-8 w-8 rounded-full border ${
                      color.selected ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Options */}
          {product.sizes && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Size:</span>
                <button className="text-sm text-primary hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    className={`min-w-[3rem] rounded-md border px-3 py-2 text-center text-sm ${
                      size.selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : size.inStock
                          ? "border-input hover:border-primary"
                          : "border-input bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                    disabled={!size.inStock}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-2">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-r-none"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex h-10 w-14 items-center justify-center border-y border-input bg-background">
                {quantity}
              </div>
              <Button variant="outline" size="icon" onClick={incrementQuantity} className="h-10 w-10 rounded-l-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="flex gap-2 mt-4">
            <Button className="flex-1" size="lg" onClick={handleAddToCart} disabled={isAddingToCart}>
              {isAddingToCart ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Adding...
                </div>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="mt-4 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Free shipping</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Free standard shipping on orders over $50. Estimated delivery: 3-5 business days.
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-4 py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-4 py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-4 py-3"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="prose max-w-none">
              <p>
                {product.longDescription ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <ul>
                <li>Premium quality materials</li>
                <li>Ethically sourced and produced</li>
                <li>Designed for durability and comfort</li>
                <li>Perfect for everyday use</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Materials</h4>
                  <p className="text-muted-foreground">
                    {product.materials || "Premium quality materials designed for durability"}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Dimensions</h4>
                  <p className="text-muted-foreground">{product.dimensions || "H: 10cm, W: 20cm, D: 5cm"}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Care Instructions</h4>
                  <p className="text-muted-foreground">
                    {product.careInstructions || "Hand wash with cold water. Do not bleach."}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Warranty</h4>
                  <p className="text-muted-foreground">{product.warranty || "1 year limited warranty"}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              {product.reviews ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.author}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex mt-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2">{review.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium">No reviews yet</h3>
                  <p className="text-muted-foreground mt-1">Be the first to review this product</p>
                  <Button className="mt-4">Write a Review</Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
