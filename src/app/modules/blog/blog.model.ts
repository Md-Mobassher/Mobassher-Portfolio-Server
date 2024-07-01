import { model, Schema } from 'mongoose'
import { IBlog, IComment } from './blog.interface'

const commentSchema = new Schema<IComment>(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
)

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    coverImage: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    blogStatus: {
      type: String,
      enum: ['published', 'draft', 'archived'],
      required: true,
      default: 'draft',
    },
    category: { type: String, required: true },
    comments: { type: [commentSchema] },
    summary: { type: String },
  },
  { timestamps: true },
)

export const Blog = model<IBlog>('Blog', blogSchema)
