import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { ScrollToFormButton } from "./ScrollToFormButton";

const LOGO_URL =
  "https://www.recuperoanniscolasticiamilano.it/wp-content/uploads/2024/08/Logo-Leonardo-100x100-2.png";

export function PracticalInfo() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="info-title"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="info-title"
          className="text-center text-2xl font-bold text-brand-blue sm:text-3xl"
        >
          Info Open Day
        </h2>

        <ul className="mt-10 space-y-6">
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light">
              <MapPin className="h-5 w-5 text-brand-blue" aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-text">Dove</p>
              <p className="mt-1 text-text/75">
                Via Marco Aurelio 8, Milano
                <br />
                Fermata Pasteur M1
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light">
              <Clock className="h-5 w-5 text-brand-blue" aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-text">Quando</p>
              <p className="mt-1 text-text/75">
                Open Day · Sabato 12 settembre, dalle 10:00 alle 17:00
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light">
              <Phone className="h-5 w-5 text-brand-blue" aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-text">Contatti</p>
              <p className="mt-1 text-text/75">
                <a
                  href="tel:+390223189073"
                  className="hover:text-brand-blue"
                >
                  Tel. 02 23 189 073
                </a>
                {" · "}
                <a
                  href="tel:+393285987754"
                  className="hover:text-brand-blue"
                >
                  +39 328 598 7754
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:info@istitutileonardomilano.it"
                  className="inline-flex items-center gap-1.5 text-brand-blue hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  info@istitutileonardomilano.it
                </a>
              </p>
            </div>
          </li>
        </ul>

        {/* Mini mappa embed */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-md">
          <iframe
            title="Mappa Istituti Leonardo — Via Marco Aurelio 8, Milano"
            src="https://maps.google.com/maps?q=Via%20Marco%20Aurelio%208%2C%20Milano&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-56 w-full border-0 sm:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex justify-center">
          <ScrollToFormButton className="w-full max-w-xs sm:w-auto">
            Registrati all&apos;Open Day
          </ScrollToFormButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-blue px-5 py-10 text-center text-white sm:px-8">
      <Image
        src={LOGO_URL}
        alt="Istituti Leonardo Milano"
        width={56}
        height={56}
        className="mx-auto object-contain"
      />
      <p className="mt-4 text-sm text-white/85">
        © YES Group S.r.l. | Istituti Leonardo Milano
      </p>
    </footer>
  );
}
