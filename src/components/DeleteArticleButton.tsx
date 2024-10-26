'use client'
import { DOMAIN } from '@/utils/constant'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface DeletePostButtonProps {
  postId: number
}

const DeleteArticleButton = ({ postId }: DeletePostButtonProps) => {
  const router = useRouter()

  const deleteArticleHandler = async () => {
    try {
      if (confirm('you want to delete this post, Are you sure?')) {
        await axios.delete(`${DOMAIN}/api/posts/${postId}`)
        router.refresh()
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div
      onClick={deleteArticleHandler}
      className="bg-red-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-red-800 transition"
    >
      Delete
    </div>
  )
}

export default DeleteArticleButton
