import mongoose from 'mongoose'

const SampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    // price: {
    //   type: Number,
    //   required: [true, 'Please provide price'],
    //   min: 3,
    //   max: 1000,
    // },
    // image: {
    //   type: String,
    //   required: [true, 'Please provide image'],
    //   maxLength: 100,
    // },
    // company: {
    //   type: String,
    //   required: [true, 'Please provide company'],
    //   maxLength: 100,
    // },
    // description: {
    //   type: String,
    //   required: [true, 'Please provide description'],
    //   maxLength: 100,
    // },
    // category: {
    //   type: String,
    //   required: [true, 'Please provide category'],
    //   maxLength: 100,
    // },
    // shipping: {
    //   type: Boolean,
    //   enum: [true, false],
    //   default: false,
    // },
    // quantity: {
    //   type: Number,
    //   required: [true, 'Please provide quantity'],
    //   max: 1000,
    // },

    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Please provide user'],
    // },
  },
  { timestamps: true }
)

export default mongoose.models.Sample || mongoose.model('Sample', SampleSchema)
