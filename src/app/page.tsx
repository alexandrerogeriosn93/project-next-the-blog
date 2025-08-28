import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="mb-16 min-h-20" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
