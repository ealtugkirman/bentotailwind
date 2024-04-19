import { Georama, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import siteMetadata from "../utils/siteMetaData"


const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

const GOOGLEID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GOOGLEID} />
      <body className={pop.className}>
        <Navbar />
        <div className=" w-full fixed z-30 hidden lg:block top-24 font-semibold text-center items-center justify-center bg-red-500">WARNING!: Bento Tailwind library is not completed yet. This version is a prepublished version for development. </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
