"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Package, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "@/lib/motion"
import confetti from "@/lib/confetti"

export default function ConfirmationPage() {
  useEffect(() => {
    // Trigger confetti effect on page load
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="rounded-lg border p-6 mb-6 text-left">
          <div className="flex justify-between mb-4">
            <h2 className="font-medium">Order #12345</h2>
            <span className="text-sm text-muted-foreground">May 16, 2025</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Shipping</p>
                <p className="text-sm text-muted-foreground">Your order will be delivered in 3-5 business days</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Order Details</p>
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to your email address
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/account/orders">View Order</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
