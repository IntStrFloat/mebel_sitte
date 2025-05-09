import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Офисная мебель на заказ в Твери | Цены от 25000₽ | Мебельщик",
  description: "💼 Офисная мебель на заказ в Твери: столы от 25000₽, шкафы от 30000₽, тумбы от 15000₽. ✅ Бесплатный дизайн-проект ✅ Рассрочка 0% ✅ Гарантия 2 года ⚡ Доставка и сборка ☎ +7 (915) 722-00-75",
  keywords: "офисная мебель Тверь, мебель для офиса Тверь, офисные столы Тверь, офисные шкафы Тверь, офисные тумбы Тверь, рабочие места Тверь, кабинет руководителя Тверь, офисные кресла Тверь, мебель для персонала Тверь",
  openGraph: {
    title: "Офисная мебель на заказ в Твери | Мебельщик",
    description: "Изготовление офисной мебели в Твери: столы от 25000₽, шкафы, тумбы. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
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
