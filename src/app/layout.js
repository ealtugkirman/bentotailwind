import { Georama, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import siteMetadata from "../utils/siteMetaData";
import { dark, neobrutalism } from "@clerk/themes";
import GoogleAnalytics from "../GoogleAnalytics";
import Duyuru from "../components/Layout/Duyuru.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider } from "@clerk/nextjs";

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
          baseTheme: [neobrutalism],
        }}>
        <GoogleAnalytics />
        <body className={pop.className}>
          <Duyuru />
          <Navbar />
          <div>{children}</div>
          <SpeedInsights />
          <Analytics />
        </body>
      </ClerkProvider>
    </html>
  );
}
