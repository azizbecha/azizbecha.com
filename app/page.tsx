import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Posts from "@/components/Post/Posts";
import { Heading } from "@/components/Heading";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex justify-between items-center mb-3 w-full">
          <Heading variant="h1">Latest Posts</Heading>
          <Link href={'posts'}>
            <Button text="View all" />
          </Link>
        </div>

        <Posts limit={5} />
      </Container>

    </main>
  );
}