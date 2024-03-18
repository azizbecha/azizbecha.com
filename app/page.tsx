import Link from "next/link";

import Container from "@/components/Container";
import Posts from "@/components/Post/Posts";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <div className="flex justify-between items-center mb-3 w-full">
          <Heading variant="h1">Latest Posts</Heading>
          <Link href={'posts'}>
            <Button>
              View all
            </Button>
          </Link>
        </div>

        <Posts limit={5} />
      </Container>

    </main>
  );
}