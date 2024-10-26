'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { DOMAIN } from '@/utils/constant'
import { redirect, useRouter } from 'next/navigation'
import { Post } from '@prisma/client'

interface EditPostFormProps {
  post: Post
}

const EditPostForm = ({ post }: EditPostFormProps) => {
  const router = useRouter()
  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.put(`${DOMAIN}/api/posts/${post.id}`, {
        title,
        description,
      })
      router.refresh()
      setTimeout(() => {
        router.back()
      }, 500)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold"
      >
        Edit
      </button>
    </form>
  )
}

export default EditPostForm
