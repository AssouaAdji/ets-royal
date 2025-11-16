"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Sparkles, TrendingUp, Users, Package, Eye } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Tableau de Bord Admin</h1>
          <p className="text-muted-foreground mt-1">Gestion des produits et statistiques</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produits Total</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">31</div>
              <p className="text-xs text-muted-foreground">15 Alim. + 16 Cosm.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visiteurs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-muted-foreground">+12% ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues Produits</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,234</div>
              <p className="text-xs text-muted-foreground">+8% ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes Devis</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+23% ce mois</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="food" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <TabsTrigger value="food">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Alimentation
            </TabsTrigger>
            <TabsTrigger value="cosmetics">
              <Sparkles className="h-4 w-4 mr-2" />
              Cosmétiques
            </TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <FoodProductsTable />
          </TabsContent>

          <TabsContent value="cosmetics">
            <CosmeticsProductsTable />
          </TabsContent>

          <TabsContent value="categories">
            <CategoriesTable />
          </TabsContent>

          <TabsContent value="messages">
            <MessagesTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MessagesTable() {
  const [messages] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", subject: "Demande de devis", date: "2023-10-26", status: "Nouveau" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", subject: "Question sur un produit", date: "2023-10-25", status: "Lu" },
    { id: 3, name: "Peter Jones", email: "peter.jones@example.com", subject: "Problème de commande", date: "2023-10-24", status: "Résolu" },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Nom</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Email</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Sujet</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Statut</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="border-b">
                    <td className="p-4 text-sm">{message.id}</td>
                    <td className="p-4 text-sm font-medium">{message.name}</td>
                    <td className="p-4 text-sm">{message.email}</td>
                    <td className="p-4 text-sm">{message.subject}</td>
                    <td className="p-4 text-sm">{message.date}</td>
                    <td className="p-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          message.status === "Nouveau"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            : message.status === "Lu"
                            ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        }`}
                      >
                        {message.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-xs">Voir</button>
                        <button className="text-red-600 hover:text-red-800 text-xs">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FoodProductsTable() {
  const [products] = useState([
    { id: 1, name: "Riz Parfumé Thai", category: "Riz", price: 15000, unit: "25kg", stock: "En stock" },
    { id: 2, name: "Riz Blanc Local", category: "Riz", price: 12000, unit: "25kg", stock: "En stock" },
    { id: 3, name: "Riz Basmati", category: "Riz", price: 18000, unit: "20kg", stock: "En stock" },
    { id: 4, name: "Huile de Palme", category: "Huiles", price: 5000, unit: "5L", stock: "En stock" },
    { id: 5, name: "Huile d'Arachide", category: "Huiles", price: 6500, unit: "5L", stock: "En stock" },
    { id: 6, name: "Huile Végétale", category: "Huiles", price: 7000, unit: "5L", stock: "Disponible" },
    { id: 7, name: "Tomates Concentrées", category: "Conserves", price: 2500, unit: "850g", stock: "En stock" },
    { id: 8, name: "Sardines à la Tomate", category: "Conserves", price: 1500, unit: "125g", stock: "En stock" },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produits Alimentaires</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Nom</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Catégorie</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Prix</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Unité</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Stock</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 text-sm">{product.id}</td>
                    <td className="p-4 text-sm font-medium">{product.name}</td>
                    <td className="p-4 text-sm">{product.category}</td>
                    <td className="p-4 text-sm">{product.price.toLocaleString()} FCFA</td>
                    <td className="p-4 text-sm">{product.unit}</td>
                    <td className="p-4 text-sm">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-xs">Modifier</button>
                        <button className="text-red-600 hover:text-red-800 text-xs">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CosmeticsProductsTable() {
  const [products] = useState([
    { id: 1, name: "Dentifrice Blancheur", category: "Dentifrice", brand: "Fresh Smile", price: 2500, unit: "75ml" },
    {
      id: 2,
      name: "Dentifrice Protection Complète",
      category: "Dentifrice",
      brand: "DentalCare",
      price: 2000,
      unit: "100ml",
    },
    { id: 3, name: "Savon Noir Africain", category: "Savons", brand: "African Beauty", price: 1500, unit: "200g" },
    { id: 4, name: "Savon au Karité", category: "Savons", brand: "Shea Nature", price: 1800, unit: "150g" },
    { id: 5, name: "Shampoing Cheveux Secs", category: "Shampoings", brand: "HydraHair", price: 3500, unit: "400ml" },
    { id: 6, name: "Crème Hydratante Visage", category: "Crèmes", brand: "GlowSkin", price: 5500, unit: "50ml" },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produits Cosmétiques</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Nom</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Catégorie</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Marque</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Prix</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Unité</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 text-sm">{product.id}</td>
                    <td className="p-4 text-sm font-medium">{product.name}</td>
                    <td className="p-4 text-sm">{product.category}</td>
                    <td className="p-4 text-sm">{product.brand}</td>
                    <td className="p-4 text-sm">{product.price.toLocaleString()} FCFA</td>
                    <td className="p-4 text-sm">{product.unit}</td>
                    <td className="p-4 text-sm">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-xs">Modifier</button>
                        <button className="text-red-600 hover:text-red-800 text-xs">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CategoriesTable() {
  const [categories] = useState([
    { id: 1, name: "Riz", type: "Alimentation", count: 3 },
    { id: 2, name: "Huiles", type: "Alimentation", count: 3 },
    { id: 3, name: "Conserves", type: "Alimentation", count: 3 },
    { id: 4, name: "Légumineuses", type: "Alimentation", count: 3 },
    { id: 5, name: "Céréales", type: "Alimentation", count: 2 },
    { id: 6, name: "Condiments", type: "Alimentation", count: 1 },
    { id: 7, name: "Dentifrice", type: "Cosmétiques", count: 3 },
    { id: 8, name: "Savons", type: "Cosmétiques", count: 4 },
    { id: 9, name: "Shampoings", type: "Cosmétiques", count: 3 },
    { id: 10, name: "Crèmes", type: "Cosmétiques", count: 3 },
    { id: 11, name: "Parfums", type: "Cosmétiques", count: 2 },
    { id: 12, name: "Soins Corps", type: "Cosmétiques", count: 1 },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Catégories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Nom</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Type</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Nb. Produits</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="border-b">
                    <td className="p-4 text-sm">{category.id}</td>
                    <td className="p-4 text-sm font-medium">{category.name}</td>
                    <td className="p-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          category.type === "Alimentation"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                        }`}
                      >
                        {category.type}
                      </span>
                    </td>
                    <td className="p-4 text-sm">{category.count}</td>
                    <td className="p-4 text-sm">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-xs">Modifier</button>
                        <button className="text-red-600 hover:text-red-800 text-xs">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
