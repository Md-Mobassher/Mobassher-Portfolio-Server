import { ITestimonial } from './testimonial.interface'
import { Testimonial } from './testimonial.model'

const createTestimonial = async (payload: ITestimonial) => {
  console.log(payload)
  const result = await Testimonial.create(payload)
  return result
}

const getAllTestimonials = async () => {
  const result = await Testimonial.find()
  return result
}

const updateTestimonial = async (
  id: string,
  payload: Partial<ITestimonial>,
) => {
  const result = await Testimonial.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTestimonial = async (id: string) => {
  await Testimonial.findByIdAndDelete(id)
  return null
}

export const TestimonialServices = {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
}
