"use client";

import { BrandLogo } from "./BrandLogo";

export function ThankYouMessage() {
  return (
    <div className="rounded-2xl bg-brand-blue px-6 py-10 text-center text-white shadow-md sm:px-8 sm:py-12">
      <BrandLogo
        size={96}
        className="mx-auto mb-5 h-20 w-20 sm:h-24 sm:w-24"
      />

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
        Open Day · 12 settembre
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Grazie!
      </h2>

      <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
        La tua registrazione all&apos;Open Day è confermata. Ti aspettiamo
        sabato 12 settembre, dalle 10:00 alle 17:00, in Via Marco Aurelio 8,
        Milano.
      </p>

      <div className="mt-6 rounded-2xl bg-white/15 px-4 py-3 text-sm font-semibold tracking-wide ring-1 ring-white/35 sm:text-base">
        SABATO 12 SETTEMBRE · dalle 10:00 alle 17:00
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand-blue shadow-md transition hover:bg-white/90 sm:w-auto"
        >
          Torna all&apos;inizio
        </button>
        <a
          href="https://maps.google.com/maps?q=Via%20Marco%20Aurelio%208%2C%20Milano"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
        >
          Apri la mappa
        </a>
      </div>
    </div>
  );
}
