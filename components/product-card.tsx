"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { motion } from "@/lib/motion"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  rating: number
  reviewCount: number
  category: string
  tags: string[]
  isNew?: boolean
  isFeatured?: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAddingToCart(true)

    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(false)
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    }, 600)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg border bg-card overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
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
            <Button className="flex-1" size="sm" onClick={handleAddToCart} disabled={isAddingToCart}>
              {isAddingToCart ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 bg-background/80 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-medium">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-1">
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
        </div>
      </Link>
    </motion.div>
  )
}
