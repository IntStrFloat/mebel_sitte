import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    title: "Мебель для гостиной",
    description: "Диваны, кресла, журнальные столики и тумбы под ТВ в Твери",
    image: "/holl-furniture.png?height=300&width=400",
    link: "/living-room",
  },
  {
    id: 2,
    title: "Мебель для спальни",
    description: "Кровати, шкафы, комоды и прикроватные тумбочки в Твери",
    image: "/bedroom-furniture.png?height=300&width=400",
    link: "/bedroom",
  },
  {
    id: 3,
    title: "Кухонная мебель",
    description: "Кухонные гарнитуры, столы, стулья и барные стойки в Твери",
    image: "/kitchen-furniture.png?height=300&width=400",
    link: "/kitchen",
  },
  {
    id: 4,
    title: "Офисная мебель",
    description: "Рабочие столы, кресла, шкафы и стеллажи для офисов в Твери",
    image: "/office-furniture.jpeg?height=300&width=400",
    link: "/office",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Каталог мебели в Твери</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Широкий выбор мебели для любого помещения в Твери и Тверской области. Индивидуальный подход к каждому
              клиенту.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          itemScope
          itemType="http://schema.org/ItemList"
        >
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="overflow-hidden transition-all hover:shadow-lg"
              itemScope
              itemType="http://schema.org/Product"
              itemProp="itemListElement"
            >
              <div className="relative h-[200px]">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} в Твери`}
                  fill
                  className="object-cover"
                  itemProp="image"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2" itemProp="name">
                  {category.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4" itemProp="description">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="text-primary hover:underline font-medium inline-flex items-center"
                  itemProp="url"
                >
                  Узнать подробнее
                </Link>
                <meta itemProp="position" content={`${index + 1}`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
