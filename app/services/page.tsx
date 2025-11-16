"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, Building2, Route, Wrench, CheckCircle2, Clock, Users, Shield } from "lucide-react"
import Link from "next/link"
import { ServiceDetailsModal } from "@/components/service-details-modal"
import { useLanguage } from "@/lib/contexts/language-context"

const iconMap = {
    Waves: Waves,
    Building2: Building2,
    Route: Route,
    Wrench: Wrench,
};

export default function ServicesPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const services = [
    {
      id: 1,
      name: "servicePiscineTitle",
      icon: "Waves",
      description: "servicePiscineDesc",
      features: [
        "servicePiscineFeature1",
        "servicePiscineFeature2",
        "servicePiscineFeature3",
        "servicePiscineFeature4",
      ],
    },
    {
      id: 2,
      name: "serviceBatimentTitle",
      icon: "Building2",
      description: "serviceBatimentDesc",
      features: ["serviceBatimentFeature1", "serviceBatimentFeature2", "serviceBatimentFeature3", "serviceBatimentFeature4"],
    },
    {
      id: 3,
      name: "serviceRouteTitle",
      icon: "Route",
      description: "serviceRouteDesc",
      features: ["serviceRouteFeature1", "serviceRouteFeature2", "serviceRouteFeature3", "serviceRouteFeature4"],
    },
    {
      id: 4,
      name: "serviceEntretienTitle",
      icon: "Wrench",
      description: "serviceEntretienDesc",
      features: ["serviceEntretienFeature1", "serviceEntretienFeature2", "serviceEntretienFeature3", "serviceEntretienFeature4"],
    },
  ]

  const gallery = [
    {
      id: 1,
      title: "galleryPiscineLuxe",
      category: "piscines",
      image: "/luxury-residential-swimming-pool-with-blue-water.jpg",
    },
    {
      id: 2,
      title: "galleryImmeubleCommercial",
      category: "batiments",
      image: "/modern-commercial-construction.png",
    },
    {
      id: 3,
      title: "galleryRouteUrbaine",
      category: "routes",
      image: "/urban-road-construction-asphalt.jpg",
    },
    {
      id: 4,
      title: "galleryPiscineOlympique",
      category: "piscines",
      image: "/olympic-size-swimming-pool.jpg",
    },
    {
      id: 5,
      title: "galleryVillaModerne",
      category: "batiments",
      image: "/modern-villa-house-construction.jpg",
    },
    {
      id: 6,
      title: "galleryInfraRoutiere",
      category: "routes",
      image: "/highway-road-infrastructure.jpg",
    },
  ]

  const stats = [
    { icon: Clock, label: "yearsExperience", value: "10+" },
    { icon: Users, label: "completedProjects", value: "200+" },
    { icon: CheckCircle2, label: "satisfiedClients", value: "150+" },
    { icon: Shield, label: "projectWarranty", value: "5 ans" },
  ]

  const process = [
    { step: "01", title: "processConsultation", desc: "processConsultationDesc" },
    { step: "02", title: "processDevis", desc: "processDevisDesc" },
    { step: "03", title: "processRealisation", desc: "processRealisationDesc" },
    { step: "04", title: "processLivraison", desc: "processLivraisonDesc" },
  ]

  const galleryCategories = ["all", "piscines", "batiments", "routes"]

  const filteredGallery =
    selectedCategory === "all" ? gallery : gallery.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("servicesTitle")}</h1>
          <p className="text-xl text-sky-50 max-w-2xl text-pretty">
            {t("servicesPageSubtitle")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{t(stat.label)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourServices")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("servicesGridSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              const translatedService = {
                ...service,
                name: t(service.name),
                description: t(service.description),
                features: service.features.map(feature => t(feature))
              }
              return (
                <ServiceDetailsModal key={service.id} service={translatedService}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          {Icon && <Icon className="w-8 h-8" />}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{t(service.name)}</CardTitle>
                          <p className="text-muted-foreground text-sm">{t(service.description)}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{t(feature)}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ServiceDetailsModal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourProjects")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("ourProjectsDesc")}
            </p>

            {/* Gallery Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {galleryCategories.map((category) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={t(item.title)}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Badge className="mb-2">{t(item.category)}</Badge>
                      <h3 className="font-semibold text-lg">{t(item.title)}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourProcess")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("ourProcessDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(item.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("readyToStart")}</h2>
          <p className="text-xl mb-8 text-sky-50 max-w-2xl mx-auto">
            {t("servicesCtaDesc")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sky-900 hover:bg-sky-50">
              <Link href="/contact">{t("requestFreeQuote")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="tel:+237600000000">{t("callNow")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}