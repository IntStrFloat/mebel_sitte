import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Кухонная мебель - Мебельщик",
  description:
    "Широкий выбор кухонной мебели: кухонные гарнитуры, столы, стулья и барные стойки. Качественные материалы, современный дизайн.",
  keywords: "кухонная мебель, кухонные гарнитуры, столы, стулья, барные стойки",
}

export default function KitchenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Кухонная мебель"
        description="Широкий выбор кухонной мебели: кухонные гарнитуры, столы, стулья и барные стойки"
        image="/placeholder.svg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Кухонный гарнитур «Модерн»",
            description: "Современный кухонный гарнитур с фасадами из МДФ",
            price: "от 80 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 2,
            title: "Обеденный стол «Семейный»",
            description: "Раскладной обеденный стол из массива дерева",
            price: "от 25 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 3,
            title: "Стул «Комфорт»",
            description: "Удобный стул с мягким сиденьем и спинкой",
            price: "от 5 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 4,
            title: "Барная стойка «Лофт»",
            description: "Стильная барная стойка в стиле лофт",
            price: "от 20 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 5,
            title: "Барный стул «Высокий»",
            description: "Высокий барный стул с подставкой для ног",
            price: "от 7 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 6,
            title: "Кухонный уголок «Семейный»",
            description: "Компактный кухонный уголок со столом и стульями",
            price: "от 35 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
        ]}
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
