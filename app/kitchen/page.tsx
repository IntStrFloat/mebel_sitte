import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Кухни на заказ в Твери | Цены от 45000₽ | Дизайн-проект бесплатно | Мебельщик",
  description: "⭐ Изготовление кухонь на заказ в Твери: модульные кухни, кухонные гарнитуры, встроенные кухни. ✅ Рассрочка 0% ✅ Гарантия 2 года ✅ Бесплатный замер и дизайн-проект ⚡ Сроки от 14 дней ☎ +7 (915) 722-00-75",
  keywords: "кухни Тверь, кухни на заказ Тверь, кухонные гарнитуры Тверь, модульные кухни Тверь, кухни недорого Тверь, встроенные кухни Тверь, угловые кухни Тверь, прямые кухни Тверь, кухни от производителя Тверь, дизайн кухни Тверь",
  openGraph: {
    title: "Кухни на заказ в Твери | Цены от производителя | Мебельщик",
    description: "Изготовление кухонь на заказ в Твери: модульные кухни от 45000₽, встроенные кухни, кухонные гарнитуры. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/kitchen",
    type: "website",
  },
}

export default function KitchenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryPage
        title="Кухни на заказ в Твери"
        description="Изготовление кухонных гарнитуров любой сложности: прямые, угловые, П-образные. Фасады МДФ, пластик, массив. Встроенная техника. Рассрочка 0%."
        image="/кухни-на-заказ-тверь.jpg?height=600&width=800"
        products={[
          {
            id: 1,
            title: "Кухонный гарнитур «Модерн»",
            description: "Современный кухонный гарнитур с фасадами из МДФ и встроенной техникой",
            price: "от 80 000 ₽",
            image: "/кухонный-гарнитур-модерн.png?height=300&width=400",
          },
          {
            id: 2,
            title: "Угловая кухня «Комфорт»",
            description: "Удобная угловая кухня с барной стойкой и системой хранения",
            price: "от 95 000 ₽",
            image: "/угловая-кухня-комфорт.png?height=300&width=400",
          },
          {
            id: 3,
            title: "Прямая кухня «Классика»",
            description: "Классическая прямая кухня с фасадами из массива",
            price: "от 65 000 ₽",
            image: "/прямая-кухня-классика.png?height=300&width=400",
          },
          {
            id: 4,
            title: "П-образная кухня «Премиум»",
            description: "Просторная П-образная кухня с островом и подсветкой",
            price: "от 120 000 ₽",
            image: "/п-образная-кухня-премиум.png?height=300&width=400",
          },
        ]}
      />
      <Script id="kitchen-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Кухни на заказ в Твери",
            "description": "Изготовление кухонных гарнитуров любой сложности: прямые, угловые, П-образные. Фасады МДФ, пластик, массив. Встроенная техника.",
            "brand": {
              "@type": "Brand",
              "name": "Мебельщик Тверь"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "45000",
              "highPrice": "200000",
              "priceCurrency": "RUB",
              "offerCount": "20",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Прямые кухни",
                  "price": "45000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Угловые кухни",
                  "price": "65000",
                  "priceCurrency": "RUB",
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "43"
            }
          }
        `}
      </Script>
      <ContactForm />
      <Footer />
    </main>
  )
}
