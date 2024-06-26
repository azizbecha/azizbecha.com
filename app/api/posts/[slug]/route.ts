import { getPostBySlug } from '@/lib/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = getPostBySlug(slug);
    if (!post) {
        return NextResponse.json({ status: 404, error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ status: 200, post });
}
