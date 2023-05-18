import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Samples from '@/models/Samples'

import { StatusCodes } from 'http-status-codes'

export async function POST(request, res) {
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()
  await dbConnect()
  const { name, city, lastName } = body

  try {
    const result = await Samples.create({ name, city, lastName })
    return new Response(
      JSON.stringify({ success: true, msg: 'success.', result }),
      {
        status: StatusCodes.OK,
      }
    )
  } catch (error) {
    return mongooseErrorHandler(error)
  }
}
