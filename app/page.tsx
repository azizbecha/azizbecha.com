import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/Button";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex justify-between items-center mb-3">
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