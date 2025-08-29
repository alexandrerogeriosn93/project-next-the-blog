import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";

import { PostDate } from "../PostDate";
import { PostHeading } from "../PostHeading";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="group mb-4 flex flex-col gap-4">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
          className="rounded-xl"
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
        {post.excerpt}
      </p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
