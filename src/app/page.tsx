import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="group mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <PostCoverImage
          linkProps={{
            href: "#",
          }}
          imageProps={{
            src: "/images/bryen_0.png",
            width: 1200,
            height: 720,
            alt: "Título do post",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="block text-sm/tight text-slate-600 dark:text-slate-400"
            dateTime="2025-08-19"
          >
            19/08/2025 17:07
          </time>
          <PostHeading url="#" as="h1">
            Lorem ipsum
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            deserunt neque necessitatibus ratione voluptates quia harum non,
            voluptate assumenda cum consequatur soluta nobis accusamus
            accusantium fugit suscipit laborum error sint!
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="py-8 text-center text-6xl font-bold">&copy; 2025</p>
      </footer>
    </Container>
  );
}
