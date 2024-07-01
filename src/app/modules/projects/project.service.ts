import { IProject } from './project.interface'
import { Project } from './project.model'

const createProject = async (payload: IProject) => {
  const result = await Project.create(payload)
  return result
}

const getAllProjects = async () => {
  const result = await Project.find()
  return result
}

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

const updateProject = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload)
  return result
}

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id)
  return result
}

export const ProjectServices = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
