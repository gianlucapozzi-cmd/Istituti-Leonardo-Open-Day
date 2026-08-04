# Brief per Cursor — Landing Page "Open Day"
## Istituti Leonardo Milano

---

## 1. Obiettivo

Costruire una **landing page dedicata all'Open Day** del sabato 12 settembre, collegata a una campagna Meta/Google Ads. Obiettivo unico: **far registrare gli utenti tramite form** per raccogliere contatti e stimare le presenze.

La pagina deve essere **standalone** (una sola schermata scrollabile, nessun menu di navigazione verso altre pagine), pensata per la conversione. Ogni sezione deve spingere verso il form.

---

## 2. Stack tecnico

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- Componenti in `/components`, pagina in `/app/page.tsx`
- Responsive-first (mobile prima di tutto: il traffico arriva quasi tutto da smartphone via ads)
- Nessuna dipendenza da CMS: contenuti hardcoded

---

## 3. Brand & design system

**Colori (usare come CSS variables / config Tailwind):**
- Rosso primario: `#DE2028` — CTA, accenti, badge urgenza, titoli chiave
- Blu secondario: `#215A99` — sezioni informative, box, footer, testi di supporto
- Neutri: bianco `#FFFFFF`, grigio testo `#333333`, grigio chiaro sfondi `#F5F5F5`

**Regola cromatica:** il rosso guida l'azione (bottoni, urgenza), il blu comunica affidabilità (info, punti di forza). Alternare le due sezioni per ritmo visivo, senza mai mischiare i due colori pieni sullo stesso blocco.

**Logo:** `https://www.recuperoanniscolasticiamilano.it/wp-content/uploads/2024/08/Logo-Leonardo-100x100-2.png`

**Tipografia:** sans-serif pulita e leggibile (es. Poppins o Inter da Google Fonts). Titoli in bold, corpo regular.

**Stile:** moderno, arioso, angoli arrotondati (`rounded-xl`/`rounded-2xl`), ombre morbide sui box, tanto spazio bianco. Tono accogliente e rassicurante, non aggressivo.

---

## 4. Struttura della pagina (sezioni in ordine)

### SEZIONE 1 — Hero (above the fold)
- Logo Istituti Leonardo in alto (piccolo, centrato o a sinistra)
- **Gancio principale (H1):** "Vuoi recuperare i tuoi anni scolastici?"
- Sottotitolo: invito all'Open Day, es. *"Vieni a scoprirci di persona. Sabato 12 settembre ti aspettiamo per farti conoscere la scuola, i percorsi e chi rende tutto possibile."*
- **Badge/riquadro evidenziato con data e orario:** `SABATO 12 SETTEMBRE · dalle 10:00 alle 17:00` (usare il rosso `#DE2028` per dare urgenza)
- **CTA primaria (bottone rosso):** "Registrati all'Open Day" → scroll ancorato al form
- Sfondo con immagine/gradiente coerente (sfondo rosso/blu con overlay); mantenere il testo leggibile

### SEZIONE 2 — "Cosa potrai fare all'Open Day"
Sottotitolo: *"Nessun programma rigido: una giornata aperta per conoscerci con calma."*

Griglia di 5 card (icona + titolo breve), responsive (1 colonna mobile, 2-3 desktop):
1. **Visita e presentazione della scuola** — Scopri gli spazi e l'ambiente in cui studierai
2. **Presentazione dei percorsi di studio** — Ti mostriamo tutti gli indirizzi disponibili
3. **Incontro con docenti e tutor** — Conosci chi ti seguirà passo dopo passo
4. **Testimonianze dei nostri studenti** — Ascolta chi ce l'ha già fatta con noi
5. **Snack offerti** — Un momento di convivialità in tutta tranquillità

*(Icone: usare lucide-react o SVG semplici. Colore icone: blu `#215A99`.)*

### SEZIONE 3 — "Perché scegliere Istituti Leonardo" (punti di forza)
Sottotitolo: *"Quello che ci rende diversi lo vedrai di persona, ma ecco cosa troverai da noi:"*

