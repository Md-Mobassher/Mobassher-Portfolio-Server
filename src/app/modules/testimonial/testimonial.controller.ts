import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TestimonialServices } from './testimonial.service'

const createTestimonial = catchAsync(async (req, res) => {
  const result = await TestimonialServices.createTestimonial(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial is created succesfully',
    data: result,
  })
})

const getAllTestimonials = catchAsync(async (req, res) => {
  const result = await TestimonialServices.getAllTestimonials()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial is retrieved succesfully',
    data: result,
  })
})
const updateTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TestimonialServices.updateTestimonial(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial is updated succesfully',
    data: result,
  })
})

const deleteTestimonial = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await TestimonialServices.deleteTestimonial(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial is deleted succesfully',
    data: result,
  })
})

export const TestimonialControllers = {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
}
