import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Анна Иванова",
    location: "Тверь, Центральный район",
    rating: 5,
    text: "Заказывала кухонный гарнитур. Очень довольна качеством и сроками изготовления. Доставили вовремя, собрали аккуратно. Рекомендую всем в Твери!",
    image: "/ava.png?height=100&width=100",
    date: "15.03.2023",
  },
  {
    id: 3,
    name: "Елена Смирнова",
    location: "Конаково, Тверская область",
    rating: 4,
    text: "Заказывала спальный гарнитур. Несмотря на то, что живу не в Твери, а в области, доставили быстро. Качеством довольна, буду обращаться еще.",
    image: "/ava.png?height=100&width=100",
    date: "10.07.2023",
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    location: "Тверь, Заволжский район",
    rating: 5,
    text: "Заказывал офисную мебель для компании в Твери. Все сделали в срок, качество на высоте. Отдельное спасибо за индивидуальный подход!",
    image: "/ava.png?height=100&width=100",
    date: "25.09.2023",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Отзывы наших клиентов</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Что говорят о нас жители Твери и Тверской области
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Первый ряд - 2 отзыва */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card
                key={testimonial.id}
                className="overflow-hidden transition-all hover:shadow-lg hover:scale-105"
                itemScope
                itemType="http://schema.org/Review"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        itemProp="author"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold" itemProp="author">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400" itemProp="locationCreated">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
                      />
                    ))}
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-3" itemProp="reviewBody">
                    {testimonial.text}
                  </p>

                  <p className="text-xs text-gray-400 dark:text-gray-500" itemProp="datePublished">
                    {testimonial.date}
                  </p>

                  <meta itemProp="itemReviewed" content="Мебельщик Тверь" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Второй ряд - 1 отзыв по центру */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Card
                className="overflow-hidden transition-all hover:shadow-lg hover:scale-105"
                itemScope
                itemType="http://schema.org/Review"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[2].image || "/placeholder.svg"}
                        alt={testimonials[2].name}
                        fill
                        className="object-cover"
                        itemProp="author"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold" itemProp="author">
                        {testimonials[2].name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400" itemProp="locationCreated">
                        {testimonials[2].location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[2].rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
                      />
                    ))}
                    <meta itemProp="ratingValue" content={testimonials[2].rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-3" itemProp="reviewBody">
                    {testimonials[2].text}
                  </p>

                  <p className="text-xs text-gray-400 dark:text-gray-500" itemProp="datePublished">
                    {testimonials[2].date}
                  </p>

                  <meta itemProp="itemReviewed" content="Мебельщик Тверь" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}