import Script from "next/script";
import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";

const title = "Rushik Ghuntala | Full Stack Developer";
const description =
  "A full stack developer with expertise in Next.js, React.js, and Node.js, adept at integrating with any type of database. Also a design expert, known for creating excellent animations and visually stunning user interfaces.";
const url = "https://google.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Designer",
    "API Developer",
    "Animation",
    "Tailwind CSS Expert",
    "Database Integration",
  ],
  creator: "Rushik Ghuntala",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Rushik-Ghuntala",
    images: ["/images/open-graph-sagar.png"], // Wrap single image in an array
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  ...metadata,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className="bg-gray text-gray-600 antialiased">
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
