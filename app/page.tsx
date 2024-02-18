import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black text-white items-start justify-start px-4 sm:px-48">
      <Hero />

      <hr className="bg-white w-full mt-10" />
    </main>
  );
}