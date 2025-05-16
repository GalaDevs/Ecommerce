"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { categories } from "@/lib/data"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "@/lib/motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      {/* Top Bar */}
      <div className="border-b">
        <div className="container flex h-10 items-center justify-between px-4 md:px-6">
          <p className="text-xs text-muted-foreground">Free shipping on orders over $50</p>
          <div className="flex items-center gap-4">
            <Link href="/account" className="text-xs text-muted-foreground hover:text-foreground">
              My Account
            </Link>
            <Link href="/help" className="text-xs text-muted-foreground hover:text-foreground">
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 py-2">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecom%20logo-hgSbYyTkhYzfoebQpo5i3pHTWwKmZR.png"
                  alt="ShopClick"
                  width={40}
                  height={40}
                />
                ShopClick
              </Link>
              <div className="grid gap-4">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <div className="grid gap-2">
                  <div className="font-medium">Categories</div>
                  <div className="grid gap-1 pl-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/products" className="text-lg font-medium">
                  All Products
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </div>
              <div className="mt-auto grid gap-2">
                <Button asChild>
                  <Link href="/account/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/account/register">Create Account</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecom%20logo-hgSbYyTkhYzfoebQpo5i3pHTWwKmZR.png"
            alt="ShopClick"
            width={40}
            height={40}
          />
          <span className="hidden sm:inline-block">ShopClick</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b overflow-hidden"
          >
            <div className="container px-4 md:px-6 py-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                className="flex-1 border-none shadow-none focus-visible:ring-0"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
