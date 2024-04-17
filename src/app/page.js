import Features from "../components/Features";
import { Hero } from "../components/Hero";
import Ideas from "../components/Ideas";
import Footer from "../components/Layout/Footer";
import MyComponentPreview from "../components/Grids/SimpleBento1/SimpleBento";
import Cta from "../components/Cta";
export default function Home() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgradient">
      <Hero />
      <Ideas />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}
