import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const name = body.name

  return NextResponse.json({ name }, { status: 200 })
}
