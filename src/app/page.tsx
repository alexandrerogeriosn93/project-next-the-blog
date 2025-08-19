import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="py-8 text-center text-6xl font-bold">&copy; 2025</p>
      </footer>
    </Container>
  );
}
