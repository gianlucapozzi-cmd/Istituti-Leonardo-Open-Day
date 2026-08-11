import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Footer } from "@/components/PracticalInfo";

export const metadata: Metadata = {
  title: "Registrazione confermata | Open Day Istituti Leonardo",
  description:
    "Grazie per esserti registrato all'Open Day di Istituti Leonardo Milano. Ti aspettiamo sabato 12 settembre.",
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <main className="flex w-full min-w-0 flex-1 flex-col overflow-x-hidden">
      <section className="flex flex-1 flex-col items-center justify-center bg-brand-blue px-5 py-20 text-center text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-xl">
          <BrandLogo
            size={120}
            priority
            className="mx-auto mb-6 h-24 w-24 sm:h-[7.5rem] sm:w-[7.5rem]"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
            Open Day · 12 settembre
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grazie!
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            La tua registrazione all&apos;Open Day è confermata. Ti aspettiamo
            sabato 12 settembre, dalle 10:00 alle 17:00, in Via Marco Aurelio 8,
            Milano.
          </p>

          <div className="mt-8 rounded-2xl bg-white/15 px-5 py-4 text-sm font-semibold tracking-wide ring-1 ring-white/35 backdrop-blur-sm sm:text-base">
            SABATO 12 SETTEMBRE · dalle 10:00 alle 17:00
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand-blue shadow-md transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue sm:w-auto"
            >
              Torna alla home
            </Link>
            <a
              href="https://maps.google.com/maps?q=Via%20Marco%20Aurelio%208%2C%20Milano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            >
              Apri la mappa
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
