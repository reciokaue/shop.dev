import { stripe } from '@/lib/stripe'
export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: Request) {
  const { priceId } = (await req.json()) as any

  if (!priceId) {
    return Response.json({ message: 'Missing data', error: 400 })
  }

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
  })

  return Response.json({
    checkoutUrl: checkoutSession.url,
    status: 201,
    checkoutSession,
  })
}
