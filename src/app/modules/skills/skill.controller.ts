import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SkillServices } from './skill.service'

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkill(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created succesfully',
    data: result,
  })
})

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkills()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is retrieved succesfully',
    data: result,
  })
})
const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SkillServices.updateSkill(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is updated succesfully',
    data: result,
  })
})

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SkillServices.deleteSkill(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted succesfully',
    data: result,
  })
})

export const SkillControllers = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
}
