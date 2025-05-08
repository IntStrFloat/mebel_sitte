import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Офисная мебель - Мебельщик",
  description:
    "Широкий выбор офисной мебели: рабочие столы, кресла, шкафы и стеллажи. Качественные материалы, современный дизайн.",
  keywords: "офисная мебель, рабочие столы, офисные кресла, шкафы, стеллажи",
}

export default function OfficePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Офисная мебель"
        description="Широкий выбор офисной мебели: рабочие столы, кресла, шкафы и стеллажи"
        image="/placeholder.svg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Стол «Офис»",
            description: "Эргономичный рабочий стол с выдвижными ящиками",
            price: "от 15 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 2,
            title: "Кресло «Директор»",
            description: "Комфортное офисное кресло с регулировками",
            price: "от 12 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 3,
            title: "Шкаф «Документ»",
            description: "Вместительный шкаф для документов",
            price: "от 18 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 4,
            title: "Стеллаж «Офисный»",
            description: "Открытый стеллаж для хранения документов и папок",
            price: "от 10 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 5,
            title: "Тумба «Мобильная»",
            description: "Мобильная тумба с ящиками на колесиках",
            price: "от 8 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 6,
            title: "Стол для переговоров «Совещание»",
            description: "Большой стол для проведения совещаний",
            price: "от 30 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
        ]}
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
