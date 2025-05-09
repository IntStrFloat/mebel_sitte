import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Спальни на заказ в Твери | Кровати, шкафы-купе от 35000₽ | Мебельщик",
  description: "🛏️ Мебель для спальни на заказ в Твери: кровати от 35000₽, шкафы-купе от 30000₽, комоды от 20000₽. ✅ Бесплатный дизайн-проект ✅ Рассрочка 0% ✅ Гарантия 2 года ⚡ Доставка по Твери бесплатно ☎ +7 (915) 722-00-75",
  keywords: "спальни Тверь, мебель для спальни Тверь, кровати Тверь, шкафы купе Тверь, комоды Тверь, спальные гарнитуры Тверь, спальня под ключ Тверь, двуспальные кровати Тверь, прикроватные тумбы Тверь, туалетные столики Тверь",
  openGraph: {
    title: "Спальни на заказ в Твери | Мебель для спальни от производителя | Мебельщик",
    description: "Изготовление мебели для спальни в Твери: кровати от 35000₽, шкафы-купе, комоды, тумбы. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/bedroom",
    type: "website",
  },
}

export default function BedroomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Спальни на заказ в Твери"
        description="Изготовление мебели для спальни любой сложности: кровати, шкафы-купе, комоды, тумбы. Качественные материалы, современный дизайн. Рассрочка 0%."
        image="/спальни-на-заказ-тверь.jpg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Кровать «Релакс»",
            description: "Двуспальная кровать с ортопедическим основанием и мягким изголовьем",
            price: "от 35 000 ₽",
            image: "/Кровать-Релакс.png?height=300&width=400",
          },
          {
            id: 2,
            title: "Шкаф-купе «Стандарт»",
            description: "Вместительный шкаф-купе с зеркальными дверями и системой хранения",
            price: "от 30 000 ₽",
            image: "/шкаф-купе-стандарт.png?height=300&width=400",
          },
          {
            id: 3,
            title: "Комод «Классика»",
            description: "Классический комод с пятью выдвижными ящиками и антискользящими направляющими",
            price: "от 20 000 ₽",
            image: "/комод-классика.jpeg?height=300&width=400",
          },
          {
            id: 4,
            title: "Прикроватная тумба «Ночь»",
            description: "Компактная прикроватная тумба с бесшумным доводчиком",
            price: "от 8 000 ₽",
            image: "/тумба-ночь.png?height=300&width=400",
          },
          {
            id: 5,
            title: "Туалетный столик «Венеция»",
            description: "Элегантный туалетный столик с зеркалом и LED подсветкой",
            price: "от 25 000 ₽",
            image: "/столик-венеция.png?height=300&width=400",
          },
          {
            id: 6,
            title: "Матрас «Здоровый сон»",
            description: "Ортопедический матрас средней жесткости с независимым пружинным блоком",
            price: "от 15 000 ₽",
            image: "/матрас-здоровый-сон.png?height=300&width=400",
          },
        ]}
      />
      <Script id="bedroom-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Спальни на заказ в Твери",
            "description": "Изготовление мебели для спальни любой сложности: кровати, шкафы-купе, комоды, тумбы. Качественные материалы, современный дизайн.",
            "brand": {
              "@type": "Brand",
              "name": "Мебельщик Тверь"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "8000",
              "highPrice": "150000",
              "priceCurrency": "RUB",
              "offerCount": "25",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Кровати двуспальные",
                  "price": "35000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Шкафы-купе",
                  "price": "30000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "37"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
