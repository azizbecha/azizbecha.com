import { Divider } from "@/components/Divider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black text-white px-4 sm:px-64">
      <Hero />

      <Divider />

      <div className="flex justify-between items-center mt-4">
        <h2 className="font-ubuntu font-bold text-3xl">Latest Posts</h2>
        <button className="bg-main font-ubuntu font-medium text-white px-4 py-2 rounded">View All</button>
      </div>

      
    </main>
  );
}
