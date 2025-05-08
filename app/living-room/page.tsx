import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Мебель для гостиной - Мебельщик",
  description:
    "Широкий выбор мебели для гостиной: диваны, кресла, журнальные столики и тумбы под ТВ. Качественные материалы, современный дизайн.",
  keywords: "мебель для гостиной, диваны, кресла, журнальные столики, тумбы под ТВ",
}

export default function LivingRoomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Мебель для гостиной"
        description="Широкий выбор мебели для гостиной: диваны, кресла, журнальные столики и тумбы под ТВ"
        image="/placeholder.svg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Диван «Комфорт»",
            description: "Удобный трехместный диван с обивкой из экокожи",
            price: "от 45 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 2,
            title: "Кресло «Релакс»",
            description: "Мягкое кресло с подлокотниками и высокой спинкой",
            price: "от 25 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 3,
            title: "Журнальный столик «Модерн»",
            description: "Современный журнальный столик из стекла и металла",
            price: "от 15 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 4,
            title: "Тумба под ТВ «Стандарт»",
            description: "Вместительная тумба под ТВ с выдвижными ящиками",
            price: "от 20 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 5,
            title: "Стенка «Престиж»",
            description: "Модульная стенка для гостиной с подсветкой",
            price: "от 80 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 6,
            title: "Пуф «Кубик»",
            description: "Компактный пуф с отделением для хранения",
            price: "от 8 000 ₽",
            image: "/placeholder.svg?height=300&width=400",
          },
        ]}
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
