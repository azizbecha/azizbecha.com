"use client"

import { FC, useEffect, useState } from "react";
import { Post } from "@/types";
import PostPreview from "./PostPreview";
import PostSkeletonLoader from "./PostSkeletonLoader";
import MultipleSkeletonLoaders from "./MultipleSkeletonLoaders";

interface Props {
    limit?: number;
}

const Posts: FC<Props> = ({ limit }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch("api/posts");

            if (!response.ok) {
                throw new Error(`Failed to fetch posts. Status: ${response.status}`);
            }

            const fetchedPosts: Post[] = await response.json();
            setPosts(fetchedPosts);
        } catch (error: any) {
            console.error("Error fetching posts:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Sort posts based on limit
    const sortedPosts = limit ? posts.slice(0, limit).sort((a, b) => b.date.localeCompare(a.date)) : posts;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                loading ? (
                    <MultipleSkeletonLoaders />
                ) : sortedPosts.map((post, key) => (
                    <PostPreview
                        key={key}
                        post={post}
                    />
                ))
            }
        </div>
    );
};

export default Posts;