import Image from "next/image"
import { CheckCircle } from "lucide-react"

const advantages = [
  "Собственное производство в Твери",
  "Качественные материалы от проверенных поставщиков",
  "Гарантия 2 года на всю мебель",
  "Бесплатная доставка по Твери от 10 000 ₽",
  "Индивидуальный подход к каждому клиенту",
  "Опыт работы на рынке Твери более 10 лет",
]

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/о-нас.png?height=500&width=700"
              alt="Наше производство мебели в Твери"
              fill
              className="object-cover rounded-lg"
              itemProp="image"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" itemProp="name">
              О компании «Мебельщик Тверь»
            </h2>
            <div itemProp="description">
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                Компания «Мебельщик Тверь» специализируется на производстве качественной мебели для дома и офиса в Твери
                и Тверской области. Мы работаем на рынке более 10 лет и за это время завоевали доверие тысяч клиентов.
              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg mt-4">
                Наша миссия — создавать комфортное пространство для жизни и работы жителей Твери и области, предлагая
                мебель, которая сочетает в себе функциональность, эстетику и доступную цену.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="hidden">
              <meta itemProp="streetAddress" content="ул. Мебельная, д. 1" />
              <meta itemProp="addressLocality" content="Тверь" />
              <meta itemProp="addressRegion" content="Тверская область" />
              <meta itemProp="postalCode" content="170000" />
              <meta itemProp="addressCountry" content="RU" />
            </div>
            <meta itemProp="telephone" content="+74822123456" />
            <meta itemProp="email" content="mebelshik69@mail.ru" />
          </div>
        </div>
      </div>
    </section>
  )
}
