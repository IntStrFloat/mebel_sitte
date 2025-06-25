import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Качественная мебель для вашего дома в Твери
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Создаем уникальную мебель по индивидуальным заказам в Твери и Тверской области. Качественные материалы,
                современный дизайн, доступные цены.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="px-8">
                <Link href="#contact">Заказать звонок</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href="#categories">Смотреть каталог</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src="/main.jpeg?height=600&width=800"
              alt="Современная мебель для гостиной в Твери"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
