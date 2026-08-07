import Image from "next/image";
import { ScrollToFormButton } from "./ScrollToFormButton";

const LOGO_URL =
  "https://www.recuperoanniscolasticiamilano.it/wp-content/uploads/2024/08/Logo-Leonardo-100x100-2.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue"
      aria-labelledby="hero-title"
    >
      {/* Ragazzi in ambito scolastico, in trasparenza */}
      <Image
        src="/hero/students.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] opacity-45"
        aria-hidden
      />

      {/* Overlay blu leggero — niente rosso/bordeaux in apertura */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/75 via-[#c41c23]/65 to-brand-blue/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-8">
        <Image
          src={LOGO_URL}
          alt="Istituti Leonardo Milano"
          width={148}
          height={148}
          priority
          className="mb-6 h-[8.05rem] w-[8.05rem] object-contain sm:h-[9.2rem] sm:w-[9.2rem] lg:mb-8"
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
          className="mt-8 max-w-full rounded-2xl bg-white/15 px-4 py-3 text-center text-sm font-semibold tracking-wide shadow-lg ring-1 ring-white/40 backdrop-blur-sm sm:px-5 sm:text-base"
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
