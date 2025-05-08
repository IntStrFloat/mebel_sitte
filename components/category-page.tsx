import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
}

interface CategoryPageProps {
  title: string
  description: string
  image: string
  products: Product[]
}

export default function CategoryPage({ title, description, image, products }: CategoryPageProps) {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">{description}</p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-[200px]">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{product.description}</p>
                  <p className="text-lg font-semibold mb-4">{product.price}</p>
                  <Button asChild className="w-full">
                    <Link href="#contact">Заказать звонок</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
