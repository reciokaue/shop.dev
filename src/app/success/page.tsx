import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <div className="mx-auto flex min-h-[656px] flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold text-gray-100">
        Compra efetuada!
      </h1>
      <figure className="mb-8 mt-16 flex h-[145px] w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        {/* <Image
          src={}
          width={114}
          height={106}
          alt=""
          className="flex-shrink-0"
        /> */}
      </figure>
      <p className="max-w-[560px] text-center text-2xl text-gray-300">
        Uhuul
        <strong> Diego Fernandes</strong>, sua
        <strong> Camiseta Beyond the Limits </strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/" className="mt-20 text-green-500 hover:text-green-300">
        Voltar ao catálogo
      </Link>
    </div>
  )
}
