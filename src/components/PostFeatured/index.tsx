import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "#";
  const postLink = `/post/${slug}`;

  return (
    <section className="group mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: "/images/bryen_0.png",
          width: 1200,
          height: 720,
          alt: "Título do post",
          priority: true,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={"2025-04-08T00:24:38.616Z"}
        title={"Olha a rotina matinal de pessoas altamente eficazes"}
        excerpt={
          "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
        }
      />
    </section>
  );
}
