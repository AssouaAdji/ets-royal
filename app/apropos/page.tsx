"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, Clock, Users, Shield, Handshake, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "John Doe",
      role: "teamRoleCEO",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Jane Smith",
      role: "teamRoleCOO",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Paul Williams",
      role: "teamRoleConstructionManager",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mary Johnson",
      role: "teamRoleFoodManager",
      image: "/placeholder-user.jpg",
    },
  ];

  const values = [
      {
          icon: CheckCircle2,
          title: "valueQualityTitle",
          description: "valueQualityDesc"
      },
      {
          icon: Handshake,
          title: "valueIntegrityTitle",
          description: "valueIntegrityDesc"
      },
      {
          icon: Users,
          title: "valueSatisfactionTitle",
          description: "valueSatisfactionDesc"
      },
      {
          icon: Lightbulb,
          title: "valueInnovationTitle",
          description: "valueInnovationDesc"
      }
  ]

  const stats = [
    { icon: Clock, label: "yearsExperience", value: "10+" },
    { icon: Users, label: "completedProjects", value: "200+" },
    { icon: CheckCircle2, label: "satisfiedClients", value: "150+" },
    { icon: Shield, label: "projectWarranty", value: "5 ans" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t("aboutPageTitle")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourStoryTitle")}</h2>
              <p className="text-muted-foreground mb-4">
                {t("ourStoryDesc1")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t("ourStoryDesc2")}
              </p>
              <p className="text-muted-foreground">
                {t("ourStoryDesc3")}
              </p>
            </div>
            <div>
                <img src="/placeholder.jpg" alt={t("ourCompanyAlt")} className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourValuesTitle")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("ourValuesDesc")}
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map(value => {
                    const Icon = value.icon;
                    return (
                        <div key={value.title} className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t(value.title)}</h3>
                            <p className="text-muted-foreground">{t(value.description)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
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

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourTeamTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("ourTeamDesc")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{t(member.role)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("workTogetherTitle")}</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {t("workTogetherDesc")}
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">{t("contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}