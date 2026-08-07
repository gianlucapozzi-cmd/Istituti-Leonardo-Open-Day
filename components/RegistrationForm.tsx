"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  note: string;
  privacy: boolean;
};

const initial: FormData = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  note: "",
  privacy: false,
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function RegistrationForm() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [status, setStatus] = useState<FormState>("idle");

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!data.nome.trim()) next.nome = "Inserisci il nome";
    if (!data.cognome.trim()) next.cognome = "Inserisci il cognome";
    if (!data.email.trim()) next.email = "Inserisci l'email";
    else if (!isValidEmail(data.email)) next.email = "Email non valida";
    if (!data.telefono.trim()) next.telefono = "Inserisci il telefono";
    if (!data.privacy) next.privacy = "Devi accettare l'informativa privacy";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // TODO: collegare invio form (API route / Formspree / webhook CRM)
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome.trim(),
          cognome: data.cognome.trim(),
          email: data.email.trim(),
          telefono: data.telefono.trim(),
          note: data.note.trim() || undefined,
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      // TODO: tracking — Meta Pixel Lead / Google Ads CompleteRegistration
      // window.fbq?.("track", "Lead");
      // window.gtag?.("event", "conversion", { ... });

      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  }

  function field(
    key: keyof FormData,
    value: string | boolean,
  ) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text shadow-sm outline-none transition placeholder:text-text/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

  if (status === "success") {
    return (
      <section
        id="registrazione"
        className="scroll-mt-6 bg-muted px-5 py-16 sm:px-8 sm:py-20"
        aria-live="polite"
      >
        <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-md">
          <p className="text-lg font-semibold text-brand-blue">
            Grazie! La tua registrazione è confermata. Ti aspettiamo sabato 12
            settembre.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registrazione"
      className="scroll-mt-6 bg-muted px-5 py-16 sm:px-8 sm:py-20"
      aria-labelledby="form-title"
    >
      <div className="mx-auto max-w-lg">
        <h2
          id="form-title"
          className="text-center text-2xl font-bold text-text sm:text-3xl"
        >
          Registrati all&apos;Open Day
        </h2>
        <p className="mt-4 text-center text-sm leading-relaxed text-text/75 sm:text-base">
          La registrazione è consigliata per partecipare. Non ti verrà chiesto
          nulla all&apos;ingresso, ma prenotarti ci aiuta a organizzarci e a
          riservarti l&apos;accoglienza migliore.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl bg-white p-6 shadow-md sm:p-8"
          noValidate
        >
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
              Nome <span className="text-brand-red">*</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="given-name"
              required
              value={data.nome}
              onChange={(e) => field("nome", e.target.value)}
              className={inputClass}
              aria-invalid={!!errors.nome}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-brand-red">{errors.nome}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="cognome"
              className="mb-1.5 block text-sm font-medium"
            >
              Cognome <span className="text-brand-red">*</span>
            </label>
            <input
              id="cognome"
              name="cognome"
              type="text"
              autoComplete="family-name"
              required
              value={data.cognome}
              onChange={(e) => field("cognome", e.target.value)}
              className={inputClass}
              aria-invalid={!!errors.cognome}
            />
            {errors.cognome && (
              <p className="mt-1 text-sm text-brand-red">{errors.cognome}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email <span className="text-brand-red">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={(e) => field("email", e.target.value)}
              className={inputClass}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-brand-red">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="mb-1.5 block text-sm font-medium"
            >
              Telefono <span className="text-brand-red">*</span>
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
              required
              value={data.telefono}
              onChange={(e) => field("telefono", e.target.value)}
              className={inputClass}
              aria-invalid={!!errors.telefono}
            />
            {errors.telefono && (
              <p className="mt-1 text-sm text-brand-red">{errors.telefono}</p>
            )}
          </div>

          <div>
            <label htmlFor="note" className="mb-1.5 block text-sm font-medium">
              Note <span className="font-normal text-text/50">(facoltativo)</span>
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              value={data.note}
              onChange={(e) => field("note", e.target.value)}
              className={`${inputClass} resize-y`}
            />
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm leading-snug">
              <input
                type="checkbox"
                checked={data.privacy}
                onChange={(e) => field("privacy", e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                aria-invalid={!!errors.privacy}
              />
              <span>
                Confermo di aver preso visione dell&apos;
                <a
                  href="https://www.recuperoanniscolasticiamilano.it/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-blue underline underline-offset-2 hover:text-brand-red"
                >
                  informativa sulla privacy
                </a>
                <span className="text-brand-red"> *</span>
              </span>
            </label>
            {errors.privacy && (
              <p className="mt-1 text-sm text-brand-red">{errors.privacy}</p>
            )}
          </div>

          {status === "error" && (
            <p className="rounded-xl bg-[#e8f0f8] px-4 py-3 text-sm text-brand-red" role="alert">
              Si è verificato un errore. Riprova tra poco.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1a4a7a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Invio in corso…" : "Registrati ora"}
          </button>
        </form>
      </div>
    </section>
  );
}
