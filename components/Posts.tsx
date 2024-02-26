"use client"

import { getAllPosts } from "@/lib/api"
import { Post } from "@/types";
import { PostPreview } from "./PostPreview";

interface Props {
    limit?: number
}

export const Posts = (props: Props) => {

    const allPosts: Post[] = getAllPosts();

    return (
        allPosts.map((post, key) => {
            return <PostPreview key={key} image={post.image} date={post.date} category={post.tags} postId={post.slug} title={post.title} />

        })
    )
}