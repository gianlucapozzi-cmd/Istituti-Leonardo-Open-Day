import Image from "next/image";
import { ScrollToFormButton } from "./ScrollToFormButton";

const LOGO_URL =
  "https://www.recuperoanniscolasticiamilano.it/wp-content/uploads/2024/08/Logo-Leonardo-100x100-2.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-[#1a4a7a] to-brand-red"
      aria-labelledby="hero-title"
    >
      {/* Overlay per leggibilità */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/25"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-8">
        <Image
          src={LOGO_URL}
          alt="Istituti Leonardo Milano"
          width={72}
          height={72}
          priority
          className="mb-8 rounded-full bg-white/95 p-1.5 shadow-lg"
        />

        <h1
          id="hero-title"
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Vuoi recuperare i tuoi anni scolastici?
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Vieni a scoprirci di persona. Sabato 12 settembre ti aspettiamo per
          farti conoscere la scuola, i percorsi e chi rende tutto possibile.
        </p>

        <div
          className="mt-8 rounded-2xl bg-brand-red px-5 py-3 text-sm font-semibold tracking-wide shadow-lg sm:text-base"
          role="status"
        >
          SABATO 12 SETTEMBRE · dalle 10:00 alle 17:00
        </div>

        <ScrollToFormButton className="mt-8 w-full max-w-xs sm:w-auto">
          Registrati all&apos;Open Day
        </ScrollToFormButton>
      </div>
    </section>
  );
}
