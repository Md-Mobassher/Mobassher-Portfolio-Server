import { ISkill } from './skill.interface'
import { Skill } from './skill.model'

const createSkill = async (payload: ISkill) => {
  const result = await Skill.create(payload)
  return result
}

const getAllSkills = async () => {
  const result = await Skill.find()
  return result
}

const updateSkill = async (id: string, payload: Partial<ISkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteSkill = async (id: string) => {
  await Skill.findByIdAndDelete(id)
  return null
}

export const SkillServices = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
}
