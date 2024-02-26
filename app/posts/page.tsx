import { PostPreview } from "@/components/PostPreview";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/types";

export default function Posts() {
    const allPosts: Post[] = getAllPosts();

    return (
        allPosts.map((post, key) => {
            return <PostPreview key={key} image={post.image} date={post.date} category={post.tags} postId={post.slug} title={post.title} />

        })
    )
}