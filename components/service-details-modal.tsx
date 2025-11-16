"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Waves, Building2, Route, Wrench } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Waves: Waves,
  Building2: Building2,
  Route: Route,
  Wrench: Wrench,
};

export function ServiceDetailsModal({ service, children }) {
  const Icon = iconMap[service.icon];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              {Icon && <Icon className="w-8 h-8" />}
            </div>
            <div>
              <DialogTitle className="text-2xl mb-2">{service.name}</DialogTitle>
              <DialogDescription>{service.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="py-4">
          <h4 className="font-semibold mb-3">Prestations incluses :</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button asChild size="lg">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}