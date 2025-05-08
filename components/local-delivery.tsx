import { Truck, MapPin, Clock, CheckCircle } from "lucide-react"

const deliveryAreas = [
  { city: "Тверь", time: "1-2 дня", price: "Бесплатно от 10 000 ₽" },
  { city: "Калининский район", time: "2-3 дня", price: "от 500 ₽" },
  { city: "Конаково", time: "2-3 дня", price: "от 1000 ₽" },
  { city: "Торжок", time: "2-3 дня", price: "от 1000 ₽" },
  { city: "Вышний Волочек", time: "3-4 дня", price: "от 1500 ₽" },
  { city: "Ржев", time: "3-4 дня", price: "от 1500 ₽" },
  { city: "Кимры", time: "2-3 дня", price: "от 1200 ₽" },
  { city: "Бологое", time: "3-4 дня", price: "от 1800 ₽" },
]

export default function LocalDelivery() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Доставка по Твери и области</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Мы осуществляем доставку мебели по Твери и всей Тверской области. Быстро, надежно, с гарантией
              сохранности.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Truck className="h-6 w-6 text-primary mr-2" />
              Условия доставки
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Доставка осуществляется в согласованное с вами время</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Подъем на этаж и сборка оплачиваются дополнительно</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>При заказе от 50 000 ₽ сборка в Твери бесплатно</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Возможен самовывоз со склада в Твери</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-2" />
              Сроки доставки
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>По Твери: 1-2 рабочих дня</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>По Тверской области: 2-4 рабочих дня</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Срочная доставка по Твери в день заказа (при наличии товара)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Доставка в выходные дни по предварительной договоренности</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <MapPin className="h-6 w-6 text-primary mr-2" />
            Стоимость доставки по городам Тверской области
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h4 className="font-semibold">{area.city}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Срок: {area.time}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Цена: {area.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
