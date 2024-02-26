import Link from "next/link";

import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/container";
import { Button } from "@/components/Button";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />

        <Divider />

        <div className="flex justify-between items-center mt-4 mb-3">
          <h2 className="font-ubuntu font-bold text-3xl">Latest Posts</h2>
          <Link href={'posts'}>
            <Button text="View all" />
          </Link>
        </div>

        <Posts limit={5} />
      </Container>

    </main>
  );
}
