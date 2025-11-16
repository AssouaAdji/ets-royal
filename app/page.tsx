"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Waves, Building2, Route, CheckCircle2 } from "lucide-react"
import { ServiceDetailsModal } from "@/components/service-details-modal"
import { useLanguage } from "@/lib/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  const products = [
    {
      name: "Dentifrice Blancheur",
      category: "Dentifrice",
      brand: "Fresh Smile",
      price: 2500,
      unit: "75ml",
      promo: false,
      rating: 4.5,
      image: "/placeholder.svg?key=pqfqr",
      link: "/produits/dentifrice-blancheur",
    },
    {
      name: "Savon au Karité",
      category: "Savons",
      brand: "Shea Nature",
      price: 1800,
      unit: "150g",
      promo: true,
      oldPrice: 2200,
      rating: 4.9,
      image: "/placeholder.svg?key=q3qrv",
      link: "/produits/savon-karite",
    },
    {
      name: "Shampoing Cheveux Secs",
      category: "Shampoings",
      brand: "HydraHair",
      price: 3500,
      unit: "400ml",
      promo: false,
      rating: 4.6,
      image: "/placeholder.svg?key=iqg0t",
      link: "/produits/shampoing-cheveux-secs",
    },
    {
      name: "Crème Hydratante Visage",
      category: "Crèmes",
      brand: "GlowSkin",
      price: 5500,
      unit: "50ml",
      promo: false,
      rating: 4.8,
      image: "/placeholder.svg?key=zjq8o",
      link: "/produits/creme-hydratante",
    },
  ]

  const services = [
    {
      name: t("servicePiscineTitle"),
      icon: "Waves",
      description: t("servicePiscineDesc"),
      features: [
        t("servicePiscineFeature1"),
        t("servicePiscineFeature2"),
        t("servicePiscineFeature3"),
      ],
      link: "/services/piscines",
    },
    {
      name: t("serviceBatimentTitle"),
      icon: "Building2",
      description: t("serviceBatimentDesc"),
      features: [t("serviceBatimentFeature1"), t("serviceBatimentFeature2"), t("serviceBatimentFeature3")],
      link: "/services/batiments",
    },
    {
      name: t("serviceRouteTitle"),
      icon: "Route",
      description: t("serviceRouteDesc"),
      features: [t("serviceRouteFeature1"), t("serviceRouteFeature2"), t("serviceRouteFeature3")],
      link: "/services/routes",
    },
  ]

  const alimentations = [
    {
      name: "Riz Blanc",
      category: "Riz",
      price: 12000,
      unit: "25kg",
      stock: "En stock",
      image: "/white-rice-bag.jpg",
      link: "/alimentation/riz-blanc",
    },
    {
      name: "Lentilles",
      category: "Légumineuses",
      price: 4000,
      unit: "5kg",
      stock: "En stock",
      image: "/lentils-bag.jpg",
      link: "/alimentation/lentilles",
    },
    {
      name: "Maïs en Conserve",
      category: "Conserves",
      price: 1200,
      unit: "340g",
      stock: "En stock",
      image: "/corn-can.jpg",
      link: "/alimentation/mais-conserve",
    },
    {
      name: "Haricots Blancs",
      category: "Légumineuses",
      price: 3500,
      unit: "5kg",
      stock: "En stock",
      image: "/white-beans-bag.jpg",
      link: "/alimentation/haricots-blancs",
    },
  ]
  
  const iconMap = {
    Waves: Waves,
    Building2: Building2,
    Route: Route,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">ETS ROYAL COMPANY SERVICE</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="#services">{t("discoverServices")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Main Activities */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourActivities")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("ourActivitiesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alimentation */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 text-white">
                <svg className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-2">{t("foodTitle")}</h3>
                <p className="text-green-50">{t("foodDesc")}</p>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  {t("foodCardDesc")}
                </p>
                <Button asChild className="w-full" variant="default">
                  <Link href="/alimentation">{t("viewCatalog")}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Produits Cosmétiques */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-500 p-8 text-white">
                <svg className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-2">{t("productsTitle")}</h3>
                <p className="text-purple-50">{t("productsDesc")}</p>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  {t("productsCardDesc")}
                </p>
                <Button asChild className="w-full" variant="default">
                  <Link href="/produits">{t("discoverProducts")}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Services Construction */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-sky-500 to-cyan-500 p-8 text-white">
                <svg className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-2">{t("servicesTitle")}</h3>
                <p className="text-cyan-50">{t("servicesDesc")}</p>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  {t("servicesCardDesc")}
                </p>
                <Button asChild className="w-full" variant="default">
                  <Link href="/services">{t("ourServices")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuredCosmetics")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("featuredCosmeticsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow relative">
                {product.promo && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-red-500 text-white">{t("promo")}</Badge>
                  </div>
                )}
                <Link href={product.link}>
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {t(product.category.toLowerCase())}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
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
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/produits">{t("viewAllProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourServices")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("ourServicesDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon className="w-8 h-8" />}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <ServiceDetailsModal service={service}>
                      <Button className="w-full" size="sm" variant="outline">
                        {t("learnMore")}
                      </Button>
                    </ServiceDetailsModal>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">{t("viewAllServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Alimentation Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuredFoodProducts")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("featuredFoodProductsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alimentations.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={product.link}>
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {t(product.category.toLowerCase())}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.unit}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price.toLocaleString("fr-FR")}</span>
                    <span className="text-sm text-muted-foreground">FCFA</span>
                  </div>
                  <div className="mt-2">
                    <Badge variant={product.stock === "En stock" ? "default" : "secondary"} className="text-xs">
                      {t(product.stock === "En stock" ? "inStock" : "outOfStock")}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full" size="sm">
                    <Link href="/contact">{t("requestQuote")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/alimentation">{t("viewAllFoodProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t("aboutTitle")}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground text-center mb-8">
                {t("aboutSectionDesc")}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">{t("yearsExperience")}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">{t("satisfiedClients")}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">{t("activityPoles")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("readyToStart")}</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {t("readyToStartDesc")}
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">{t("requestQuote")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}