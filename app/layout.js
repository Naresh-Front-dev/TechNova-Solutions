import { Manrope, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechNova Solutions | Technology That Moves Business Forward",
    template: "%s | TechNova Solutions",
  },
  description:
    "TechNova Solutions helps businesses build scalable digital products through web development, mobile apps, design, cloud, and AI services.",
  keywords: [
    "technology solutions",
    "web development",
    "mobile app development",
    "UI UX design",
    "cloud solutions",
    "AI consulting",
  ],
  openGraph: {
    title: "TechNova Solutions",
    description:
      "Empowering businesses through thoughtful, scalable technology solutions.",
    type: "website",
    locale: "en_US",
    siteName: "TechNova Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova Solutions",
    description:
      "Building tomorrow's digital experiences with practical technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
