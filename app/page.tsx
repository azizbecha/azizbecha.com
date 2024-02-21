import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/container";
import { Button } from "@/components/Button";
import { PostPreview } from "@/components/PostPreview";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />

        <Divider />

        <div className="flex justify-between items-center mt-4 mb-3">
          <h2 className="font-ubuntu font-bold text-3xl">Latest Posts</h2>
          <Button text="View all" />
        </div>

        <PostPreview date="January 2024" category="code" postId="is-flutter-overrated" title="Is Flutter overrated?" />
        <PostPreview date="January 2024" category="code" postId="why-use-react" title="Why use React" />

      </Container>

    </main>
  );
}
