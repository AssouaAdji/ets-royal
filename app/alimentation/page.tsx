"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"

export default function AlimentationPage() {
  const { t } = useLanguage()

  const categories = ["all", "riz", "huiles", "conserves", "légumineuses", "céréales", "condiments"]

  const products = [
    {
      id: 1,
      name: "Riz Parfumé Thai",
      category: "riz",
      price: 15000,
      unit: "25kg",
      stock: "inStock",
      image: "/premium-thai-rice-bag.jpg",
    },
    {
      id: 2,
      name: "Riz Blanc Local",
      category: "riz",
      price: 12000,
      unit: "25kg",
      stock: "inStock",
      image: "/white-rice-bag.jpg",
    },
    {
      id: 3,
      name: "Riz Basmati",
      category: "riz",
      price: 18000,
      unit: "20kg",
      stock: "inStock",
      image: "/basmati-rice-bag.jpg",
    },
    {
      id: 4,
      name: "Huile de Palme",
      category: "huiles",
      price: 5000,
      unit: "5L",
      stock: "inStock",
      image: "/palm-oil-bottle.jpg",
    },
    {
      id: 5,
      name: "Huile d'Arachide",
      category: "huiles",
      price: 6500,
      unit: "5L",
      stock: "inStock",
      image: "/peanut-oil-bottle.jpg",
    },
    {
      id: 6,
      name: "Huile Végétale",
      category: "huiles",
      price: 7000,
      unit: "5L",
      stock: "inStock",
      image: "/vegetable-oil-bottle.jpg",
    },
    {
      id: 7,
      name: "Tomates Concentrées",
      category: "conserves",
      price: 2500,
      unit: "850g",
      stock: "inStock",
      image: "/tomato-paste-can.jpg",
    },
    {
      id: 8,
      name: "Sardines à la Tomate",
      category: "conserves",
      price: 1500,
      unit: "125g",
      stock: "inStock",
      image: "/sardines-can.jpg",
    },
    {
      id: 9,
      name: "Maïs en Grains",
      category: "conserves",
      price: 1200,
      unit: "340g",
      stock: "inStock",
      image: "/corn-can.jpg",
    },
    {
      id: 10,
      name: "Haricots Blancs",
      category: "légumineuses",
      price: 3500,
      unit: "5kg",
      stock: "inStock",
      image: "/white-beans-bag.jpg",
    },
    {
      id: 11,
      name: "Lentilles",
      category: "légumineuses",
      price: 4000,
      unit: "5kg",
      stock: "inStock",
      image: "/lentils-bag.jpg",
    },
    {
      id: 12,
      name: "Pois Chiches",
      category: "légumineuses",
      price: 4500,
      unit: "5kg",
      stock: "inStock",
      image: "/chickpeas-bag.jpg",
    },
    {
      id: 13,
      name: "Farine de Blé",
      category: "céréales",
      price: 8000,
      unit: "10kg",
      stock: "inStock",
      image: "/wheat-flour-bag.png",
    },
    {
      id: 14,
      name: "Semoule de Maïs",
      category: "céréales",
      price: 2500,
      unit: "2kg",
      stock: "inStock",
      image: "/corn-semolina-bag.jpg",
    },
    {
      id: 15,
      name: "Sel de Cuisine",
      category: "condiments",
      price: 800,
      unit: "1kg",
      stock: "inStock",
      image: "/kitchen-salt-package.jpg",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = t(product.name).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("food")}</h1>
          <p className="text-xl text-amber-50 max-w-2xl text-pretty">
            {t("foodPageSubtitle")}
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
                placeholder={t("searchProduct")}
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
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <p className="text-sm text-muted-foreground mb-3">{product.unit}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString("fr-FR")}</span>
                      <span className="text-sm text-muted-foreground">FCFA</span>
                    </div>
                    <div className="mt-2">
                      <Badge variant={product.stock === "inStock" ? "default" : "secondary"} className="text-xs">
                        {t(product.stock)}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" size="sm">
                      {t("requestQuote")}
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

      {/* Info Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("qualityGuaranteed")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("qualityGuaranteedDesc")}
            </p>
            <Button asChild size="lg">
              <a href="/contact">{t("contactForBulk")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}