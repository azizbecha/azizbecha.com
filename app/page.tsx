import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black text-white items-start justify-start px-4 sm:px-48">
      <Hero />

      <hr className="bg-white w-full my-5" />

      <h2>Latest posts</h2>
    </main>
  );
}