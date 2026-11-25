import { NextResponse } from "next/server";
import { EMAIL_RE, SEND_DOMAIN, fieldsToHtml, sendFormEmail } from "@/app/lib/email";

const TO_ADDRESS = "sales@precisionconstructionrepair.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim() ||
    !EMAIL_RE.test(body.email.trim())
  ) {
    console.warn("[form:contact] Rejected submission: missing or invalid fields");
    return NextResponse.json({ ok: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = body.message.trim();

  const sent = await sendFormEmail("contact", {
    from: `Precision Construction Repair Website <contact@${SEND_DOMAIN}>`,
    to: [TO_ADDRESS],
    replyTo: email,
    subject: `New website inquiry from ${name}`,
    html: fieldsToHtml([
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Message", message],
    ]),
  });

  if (!sent) {
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
