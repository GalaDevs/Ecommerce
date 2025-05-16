import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { products, categories } from "@/lib/data"
import ProductSort from "@/components/product-sort"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Find the category by slug
  const category = categories.find((c) => c.slug === params.slug)

  // Filter products by category name
  const categoryProducts = products.filter((p) => p.category.toLowerCase() === (category?.name.toLowerCase() || ""))

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{category?.name || "Category"}</h1>
        <p className="text-muted-foreground">Browse our collection of {category?.name.toLowerCase() || "products"}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filters */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden mb-4 flex gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow down your product search with our filters</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <ProductFilters />
            </div>
          </SheetContent>
        </Sheet>

        {/* Sort and View Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm font-medium">{categoryProducts.length} Products</span>
          </div>
          <ProductSort />
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block w-1/4 max-w-xs">
          <div className="sticky top-20">
            <h3 className="font-medium mb-4 text-lg">Filters</h3>
            <ProductFilters />
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {categoryProducts.length > 0 && (
            <div className="flex justify-center mt-10">
              <div className="flex gap-1">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="default" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
