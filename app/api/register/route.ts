import { NextRequest, NextResponse } from "next/server";

type Payload = {
  nome?: string;
  cognome?: string;
  email?: string;
  telefono?: string;
  note?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Payload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { nome, cognome, email, telefono, note } = body;

  if (
    !nome?.trim() ||
    !cognome?.trim() ||
    !email?.trim() ||
    !isValidEmail(email) ||
    !telefono?.trim()
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: collegare invio form — CRM / Formspree / webhook / email
  // Esempio: await fetch(process.env.WEBHOOK_URL!, { method: "POST", body: JSON.stringify({...}) })
  console.info("[Open Day lead]", {
    nome: nome.trim(),
    cognome: cognome.trim(),
    email: email.trim(),
    telefono: telefono.trim(),
    note: note?.trim() || null,
  });

  return NextResponse.json({ ok: true });
}
