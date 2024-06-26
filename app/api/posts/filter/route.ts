import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/api';
import haveCommonElements from '@/lib/haveCommonElements';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const writer = searchParams.get('writer');
  const tagsParam = searchParams.get('tags');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  let posts = getAllPosts();

  if (writer) {
    posts = posts.filter(post => post.writers?.includes(writer));
  }

  if (tagsParam) {
    const tags = tagsParam.split(',');
    posts = posts.filter(post => haveCommonElements(post.tags, tags));
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    posts = posts.filter(post => {
      const postDate = new Date(post.date);
      return postDate >= start && postDate <= end;
    });
  }

  if (posts.length === 0) {
    return NextResponse.json({ error: 'No posts found for the given filters' }, { status: 404 });
  }

  return NextResponse.json(posts);
}