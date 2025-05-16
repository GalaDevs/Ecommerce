"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Package, Settings, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"

// Sample order data
const orders = [
  {
    id: "ORD-12345",
    date: "May 15, 2025",
    status: "Delivered",
    total: 249.98,
    items: [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: 6,
        name: "Stainless Steel Water Bottle",
        price: 24.99,
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
  },
  {
    id: "ORD-12344",
    date: "May 2, 2025",
    status: "Delivered",
    total: 1349.98,
    items: [
      {
        id: 5,
        name: "Professional DSLR Camera",
        price: 1299.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: 8,
        name: "Leather Wallet",
        price: 49.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
  },
]

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders")

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">My Account</span>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
        <p className="text-muted-foreground">Manage your orders and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Account Sidebar */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-1">
            <Button
              variant={activeTab === "orders" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Orders
            </Button>
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant={activeTab === "addresses" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("addresses")}
            >
              <Package className="mr-2 h-4 w-4" />
              Addresses
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Account Content */}
        <div className="lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="orders" className="mt-0">
              <div className="rounded-lg border">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Order History</h3>
                </div>
                <div className="divide-y">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{order.id}</h4>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                          <Button variant="link" className="h-auto p-0 text-sm">
                            View Order Details
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex gap-3">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-1 flex-col justify-center">
                              <h5 className="text-sm font-medium">
                                {item.name}
                                <span className="text-muted-foreground ml-1">×{item.quantity}</span>
                              </h5>
                              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profile" className="mt-0">
              <div className="rounded-lg border">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Profile Information</h3>
                </div>
                <div className="p-4">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </form>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses" className="mt-0">
              <div className="rounded-lg border">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-medium">Saved Addresses</h3>
                  <Button size="sm">Add New Address</Button>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4 relative">
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="pr-16">
                      <h4 className="font-medium">Home</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        John Doe
                        <br />
                        123 Main St
                        <br />
                        Apt 4B
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                        <br />
                        (555) 123-4567
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Default</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4 relative">
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="pr-16">
                      <h4 className="font-medium">Work</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        John Doe
                        <br />
                        456 Business Ave
                        <br />
                        Suite 100
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                        <br />
                        (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <div className="rounded-lg border">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Account Settings</h3>
                </div>
                <div className="p-4 space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Password</h4>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Email Preferences</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="orderUpdates" defaultChecked />
                        <label htmlFor="orderUpdates" className="text-sm">
                          Order updates and shipping notifications
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="promotions" defaultChecked />
                        <label htmlFor="promotions" className="text-sm">
                          Promotions and special offers
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="newsletter" defaultChecked />
                        <label htmlFor="newsletter" className="text-sm">
                          Newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Delete Account</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
