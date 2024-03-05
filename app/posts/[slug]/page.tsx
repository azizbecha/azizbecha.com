import { Metadata } from "next";
import { notFound } from "next/navigation";

import { remark } from "remark";
import html from 'remark-html';

import { getAllPosts, getPostBySlug } from "@/lib/api";

import { PostBody } from "@/components/PostBody";
import { Container } from "@/components/container";
import { PostTitle } from "@/components/PostTitle";
import SharePost from "@/components/SharePost";

export default async function Post({ params }: Params) {

  const post = getPostBySlug(params.slug);
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

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  // Use remark to convert Markdown to HTML and then strip HTML tags
  const description = (
    await remark().use(html).process(post.content.substring(0, 251))
  ).toString().replace(/(<([^>]+)>)/gi, '');

  return {
    title: `${title} | Aziz Becha`,
    description: description,
    robots: "index, follow",
    creator: "Aziz Becha",
    openGraph: {
      type: "article",
      title,
      description,
      siteName: "Aziz Becha",
      images: [{
        url: post.image,
      }],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}