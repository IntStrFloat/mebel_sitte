import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryPage from "@/components/category-page"
import ContactForm from "@/components/contact-form"
import Script from "next/script"
import KitchenWorks from "@/components/kitchen-works"

export const metadata: Metadata = {
  title: "Купить кухню в Твери | Кухни на заказ от 45000₽ | Мебельщик",
  description: "🏆 Купить кухню в Твери от производителя: ✅ модульные кухни от 45000₽ ✅ угловые кухни от 65000₽ ✅ прямые кухни ⭐ Дизайн-проект бесплатно 🚛 Доставка и установка ☎ +7 (915) 722-00-75",
  keywords: "купить кухню в твери, кухни твери цены, кухни недорого тверь, модульные кухни тверь, угловые кухни тверь, кухонный гарнитур тверь, кухни от производителя тверь, заказать кухню тверь",
  openGraph: {
    title: "Купить кухню в Твери | Цены от производителя | Мебельщик",
    description: "Купить кухню на заказ в Твери: модульные кухни от 45000₽, угловые кухни, прямые кухни. Бесплатный замер и дизайн-проект. Гарантия 2 года.",
    url: "https://mebelhik.ru/kitchen",
    type: "website",
  },
}

export default function KitchenPage() {
  return (
    <>
      <Header />
      <KitchenWorks />
      <Footer />
    </>
  )
}
