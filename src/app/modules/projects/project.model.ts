import { model, Schema } from 'mongoose'
import { IProject } from './project.interface'

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: [String], required: true },
  technology: { type: [String], required: true },
  image: {
    cover: { type: String },
    landing: { type: String },
  },
  liveUrl: { type: String, required: true },
  clientUrl: { type: String },
  serverUrl: { type: String },
})

export const Project = model<IProject>('Project', projectSchema)
