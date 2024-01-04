import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  console.log('test ')

  const res = new Response(null, { status: 200 })

  return res.json({ message: 'ok' })
}
