import { Check } from "lucide-react";
import { ScrollToFormButton } from "./ScrollToFormButton";

const strengths = [
  {
    title: "Grande attenzione verso lo studente",
    description: "Ogni ragazzo è seguito individualmente",
  },
  {
    title: "Classi a numero ridotto",
    description: "Gruppi piccoli per non lasciare indietro nessuno",
  },
  {
    title: "Docenti qualificati",
    description: "Insegnanti esperti e realmente presenti",
  },
  {
    title: "Programmi dedicati e personalizzati",
    description: "Un piano di studio costruito su ogni studente",
  },
  {
    title: "Ambiente accogliente",
    description: "Uno spazio sereno dove ritrovare fiducia e motivazione",
  },
];

export function WhyLeonardo() {
  return (
    <section
      className="bg-brand-blue px-5 py-16 text-white sm:px-8 sm:py-20"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="why-title"
          className="text-center text-2xl font-bold sm:text-3xl"
        >
          Perché scegliere Istituti Leonardo
        </h2>
        <p className="mx-auto mt-3 max-w-5xl text-center text-base text-white/85 sm:whitespace-nowrap sm:text-lg">
          Quello che ci rende diversi lo vedrai di persona, ma ecco cosa
          troverai da noi:
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {strengths.map(({ title, description }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" aria-hidden strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/80">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <ScrollToFormButton className="w-full max-w-xs sm:w-auto">
            Registrati all&apos;Open Day
          </ScrollToFormButton>
        </div>
      </div>
    </section>
  );
}
