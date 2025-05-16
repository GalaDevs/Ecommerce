import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">About Us</span>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">About ShopClick</h1>
        <p className="text-muted-foreground">Learn more about our story and mission</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2020, ShopClick started with a simple mission: to provide high-quality products at affordable
            prices with exceptional customer service. What began as a small online store has grown into a trusted
            e-commerce destination for thousands of customers worldwide.
          </p>
          <p>
            Our team is passionate about curating the best products across various categories, from electronics and
            fashion to home goods and beyond. We believe that shopping should be easy, enjoyable, and accessible to
            everyone.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
            alt="Our team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Quality</h3>
            <p>
              We carefully select each product in our catalog to ensure it meets our high standards for quality and
              durability. We stand behind everything we sell.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Affordability</h3>
            <p>
              We believe great products shouldn't break the bank. We work directly with manufacturers to offer
              competitive prices without compromising on quality.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Customer Service</h3>
            <p>
              Our dedicated support team is always ready to assist you with any questions or concerns. Your satisfaction
              is our top priority.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
            },
            {
              name: "Sarah Chen",
              role: "Head of Product",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
            },
            {
              name: "Michael Rodriguez",
              role: "Customer Experience",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
            },
            {
              name: "Emily Wilson",
              role: "Marketing Director",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment to Sustainability</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Sustainability"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4">
              At ShopClick, we're committed to reducing our environmental impact. We're working towards more sustainable
              packaging, partnering with eco-conscious brands, and implementing green practices throughout our
              operations.
            </p>
            <p>
              We believe that small changes can make a big difference, and we're constantly looking for ways to improve
              our sustainability efforts. Join us in our journey towards a greener future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
