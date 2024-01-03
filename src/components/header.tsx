import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] items-center justify-start gap-2 py-8">
      <Link href="/" className="flex items-center justify-start gap-2">
        <Image src="/IgniteLogo.svg" width={52} height={52} alt="" />
        <div className="flex">
          <h1 className="font-bold leading-tight">
            Shop
            <span className="text-sm font-normal">.dev</span>
          </h1>
        </div>
      </Link>
    </div>
  )
}
