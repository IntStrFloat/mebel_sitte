import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Truck, CreditCard, Clock, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Доставка и оплата - Мебельщик",
  description: "Информация о доставке и оплате мебели. Быстрая доставка, удобные способы оплаты.",
  keywords: "доставка мебели, оплата мебели, способы оплаты, сроки доставки",
}

export default function DeliveryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Доставка и оплата</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Информация о доставке и способах оплаты мебели
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Доставка</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Truck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Зона доставки</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Мы осуществляем доставку по Москве и Московской области. Доставка в другие регионы обсуждается
                    индивидуально.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Сроки доставки</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Сроки доставки зависят от наличия товара на складе и составляют от 1 до 14 дней. Точные сроки
                    доставки сообщаются менеджером при оформлении заказа.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Условия доставки</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Доставка осуществляется до подъезда. Подъем на этаж и сборка оплачиваются дополнительно. Стоимость
                    доставки зависит от удаленности адреса и габаритов мебели.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Бесплатная доставка</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    При заказе на сумму от 50 000 рублей доставка по Москве осуществляется бесплатно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="payment" className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Оплата</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Способы оплаты</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Мы принимаем оплату наличными, банковскими картами, банковским переводом и через онлайн-платежи.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Предоплата</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Для заказа мебели требуется внести предоплату в размере 50% от стоимости заказа. Оставшаяся сумма
                    оплачивается при получении товара.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Рассрочка</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Мы предлагаем возможность покупки мебели в рассрочку. Условия рассрочки обсуждаются индивидуально с
                    менеджером.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Безопасность платежей</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Все платежи проходят через защищенные каналы связи. Мы гарантируем безопасность ваших персональных
                    данных.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
