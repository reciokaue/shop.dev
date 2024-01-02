import Stripe from 'stripe'

import { Carousel } from '@/components/carousel'
import { stripe } from '@/lib/stripe'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

export default async function Home() {
  const products = await getProducts()

  return <Carousel products={products} />
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return products
}
