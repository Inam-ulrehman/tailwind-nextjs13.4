import dbConnect from '@/lib/dbConnect'
import sample from '@/models/Sample'

import { NextResponse } from 'next/server'

// =============GET============== //

export async function GET(request, res) {
  await dbConnect()
  const result = await sample.find({}).sort('-createdAT')

  return NextResponse.json({ msg: 'hello', result }, { status: 200 })
}
// ============================== //
