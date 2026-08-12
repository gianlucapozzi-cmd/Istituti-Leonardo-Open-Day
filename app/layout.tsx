import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Open Day 12 Settembre | Istituti Leonardo Milano",
  description:
    "Partecipa all'Open Day di Istituti Leonardo Milano sabato 12 settembre, dalle 10:00 alle 17:00. Visita la scuola, scopri i percorsi e registrati online.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Open Day 12 Settembre | Istituti Leonardo Milano",
    description:
      "Vieni a conoscerci di persona. Sabato 12 settembre ti aspettiamo in Via Marco Aurelio 8, Milano.",
    type: "website",
    locale: "it_IT",
    siteName: "Istituti Leonardo Milano",
    images: [{ url: "/logo.png", width: 200, height: 200, alt: "Istituti Leonardo Milano" }],
  },
  twitter: {
    card: "summary",
    title: "Open Day 12 Settembre | Istituti Leonardo Milano",
    description:
      "Vieni a conoscerci di persona. Sabato 12 settembre ti aspettiamo in Via Marco Aurelio 8, Milano.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full w-full min-w-0 flex-col font-sans text-text">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
