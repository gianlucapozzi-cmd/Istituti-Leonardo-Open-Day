import {
  School,
  BookOpen,
  Users,
  MessageCircle,
  Coffee,
  BadgePercent,
  type LucideIcon,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const activities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: School,
    title: "Visita e presentazione della scuola",
    description: "Scopri gli spazi e l'ambiente in cui studierai",
  },
  {
    icon: BookOpen,
    title: "Presentazione dei percorsi di studio",
    description: "Ti mostriamo tutti gli indirizzi disponibili",
  },
  {
    icon: Users,
    title: "Incontro con docenti e tutor",
    description: "Conosci chi ti seguirà passo dopo passo",
  },
  {
    icon: MessageCircle,
    title: "Testimonianze dei nostri studenti",
    description: "Ascolta chi ce l'ha già fatta con noi",
  },
  {
    icon: Coffee,
    title: "Snack offerti",
    description: "Un momento di convivialità in tutta tranquillità",
  },
  {
    icon: BadgePercent,
    title: "Sconti su nuove iscrizioni",
    description: "Prezzi promo riservati in occasione dell'Open Day",
  },
];

export function OpenDayActivities() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="openday-title"
    >
      <div className="mx-auto max-w-5xl">
        <BrandLogo size={72} className="mx-auto mb-4 h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" />
        <h2
          id="openday-title"
          className="text-center text-2xl font-bold text-brand-blue sm:text-3xl"
        >
          Cosa potrai fare all&apos;Open Day
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-text/75 sm:text-lg">
          Una giornata aperta per conoscere la scuola senza impegno: visita,
          percorsi, docenti e un momento insieme.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl bg-muted p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light">
                <Icon className="h-5 w-5 text-brand-blue" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/70">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
