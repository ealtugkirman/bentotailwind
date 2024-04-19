import { Georama, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";


const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const GOOGLEID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const seo = {
  title: "BentoTailwind Component Library for Bento Grids",
  description:
    "Beautiful & Responsive Grid Layouts with BentoTailwind. Effortlessly build stunning and responsive grid layouts using our production-ready Bento Grids component library for Tailwind CSS. Get started quickly and streamline your workflow with our reusable components..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" title="BentoTailwind.com" description="Beautiful & Responsive Grid Layouts with BentoTailwind. Effortlessly build stunning and responsive grid layouts using our production-ready Bento Grids component library for Tailwind CSS. Get started quickly and streamline your workflow with our reusable components." >
      <GoogleTagManager gtmId={GOOGLEID} />
      <body className={pop.className}>
        <Navbar />
        <div className=" w-full fixed z-30 hidden lg:block top-24 font-semibold text-center items-center justify-center bg-red-500">WARNING!: Bento Tailwind library is not completed yet. This version is a prepublished version for development. </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
