import { Star } from "lucide-react";

const reviews = [
  {
    title: "Una scuola che cambia la vita (in meglio)",
    text: "Mio figlio ha finito il biennio con buoni voti. Non voleva studiare e ora è felice di andare a scuola. Per noi è cambiata la vita in meglio.",
    author: "Annunziata Emanuela Pino",
    role: "Genitore",
  },
  {
    title: "Accolti, compresi e finalmente sereni",
    text: "Dopo due esperienze scolastiche negative, Istituti Leonardo ci ha accolti e compresi. Nostro figlio ha superato l'anno eccellentemente.",
    author: "Annamaria Cardillo",
    role: "Genitore",
  },
  {
    title: "Dal sogno al diploma dopo 30 anni",
    text: "Ho terminato gli studi dopo 30 anni. Mi sono diplomato con ottimi voti lavorando e avendo famiglia.",
    author: "Marco Santaniello",
    role: "Studente adulto",
  },
  {
    title: "Serietà, organizzazione e attenzione ai risultati",
    text: "Dopo un anno siamo molto soddisfatti. Personale, direttore e struttura seri e ben organizzati.",
    author: "Carlo Antonelli",
    role: "Genitore",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stelle su 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-brand-red text-brand-red"
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      className="bg-muted px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="reviews-title"
          className="text-center text-2xl font-bold text-brand-blue sm:text-3xl"
        >
          Cosa dicono di noi
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-text/75 sm:text-lg">
          Ecco alcune testimonianze di chi ha studiato e raggiunto i suoi
          obiettivi con successo.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map(({ title, text, author, role }) => (
            <li key={author}>
              <blockquote className="h-full border-l-4 border-brand-blue pl-5">
                <Stars />
                <p className="mt-3 font-semibold text-text">{title}</p>
                <p className="mt-2 text-base leading-relaxed text-text/75">
                  “{text}”
                </p>
                <footer className="mt-4 text-sm text-text/60">
                  <cite className="not-italic font-medium text-brand-blue">
                    {author}
                  </cite>
                  <span className="mx-1.5" aria-hidden>
                    ·
                  </span>
                  {role}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-text/60">
          Altre testimonianze su{" "}
          <a
            href="https://www.recuperoanniscolasticiamilano.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            recuperoanniscolasticiamilano.it
          </a>
        </p>
      </div>
    </section>
  );
}
