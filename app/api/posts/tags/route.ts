import { NextRequest, NextResponse } from 'next/server';
import { getPostsByTags } from '@/lib/api';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const tagsParam = searchParams.get('tags');
    const tags = tagsParam?.split(",");

    if (!tags || tags.length === 0) {
        return NextResponse.json({ error: 'Tags not specified' }, { status: 400 });
    }

    const posts = getPostsByTags(tags);

    if (posts.length === 0) {
        return NextResponse.json({ error: 'No posts found for the given tags' }, { status: 404 });
    }

    return NextResponse.json(posts);
}
