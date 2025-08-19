import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <section className="group mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Link className="h-full w-full overflow-hidden rounded-xl" href="#">
          <Image
            className="h-full w-full object-cover object-center transition group-hover:scale-105"
            src={"/images/bryen_0.png"}
            width={1200}
            height={720}
            alt="Título do Post"
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="block text-sm/tight text-slate-600 dark:text-slate-400"
            dateTime="2025-08-19"
          >
            19/08/2025 17:07
          </time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet.</Link>
          </h1>
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
