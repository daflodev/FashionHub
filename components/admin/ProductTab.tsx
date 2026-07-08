import Image from "next/image"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  stock: number
  category: string
  status: string
  image: string
}

export function ProductsTab({ products }: { products: Product[] }) {
  return (
    <Card className="bg-white shadow-sm border border-slate-200 rounded-md">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900">
            Gestión de Productos
          </CardTitle>
          <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Producto
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-600">Imagen</TableHead>
              <TableHead className="font-semibold text-slate-600">Nombre</TableHead>
              <TableHead className="font-semibold text-slate-600">Precio</TableHead>
              <TableHead className="font-semibold text-slate-600">Stock</TableHead>
              <TableHead className="font-semibold text-slate-600">Categoría</TableHead>
              <TableHead className="font-semibold text-slate-600">Estado</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-slate-50/50 transition-colors">
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover border border-slate-200"
                  />
                </TableCell>
                <TableCell className="font-medium text-slate-900">{product.name}</TableCell>
                <TableCell className="text-slate-600">${product.price}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={product.stock < 10 ? "text-red-600 border-red-200 bg-red-50" : "text-slate-600 border-slate-200"}>
                    {product.stock} unids.
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-600">{product.category}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={product.status === "Activo" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}