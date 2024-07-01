import { model, Schema } from 'mongoose'
import { ISkill } from './skill.interface'

const skillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  proficiencyLevel: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

export const Skill = model<ISkill>('Skill', skillSchema)
