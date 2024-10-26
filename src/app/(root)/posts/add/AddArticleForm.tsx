'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { DOMAIN } from '@/utils/constant'
import { useRouter } from 'next/navigation'

const AddPostForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post(`${DOMAIN}/api/posts`, { title, description })
      setTitle('')
      setDescription('')

      router.refresh()
      setTimeout(() => {
        router.back()
      }, 500)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col bg-slate-300">
      <input
        className="mb-4 border rounded p-2 text-xl bg-slate-100"
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none bg-slate-100"
        rows={5}
        placeholder="Enter Post Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="text-2xl text-white bg-green-600 hover:bg-green-700 p-2 rounded-lg font-bold"
      >
        Add
      </button>
    </form>
  )
}

export default AddPostForm
