import { Post } from '@prisma/client'
import type { Metadata } from 'next'
import { getPosts } from '@/apiCalls/postsApiCall'
import Link from 'next/link'
import DeleteArticleButton from '@/components/DeleteArticleButton'

const PostsPage = async () => {
  const posts: Post[] = await getPosts()

  return (
    <section className="fix-height flex flex-col justify-between container mx-auto px-5">
      <div className="flex mt-10 flex-wrap gap-10">
        {posts.map((item) => (
          <div
            className="flex flex-col w-1/5 bg-slate-200 font-bold gap-4 p-4 rounded"
            key={item.id}
          >
            <h2>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="text-red-700">{item.description}</p>
            <Link
              href={`/posts/edit/${item.id}`}
              className="bg-blue-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-blue-800 transition"
            >
              Edit
            </Link>

            <DeleteArticleButton postId={item.id} />
          </div>
        ))}
      </div>
      <Link href={`/posts/add`}>
        <div className="mx-auto w-[200px] p-4 text-center bg-green-600 font-bold text-white mb-10 ">
          Add
        </div>
      </Link>
    </section>
  )
}

export default PostsPage

export const metadata: Metadata = {
  title: 'Posts Page',
  description: 'Posts about programming',
}
