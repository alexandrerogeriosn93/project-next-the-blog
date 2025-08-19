import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header>
        <h1 className="py-8 text-center text-6xl font-bold">The Blog</h1>
      </header>
      <Suspense fallback={<SpinLoader className="" />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="py-8 text-center text-6xl font-bold">&copy; 2025</p>
      </footer>
    </div>
  );
}
