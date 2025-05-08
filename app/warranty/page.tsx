import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShieldCheck, FileText, AlertCircle, CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Гарантия - Мебельщик",
  description: "Информация о гарантии на мебель. Условия гарантийного обслуживания, сроки гарантии.",
  keywords: "гарантия на мебель, гарантийное обслуживание, сроки гарантии, качество мебели",
}

export default function WarrantyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Гарантия</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Информация о гарантийном обслуживании мебели
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Гарантийный срок</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    На всю мебель мы предоставляем гарантию 24 месяца с момента покупки. В течение этого срока мы
                    бесплатно устраняем дефекты, возникшие по вине производителя.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Гарантийный талон</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    При покупке мебели вы получаете гарантийный талон, который необходимо сохранять в течение всего
                    гарантийного срока. В гарантийном талоне указываются дата покупки, наименование товара и условия
                    гарантии.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Гарантийное обслуживание</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Гарантийное обслуживание включает в себя бесплатный ремонт или замену деталей, вышедших из строя по
                    вине производителя. В случае невозможности ремонта мы заменим товар на аналогичный или вернем
                    деньги.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Условия гарантии</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Гарантия не распространяется на повреждения, возникшие в результате неправильной эксплуатации,
                    механических повреждений, естественного износа, а также на изделия, подвергшиеся самостоятельному
                    ремонту или модификации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Правила эксплуатации мебели</h2>
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              Для сохранения мебели в хорошем состоянии и продления срока ее службы рекомендуется соблюдать следующие
              правила:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Использовать мебель по назначению</li>
              <li>Не подвергать мебель воздействию высоких температур и влажности</li>
              <li>Не ставить на поверхность мебели горячие предметы</li>
              <li>Не использовать абразивные чистящие средства</li>
              <li>Не допускать попадания на мебель агрессивных жидкостей (кислот, щелочей, растворителей)</li>
              <li>Не подвергать мебель механическим нагрузкам, превышающим допустимые</li>
              <li>Регулярно проводить профилактический осмотр и подтягивать крепежные элементы</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
