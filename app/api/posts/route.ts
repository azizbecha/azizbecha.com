import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/api';

export async function GET(request: Request) {
    const posts = getAllPosts();
    return NextResponse.json(posts, { status: 200 })
}