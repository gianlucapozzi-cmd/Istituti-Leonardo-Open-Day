import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.OPENDAY_WEBHOOK_URL ??
  "https://automations.wolfoncloud.com/webhook/f1a53e83-01ba-4609-8ab1-1122437200b9";

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

  const lead = {
    nome: nome.trim(),
    cognome: cognome.trim(),
    email: email.trim(),
    telefono: telefono.trim(),
    note: note?.trim() || "",
    source: "open-day-landing",
    evento: "Open Day 12 settembre",
  };

  try {
    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!webhookRes.ok) {
      const detail = await webhookRes.text().catch(() => "");
      console.error("[Open Day webhook error]", webhookRes.status, detail);
      return NextResponse.json(
        { error: "Webhook failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[Open Day webhook error]", error);
    return NextResponse.json(
      { error: "Webhook unreachable" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
