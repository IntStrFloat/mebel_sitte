import type { Metadata } from "next"
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
  )
}
