"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = [
    { id: "clothing", label: "Clothing" },
    { id: "electronics", label: "Electronics" },
    { id: "home", label: "Home & Kitchen" },
    { id: "beauty", label: "Beauty & Personal Care" },
    { id: "sports", label: "Sports & Outdoors" },
  ]

  const brands = [
    { id: "brand1", label: "Brand One" },
    { id: "brand2", label: "Brand Two" },
    { id: "brand3", label: "Brand Three" },
    { id: "brand4", label: "Brand Four" },
    { id: "brand5", label: "Brand Five" },
  ]

  const colors = [
    { id: "black", label: "Black", hex: "#000000" },
    { id: "white", label: "White", hex: "#ffffff" },
    { id: "red", label: "Red", hex: "#ff0000" },
    { id: "blue", label: "Blue", hex: "#0000ff" },
    { id: "green", label: "Green", hex: "#00ff00" },
  ]

  const ratings = [
    { id: "4-up", label: "4 Stars & Up" },
    { id: "3-up", label: "3 Stars & Up" },
    { id: "2-up", label: "2 Stars & Up" },
    { id: "1-up", label: "1 Star & Up" },
  ]

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["categories", "price", "brands", "colors", "ratings"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-2">
                  <Checkbox id={`category-${category.id}`} />
                  <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 500]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="rounded-md border px-2 py-1 text-sm">${priceRange[0]}</div>
                <div className="rounded-md border px-2 py-1 text-sm">${priceRange[1]}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center gap-2">
                  <Checkbox id={`brand-${brand.id}`} />
                  <Label htmlFor={`brand-${brand.id}`} className="text-sm font-normal cursor-pointer">
                    {brand.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color.id} className="flex items-center gap-2">
                  <Checkbox id={`color-${color.id}`} />
                  <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: color.hex }} />
                  <Label htmlFor={`color-${color.id}`} className="text-sm font-normal cursor-pointer">
                    {color.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center gap-2">
                  <Checkbox id={`rating-${rating.id}`} />
                  <Label
                    htmlFor={`rating-${rating.id}`}
                    className="text-sm font-normal cursor-pointer flex items-center"
                  >
                    <div className="flex mr-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`h-3 w-3 ${
                              i < Number.parseInt(rating.id.split("-")[0])
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted-foreground"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                    </div>
                    & Up
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
