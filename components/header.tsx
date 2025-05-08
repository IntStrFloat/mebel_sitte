"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (pathname !== "/") {
      router.push("/")
      // Даем время для перехода на главную страницу
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-950/95" : "bg-transparent",
      )}
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary" itemProp="name">
            Мебельщик Тверь
          </span>
        </Link>
        <nav className="hidden md:flex gap-6" itemScope itemType="http://schema.org/SiteNavigationElement">
          <a
            href="#categories"
            onClick={(e) => handleNavigation(e, "#categories")}
            className="text-sm font-medium hover:text-primary transition-colors"
            itemProp="url"
          >
            <span itemProp="name">Каталог</span>
          </a>
          <a
            href="#featured"
            onClick={(e) => handleNavigation(e, "#featured")}
            className="text-sm font-medium hover:text-primary transition-colors"
            itemProp="url"
          >
            <span itemProp="name">Популярные модели</span>
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavigation(e, "#about")}
            className="text-sm font-medium hover:text-primary transition-colors"
            itemProp="url"
          >
            <span itemProp="name">О нас</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "#contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
            itemProp="url"
          >
            <span itemProp="name">Контакты</span>
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="tel:+74822123456" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span>+7 (915) 722-00-75</span>
          </Link>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")}>
              Заказать звонок
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">Мебельщик Тверь</span>
                </Link>
                <nav className="flex flex-col gap-4" itemScope itemType="http://schema.org/SiteNavigationElement">
                  <a
                    href="#categories"
                    onClick={(e) => handleNavigation(e, "#categories")}
                    className="text-base font-medium hover:text-primary transition-colors"
                    itemProp="url"
                  >
                    <span itemProp="name">Каталог</span>
                  </a>
                  <a
                    href="#featured"
                    onClick={(e) => handleNavigation(e, "#featured")}
                    className="text-base font-medium hover:text-primary transition-colors"
                    itemProp="url"
                  >
                    <span itemProp="name">Популярные модели</span>
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavigation(e, "#about")}
                    className="text-base font-medium hover:text-primary transition-colors"
                    itemProp="url"
                  >
                    <span itemProp="name">О нас</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavigation(e, "#contact")}
                    className="text-base font-medium hover:text-primary transition-colors"
                    itemProp="url"
                  >
                    <span itemProp="name">Контакты</span>
                  </a>
                </nav>
                <Link href="tel:+74822123456" className="flex items-center gap-2 text-base font-medium">
                  <Phone className="h-4 w-4" />
                  <span>+7 (915) 722-00-75</span>
                </Link>
                <Button asChild>
                  <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")}>
                    Заказать звонок
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
