import { Types } from 'mongoose'

export interface IComment {
  author: Types.ObjectId
  content: string
  timestamp: Date
}

export interface IBlog {
  title: string
  content: string
  tags: [string]
  coverImage: string
  author: Types.ObjectId
  blogStatus: 'published' | 'draft' | 'archived'
  category: string
  comments?: IComment[]
  summary?: string
}
