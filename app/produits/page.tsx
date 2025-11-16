"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"

export default function ProduitsPage() {
  const { t } = useLanguage()

  const categories = ["all", "dentifrice", "savons", "shampoings", "crèmes", "parfums", "soinsCorps"]
  const brands = ["Fresh Smile", "DentalCare", "African Beauty", "Shea Nature", "HydraHair", "GlowSkin"]

  const products = [
    {
      id: 1,
      name: "Dentifrice Blancheur",
      category: "dentifrice",
      brand: "Fresh Smile",
      price: 2500,
      unit: "75ml",
      promo: false,
      rating: 4.5,
      image: "/placeholder.svg?key=pqfqr",
    },
    {
      id: 2,
      name: "Dentifrice Protection Complète",
      category: "dentifrice",
      brand: "DentalCare",
      price: 2000,
      unit: "100ml",
      promo: true,
      oldPrice: 2500,
      rating: 4.8,
      image: "/placeholder.svg?key=j5lvj",
    },
    {
      id: 3,
      name: "Dentifrice Herbes Naturelles",
      category: "dentifrice",
      brand: "NaturaFresh",
      price: 3000,
      unit: "75ml",
      promo: false,
      rating: 4.3,
      image: "/placeholder.svg?key=t8yf5",
    },
    {
      id: 4,
      name: "Savon Noir Africain",
      category: "savons",
      brand: "African Beauty",
      price: 1500,
      unit: "200g",
      promo: false,
      rating: 4.7,
      image: "/placeholder.svg?key=vwi8t",
    },
    {
      id: 5,
      name: "Savon au Karité",
      category: "savons",
      brand: "Shea Nature",
      price: 1800,
      unit: "150g",
      promo: true,
      oldPrice: 2200,
      rating: 4.9,
      image: "/placeholder.svg?key=q3qrv",
    },
    {
      id: 6,
      name: "Savon Antibactérien",
      category: "savons",
      brand: "ProtectPlus",
      price: 1200,
      unit: "100g",
      promo: false,
      rating: 4.4,
      image: "/placeholder.svg?key=jirxe",
    },
    {
      id: 7,
      name: "Savon Doux pour Bébé",
      category: "savons",
      brand: "BabyCare",
      price: 2000,
      unit: "150g",
      promo: false,
      rating: 4.8,
      image: "/placeholder.svg?key=p7pve",
    },
    {
      id: 8,
      name: "Shampoing Cheveux Secs",
      category: "shampoings",
      brand: "HydraHair",
      price: 3500,
      unit: "400ml",
      promo: false,
      rating: 4.6,
      image: "/placeholder.svg?key=iqg0t",
    },
    {
      id: 9,
      name: "Shampoing Anti-Pelliculaire",
      category: "shampoings",
      brand: "ScalpCare",
      price: 4000,
      unit: "400ml",
      promo: true,
      oldPrice: 4800,
      rating: 4.7,
      image: "/placeholder.svg?key=w18hy",
    },
    {
      id: 10,
      name: "Shampoing Pour Enfants",
      category: "shampoings",
      brand: "KidsClean",
      price: 2800,
      unit: "300ml",
      promo: false,
      rating: 4.5,
      image: "/placeholder.svg?key=fgvts",
    },
    {
      id: 11,
      name: "Crème Hydratante Visage",
      category: "crèmes",
      brand: "GlowSkin",
      price: 5500,
      unit: "50ml",
      promo: false,
      rating: 4.8,
      image: "/placeholder.svg?key=zjq8o",
    },
    {
      id: 12,
      name: "Crème Anti-Age",
      category: "crèmes",
      brand: "YouthRevive",
      price: 8000,
      unit: "50ml",
      promo: true,
      oldPrice: 10000,
      rating: 4.9,
      image: "/placeholder.svg?key=0etwq",
    },
    {
      id: 13,
      name: "Crème Éclaircissante",
      category: "crèmes",
      brand: "BrightGlow",
      price: 6500,
      unit: "75ml",
      promo: false,
      rating: 4.4,
      image: "/placeholder.svg?key=bvd88",
    },
    {
      id: 14,
      name: "Parfum Homme Sport",
      category: "parfums",
      brand: "Elite Men",
      price: 12000,
      unit: "100ml",
      promo: false,
      rating: 4.6,
      image: "/placeholder.svg?key=qh38q",
    },
    {
      id: 15,
      name: "Parfum Femme Floral",
      category: "parfums",
      brand: "Elegance",
      price: 15000,
      unit: "100ml",
      promo: false,
      rating: 4.7,
      image: "/placeholder.svg?key=w79oo",
    },
    {
      id: 16,
      name: "Lait Corporel Nourrissant",
      category: "soinsCorps",
      brand: "BodyCare",
      price: 4500,
      unit: "500ml",
      promo: true,
      oldPrice: 5500,
      rating: 4.8,
      image: "/placeholder.svg?key=j0x32",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      t(product.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(product.brand).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-violet-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("productsTitle")}</h1>
          <p className="text-xl text-violet-50 max-w-2xl text-pretty">
            {t("productsPageSubtitle")}
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="border-b bg-muted/30 sticky top-16 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          {/* Search Bar */}
          <div className="mb-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("searchProductOrBrand")}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {t(category)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Promotions Banner */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("currentPromotions")}</h2>
            <p className="text-muted-foreground">{t("currentPromotionsDesc")}</p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {product.promo && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-red-500 text-white">{t("promo")}</Badge>
                    </div>
                  )}
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={t(product.name)}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {t(product.category)}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-1">{t(product.name)}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{t(product.brand)}</p>
                    <p className="text-xs text-muted-foreground mb-3">{product.unit}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {product.promo && product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.oldPrice.toLocaleString("fr-FR")} FCFA
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString("fr-FR")}</span>
                      <span className="text-sm text-muted-foreground">FCFA</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" size="sm">
                      {t("addToCart")}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t("noProductFound")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t("ourPartnerBrands")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div key={brand} className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <p className="font-semibold">{t(brand)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("bulkOrder")}</h2>
            <p className="text-xl mb-8 text-violet-50 max-w-2xl mx-auto">
              {t("bulkOrderDesc")}
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
              <a href="/contact">{t("requestProQuote")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}