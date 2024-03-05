import { Metadata } from "next";
import { notFound, usePathname } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/api";

import { PostBody } from "@/components/PostBody";
import { Container } from "@/components/container";
import { PostTitle } from "@/components/PostTitle";
import SharePost from "@/components/SharePost";

export default async function Post({ params }: Params) {

  const post = getPostBySlug(params.slug);
  // const pathname = usePathname();
  const url = "";

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <article>
          <img src={post.image} className="mb-8" />
          <PostTitle title={post.title} date={post.date} />
          <PostBody content={post.content} />
        </article>

        <SharePost url={url} />

      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}