import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Samples from '@/models/Samples'
import { StatusCodes } from 'http-status-codes'
export async function GET(request, res) {
  await dbConnect()

  try {
    const result = await Samples.find()
    return new Response(
      JSON.stringify({ success: true, msg: 'success.', result }),
      {
        status: StatusCodes.OK,
      }
    )
  } catch (error) {
    return mongooseErrorHandler(error)
  }
  // const result = ''
}
