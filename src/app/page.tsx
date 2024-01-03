import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Stripe from 'stripe'

import { Carousel } from '@/components/carousel'
import { stripe } from '@/lib/stripe'
import { priceFormatter } from '@/utils/formatter'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

async function getProducts(): Promise<Product[]> {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter((price.unit_amount || 0) / 100),
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return <Carousel products={products} />
}
