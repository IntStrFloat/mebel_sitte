import { CheckCircle, Truck, Clock, CreditCard } from "lucide-react"

export default function LocalAdvantages() {
  return (
    <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Почему выбирают нас в Твери</h2>
            <p className="max-w-[900px] text-gray-500 md:text-lg dark:text-gray-400">
              Мы предлагаем лучшие условия для покупки мебели в Твери и Тверской области
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <CheckCircle className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">Собственное производство в Твери</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Мы производим мебель на собственной фабрике в Твери, что позволяет контролировать качество и сроки
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <Truck className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">Быстрая доставка по Твери</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Доставляем мебель по Твери и области  собственным  транспортом.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">Изготовление от 7 дней</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Благодаря налаженному производству в Твери, мы изготавливаем мебель в кратчайшие сроки
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <CreditCard className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">Удобная оплата</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Принимаем наличный и безналичный расчёт. (Отсрочку не даём)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
