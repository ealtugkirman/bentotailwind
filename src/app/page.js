import Allah from "@/components/Features";
import { Hero } from "@/components/Hero";
import Ideas from "@/components/Ideas";
import Footer from "@/components/Layout/Footer";
import MyComponentPreview from "@/components/SimpleBento/SimpleBento";
export default function Home() {
  return (
    <main className="bg-first">
      <Hero />
      <Ideas />
      <Allah />
      <div className="px-32 pt-12" >
        <MyComponentPreview />
      </div>{ " " }
      <Footer />
    </main>
  );
}
