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
  title: "Мебельщик Тверь - Качественная мебель на заказ в Твери и Тверской области",
  description:
    "Широкий выбор мебели для дома и офиса в Твери. Собственное производство, доставка по Твери и Тверской области. Индивидуальный подход, качественные материалы, доступные цены.",
  openGraph: {
    title: "Мебельщик Тверь - Качественная мебель на заказ в Твери и Тверской области",
    description:
      "Широкий выбор мебели для дома и офиса в Твери. Собственное производство, доставка по Твери и Тверской области.",
    url: "https://mebelshik-tver.ru",
    siteName: "Мебельщик Тверь",
    locale: "ru_RU",
    type: "website",
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
            "name": "Мебельщик",
            "image": "https://mebelhik.ru/logo.png",
            "description": "Производство и продажа мебели на заказ в Твери: кухонные гарнитуры, шкафы-купе, спальни, гостиные",
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
            "currenciesAccepted": "RUB"
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
