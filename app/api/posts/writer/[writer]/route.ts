import { NextRequest, NextResponse } from 'next/server';
import { getPostsByWriter } from '@/lib/api';

export async function GET(request: NextRequest, { params }: { params: { writer: string } }) {
  const { writer } = params;

  if (!writer) {
    return NextResponse.json({ error: 'Writer not specified' }, { status: 400 });
  }

  const posts = getPostsByWriter(writer);

  if (posts.length === 0) {
    return NextResponse.json({ error: 'No posts found for this writer' }, { status: 404 });
  }

  return NextResponse.json(posts);
}
