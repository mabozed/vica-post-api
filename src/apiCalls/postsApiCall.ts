import { Post } from '@prisma/client'
import { DOMAIN } from '@/utils/constant'

// Get posts based on pageNumber
export async function getPosts() {
  const response = await fetch(`${DOMAIN}/api/posts`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

// Get single post by id
export async function getSinglePost(postId: string): Promise<Post> {
  const response = await fetch(`${DOMAIN}/api/posts/${postId}`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  return response.json()
}
