import Link from "next/link";

import Container from "@/components/Container";
import Posts from "@/components/Post/Posts";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Hero } from "@/components/Hero";
import Tile from "@/components/Tile";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Tile>
          <div className="flex justify-between items-center mb-3 w-full bg-black">
            <Heading variant="h2">Latest Posts</Heading>
            <Link href={'posts'}>
              <Button>
                View all
              </Button>
            </Link>
          </div>

          <Posts limit={5} />
        </Tile>
      </Container>

    </main>
  );
}