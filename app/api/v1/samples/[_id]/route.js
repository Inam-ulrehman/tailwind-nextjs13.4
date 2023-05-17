import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import sample from '@/models/Sample'

import { NextResponse } from 'next/server'

// =============GET============== //

export async function GET(request, res) {
  const params = request.nextUrl.pathname.split('samples/')[1]

  await dbConnect()
  try {
    const result = await sample.findOne({ _id: params }).sort('-createdAT')
    return NextResponse.json({ msg: 'hello', result }, { status: 200 })
  } catch (error) {
    return mongooseErrorHandler(error)
  }
}
// ============================== //
