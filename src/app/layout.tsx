import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rj-trader.vercel.app"),
  title: {
    default: "RJ Traders | Engine Oil & Genuine Spare Parts Wholesale Pakistan",
    template: "%s | RJ Traders",
  },
  description:
    "RJ Traders is Pakistan's trusted wholesale supplier of genuine engine oils, oil filters, brake pads, suspension parts, and heavy fleet lubricants for workshops and retailers.",
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
    title: "RJ Traders | Engine Oil & Genuine Spare Parts Wholesale Pakistan",
    description:
      "RJ Traders is Pakistan's trusted wholesale supplier of genuine engine oils, oil filters, brake pads, suspension parts, and heavy fleet lubricants for workshops and retailers.",
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
    <html lang="en" className="antialiased h-full font-sans" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
