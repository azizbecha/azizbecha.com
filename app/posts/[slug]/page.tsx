import { Metadata } from "next";
import { notFound } from "next/navigation";

import { remark } from "remark";
import html from 'remark-html';

import { getAllPosts, getPostBySlug } from "@/lib/api";

import { PostHeader } from "@/components/Post/PostHeader";
import { PostBody } from "@/components/Post/PostBody";
import Container from "@/components/Container";
import SharePost from "@/components/Post/SharePost";
import PostImage from "@/components/Post/PostImage";
import TableOfContents from "@/components/Post/TableOfContents";
import PostTags from "@/components/Post/PostTags";
import ScrollProgressbar from "@/components/ScrollProgressbar";

export default async function Post({ params }: Params) {

  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return notFound();
  }

  const vercelUrl = process.env.VERCEL_URL;
  const protocol = process.env.VERCEL_ENV === 'production' ? 'https' : 'http';
  const baseUrl = vercelUrl ? `${protocol}://${vercelUrl}` : 'http://localhost:3000';
  const url = `${baseUrl}/posts/${params.slug}`;

  return (
    <main className="my-5">
      <ScrollProgressbar />
      <Container>
        <article className="mb-5">
          <PostHeader title={post.title} date={post.date} content={post.content} contributors={post.contributors} />
          <div className="flex gap-3">
            <div className="sm:w-3/4 w-full">
              <PostImage image={post.image} />
              <PostBody content={post.content} />
            </div>
            <div className="sm:w-1/4 sm:block w-full hidden">
              <div className="space-y-3 sticky top-5">
                <TableOfContents content={post.content} />
                <PostTags tags={post.tags} />
              </div>
            </div>
          </div>
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
    publisher: "Aziz Becha",
    authors: post.contributors.map((author) => ({ name: author.trim() })),
    openGraph: {
      type: "article",
      title,
      description,
      siteName: "Aziz Becha",
      publishedTime: post.date,
      authors: post.contributors.map((contributor) => (contributor.trim())),
      tags: post.tags.map((tag) => (tag.trim())),
      images: post.image,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}