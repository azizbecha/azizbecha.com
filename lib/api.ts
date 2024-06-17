import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "@/types";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug?.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // Handle the case where the file is not found
      console.error(`File not found: ${fullPath}`);
      return null;
    } else {
      // Rethrow the error if it's not a file not found error
      throw error;
    }
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null) // Filter out null posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}