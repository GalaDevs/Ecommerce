import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">Help Center</span>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Find answers to common questions and get support</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  You can track your order by logging into your account and visiting the "Order History" section. There
                  you'll find all your orders and their current status. Alternatively, you can use the tracking number
                  provided in your shipping confirmation email.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for most items. Products must be in their original condition with all
                  tags and packaging intact. Some items like personalized products or intimate apparel may not be
                  eligible for return. Please visit our Returns page for more details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  Standard shipping typically takes 3-5 business days within the continental US. Express shipping
                  options are available at checkout for 1-2 business day delivery. International shipping times vary by
                  destination, usually between 7-14 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                  location. Please note that customers are responsible for any customs fees, taxes, or duties that may
                  be charged upon delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I change or cancel my order?</AccordionTrigger>
                <AccordionContent>
                  You can request changes or cancellation within 1 hour of placing your order by contacting our customer
                  service team. After this window, orders are processed for shipping and cannot be modified or canceled.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay,
                  and Google Pay. We also offer financing options through Affirm for eligible purchases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I redeem a coupon code?</AccordionTrigger>
                <AccordionContent>
                  You can apply coupon codes during checkout. After adding items to your cart, proceed to checkout and
                  you'll find a field labeled "Discount Code" or "Coupon Code" where you can enter your code before
                  completing your purchase.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Do you offer price matching?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer price matching for identical items sold by major retailers. To request a price match,
                  please contact our customer service team with proof of the competitor's current price before making
                  your purchase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground">3-5 business days</p>
                <p className="text-sm text-muted-foreground mt-1">Free on orders over $50, otherwise $4.99</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Express Shipping</h3>
                <p className="text-muted-foreground">1-2 business days</p>
                <p className="text-sm text-muted-foreground mt-1">$9.99 flat rate</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">International Shipping</h3>
                <p className="text-muted-foreground">7-14 business days</p>
                <p className="text-sm text-muted-foreground mt-1">Rates calculated at checkout</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer service team is available to assist you with any questions or concerns.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium mb-1">Contact Us</h3>
                <p className="text-sm text-muted-foreground mb-2">We're available Monday-Friday, 9am-6pm EST</p>
                <Link href="/contact" className="text-sm text-primary hover:underline inline-block">
                  Go to Contact Page
                </Link>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">We typically respond within 24 hours</p>
                <a href="mailto:support@shopclick.com" className="text-sm text-primary hover:underline inline-block">
                  support@shopclick.com
                </a>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-2">Call us for immediate assistance</p>
                <a href="tel:+15551234567" className="text-sm text-primary hover:underline inline-block">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
