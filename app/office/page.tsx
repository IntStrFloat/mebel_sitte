import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Офисная мебель Тверь | Купить офисную мебель от 25000₽ | Мебельщик",
  description: "🏢 Офисная мебель Тверь: ✅ рабочие места от 25000₽ ✅ кабинеты руководителя от 85000₽ ✅ мебель для персонала ⭐ Бесплатный дизайн-проект 🚛 Доставка и сборка ☎ +7 (915) 722-00-75",
  keywords: "офисная мебель тверь, купить офисную мебель тверь, мебель для офиса тверь, офисные столы тверь, кабинет руководителя тверь, мебель для персонала тверь, офисные кресла тверь цены, офисные шкафы тверь",
  openGraph: {
    title: "Офисная мебель Тверь | Купить от производителя | Мебельщик",
    description: "Офисная мебель в Твери: рабочие места от 25000₽, кабинеты руководителя, мебель для персонала. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/office",
    type: "website",
  },
}

export default function OfficePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Офисная мебель на заказ в Твери"
        description="Изготовление офисной мебели любой сложности: рабочие места, кабинеты руководителя, мебель для персонала. Эргономичный дизайн и надежные материалы."
        image="/офисная-мебель-тверь.jpg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Рабочее место «Эргономика»",
            description: "Эргономичный компьютерный стол с тумбой и надстройкой",
            price: "от 25 000 ₽",
            image: "/рабочее-место-эргономика.png?height=300&width=400",
          },
          {
            id: 2,
            title: "Кабинет руководителя «Престиж»",
            description: "Комплект мебели для руководителя: стол, шкаф, тумба",
            price: "от 85 000 ₽",
            image: "/кабинет-престиж.png?height=300&width=400",
          },
          {
            id: 3,
            title: "Шкаф офисный «Стандарт»",
            description: "Вместительный офисный шкаф с полками и дверцами",
            price: "от 30 000 ₽",
            image: "/шкаф-стандарт.png?height=300&width=400",
          },
          {
            id: 4,
            title: "Тумба мобильная «Офис»",
            description: "Мобильная тумба с ящиками на колесиках",
            price: "от 15 000 ₽",
            image: "/тумба-офис.png?height=300&width=400",
          },
        ]}
      />
      <Script id="office-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Офисная мебель на заказ в Твери",
            "description": "Изготовление офисной мебели любой сложности: рабочие места, кабинеты руководителя, мебель для персонала. Эргономичный дизайн и надежные материалы.",
            "brand": {
              "@type": "Brand",
              "name": "Мебельщик Тверь"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
              "highPrice": "150000",
              "priceCurrency": "RUB",
              "offerCount": "25",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Рабочие места",
                  "price": "25000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Кабинеты руководителя",
                  "price": "85000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "38"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
