import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />

        <Divider />

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-ubuntu font-bold text-3xl">Latest Posts</h2>
          <button className="bg-main font-ubuntu font-medium text-white px-4 py-2 rounded">View All</button>
        </div>

      </Container>

    </main>
  );
}
