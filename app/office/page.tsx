import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"
import OfficeWorks from "@/components/office-works"

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
    <>
      <Header />
      <OfficeWorks />
      <Footer />
    </>
  )
}
