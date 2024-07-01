import { model, Schema } from 'mongoose'
import { ITestimonial } from './testimonial.interface'

const TestimonialSchema = new Schema<ITestimonial>({
  authorName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
})

export const Testimonial = model<ITestimonial>('Testimonial', TestimonialSchema)
