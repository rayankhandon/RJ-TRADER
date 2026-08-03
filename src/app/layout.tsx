import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RJ Traders | Wholesale, Packaging & Logistics Solutions Pakistan",
    template: "%s | RJ Traders",
  },
  description:
    "RJ Traders provides wholesale products, industrial supplies, professional packaging and nationwide logistics solutions for businesses across Pakistan.",
  applicationName: "RJ Traders",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "RJ Traders | Wholesale, Packaging & Logistics Solutions Pakistan",
    description:
      "RJ Traders provides wholesale products, industrial supplies, professional packaging and nationwide logistics solutions for businesses across Pakistan.",
    siteName: "RJ Traders",
    images: [
      {
        url: "/images/rj-traders-logo.png",
        width: 1000,
        height: 1000,
        alt: "RJ Traders Official Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
