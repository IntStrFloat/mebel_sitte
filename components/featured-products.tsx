"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/ui/image-modal"

const products = [
  {
    id: 1,
    title: "Шкаф-купе «Престиж»",
    description: "Вместительный шкаф-купе с зеркальными дверями и подсветкой. Доставка по Твери и области",
    price: "от 65 000 ₽",
    image: "/шкаф-престиж.png",
  },
  {
    id: 2,
    title: "Кухонный гарнитур «Модерн»",
    description: "Современный кухонный гарнитур с фасадами из МДФ и столешницей из кварцевого агломерата",
    price: "от 120 000 ₽",
    image: "/кухонный-гарнитур-модерн.png",
  },
  {
    id: 3,
    title: "Гардеробная система «Комфорт»",
    description: "Модульная система хранения с выдвижными ящиками и полками. Доставка по Твери и области",
    price: "от 25 000 ₽",
    image: "/гардеробная-система-комфорт.png",
  },
  {
    id: 4,
    title: "Стенка «Классика»",
    description: "Классическая стенка для гостиной с витражными дверцами и подсветкой. Доставка по Твери и области",
    price: "от 95 000 ₽",
    image: "/Стенка-Классика.png",
  },
  {
    id: 5,
    title: "Комод «Элегант»",
    description: "Вместительный комод с шестью выдвижными ящиками. Доставка по Твери и области",
    price: "от 35 000 ₽",
    image: "/Комод-Элегант.png",
  },
  {
    id: 6,
    title: "Тумба под ТВ «Максимум»",
    description: "Функциональная тумба под ТВ с выдвижными ящиками и открытыми полками. Доставка по Твери и области",
    price: "от 45 000 ₽",
    image: "/placeholder.svg",
  },
]

export default function FeaturedProducts() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="featured" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Популярные модели в Твери</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Наши бестселлеры, которые выбирают большинство клиентов в Твери и Тверской области
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            itemScope
            itemType="http://schema.org/ItemList"
          >
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden transition-all hover:shadow-lg"
                itemScope
                itemType="http://schema.org/Product"
                itemProp="itemListElement"
              >
                <div 
                  className="relative h-[300px] cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} в Твери`}
                    fill
                    className="object-contain"
                    itemProp="image"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-1" itemProp="name">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2" itemProp="description">
                    {product.description}
                  </p>
                  <p
                    className="text-lg font-semibold mb-4"
                    itemProp="offers"
                    itemScope
                    itemType="http://schema.org/Offer"
                  >
                    <span itemProp="price">{product.price}</span>
                    <meta itemProp="priceCurrency" content="RUB" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                  </p>
                  <Button asChild className="w-full">
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault()
                      const contact = document.querySelector('#contact')
                      contact?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Заказать звонок
                    </a>
                  </Button>
                  <meta itemProp="position" content={`${index + 1}`} />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="#contact" onClick={(e) => {
                e.preventDefault()
                const contact = document.querySelector('#contact')
                contact?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Показать все модели
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage || ''}
        alt="Увеличенное изображение мебели"
      />
    </>
  )
}
