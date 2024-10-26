import { Post } from '@prisma/client'
import EditPostForm from './EditArticleFrom'
import { getSinglePost } from '@/apiCalls/postsApiCall'
import Link from 'next/link'

interface EditPostPageProps {
  params: { postId: string }
}

const EditArticlePage = async ({ params }: EditPostPageProps) => {
  const post: Post = await getSinglePost(params.postId)

  return (
    <section className="fix-height w-full flex items-center justify-center px-5 lg:px-20">
      <div className="shadow p-4 bg-purple-200 rounded w-full">
        <h2 className="text-2xl text-blue-700 font-semibold mb-4">
          Edit Article
        </h2>
        <EditPostForm post={post} />
      </div>
    </section>
  )
}

export default EditArticlePage
