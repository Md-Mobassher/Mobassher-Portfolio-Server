import { IProject } from './project.interface'
import { Project } from './project.model'

const createProject = async (payload: IProject) => {
  payload.position = Number(payload.position)
  if (!payload.position) {
    payload.position = await Project.countDocuments()
  }

  const result = await Project.create(payload)
  return result
}

const getAllProjects = async () => {
  const result = await Project.find().sort('position')
  // console.log(result)
  return result
}

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

const updateProject = async (id: string, payload: Partial<IProject>) => {
  // console.log(payload)
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteProject = async (id: string) => {
  await Project.findByIdAndDelete(id)
  return null
}

export const ProjectServices = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
