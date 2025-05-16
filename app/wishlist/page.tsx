"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { motion } from "@/lib/motion"

// Sample wishlist data
const initialWishlist = [
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
  },
]

export default function WishlistPage() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState(initialWishlist)
  const [isAddingToCart, setIsAddingToCart] = useState<number | null>(null)

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    })
  }

  const addToCart = (id: number) => {
    setIsAddingToCart(id)

    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(null)
      toast({
        title: "Added to cart",
        description: "The item has been added to your cart.",
      })
    }, 1000)
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">Wishlist</span>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Wishlist</h1>
        <p className="text-muted-foreground">Items you've saved for later</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative group rounded-lg border bg-card overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center text-destructive hover:bg-background"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <Link href={`/products/${item.id}`} className="block">
                  <h3 className="font-medium line-clamp-1">{item.name}</h3>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                </Link>
                <div className="mt-4">
                  <Button className="w-full" onClick={() => addToCart(item.id)} disabled={isAddingToCart === item.id}>
                    {isAddingToCart === item.id ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Heart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Items added to your wishlist will appear here. Start browsing to add items you love.
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
