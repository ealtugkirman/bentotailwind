import { Georama, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import siteMetadata from "../utils/siteMetaData";
import { dark, neobrutalism } from "@clerk/themes";
import Duyuru from "../components/Layout/Duyuru.jsx"
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <ClerkProvider
          appearance={{
            baseTheme: [ neobrutalism]
          }}>
        <body className={ pop.className }>
          <Duyuru />
            <Navbar />
            <div className=" w-full fixed z-30 hidden lg:block top-24 font-semibold text-center items-center justify-center bg-red-500">
              WARNING!: Bento Tailwind library is not completed yet. This
              version is a prepublished version for development.{" "}
            </div>
            <div>{children}</div>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <Analytics />
        </body>
    </ClerkProvider>
      </html>
  );
}
