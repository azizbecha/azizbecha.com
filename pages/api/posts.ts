import { getAllPosts } from '@/lib/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const posts = getAllPosts();
    res.status(200).json(posts);
}