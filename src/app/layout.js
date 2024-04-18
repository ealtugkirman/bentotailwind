import { Georama, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Duyuru from "../components/ui/Duyuru";
import { GoogleTagManager } from "@next/third-parties/google";

const darker = Georama({ subsets: ["latin"] });
const jos = Josefin_Sans({ subsets: ["latin"] });
const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const GOOGLEID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const seo = {
  title: "BentoTailwind",
  description: "Beautiful & Responsive Grid Layouts with BentoTailwind. Effortlessly build stunning and responsive grid layouts using our production-ready Bento Grids component library for Tailwind CSS. Get started quickly and streamline your workflow with our reusable components..",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GOOGLEID} />
      <body className={pop.className}>
        <Duyuru />
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
