import { NextRequest, NextResponse } from 'next/server'
import { postSchema } from '@/utils/validationSchemas'
import { CreatePostDto } from '@/utils/dtos'
import { Post } from '@prisma/client'
import prisma from '@/utils/db'
import { POSTS_PER_PAGE } from '@/utils/constant'

/**
 *  @method  GET
 *  @route   ~/api/posts
 *  @desc    Get Posts By Page Number
 *  @access  public
 */
export async function GET(request: NextRequest) {
  try {
    // const pageNumber = request.nextUrl.searchParams.get('pageNumber') || '1'

    // const posts = await prisma.post.findMany({
    //   skip: POSTS_PER_PAGE * (parseInt(pageNumber) - 1),
    //   take: POSTS_PER_PAGE,
    //   orderBy: { createdAt: 'desc' },
    // })
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    )
  }
}

/**
 *  @method  POST
 *  @route   ~/api/posts
 *  @desc    Create New Article
 *  @access  private (only admin can create article)
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreatePostDto

    const validation = postSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      )
    }

    const newPost: Post = await prisma.post.create({
      data: {
        title: body.title,
        description: body.description,
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    )
  }
}
