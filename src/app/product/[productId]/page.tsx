import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { priceFormatter } from '@/utils/formatter'

interface Params {
  params: {
    productId: string
  }
}

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

export async function generateStaticParams() {
  return [
    { productId: 'prod_PIXZakM7TGc2oW' },
    { productId: 'prod_PIXY66LwibRXFB' },
    { productId: 'prod_PIXXeMqGr5mvOd' },
    { productId: 'prod_PIXUInPQIUZcXV' },
    { productId: 'prod_PIXTHdFPWXljah' },
  ]
}

async function getProduct(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: priceFormatter((price.unit_amount || 0) / 100),
    description: product.description,
    defaultPriceId: price.id,
  }
}

export default async function Product({ params }: Params) {
  const product = await getProduct(params.productId)

  return (
    <main className="mx-auto grid w-full max-w-[1180px] grid-cols-2 items-stretch gap-16">
      <figure className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image
          src={product.imageUrl}
          alt=""
          width={520}
          height={480}
          className="not object-cover"
        />
      </figure>
      <aside className="flex flex-col">
        <h1 className="text-[2rem] font-bold text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-[2rem] text-green-300">
          {product.price}
          {product.defaultPriceId}
        </span>
        <p className="mt-10 text-lg leading-relaxed text-gray-300">
          {product.description}
        </p>

        <button className="mt-auto cursor-pointer rounded-lg bg-green-500 p-5 font-bold text-white hover:bg-green-300">
          Comprar agora
        </button>
      </aside>
    </main>
  )
}
