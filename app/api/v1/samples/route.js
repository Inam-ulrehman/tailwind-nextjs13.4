import dbConnect from '@/lib/dbConnect'
import sample from '@/models/Sample'

import { NextResponse } from 'next/server'

// ===============POST=============== //
export async function POST(request, res) {
  await dbConnect()
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()
  const { email, password } = body

  const result = await sample.find({})

  if (!result)
    return NextResponse.json({ success: false, msg: 'empty' }, { status: 201 })

  return new Response(
    JSON.stringify({ success: true, msg: 'post', result }, { status: 200 })
  )
}

// =============GET============== //

export async function GET(request, res) {
  await dbConnect()
  const result = await sample.find({}).sort('-createdAT')

  return NextResponse.json({ msg: 'hello', result }, { status: 200 })
}
// ============================== //
