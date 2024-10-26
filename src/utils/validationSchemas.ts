import { z } from 'zod'

// * Post Schema

export const postSchema = z.object({
  title: z
    .string({
      required_error: 'title is required',
      invalid_type_error: 'title type should be a string',
    })
    .min(2, { message: 'title length should be more of 2 characters' })
    .max(200),
  description: z
    .string({
      required_error: 'description is required',
      invalid_type_error: 'description type should be a string',
    })
    .min(4),
})
