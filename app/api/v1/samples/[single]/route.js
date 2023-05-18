import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Samples from '@/models/Samples'
import { StatusCodes } from 'http-status-codes'

// =======single==========
export async function GET(request, res) {
  await dbConnect()
  const pathName = request.nextUrl.pathname
  const _id = pathName.split('samples/')[1]

  try {
    const result = await Samples.findById({ _id })

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
// =======delete==========
export async function DELETE(request, res) {
  await dbConnect()
  const pathName = request.nextUrl.pathname
  const _id = pathName.split('samples/')[1]

  try {
    const result = await Samples.findByIdAndDelete({ _id })
    if (!result) {
      return new Response(
        JSON.stringify({ success: false, msg: 'No Result found.', result }),
        {
          status: StatusCodes.NOT_FOUND,
        }
      )
    }
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
