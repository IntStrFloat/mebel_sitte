import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Мебель для гостиной на заказ в Твери | Стенки от 40000₽ | Мебельщик",
  description: "🏠 Мебель для гостиной на заказ в Твери: стенки от 40000₽, диваны от 35000₽, журнальные столики от 15000₽. ✅ Бесплатный дизайн-проект ✅ Рассрочка 0% ✅ Гарантия 2 года ⚡ Доставка по Твери ☎ +7 (915) 722-00-75",
  keywords: "гостиная Тверь, мебель для гостиной Тверь, стенки Тверь, горки Тверь, диваны Тверь, журнальные столики Тверь, тумбы под тв Тверь, мягкая мебель Тверь, модульные стенки Тверь, гостиные под ключ Тверь",
  openGraph: {
    title: "Мебель для гостиной на заказ в Твери | Мебельщик",
    description: "Изготовление мебели для гостиной в Твери: стенки от 40000₽, диваны, журнальные столики. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/living-room",
    type: "website",
  },
}

export default function LivingRoomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Мебель для гостиной на заказ в Твери"
        description="Изготовление мебели для гостиной любой сложности: стенки, горки, диваны, журнальные столики. Современный дизайн и качественные материалы. Рассрочка 0%."
        image="/гостиная-на-заказ-тверь.jpg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Стенка «Модерн»",
            description: "Современная модульная стенка с LED подсветкой и стеклянными витринами",
            price: "от 40 000 ₽",
            image: "/стенка-модерн.png?height=300&width=400",
          },
          {
            id: 2,
            title: "Диван «Комфорт»",
            description: "Удобный раскладной диван с ортопедическим матрасом",
            price: "от 35 000 ₽",
            image: "/диван-комфорт.png?height=300&width=400",
          },
          {
            id: 3,
            title: "Журнальный столик «Стиль»",
            description: "Современный журнальный столик с дополнительной полкой",
            price: "от 15 000 ₽",
            image: "/столик-стиль.png?height=300&width=400",
          },
          {
            id: 4,
            title: "Тумба под ТВ «Медиа»",
            description: "Вместительная тумба под ТВ с выдвижными ящиками",
            price: "от 20 000 ₽",
            image: "/тумба-медиа.png?height=300&width=400",
          },
        ]}
      />
      <Script id="living-room-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Мебель для гостиной на заказ в Твери",
            "description": "Изготовление мебели для гостиной любой сложности: стенки, горки, диваны, журнальные столики. Современный дизайн и качественные материалы.",
            "brand": {
              "@type": "Brand",
              "name": "Мебельщик Тверь"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
              "highPrice": "120000",
              "priceCurrency": "RUB",
              "offerCount": "30",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Стенки для гостиной",
                  "price": "40000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Диваны",
                  "price": "35000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "52"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