5 punti di forza (card o lista con icona check, sfondo blu chiaro o box su sfondo blu):
- **Grande attenzione verso lo studente** — Ogni ragazzo è seguito individualmente
- **Classi a numero ridotto** — Gruppi piccoli per non lasciare indietro nessuno
- **Docenti qualificati** — Insegnanti esperti e realmente presenti
- **Programmi dedicati e personalizzati** — Un piano di studio costruito su ogni studente
- **Ambiente accogliente** — Uno spazio sereno dove ritrovare fiducia e motivazione

### SEZIONE 4 — Form di registrazione (cuore della pagina)
- Titolo: "Registrati all'Open Day" + `id="registrazione"` per l'ancora
- Testo sopra il form: *"La registrazione è consigliata per partecipare. Non ti verrà chiesto nulla all'ingresso, ma prenotarti ci aiuta a organizzarci e a riservarti l'accoglienza migliore."*
- **Campi form:**
  - Nome *(obbligatorio)*
  - Cognome *(obbligatorio)*
  - Email *(obbligatorio, con validazione)*
  - Telefono *(obbligatorio)*
  - Note *(facoltativo, textarea)*
  - Checkbox privacy *(obbligatoria):* "Confermo di aver preso visione dell'[informativa sulla privacy](https://www.recuperoanniscolasticiamilano.it/privacy-policy/)"
- **NB:** in questa LP dell'Open Day **NON** inserire il menu a tendina dei percorsi di studio (quello va nella seconda landing page)
- **Bottone submit (rosso `#DE2028`):** "Registrati ora"
- Messaggio di conferma post-invio (thank-you state): *"Grazie! La tua registrazione è confermata. Ti aspettiamo sabato 12 settembre."*

### SEZIONE 5 — Info pratiche + Footer
- **Dove:** Via Marco Aurelio 8, Milano (fermata Pasteur M1) — con mini mappa embed opzionale
- **Quando:** Sabato 12 settembre, dalle 10:00 alle 17:00
- **Contatti:** Tel. 02 23 189 073 · +39 328 598 7754 · info@istitutileonardomilano.it
- CTA finale (bottone rosso) che riporta al form
- Footer: logo + "© YES Group S.r.l. | Istituti Leonardo Milano"

---

## 5. Note tecniche per lo sviluppo

- **Sticky CTA su mobile:** bottone fisso in basso "Registrati all'Open Day" che scrolla al form (aumenta molto la conversione da mobile)
- **Gestione submit form:** predisporre l'invio (es. endpoint API route Next.js, Formspree o webhook). Lasciare un placeholder chiaro `// TODO: collegare invio form` così da integrarlo con il sistema di raccolta lead
- **Tracking:** predisporre i punti per Meta Pixel e Google Ads tag (evento `Lead`/`CompleteRegistration` sul submit riuscito). Lasciare placeholder commentati
- **Validazione client-side** su tutti i campi obbligatori + email valida + checkbox privacy spuntata
- **SEO base:** `<title>` "Open Day 12 Settembre | Istituti Leonardo Milano" e meta description dedicata
- **Performance:** immagini ottimizzate (next/image), lazy loading
- **Accessibilità:** label sui campi form, contrasto colori adeguato, focus states sui bottoni

---

## 6. Priorità di conversione

1. Hero + data ben visibile
2. Form facile e corto (5 campi)
3. CTA ripetuta almeno 3 volte lungo la pagina (hero, dopo i punti di forza, nel footer)
4. Zero distrazioni: nessun link esterno tranne privacy policy

---

*Prompt d'apertura suggerito per Cursor:*
> "Crea una landing page in Next.js (App Router) + TypeScript + Tailwind seguendo questo brief. Mobile-first, una sola pagina scrollabile con form di registrazione. Colori brand: rosso #DE2028 e blu #215A99. Genera struttura componenti pulita e commentata."
