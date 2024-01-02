'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselProps {
  products?: any[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16 * 3, // 3rem
    },
  })

  return (
    <div
      ref={sliderRef}
      className="keen-slider ml-auto mt-8 flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {products &&
        products.map((product) => (
          <Link
            href={``}
            key={product.id}
            className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt="camiseta"
              className="object-cover"
            />

            <footer className="absolute bottom-1 left-1 right-1 flex translate-y-full items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8  opacity-0 transition-all duration-200  ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <strong className="text-xl">{product.name}</strong>
              <span className="text-2xl font-bold text-green-300">
                R$ {product.price}
              </span>
            </footer>
          </Link>
        ))}
    </div>
  )
}