import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { categories } from "@/lib/data"

export default function CategoriesPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground">Browse our wide selection of categories</p>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground">Categories</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-xl font-medium text-white">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
