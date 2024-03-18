"use client"

import { FC, useEffect, useState } from "react";
import { Post } from "@/types";
import PostPreview from "./PostPreview";
import PostSkeletonLoader from "./PostSkeletonLoader";

interface Props {
    limit?: number;
}

const Posts: FC<Props> = ({ limit = 0 }) => {
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

    if (loading) {
        return <PostSkeletonLoader />
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.slice(0, limit).map((post, key) => (
                <PostPreview
                    key={key}
                    post={post}
                />
            ))}
        </div>
    );
};

export default Posts;