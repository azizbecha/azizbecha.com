import { NextRequest, NextResponse } from 'next/server';
import { getPostsByDateRange } from '@/lib/api';

export async function GET(request: NextRequest, { params }: { params: { startDate: string, endDate: string } }) {
  const { startDate, endDate } = params;

  if (!startDate || !endDate) {
    return NextResponse.json({ error: 'Start date or end date not specified' }, { status: 400 });
  }

  const posts = getPostsByDateRange(startDate, endDate);

  if (posts.length === 0) {
    return NextResponse.json({ error: 'No posts found within the specified date range' }, { status: 404 });
  }

  return NextResponse.json(posts);
}
