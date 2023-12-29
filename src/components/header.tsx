export function Header() {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] items-center justify-start gap-2 py-4">
      <img src="/IgniteLogo.svg" alt="" />
      <div className="flex">
        <h1 className="font-bold leading-tight">
          Shop
          <span className="text-sm font-normal">.dev</span>
        </h1>
      </div>
    </div>
  )
}
