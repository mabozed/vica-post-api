import { NextRequest, NextResponse } from 'next/server'
import { UpdatePostDto } from '@/utils/dtos'
import prisma from '@/utils/db'

interface Props {
  params: { id: string }
}

/**
 *  @method  GET
 *  @route   ~/api/posts/:id
 *  @desc    Get Single Post By Id
 *  @access  public
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!post) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    )
  }
}

/**
 *  @method  PUT
 *  @route   ~/api/articles/:id
 *  @desc    Update Article
 *  @access  private (only admin can update article)
 */
export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!post) {
      return NextResponse.json({ message: 'post not found' }, { status: 404 })
    }

    const body = (await request.json()) as UpdatePostDto
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    })

    return NextResponse.json(updatedPost, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    )
  }
}

/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    Delete Article
 *  @access  private (only admin can delete article)
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!post) {
      return NextResponse.json({ message: 'post not found' }, { status: 404 })
    }

    // deleting the post
    await prisma.post.delete({ where: { id: parseInt(params.id) } })

    // deleting the comments that belong to this article

    return NextResponse.json({ message: 'post deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    )
  }
}
