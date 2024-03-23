import BlogSection from "@/components/BlogSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Recepies from "@/components/Recepies";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <Header />
      <BlogSection />
      <Recepies />
    </main>
  );
}
