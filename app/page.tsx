import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/container";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />

        <Divider />

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-ubuntu font-bold text-3xl">Latest Posts</h2>
          <Button text="View all" />
        </div>

      </Container>

    </main>
  );
}
