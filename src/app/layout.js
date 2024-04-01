import { Georama, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Duyuru from "../components/ui/Duyuru";


const darker = Georama({ subsets: ["latin"] });
const jos = Josefin_Sans({ subsets: ["latin"] });


export const metadata = {
  title: "BentoTailwind.com",
  description: "Ready to use Bento Grid Library with TailwindCss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ jos.className }>
        <Duyuru/>
        <Navbar />
        { children }
      </body>
    </html>
  );
}
