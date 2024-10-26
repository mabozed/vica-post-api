//import { getSingleArticle } from "@/apiCalls/articleApiCall";
import { getSinglePost } from '@/apiCalls/postsApiCall'
import { Post } from '@prisma/client'
import { redirect } from 'next/navigation'

interface SinglePostPageProps {
  params: { postId: string }
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  console.log(params)
  const post: Post = await getSinglePost(params.postId)

  if (!post) {
    redirect('/not-found')
  }

  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-slate-300 p-7 rounded-lg mb-7">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">{post.title}</h1>
        <div className="text-gray-600">
          {new Date(post.createdAt).toDateString()}
        </div>
        <p className="text-gray-800 text-xl mt-5">{post.description}</p>
      </div>
    </section>
  )
}

export default SinglePostPage
