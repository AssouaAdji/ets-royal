"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t("toastSuccessTitle"),
      description: t("toastSuccessDescription"),
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("contactUs")}</h1>
          <p className="text-xl text-blue-50 max-w-2xl text-pretty">
            {t("contactPageSubtitle")}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("phone")}</h3>
                    <p className="text-sm text-muted-foreground">+237 691 466 539</p>
                    <p className="text-sm text-muted-foreground">+237 675 811 830</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("email")}</h3>
                    <p className="text-sm text-muted-foreground">contact@etsroyal.com</p>
                    <p className="text-sm text-muted-foreground">info@etsroyal.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("address")}</h3>
                    <p className="text-sm text-muted-foreground">Douala, Cameroun</p>
                    <p className="text-sm text-muted-foreground">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("formTitle")}</CardTitle>
                  <CardDescription>
                    {t("formDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("formFullName")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t("formFullNamePlaceholder")}
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("formEmail")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("formEmailPlaceholder")}
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("formPhone")} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+237 6XX XXX XXX"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">{t("formCategory")} *</Label>
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={(e) => handleChange(e as any)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">{t("formSelectCategory")}</option>
                          <option value="alimentation">{t("food")}</option>
                          <option value="produits">{t("products")}</option>
                          <option value="services">{t("services")}</option>
                          <option value="autre">{t("other")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("formSubject")} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t("formSubjectPlaceholder")}
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("formMessage")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("formMessagePlaceholder")}
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>{t("formSubmitting")}</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t("formSubmit")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {t("openingHours")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{t("mondayFriday")}</span>
                    <span className="text-sm font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{t("saturday")}</span>
                    <span className="text-sm font-medium">9h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{t("sunday")}</span>
                    <span className="text-sm font-medium">{t("closed")}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle>{t("needQuoteTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("needQuoteDesc")}
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{t("needQuoteFeature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{t("needQuoteFeature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{t("needQuoteFeature3")}</span>
                    </li>
                  </ul>
                  <Button className="w-full">{t("requestQuote")}</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("faqTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{t("faq1Title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("faq1Desc")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{t("faq2Title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("faq2Desc")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{t("faq3Title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("faq3Desc")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t("ourOffices")}</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">{t("mapPlaceholder")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}