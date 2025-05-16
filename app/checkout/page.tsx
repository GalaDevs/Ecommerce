"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cartItems } from "@/lib/data"
import { motion } from "@/lib/motion"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      window.scrollTo(0, 0)
    } else {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        window.location.href = "/checkout/confirmation"
      }, 2000)
    }
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/cart" className="hover:text-foreground">
          Cart
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">Checkout</span>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <p className="text-muted-foreground">Complete your order</p>
      </div>

      {/* Checkout Steps */}
      <div className="flex mb-8">
        <div className="flex-1 border-t-2 border-primary pt-2">
          <p className="text-sm font-medium">1. Shipping</p>
        </div>
        <div className={`flex-1 border-t-2 pt-2 ${step >= 2 ? "border-primary" : "border-muted"}`}>
          <p className={`text-sm font-medium ${step >= 2 ? "" : "text-muted-foreground"}`}>2. Payment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input id="apartment" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                  <RadioGroup defaultValue="standard">
                    <div className="flex items-center justify-between border rounded-lg p-4 mb-2">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-normal cursor-pointer">
                          Standard Shipping (3-5 business days)
                        </Label>
                      </div>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex items-center justify-between border rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="font-normal cursor-pointer">
                          Express Shipping (1-2 business days)
                        </Label>
                      </div>
                      <span>$15.00</span>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Continue to Payment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center border rounded-lg p-4 mb-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 ml-2 font-normal cursor-pointer">
                        <CreditCard className="h-5 w-5" />
                        Credit / Debit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium mb-4">Billing Address</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="sameAsShipping" defaultChecked />
                    <Label htmlFor="sameAsShipping" className="font-normal cursor-pointer">
                      Same as shipping address
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Processing...
                    </div>
                  ) : (
                    <>
                      Complete Order
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-20 rounded-lg border bg-card p-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="max-h-80 overflow-auto space-y-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium">
                          {item.name}
                          <span className="text-muted-foreground ml-1">×{item.quantity}</span>
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
