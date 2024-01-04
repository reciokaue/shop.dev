'use client'

import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

interface CheckoutButtonProps {
  priceId: string
}

export function CheckoutButton({ priceId }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleBuyProduct() {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/checkout', {
        priceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar uma ferramenta de observabilidade (Datadog / Sentry)
      setIsLoading(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <button
      onClick={handleBuyProduct}
      // disabled={isLoading}
      className="mt-auto flex cursor-pointer items-center justify-center rounded-lg bg-green-500 p-5 font-bold text-white hover:bg-green-300 disabled:opacity-75"
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        'Comprar agora'
      )}
    </button>
  )
}
