import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import AboutUs from "@/components/about-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import LocalDelivery from "@/components/local-delivery"
import Testimonials from "@/components/testimonials"
import LocalMap from "@/components/local-map"
import LocalAdvantages from "@/components/local-advantages"

export const metadata: Metadata = {
  title: "Мебель на заказ в Твери | Кухни, шкафы-купе, спальни от производителя | Цены от 15000₽ | Мебельщик",
  description: "❤️ Производство мебели на заказ в Твери: кухни от 45000₽, шкафы-купе от 30000₽, спальни от 35000₽. ✅ Бесплатный замер ✅ Рассрочка 0% ✅ Гарантия 2 года ⭐ Более 1000 довольных клиентов! ☎ +7 (915) 722-00-75",
  keywords: "мебель Тверь, кухни Тверь недорого, шкафы купе Тверь цены, спальни Тверь от производителя, мебель на заказ Тверь, кухни на заказ Тверь, мебельная фабрика Тверь, мебельщик Тверь, купить мебель в Твери, изготовление мебели Тверь",
  openGraph: {
    title: "Мебель на заказ в Твери | Кухни, шкафы-купе, спальни от производителя | Мебельщик",
    description: "Производство мебели на заказ в Твери: кухни от 45000₽, шкафы-купе от 30000₽, спальни от 35000₽. Бесплатный замер, рассрочка 0%, гарантия 2 года. Более 1000 довольных клиентов!",
    url: "https://mebelhik.ru",
    siteName: "Мебельщик Тверь - Мебель на заказ",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://mebelhik.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Мебель на заказ в Твери от производителя",
      }
    ],
  },
}

export default function Home() {
  return (
    <>
      <Script id="schema-markup" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Мебельщик Тверь",
            "image": "https://mebelhik.ru/logo.svg",
            "description": "Производство и продажа мебели на заказ в Твери: кухонные гарнитуры, шкафы-купе, спальни, гостиные. Работаем с 2010 года. Более 1000 выполненных заказов.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Авангардная ул., 25А",
              "addressLocality": "Тверь",
              "addressRegion": "Тверская область",
              "postalCode": "170100",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 56.859611,
              "longitude": 35.911896
            },
            "url": "https://mebelhik.ru",
            "telephone": ["+7-915-722-00-75", "+7-903-630-29-09"],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "₽₽",
            "paymentAccepted": ["cash", "credit card"],
            "currenciesAccepted": "RUB",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Мебель на заказ в Твери",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Кухонные гарнитуры",
                    "description": "Изготовление кухонных гарнитуров на заказ в Твери",
                    "priceRange": "от 45000 RUB"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Шкафы-купе",
                    "description": "Шкафы-купе на заказ в Твери",
                    "priceRange": "от 30000 RUB"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Спальные гарнитуры",
                    "description": "Спальные гарнитуры на заказ в Твери",
                    "priceRange": "от 35000 RUB"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <LocalAdvantages />
        <Categories />
        <FeaturedProducts />
        <LocalDelivery />
        <AboutUs />
        <Testimonials />
        <LocalMap />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
