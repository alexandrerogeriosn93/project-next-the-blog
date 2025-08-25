import { postRepository } from "@/repositories/post";
import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";

import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="group flex flex-col gap-4">
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="block text-sm/tight text-slate-600 dark:text-slate-400"
                dateTime={post.createdAt}
                title={formatDistanceToNow(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
