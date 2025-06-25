import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"
import BedroomWorks from "@/components/bedroom-works"

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
    <>
      <Header />
      <BedroomWorks />
      <Footer />
    </>
  )
}
