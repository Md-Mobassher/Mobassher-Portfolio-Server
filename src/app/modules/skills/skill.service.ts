import { ISkill } from './skill.interface'
import { Skill } from './skill.model'

const create = async (payload: ISkill) => {
  const result = await Skill.create(payload)
  return result
}

const getAllSkills = async () => {
  const result = await Skill.find()
  return result
}

const updateSkill = async (id: string, payload: Partial<ISkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload)
  return result
}

const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id)
  return result
}

export const SkillServices = {
  create,
  getAllSkills,
  updateSkill,
  deleteSkill,
}
