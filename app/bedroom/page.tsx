import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Мебель для спальни - Мебельщик",
  description:
    "Широкий выбор мебели для спальни: кровати, шкафы, комоды и прикроватные тумбочки. Качественные материалы, современный дизайн.",
  keywords: "мебель для спальни, кровати, шкафы, комоды, прикроватные тумбочки",
}

export default function BedroomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Мебель для спальни"
        description="Широкий выбор мебели для спальни: кровати, шкафы, комоды и прикроватные тумбочки"
        image="/мебель-для-спальни.png?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Кровать «Релакс»",
            description: "Двуспальная кровать с ортопедическим основанием",
            price: "от 35 000 ₽",
            image: "/Кровать-Релакс.png?height=300&width=400",
          },
          {
            id: 2,
            title: "Шкаф-купе «Стандарт»",
            description: "Вместительный шкаф-купе с зеркальными дверями",
            price: "от 30 000 ₽",
            image: "/шкаф-купе-стандарт.png?height=300&width=400",
          },
          {
            id: 3,
            title: "Комод «Классика»",
            description: "Классический комод с пятью выдвижными ящиками",
            price: "от 20 000 ₽",
            image: "/комод-классика.jpeg?height=300&width=400",
          },
          {
            id: 4,
            title: "Прикроватная тумба «Ночь»",
            description: "Компактная прикроватная тумба с ящиком",
            price: "от 8 000 ₽",
            image: "/тумба-ночь.png?height=300&width=400",
          },
          {
            id: 5,
            title: "Туалетный столик «Венеция»",
            description: "Элегантный туалетный столик с зеркалом",
            price: "от 25 000 ₽",
            image: "/столик-венеция.png?height=300&width=400",
          },
          {
            id: 6,
            title: "Матрас «Здоровый сон»",
            description: "Ортопедический матрас средней жесткости",
            price: "от 15 000 ₽",
            image: "/матрас-здоровый-сон.png?height=300&width=400",
          },
        ]}
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
